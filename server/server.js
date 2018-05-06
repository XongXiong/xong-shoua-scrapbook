let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let path = require('path');
let port = process.env.PORT || 5000;

// Route includes
let postRouter = require('./routes/post.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Serve back static files
app.use(express.static('./server/public'));

// Routes
app.use('/post', postRouter);

// Listen //
app.listen(port, function () {
    console.log('Listening on port', port);
});
