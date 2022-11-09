let _rateLimiter: FixedWindowRateLimiter;

export class FixedWindowRateLimiter {

    public rateLimitValue: number;
    public rateLimitTime: number;
    private initialTimeStamp: number;
    private currLimit: number;


    private constructor(rv: number, rt: number) {
        this.rateLimitTime = rt;
        this.rateLimitValue = rv;
        this.initialTimeStamp = new Date().getTime();
        this.currLimit = rv;
    }


    public decreaseLimitVal(): number {
        const currTimeStamp = new Date().getTime();
        if(currTimeStamp < this.initialTimeStamp + this.rateLimitTime) {
            if(this.currLimit >= 0) {
                console.log(this.currLimit);
                this.currLimit--;
            }
        } else {
            const currMultiplier = this.initialTimeStamp / this.rateLimitTime;
            this.initialTimeStamp = this.initialTimeStamp + currMultiplier * this.rateLimitTime;
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


    public static initializeRateLimiter(rv: number, rt: number): FixedWindowRateLimiter {
        if(_rateLimiter === null || _rateLimiter === undefined) {
            _rateLimiter =  new FixedWindowRateLimiter(rv, rt);
        }
        return _rateLimiter;
    }



}