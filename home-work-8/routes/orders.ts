import {CustomRequest, CustomResponse, HandleBarsResponseType} from "../types";

const {Router} = require('express')
const Order = require('../models/order')
const auth = require('../middleware/auth')
const router = Router()

router.get('/', auth, async (req: CustomRequest, res: HandleBarsResponseType) => {

    try {
        const orders = await Order.find({'user.userId': req.user._id})
        .populate('user.userId')
// TODO переделать
    res.render('orders', {
        isOrder: true,
        title: 'Заказы',
        orders: orders.map((o: any) => {
            return {
                ...o._doc,
                price: o.courses.reduce((total: number, c: {count: number, course: { price: number }}) => {
                    return total += c.count * c.course.price
                }, 0)
            }
        })
    })
    } catch(e) {
        console.log(e)
    }

})

// TODO переделать

router.post('/', auth, async (req: CustomRequest, res: CustomResponse) => {

    try {
        const user = await req.user.populate('cart.items.courseId').execPopulate()

        const courses = user.cart.items.map((i: any) => ({
            count: i.count,
            course: {...i.courseId._doc}
        }))

        const order = new Order({
            user: {
                name: req.user.name,
                userId: req.user
            },
            courses
        })

        await order.save()
        await req.user.clearCart()

        res.redirect('/orders')

    } catch(e) {
        console.log(e)
    }

})

module.exports = router
