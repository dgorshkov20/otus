import {CustomRequest} from "../types";

const multer = require('multer')

const dateFormat = () => {
    const now = new Date().toISOString()
    return now.replace(/:/g, '-')
}

const storage = multer.diskStorage({
  destination: (req : CustomRequest, file: object, cb: (error: Error | null, path: string) => void) => {
    cb(null, 'images/')
  },
  filename: (req : CustomRequest, file: {originalname: string}, cb: (error: Error | null, path: string) => void) => {
    cb(null, dateFormat() + '-' + file.originalname)
  }
})

const allowedTypes = ['image/png', 'image/jpg', 'image/jpeg']

const fileFilter = (req: CustomRequest, file: {mimetype: string}, cb: (error: Error | null, path: string | boolean) => void) => {
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

module.exports = multer({
  storage, fileFilter
})
