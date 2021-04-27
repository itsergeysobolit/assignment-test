**[View Live Preview](https://itsergeysobolit.github.io/assignment-test/)**


## Quick start

Several quick start options are available:

- Clone the repo: 
`git clone https://github.com/itsergeysobolit/assignment-test.git`
- Install all dependencies [npm](https://www.npmjs.com/): 
 `npm install cors-anywhere`, `npm install cors`, `npm install express`
- Open Terminal and run command:
`node cors-anywhere.js`
When you run `cors-anywhere.js` you should see **Running CORS Anywhere on 127.0.0.1:8089**
- Open another Terminal and run command for testing cors-anywhere without web-application:
`curl -X GET "http://localhost:8089/https://openmbee.incquery.io/api/server.status" -H  "accept: application/json" -H "Authorization: Basic b3Blbm1iZWVndWVzdDpndWVzdA=="`  
This is encoded the username & password in Base64
- Open **index.html** with live server
