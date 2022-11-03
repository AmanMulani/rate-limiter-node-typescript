"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenBucketRateLimiter = void 0;
let rateLimiter;
class TokenBucketRateLimiter {
    constructor(config) {
        this.instance = 0;
        this.rateLimitTime = config.rateTime;
        this.rateLimitValue = config.rateValue;
        this.instance = this.rateLimitValue;
        setInterval(() => {
            console.log('Rate Limiter: ', this.instance);
            this.instance = this.rateLimitValue;
        }, this.rateLimitTime);
    }
    getRateLimit() {
        return this.instance;
    }
    decreaseLimitVal() {
        if (this.instance >= 0) {
            this.instance = this.instance - 1;
        }
        console.log(this.instance);
        return this.instance;
    }
    static getRateLimiter(config) {
        if (rateLimiter === undefined || rateLimiter === null) {
            rateLimiter = new TokenBucketRateLimiter(config);
        }
        return rateLimiter;
    }
}
exports.TokenBucketRateLimiter = TokenBucketRateLimiter;
