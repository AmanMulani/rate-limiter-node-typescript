### Token Bucket

In token bucket, rate limiting is analogous to having a bucket of tokens, and till the bucket has tokens in it, requests are accepted by the server.
Each token consumes a token from the bucket. The bucket is filled periodically with tokens based on the time limit provided to it. 