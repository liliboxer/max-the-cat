const { app } = require('./lib/app');

// const port = process.env.PORT || 80;

app.listen(6900, () => {
  console.log('listening');
});
