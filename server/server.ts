const express = require('express');
const path = require('path');
import trpcRouter from './api/tRPC'

const app = express();
// Serving trpc endpoints as a middleware
app.use('/trpc', trpcRouter);

// Serving vue app
const distLocation = path.join(__dirname, '../client/dist');
app.use(express.static(distLocation));
// this * route is to serve project on different page api except root `/`
app.get(/.*/, (req, res) => res.sendFile(`${distLocation}/index.html`));

const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`App is served at port ${port}`));

