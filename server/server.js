const express = require('express');
const path = require('path');
const apiRouter = require('./routes/api')

const distLocation = path.join(__dirname, '../client/dist');
const app = express();

// Serving api routes as a middleware
app.use('/api', apiRouter);

// TODO: serve vite app and BE on the same 3000 port
// TODO: only serve dist if NODE_ENV === 'production'
// Serving vue app
app.use(express.static(distLocation));
// this * route is to serve project on different page routes except root `/`
app.get(/.*/, (req, res) => res.sendFile(`${distLocation}/index.html`));


const port = process.env.PORT || 3000;
app.listen(port);
console.log(`App is served at port ${port}`)
