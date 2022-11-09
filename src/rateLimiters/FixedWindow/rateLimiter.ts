import { NextFunction, Request, Response } from "express";
import { FixedWindowRateLimiter } from "./fixedWindow";

export const rateLimiter = (_: Request, res: Response, next: NextFunction): void => {

    const _rateLimiter = FixedWindowRateLimiter.getInstance();
    if(_rateLimiter.decreaseLimitVal() < 0) {
        res.status(429).json({
            'body': "Rate Limited!!!!"
        });
       return;
    } 
    next();
}
