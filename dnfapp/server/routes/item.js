const express = require("express");
const router = express.Router();
const request = require('request');
const apiConfigs = require("../configs/configs");

let filltered = (array) => {
   let sent = ""
   if (array.length < 15) {
      for (let i = 0; i < array.length; i++) {
         if (i === array.length - 1) {
            sent = sent + array[i].itemId;
         } else {
            sent = sent + array[i].itemId + ",";
         }
      }
   } else if (array.length >= 15) {
      for (let i = 0; i < 15; i++) {
         if (i === 14) {
            sent = sent + array[i].itemId;
         } else {
            sent = sent + array[i].itemId + ",";
         }
      }
   }
   return sent
}

router.get("/", (req, res) => {
   let itemName = req.query;
   let encodeed = encodeURI(itemName.itemName);
   const fillters = (elements) => {
      if (elements.itemType === "무기" || elements.itemType === "방어구" || elements.itemType === "액세서리" || elements.itemType === "추가장비") {
         if (elements.itemRarity === "에픽" || elements.itemRarity === "신화") {
            return true;
         }
      }
   }
   request(`${apiConfigs.firstURL}/items?itemName=${encodeed}&wordType=full&q=minLevel:105&limit=30&apikey=${apiConfigs.apiKey}`, (err, response, body) => {
      if (err) throw err;
      let obj = JSON.parse(body);
      let euips = obj.rows;
      if (euips === undefined) {
         res.json({ msg: "api error" })
      } else {
         let fillArr2 = euips.filter(fillters);
         let equips2 = fillArr2.filter((item, i) => {
            return (fillArr2.findIndex((item2, j) => { return item.itemName === item2.itemName; }) === i);
         });
         request(`${apiConfigs.firstURL}/multi/items?itemIds=${filltered(equips2)}&apikey=${apiConfigs.apiKey}`, (err2, response2, body2) => {
            if (err2) throw err2;
            let obj2 = JSON.parse(body2);
            res.json({ ...obj2 })
         })
      }
   })
})


module.exports = router;