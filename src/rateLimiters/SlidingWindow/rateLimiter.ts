import { NextFunction, Request, Response } from "express";
import { SlidingWindowRateLimiter } from "./slidingWindow";

export const rateLimiter = (_: Request, res: Response, next: NextFunction): void => {

    const _rateLimiter = new SlidingWindowRateLimiter();
    if(_rateLimiter) {
        res.status(429).json({
            'body': "Rate Limited!!!!"
        });
       return;
    } 
    next();
}
