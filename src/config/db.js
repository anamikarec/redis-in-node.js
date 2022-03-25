const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/redis_in_mongoDb",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
}

module.exports = connect;