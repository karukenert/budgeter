const express = require('express');
const serveStatic = require("serve-static");
const path = require('path');
const app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 8080;
app.listen(port);
console.log(`FE is served at port ${port}`)
// TODO: move to a separate directory
// 	server & client directory
