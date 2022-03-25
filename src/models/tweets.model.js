const mongoose = require('mongoose')

const tweetSchema = new mongoose.Schema({
    title: {type:String, required:true},
    body: {type:String},
    author:{type:Number}
})

const Tweet = mongoose.model("Tweet",tweetSchema);

module.exports = Tweet;