import {CartItem, CourseType, CustomRequest, CustomResponse, HandleBarsResponseType} from "../types";

const {Router} = require('express')
const {validationResult} = require('express-validator')
const Course = require('../models/course')
const {courseValidators} = require('../utils/validators')
const auth = require('../middleware/auth')
const router = Router()

function isOwner(course: CourseType, req: CustomRequest) {
  return course.userId.toString() === req.user._id.toString()
}

router.get('/', async (req: CustomRequest, res: HandleBarsResponseType) => {
  try {
    const courses = await Course.find()

    res.render('courses', {
      title: 'Курсы',
      isCourses: true,
      userId: req.user ? req.user._id.toString() : null,
      courses
    })
  } catch (e) {
    console.log(e)
  }

})

router.get('/:id/edit', auth, async (req: CustomRequest, res: CustomResponse & HandleBarsResponseType) => {
  if (!req.query.allow) {
    return res.redirect('/')
  }

  try {

    const course = await Course.findById(req.params.id)
    if (!isOwner(course, req)) {
      return res.redirect('/courses')
    }

    res.render('course-edit', {
      title: `Редактировать ${course.title}`,
      course
    })
  } catch (e) {
    console.log(e)
  }


})

router.post('/edit', auth, courseValidators, async (req: CustomRequest, res: CustomResponse) => {

  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(422).redirect(`/courses/${req.body.id}/edit?allow=true`)
  }

  try {
    const {id} = req.body
    delete req.body.id
    const course = await Course.findById(id)
    if (!isOwner(course, req)) {
      return res.redirect('/courses')
    }
    Object.assign(course, req.body)
    await course.save()
    res.redirect('/courses')
  } catch (e) {
    console.log(e)
  }

})

router.get('/:id', async (req: CustomRequest, res: HandleBarsResponseType) => {
  try {
    const course = await Course.findById(req.params.id)
    res.render('course', {
      layout: 'empty',
      title: `Курс ${course.title}`,
      course
    })
  } catch (e) {
    console.log(e)
  }

})

router.post('/remove', auth, async (req: CustomRequest, res: CustomResponse) => {
  try {
    await Course.deleteOne({
      _id: req.body.id,
      userId: req.user._id
    })
    res.redirect('/courses')
  } catch (e) {
    console.log(e)
  }

})

module.exports = router
