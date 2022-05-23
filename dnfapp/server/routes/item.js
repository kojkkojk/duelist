const express = require("express");
const router = express.Router();
const request = require('request');
const apiConfigs = require("../configs/configs");

router.get("/",(req,res)=>{
   let itemName = req.query;
   let encodeed = encodeURI(itemName.itemName);
   request(`${apiConfigs.firstURL}/items?itemName=${encodeed}&wordType=full&limit=30&apikey=${apiConfigs.apiKey}`,(err,response,body)=>{
      if(err)throw err;
      let obj = JSON.parse(body);
      res.json({...obj})
   })
})


module.exports = router;