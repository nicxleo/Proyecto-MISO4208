const express = require('express');
const morgan = require('morgan');

//Environment Variables
const dotenv = require('dotenv');
dotenv.config();

//Initializations
const app = express();

var bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({
  limit: '5mb',
  parameterLimit: 100000,
  extended: false
}));

app.use(bodyParser.json({
  limit: '5mb'
}));

var cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Expose-Headers', 'X-Total-Count');
  res.header('Access-Control-Expose-Headers', 'Content-Range');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

//settings
app.set('port', process.env.PORT || 8080);

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
require('./routes/app.routes.js')(app);
require('./routes/version.routes.js')(app);
require('./routes/strategy.routes.js')(app);
require('./routes/strategyTest.routes.js')(app);

// define a simple route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to TesterXP',
  });
});

//Starting the server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
