const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/jokes_api',{
    useNewUrlParser: true,
    // useUnifiedTopoplogy: true
}) 
    .then(()=> console.log('Established db connection'))
    .catch(err => console.log('failed to establish a db connection', err))