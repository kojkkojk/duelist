const express = require("express");
const router = express.Router();
const request = require('request');
const apiConfigs = require("../configs/configs");

router.get("/",(req,res)=>{
   let characterName = req.query;
   let encodeed = encodeURI(characterName.charName);
   request(`${apiConfigs.firstURL}/servers/all/characters?characterName=${encodeed}&limit=20&wordType=full&apikey=${apiConfigs.apiKey}`,(err,response,body)=>{
      if(err)throw err;
      let obj = JSON.parse(body);
      res.send({...obj})
   })
})
router.get("/detail",(req,res)=>{
   let charData = req.query;
   request(`${apiConfigs.firstURL}/servers/${charData.serverId}/characters/${charData.characterId}/equip/equipment?apikey=${apiConfigs.apiKey}`,(err,response,body)=>{
      if(err)throw err;
      let obj = JSON.parse(body);
      request(`${apiConfigs.firstURL}/servers/${charData.serverId}/characters/${obj.characterId}/status?apikey=${apiConfigs.apiKey}`,(err2,response2,body)=>{
      if(err2)throw err2;
         let obj2 = JSON.parse(body);
         let totalInfo = Object.assign(obj,obj2)
         res.send({...totalInfo})
      })
   })
})

module.exports = router;