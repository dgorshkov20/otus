const multer = require('multer')
// const path = require('path')
// console.log(path.join(__dirname, '..', 'images'))
// console.log()

const dateFormat = () => {
    const now = new Date().toISOString()
    return now.replace(/:/g, '-')
}



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/')
  },
  filename: (req, file, cb) => {
    cb(null, dateFormat() + '-' + file.originalname)
  }
})

const allowedTypes = ['image/png', 'image/jpg', 'image/jpeg']

const fileFilter = (req, file, cb) => {
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

module.exports = multer({
  storage, fileFilter
})