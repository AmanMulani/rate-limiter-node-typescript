## Fixed Window
In this approach we fix a time window T, within which our server can accept X requests, which means that X requests per T unit time.
If the number of requests exceeds X in the given time frame T, we queue or drop the request depending upon the use case. 
The time-window count starts when the server starts, and for after every T unit time, the number of requests that our server can serve updates to X.

## Drawbacks
Cannot handle bursts of request at the edge of the time window.