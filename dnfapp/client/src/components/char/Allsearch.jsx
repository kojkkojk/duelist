import React, { useState } from 'react'
import Detail from './Detail';
import axios from 'axios';
import { serverName } from '../../configs';
import useStore from '../../store/store';

function Allsearch() {
   const [charName, setCharName] = useState("");
   const [allCharList, setallCharList] = useState([]);
   const [alertMSG, setalertMSG] = useState("");
   const changeCharData = useStore((state) => state.changeCharData);
   const typingCharName = (e) => { setCharName(e.target.value) };

   const shootApi = async () => {
      await axios.get('/char', { params: { charName: charName } }).then(res => {
         let data = res.data
         if (!data.rows) {
            setallCharList([])
            setalertMSG("API 서버에 문제가 있습니다.")
            setTimeout(() => {
               setalertMSG("")
            }, 1500);
         } else {
         setallCharList(data.rows)
         }
      }).catch(err => console.log(err))
   }

   const check = () => {
      if (charName.length === 0) {
         setalertMSG("캐릭터 명을 입력하세요!")
         setTimeout(() => {
            setalertMSG("")
         }, 1500);
      } else if (charName.length !== 0) {
         shootApi()
         setCharName("")
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
         setCharName("")
      }
   }
   const userDetail = async (serverId, characterId) => {
      axios.get("/char/detail", { params: { serverId: serverId, characterId: characterId } }).then(res => {
         let datas = res.data;
         changeCharData({ ...datas, serverId: serverId })
      }).catch(err => console.log(err))
   }

   return (
      <div className='charSearch'>
         <div className='charSearchTop'>           
            <div className='charTitle'><h2>캐릭터 검색</h2><p>50레벨 이상의 캐릭터만 검색이 가능합니다</p></div>
            <div className='charInput'>
               <input type="text" onChange={typingCharName} onKeyDown={onKeyEnter} value={charName}/>
               <button onClick={check}>검색</button>
            </div>
         </div>
         <div className='charLists'>
            {allCharList.length > 0 ? allCharList.map((users, index) => (
               <React.Fragment  key={index}>
               {users.level < 50 ? "" :
               <div className='userNames' onClick={() => { userDetail(users.serverId, users.characterId); setallCharList([]) }}>
               <div className='charBasicInfo'>
                  [{serverName[users.serverId]}]&nbsp;{users.characterName}
               </div>
               <img src={`https://img-api.neople.co.kr/df/servers/${users.serverId}/characters/${users.characterId}?zoom=1`} alt="info" />
               <div className='charBasicInfo'>lv.{users.level} / {users.jobGrowName}</div>
               </div> }               
               </React.Fragment>)) : <div style={{ textAlign: "center", width: "800%" }}>{alertMSG}</div>}
         </div>
         <Detail />
      </div>
   )
}

export default Allsearch