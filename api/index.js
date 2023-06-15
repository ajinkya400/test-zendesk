const express = require('express');
const app = express();
const cors = require('cors');
const routes = require( './routes' );

require('dotenv').config();

app.use(cors());
routes(app);

app.listen(4000);
