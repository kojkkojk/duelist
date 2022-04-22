const express = require("express");
const router = express.Router();
const request = require('request');
const apiConfigs = require("../configs/configs");

router.get("/",(req,res)=>{
   let characterName = req.query;
   let encodeed = encodeURI(characterName.charName);
   request(`${apiConfigs.firstURL}/servers/all/characters?characterName=${encodeed}&limit=50&wordType=full&apikey=${apiConfigs.apiKey}`,(err,response,body)=>{
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
      res.send({...obj})
   })
})
module.exports = router;