const { app } = require('./lib/app');

const port = process.env.PORT || 80;

app.listen(port, () => {
  console.log('listening');
});
