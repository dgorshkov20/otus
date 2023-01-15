import {CartItem, CustomRequest, CustomResponse} from "../types";

const {Router} = require('express')
const Course = require('../models/course')
const auth = require('../middleware/auth')
const router = Router()

type CartType = {
  items: Array<CartItem>
}

function mapCartItems(cart: CartType): CartItem[] {
  return cart.items.map(c => ({
    ...c.courseId._doc,
    id: c.courseId.id,
    count: c.count
  }))
}

function computePrice(courses: CartItem[]): number {
  return courses.reduce((total, course) => {
    return total += course.price * course.count
  }, 0)
}

router.post('/add', auth, async (req: CustomRequest, res: CustomResponse) => {
  const course = await Course.findById(req.body.id)
  await req.user.addToCart(course)
  res.redirect('/card')
})

router.delete('/remove/:id', auth, async (req: CustomRequest, res: CustomResponse) => {
  await req.user.removeFromCart(req.params.id)
  const user = await req.user.populate('cart.items.courseId').execPopulate()
  const courses = mapCartItems(user.cart)
  const cart = {
    courses, price: computePrice(courses)
  }
  // @ts-ignore
  await res.status(200).json(cart)
})

router.get('/', auth, async (req: CustomRequest, res: CustomResponse ) => {
  const user = await req.user
    .populate('cart.items.courseId')
    .execPopulate()

  const courses = mapCartItems(user.cart)

  res.render('card', {
    title: 'Корзина',
    isCard: true,
    courses: courses,
    price: computePrice(courses)
  })
})

module.exports = router
