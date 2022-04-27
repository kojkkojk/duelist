const express = require("express");
const router = express.Router();
const request = require('request');
const apiConfigs = require("../configs/configs");

router.get("/",(req,res)=>{
   let itemName = req.query;
   let encodeed = encodeURI(itemName.itemName);
   request(`${apiConfigs.firstURL}/items?itemName=${encodeed}&wordType=full&limit=24&apikey=${apiConfigs.apiKey}`,(err,response,body)=>{
      if(err)throw err;
      let obj = JSON.parse(body);
      res.send({...obj})
   })
})


module.exports = router;

//https://api.neople.co.kr/df/items?itemName=<itemName>&wordType=<wordType>&q=minLevel:<minLevel>,maxLevel:<maxLevel>,rarity:<rarity>&limit=<limit>&apikey=<apikey>