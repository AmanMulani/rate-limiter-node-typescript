"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateLimiter = void 0;
const tokenBucket_1 = require("./tokenBucket");
const rateLimiter = (_, res, next) => {
    const _rateLimiter = tokenBucket_1.TokenBucketRateLimiter.getInstance();
    if (_rateLimiter.decreaseLimitVal() < 0) {
        res.status(429).json({
            'body': "Rate Limited!!!!"
        });
        return;
    }
    next();
};
exports.rateLimiter = rateLimiter;
