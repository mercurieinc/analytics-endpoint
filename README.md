# analytics-endpoint

An endpoint that returns the tracking ID of an analytics object

## Prerequisites

* Node.js 8+ installed
* An API testing environment e.g Postman

------------------------------------------------------

To run this application,
* Install all required dependencies using `npm install`
* Run the startup command `npm start` in a terminal instance

-------------------------------------------------------

`insert web properties`HTTP POST endpoint structure: `/api/createwebproperty/:accountId/:apiKey`

Sample API POST endpoint: `localhost:30000/api/createwebproperty/<accountId>/<apiKey>`

Sample API Request Body: 
```json
{
    "name": "examplepetstore",
    "websiteUrl": "https://examplepetstore.ng"
}

```

Sample Response: 

```json

{
    "trackingId": "<tracking_id>"
}
```



