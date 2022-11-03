import express from 'express';
import { rateLimiter } from './rateLimiters/TokenBucket/rateLimiter';
import { TokenBucketRateLimiter } from './rateLimiters/TokenBucket/tokenBucket';


TokenBucketRateLimiter.initializeRateLimiter({
    rateTime: 1000,
    rateValue: 10
});



const app = express();
const port = 3000;

//Rate Limiter Middleware
app.use(rateLimiter)

app.get('/', (_, res) => {
    res.send('Server is up and running!');
});
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});