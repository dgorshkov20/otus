import {CustomRequest, CustomResponse} from "../types";
import {NextFunction} from "express";

module.exports = function(req: CustomRequest, res: CustomResponse, next: NextFunction) {
    if (!req.session.isAuthenticated) {
        return res.redirect('/auth/login')
    }

    next()
}
