import {CustomRequest, CustomResponse} from "../types";
import {NextFunction} from "express";

module.exports = function(req: CustomRequest, res: CustomResponse, next: NextFunction) {
    res.status(404).render('404', {
        title: 'Страница не найдена'
    })
}
