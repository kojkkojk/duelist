const express = require('express');
const path = require('path');
const app = express();
const port = 5000;
const http = require('http').createServer(app);
let charRouter = require("./routes/char")

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/char", charRouter);

http.listen(port, () => {
   console.log('listening on ' + port)
}); 