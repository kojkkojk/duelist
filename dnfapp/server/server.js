const express = require('express');
const app = express();
const port = 5000;
const http = require('http').createServer(app);
let charRouter = require("./routes/char");
let itemRouter = require("./routes/item");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/char", charRouter);
app.use("/item", itemRouter);

http.listen(port, () => {
   console.log('listening on ' + port)
}); 