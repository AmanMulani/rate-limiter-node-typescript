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
        return this.instance;
    }
    static getInstance() {
        if (rateLimiter === undefined || rateLimiter === null) {
            throw new Error('Rate Limiter not initialized');
        }
        return rateLimiter;
    }
    static initializeRateLimiter(config) {
        if (rateLimiter === undefined || rateLimiter === null) {
            rateLimiter = new TokenBucketRateLimiter(config);
        }
    }
}
exports.TokenBucketRateLimiter = TokenBucketRateLimiter;
