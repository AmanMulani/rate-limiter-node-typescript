## Sliding Window
In this approach instead of fixing a time widow T, we use the approach of sliding window. 
So if there are X requests allowed per T unit time, we check the timestamp of the previous request:  
1. if the previous_request_timestamp + T > currentRequest, we check how many requests have been made in the time period: previous_request_timestamp + T. If this number of requests is less than X, we allow the request, else we rate limit the request.

2. If previous_request_timestamp + T < currentRequest, we accept this request and set the previous_request_timestamp = currentRequest
