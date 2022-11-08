let _rateLimiter: FixedWindowRateLimiter;

export class FixedWindowRateLimiter {

    public rateLimitValue: number;
    public rateLimitTime: number;
    private initialTimeStamp: number;


    private constructor(rv: number, rt: number) {
        this.rateLimitTime = rt;
        this.rateLimitValue = rv;
        this.initialTimeStamp = new Date().getTime();
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