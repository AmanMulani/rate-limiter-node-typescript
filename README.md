In this project, we will explore the following three 
approaches for rate-limiting:
1. Token Bucket
2. Fixed Window
3. Sliding Window

What is rate limiting?
In simple words, rate-limiting is a simple way of handling how many 
requests you want your server to serve in a given time frame. For 
example, if your server has a capacity of handling a load of 50 
requests per minute, you never want the server to reach that capacity, 
as you risk crashing the server. Therefore you put a hard and fast 
limit on your server that in a given time frame, it can process only 
a given number of requests, which in our example can be 40 
requests/min.
Rate limiting can also be handy when you deal with APIs provided by 
SaaS, as there are a limited number of API calls that you can make to a given 
end-point. If you exceed the given limit, either your requests are 
discarded or you have to pay more to increase the limit. 

Depending upon the use-case, we can either decide to discard the requests received when the 
rate limit is reached or we can retry once the rate limit is restored.
