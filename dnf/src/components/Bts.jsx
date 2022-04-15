import React, { useState } from 'react'
import { appKey,serverName } from '../configs/apis'
import axios from 'axios'

function Bts() {
   const [charName, setCharName] = useState("")
   const [alertMSG, setAlertMSG] = useState("")
   const [serverNames] = useState(serverName)
   const [userDetailInfos, setuserDetailInfos] = useState({
      adventureName: "",
      characterId: "",
      characterName: "",
      guildId: "",
      guildName: "",
      jobGrowId: "",
      jobGrowName: "",
      jobId: "",
      jobName: "",
      level: 0,
      serverId: ""
   })
   const [infos, setInfos] = useState([])
   const callInfo = (charName) => {
      let url = `servers/all/characters?characterName=${charName}&apikey=${appKey}`
      if (charName.length === 0) {
         setAlertMSG("캐릭터 명을 입력하세요")
      } else {
         axios.get(url).then(res => {
            let newArr = res.data.rows
            setInfos(newArr)
         })
      }
   }
   const usersDetail = (serverId, characterId) => {
      let url = `servers/${serverId}/characters/${characterId}/equip/equipment?apikey=${appKey}`
      axios.get(url).then(res => {
         let datas = { ...res.data, serverId: serverId }
         setuserDetailInfos(datas);
      })
   }
   const onKeyEnter = (e) => {
      if (charName.length === 0) {
         setAlertMSG("캐릭터 명을 입력하세요")
      } else {
         if (e.key === 'Enter') {
            callInfo(charName)
         }
      }
   }
   return (
      <div>
         <input type="text" onChange={(e) => {
            setCharName(e.target.value)
         }} onKeyDown={onKeyEnter} />
         <button onClick={() => { callInfo(charName) }}>Search</button>
         <div>
            {infos.length > 0 ?
               infos.map((users, index) => (
                  <div key={index} onClick={() => {
                     usersDetail(users.serverId, users.characterId)
                  }}>
                     {serverNames[users.serverId]} / {users.characterName} / {users.level} / {users.jobGrowName}
                  </div>
               ))
               :
               <>{alertMSG}</>}
         </div>
         <div>
            {userDetailInfos.adventureName === "" ? <></> : <>
               모험단 : {userDetailInfos.adventureName} <br />
               캐릭터 : {userDetailInfos.characterName} <br />
               직업 : {userDetailInfos.jobGrowName} <br />
               레벨 : {userDetailInfos.level} <br />
               길드 : {userDetailInfos.guildName} <br />
               <p>
                  {userDetailInfos.equipment.map((data,index)=>(
                  <img key={index} src={`https://img-api.neople.co.kr/df/items/${data["itemId"]}`} alt="anrl" /> 
                  ))}
                  <img src={`https://img-api.neople.co.kr/df/servers/${userDetailInfos.serverId}/characters/${userDetailInfos.characterId}?zoom=1`} alt="info" />
               </p>
            </>}
         </div>
      </div>
   )
}

export default Bts