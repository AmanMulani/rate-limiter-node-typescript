import express from 'express';
import { FixedWindowRateLimiter } from './rateLimiters/FixedWindow/fixedWindow';
import { rateLimiter as fixedWindowRateLimiter} from './rateLimiters/FixedWindow/rateLimiter';
import { rateLimiter as tokenBucketRateLimiter } from './rateLimiters/TokenBucket/rateLimiter';
import { TokenBucketRateLimiter } from './rateLimiters/TokenBucket/tokenBucket';


TokenBucketRateLimiter.initializeRateLimiter({
    rateTime: 1000,
    rateValue: 10
});


FixedWindowRateLimiter.initializeRateLimiter(10, 1000);



const app = express();
const port = 3000;

//Rate Limiter Middleware
app.use(fixedWindowRateLimiter);

app.get('/', (_, res) => {
    res.send('Server is up and running!');
});
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});