import {CustomRequest, CustomResponse} from "../types";

const {Router} = require('express')
const router = Router()

router.get('/', (req: CustomRequest, res: CustomResponse) => {
  res.render('index', {
    title: 'Главная страница',
    isHome: true
  })
})


module.exports = router
