import React, { useState } from 'react'
import Detail from './Detail';
import axios from 'axios';
import { serverName } from '../../configs';
import useStore from '../../store/store';

function Allsearch() {
   const [charName, setCharName] = useState("");
   const [allCharList, setallCharList] = useState([]);
   const [alertMSG, setalertMSG] = useState("");
   const changeCharData = useStore((state)=> state.changeCharData);
   const typingCharName = (e) => {setCharName(e.target.value)};

   const shootApi = async () => {
      axios.get('/char', { params: { charName: charName } }).then(res => {
         let data = res.data
         if(!data.rows){
            setallCharList([])
            setalertMSG("API 서버에 문제가 있습니다.")
            setTimeout(() => {
               setalertMSG("")
            }, 1500);
         }else{
            setallCharList(data.rows)
         }
      }).catch(err=>console.log(err))
   }
   
   const check=()=>{
      if(charName.length === 0){
         setalertMSG("캐릭터 명을 입력하세요!")
         setTimeout(() => {
            setalertMSG("")
         }, 1500);
      }else if( charName.length !== 0){
         shootApi()
      }
   }
   const onKeyEnter = (e) => {
      if (e.key === 'Enter' && charName.length === 0) {
         setalertMSG("캐릭터 명을 입력하세요")
         setTimeout(() => {
            setalertMSG("")
         }, 1500);
      } else if (e.key === 'Enter' && charName.length !== 0) {
            shootApi()
      }
   }
   const userDetail = async(serverId,characterId)=>{
      axios.get("/char/detail",{params:{serverId:serverId,characterId:characterId}}).then(res => {
         let datas = res.data;
         changeCharData({...datas,serverId:serverId})
      }).catch(err=>console.log(err))
   }
   
   return (
      <div className='charSearchTop'>
         <div className='charSearch'>
            <h2>캐릭터 검색</h2>
            <div>
               <input type="text" onChange={typingCharName} onKeyDown={onKeyEnter}/><button onClick={check}>검색</button>
            </div>
         </div>
         <div className='charLists'>
            {allCharList.length > 0 ? allCharList.map((users, index) => (
               <div className='userNames' key={index} onClick={()=>{userDetail(users.serverId,users.characterId);setallCharList([])}}>
               <img src={`https://img-api.neople.co.kr/df/servers/${users.serverId}/characters/${users.characterId}?zoom=1`} alt="info" />
               <span className='charBasicInfo' style={{ textAlign: "center", width: "100%" }}>
               [{serverName[users.serverId]}] {users.characterName} <br /> Lv.{users.level} / {users.jobGrowName}
               </span>
               </div> )) : 
               <div style={{ textAlign: "center", width: "800%" }}>{alertMSG}</div>}
         </div>
         <Detail />
      </div>
   )
}

export default Allsearch