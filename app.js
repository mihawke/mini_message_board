const express = require('express');
const path = require('path')

const app = express();
app.use(express.urlencoded({ extended: true }));

const { indexRouter } = require("./routes/indexRouter");
const messageRouter = require('./routes/messageRouter');

const assetsPath = path.join(__dirname,'public')
app.use(express.static(assetsPath))

//Setting path
app.set("views", path.join(__dirname, "views"));
//Setting template engine
app.set("view engine", "ejs");

app.use('/',indexRouter);
app.use('/new',messageRouter);


const PORT = process.env.PORT || 8080;
app.listen(PORT,console.log(`Server started on PORT:${PORT}`))