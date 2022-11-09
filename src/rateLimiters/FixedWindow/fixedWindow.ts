let _rateLimiter: FixedWindowRateLimiter;

export class FixedWindowRateLimiter {

    public rateLimitValue: number;
    public rateLimitTime: number;
    private prevTimeStamp: number;
    private initialTimeStamp: number;
    private currLimit: number;


    private constructor(rv: number, rt: number) {
        this.rateLimitTime = rt;
        this.rateLimitValue = rv;
        this.initialTimeStamp = new Date().getTime();
        this.prevTimeStamp = this.initialTimeStamp;

        console.log('**********************************************');
        console.log(this.prevTimeStamp);
        
        
        this.currLimit = rv;
    }


    public decreaseLimitVal(): number {
        const currTimeStamp = new Date().getTime();
        // console.log(new Date().getTime());
        // console.log(this.initialTimeStamp);
        
        
        if(currTimeStamp < this.prevTimeStamp + this.rateLimitTime) {
            // console.log('I am here');
            if(this.currLimit >= 0) {
                console.log(this.currLimit);
                this.currLimit--;
            }
        } else {
            console.log('=====================================');
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


    public static initializeRateLimiter(rv: number, rt: number): FixedWindowRateLimiter {
        if(_rateLimiter === null || _rateLimiter === undefined) {
            _rateLimiter =  new FixedWindowRateLimiter(rv, rt);
        }
        return _rateLimiter;
    }



}