const redis = require('redis');

const client = redis.createClient();

client.connect();

client.on('error',(err)=>{
    console.log('error',err)
})

module.exports = client;