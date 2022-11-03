"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tokenBucket_1 = require("./rateLimiters/TokenBucket/tokenBucket");
const rateLimiter = tokenBucket_1.TokenBucketRateLimiter.getRateLimiter({
    rateTime: 10000,
    rateValue: 5
});
const app = (0, express_1.default)();
const port = 3000;
//Rate Limiter Middleware
app.use((_, res, next) => {
    if (rateLimiter.decreaseLimitVal() <= 0) {
        console.log('Here');
        res.status(429).json({
            'body': "Rate Limited!!!!"
        });
    }
    else {
        next();
    }
});
app.get('/', (req, res) => {
    res.send('Server is up and running!');
});
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
