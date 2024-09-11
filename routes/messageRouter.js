const { Router } = require("express");

const messageRouter = Router();
const { messages } = require('./indexRouter');

messageRouter.get('/',(req,res)=>{
    res.render('form')
})

messageRouter.post('/',(req,res)=>{
    let author = req.body.author;
    let message = req.body.message;
    messages.push({ text: message, user: author, added: new Date() });
    res.redirect("/")
  })

module.exports = messageRouter;