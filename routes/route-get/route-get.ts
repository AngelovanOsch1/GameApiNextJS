const express = require('express');
const app = express();

app.get('/test', (req: any, res: { send: (arg0: string) => void }) => {
  res.send('Hello from Express!');
});

app.get('/hoi', (req: any, res: { send: (arg0: string) => void }) => {
  res.send('hoi');
});

module.exports = app;
