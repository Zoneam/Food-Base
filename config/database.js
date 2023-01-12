const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/foodbase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', function (){
    console.log(`connected to mongoDB ${db.host} : ${db.port}`)
});



// const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);

// app.use(session({
//   store: new MongoStore({
//     url: 'mongodb://localhost/foodbase'
//   }),
//   secret: 'my-secret',
//   resave: false,
//   saveUninitialized: false
// }));
