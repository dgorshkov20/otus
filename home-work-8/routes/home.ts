import {CustomRequest, CustomResponse, HandleBarsResponseType} from "../types";

const {Router} = require('express')
const router = Router()

router.get('/', (req: CustomRequest, res: HandleBarsResponseType) => {
  res.render('index', {
    title: 'Главная страница',
    isHome: true
  })
})


module.exports = router
