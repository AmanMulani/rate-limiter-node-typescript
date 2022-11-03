"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rateLimiter_1 = require("./rateLimiters/TokenBucket/rateLimiter");
const tokenBucket_1 = require("./rateLimiters/TokenBucket/tokenBucket");
tokenBucket_1.TokenBucketRateLimiter.initializeRateLimiter({
    rateTime: 1000,
    rateValue: 10
});
const app = (0, express_1.default)();
const port = 3000;
//Rate Limiter Middleware
app.use(rateLimiter_1.rateLimiter);
app.get('/', (_, res) => {
    res.send('Server is up and running!');
});
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
