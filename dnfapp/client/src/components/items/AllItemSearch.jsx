import React, { useState } from 'react';
import axios from 'axios';

function AllItemSearch() {
   const [itemList, setItemList] = useState([])
   const [itemName, setItemName] = useState("")
   const [searchForm, setsearchForm] = useState("itemName")
   const [alertMSG, setalertMSG] = useState("");
   const typingItemName = (e) => { setItemName(e.target.value) };
   const splitWord = (a)=>{
      let d = a.split('\n').map(line => { return (<span>{line}<br /></span>) });
      return d
   }
   const pullApi = async () => {
      await axios.get("/item", { params: { itemName: itemName } }).then(res => {
         let data = res.data
         if (!data.rows) {
            setItemList([]); setalertMSG("API 서버에 문제가 있습니다."); setTimeout(() => { setalertMSG(""); }, 1500);
         } else {
            let filArr = data.rows; setItemList(filArr);
         }
      })
   }
   const check = () => {
      if (itemName.length === 0) {
         setalertMSG("아이템 명을 입력하세요!");
         setTimeout(() => { setalertMSG("") }, 1500);
      } else if (itemName.length !== 0) { pullApi(); setItemName(""); };
   }
   const onKeyEnter = (e) => {
      if (e.key === 'Enter' && itemName.length === 0) {
         setalertMSG("아이템 명을 입력하세요!"); setTimeout(() => { setalertMSG("") }, 1500);
      } else if (e.key === 'Enter' && itemName.length !== 0) {
         pullApi(); setItemName("");
      }
   }
   const searchSetting = (e) => {
      setsearchForm(e.target.value);
   }
   return (
      <div className='mid'>
         <div className="main">
            <div className='charSearchTop'>
               <div className='charTitle'><h2>105제 아이템 옵션 검색</h2><p>105레벨 에픽 아이템만 검색이 가능합니다</p></div>
               <div className='searchForm'>
                  <span>
                     <input id="itemName" value="itemName" name="SearchForm" onChange={searchSetting} type="radio" checked={searchForm === "itemName"} /> 아이템 이름
                  </span>
                  <span>
                     <input id="hashTag" value="hashTag" name="SearchForm" onChange={searchSetting} type="radio" checked={searchForm === "hashTag"} /> 해시태그
                  </span>
               </div>
               <div className='charInput'>
                  <input type="text" onChange={typingItemName} onKeyDown={onKeyEnter} value={itemName} /><button onClick={check}>검색</button>
               </div>
            </div>
            <div className='ItemsLists'>
               {itemList.length > 0 ? itemList.map((users, index) => (
                  <div className='duckTape' key={index}>
                     <div className='itemNames'>
                        <div className={`itemRarity ${users.itemRarity}`}><span>{users.itemRarity}</span></div>
                        <div className='imgbox'>
                           <img src={`https://img-api.neople.co.kr/df/items/${users.itemId}`} alt="info" />
                        </div>
                        <div className='itemTypeLevel'>
                           <span>{users.itemTypeDetail}</span>
                           <span>{users.itemAvailableLevel}</span>
                        </div>
                        <div className='itemitemitem'><span>{users.itemName}</span></div>
                     </div>
                     <div className='itemOptions'>
                        {users.itemRarity === "에픽" ? 
                        !users.growInfo ? <span></span> :
                        users.growInfo.options.map((data, index2) => (
                           <div key={index2}>
                              <span>옵션{index2 + 1}</span>
                              {!data.explainDetail ? <></> : splitWord(data.explainDetail)}                              
                           </div>
                        )) : users.itemRarity === "신화" ? 
                        users.mythologyInfo.options.map((infos,index3)=>(
                           <div key={index3}>
                              <span>옵션{index3 + 1}</span>
                              {splitWord(infos.explainDetail)}
                              {splitWord(infos.buffExplainDetail)}
                           </div>
                        )) : <></>}</div>
                  </div>
               )) : <div style={{ textAlign: "center", width: "100%" }}>{alertMSG}</div>}
            </div>
         </div>
      </div>
   )
}

export default AllItemSearch