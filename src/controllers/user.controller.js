const axios = require('axios');
const express = require('express');
const client = require('../config/redis.js');
const router = express.Router();

router.get('/:username',async(req,res)=>{
try{
    const username = req.params.username || "anamikarec";
    console.log(username);
// const client = req.app.get("redisClient");

// const user = await client.get(username);
//github
const data = await client.get(`${username}_github`);
    if(data){
        return res.status(201).send(JSON.parse(data));
    }
    const url = `https://api.github.com/users/${username}`;
    axios.get(url).then((response)=>{
        console.log(response);
        client.set(`${username}_github`,JSON.stringify(response.data));
        return res.status(201).send(response.data);
    })
.catch((err)=>{
    console.error(err);
    return res.status(500).send("error");
})
}
catch(err){}
})

module.exports = router;








// try{
//     const username = req.params.username || "anamika";
// // const client = req.app.get("redisClient");

// // const user = await client.get(username);
// //github
// client.get(`${username}_github`,(err,data)=>{
//     if(err){
//         console.log(`error ${err}`);
//         res.status(500).send("Error");
//     }
//     if(data){
//         return res.status(201).send(data);
//     }
//     const url = `https://api.github.com/users/${username}`;
//     axios.get(url).then((res)=>{
//         client.set(`${username}_github`,JSON.stringify(res.data));
//         return res.status(201).send({res});
//     })
// }).catch((err)=>{
//     console.error(err);
//     return res.status(500).send("error");
// })
// console.log(username);
// res.send({success: true});
// }
// catch(err){}