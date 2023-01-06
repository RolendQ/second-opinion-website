# Introduction:
A very fundamental Nodejs server which enables loads data to MongoDB database server. Notice you should config nodeserver first!

Note ,currently the files uploaded by front end UI is stored in MongoDB database.Another scheme is stored those files in the real file system and log the file message in Mysql server. But I think using the off-the-shelf service provided by MongoDB is better.

# Config:
* The server listen at localhost:8080 port ,config in the server.js
* The Frontend should runs at localhost:3000.If you want to change the port, or trust other `ip:port`,please config the `corsOptionsin` in the server.js.
* MongoDB database config is in src/config/db.js.

# Some Reference:

Axios:
http://www.axios-js.com/

Express:
https://www.expressjs.com.cn/

Cors:
https://github.com/expressjs/cors