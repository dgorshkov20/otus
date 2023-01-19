import {CustomRequest, CustomResponse} from "../types";
import {NextFunction} from "express";

module.exports = function(req: CustomRequest, res: CustomResponse, next: NextFunction) {
    res.locals.isAuth = req.session.isAuthenticated
    res.locals.csrf = req.csrfToken()
    next()
}
