let _rateLimiter: SlidingWindowRateLimiter;

export type SlidingWidowRateLimiterConfig = {
    rateValue: number, //number of requests allowed per unit time
    rateTime: number   //unit of time in milliseconds
}

export class SlidingWindowRateLimiter {
    public rateLimitValue: number;
    public rateLimitTime: number;
    private prevTimeStamp: number;
    private initialTimeStamp: number;
    private currLimit: number;


    private constructor(config: SlidingWidowRateLimiterConfig) {
        this.rateLimitTime = config.rateTime;
        this.rateLimitValue = config.rateValue;
        this.initialTimeStamp = new Date().getTime();
        this.prevTimeStamp = this.initialTimeStamp;
        this.currLimit = config.rateValue;
    }


    public decreaseLimitVal(): number {
        const currTimeStamp = new Date().getTime();
        if(currTimeStamp < this.prevTimeStamp + this.rateLimitTime) {
            if(this.currLimit >= 0) {
                console.log(this.currLimit);
                this.currLimit--;
            }
        } else {
            const currMultiplier = Math.floor((currTimeStamp - this.initialTimeStamp))/this.rateLimitTime;
            this.prevTimeStamp = this.initialTimeStamp + currMultiplier * this.rateLimitTime;
            console.log(this.prevTimeStamp);
            this.currLimit = this.rateLimitValue - 1;
        }
        return this.currLimit;
    }


    public static getInstance() {
        if(_rateLimiter === null || _rateLimiter === undefined) {
            throw new Error("Rate Limiter not initialized!");
        }
        return _rateLimiter;
    }


    public static initializeRateLimiter(config: SlidingWidowRateLimiterConfig): SlidingWindowRateLimiter {
        if(_rateLimiter === null || _rateLimiter === undefined) {
            _rateLimiter =  new SlidingWindowRateLimiter(config);
        }
        return _rateLimiter;
    }
}