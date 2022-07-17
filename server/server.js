const express = require('express');
const serveStatic = require("serve-static");
const path = require('path');

const port = process.env.PORT || 8080;
const distLocation = path.join(__dirname, '../client/dist');
const app = express();

// Serving vue app
app.use(serveStatic(distLocation));
// this * route is to serve project on different page routes except root `/`
app.get(/.*/, (req, res) => res.sendFile(`${distLocation}/index.html`));


app.listen(port);
console.log(`FE is served at port ${port}`)
