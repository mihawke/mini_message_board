const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


indexRouter.get('/', (req, res) => {
  res.render('index', { title: 'Mini message board', messages: messages })
})

indexRouter.get('/messages/:id', (req, res) => {
  const messageId = parseInt(req.params.id);

  const message = messages[messageId];
  res.render('message', { title: 'Message Details', message: message });
});

module.exports = { indexRouter, messages };