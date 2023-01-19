import {CustomRequest, CustomResponse} from "../types";
import {NextFunction} from "express";

const User = require('../models/user')


module.exports = async function(req: CustomRequest, res: CustomResponse, next: NextFunction) {
    if (!req.session.user) {
        return next()
    }

    req.user = await User.findById(req.session.user._id)
    next()
}
