const express = require("express");
const router = express.Router();
const request = require('request');
const apiConfigs = require("../configs/configs");

router.get("/",(req,res)=>{
   let characterName = req.query;
   let encodeed = encodeURI(characterName.charName);
   request(`${apiConfigs.firstURL}/servers/all/characters?characterName=${encodeed}&limit=100&wordType=full&apikey=${apiConfigs.apiKey}`,(err,response,body)=>{
      if(err)throw err;
      let obj = JSON.parse(body);
      res.json({...obj})
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
   request(`${apiConfigs.firstURL}/servers/${charData.serverId}/characters/${obj.characterId}/equip/avatar?apikey=${apiConfigs.apiKey}`,(error,response3,body)=>{
   if(error) throw error;
   let obj3 = JSON.parse(body);   
   request(`${apiConfigs.firstURL}/servers/${charData.serverId}/characters/${obj.characterId}/equip/creature?apikey=${apiConfigs.apiKey}`,(error2,response4,body)=>{
   if(error2) throw error2;
   let obj4 = JSON.parse(body);
   request(`${apiConfigs.firstURL}/servers/${charData.serverId}/characters/${obj.characterId}/equip/talisman?apikey=${apiConfigs.apiKey}`,(errrr,response5,body)=>{
   if(errrr) throw errrr;
   let obj5 = JSON.parse(body);
   let totalInfo = Object.assign(obj,obj2,obj3,obj4,obj5);
   res.json({...totalInfo})
   })})})})})
})

module.exports = router;