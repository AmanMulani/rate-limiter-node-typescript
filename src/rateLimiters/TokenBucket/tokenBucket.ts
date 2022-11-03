let rateLimiter: TokenBucketRateLimiter;

export type TokenBucketRateLimiterConfig = {
    rateValue: number, //number of requests allowed per unit time
    rateTime: number   //unit of time in milliseconds
}
export class TokenBucketRateLimiter {

    private instance = 0;
    private rateLimitValue: number;
    private rateLimitTime: number;

    private constructor(config: TokenBucketRateLimiterConfig) {
        this.rateLimitTime = config.rateTime;
        this.rateLimitValue = config.rateValue;
        this.instance = this.rateLimitValue;


        setInterval(() => {
            // console.log('Rate Limiter: ', this.instance);
            this.instance = this.rateLimitValue;
        }, this.rateLimitTime);
    }

    public getRateLimit(): number {
        return this.instance;
    }

    public decreaseLimitVal(): number {
        if(this.instance >= 0) {
            this.instance = this.instance - 1;
        }
        console.log(this.instance);
        
        return this.instance;
    }

    public static getInstance() {
        if(rateLimiter === undefined || rateLimiter === null) {
            throw new Error('Rate Limiter not initialized');
        }
        return rateLimiter;
    }

    public static initializeRateLimiter(config: TokenBucketRateLimiterConfig): void {
        if(rateLimiter === undefined || rateLimiter === null) {
            rateLimiter = new TokenBucketRateLimiter(config);
        }
    }
}