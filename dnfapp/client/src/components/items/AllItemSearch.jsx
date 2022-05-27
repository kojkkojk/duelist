import React, { useState } from 'react';
import axios from 'axios';

function AllItemSearch() {
   const [itemList, setItemList] = useState([])
   const [itemName, setItemName] = useState("")
   const [alertMSG, setalertMSG] = useState("");
   const typingItemName = (e) => { setItemName(e.target.value) };
   const pullApi = async () => {
      await axios.get("/item", { params: { itemName: itemName } }).then(res => {
         let data = res.data
         if (!data.rows) {
            setItemList([]);setalertMSG("API 서버에 문제가 있습니다.");setTimeout(() => {setalertMSG("");}, 1500);
         } else {
            let filArr = data.rows;setItemList(filArr);
      }})}
   const check = () => {
      if (itemName.length === 0) {
         setalertMSG("아이템 명을 입력하세요!");
         setTimeout(() => { setalertMSG("") }, 1500);
      } else if (itemName.length !== 0) { pullApi(); setItemName("");};
   }
   const onKeyEnter = (e) => {
      if (e.key === 'Enter' && itemName.length === 0) {
         setalertMSG("아이템 명을 입력하세요!"); setTimeout(() => { setalertMSG("") }, 1500);
      } else if (e.key === 'Enter' && itemName.length !== 0) {
         pullApi();setItemName("");
      }}

   return (
      <div className='charSearch'>
         <div className='charSearchTop'>
            <div className='charTitle'><h2>아이템 검색</h2><p>100레벨 이상의 아이템만 검색이 가능합니다</p></div>
            <div className='charInput'>
               <input type="text" onChange={typingItemName} onKeyDown={onKeyEnter} value={itemName} /><button onClick={check}>검색</button>
            </div>
         </div>
         <div className='ItemsLists'>
            {itemList.length > 0 ? itemList.map((users, index) => (
               <div className='itemNames' key={index}>
                  <div className="tetes">
                     <div className='imgbox'>
                        <img src={`https://img-api.neople.co.kr/df/items/${users.itemId}`} alt="info" />
                     </div>
                     <div className={`itemRarity ${users.itemRarity}`}>{users.itemRarity}</div>
                     <div className='itemTypeLevel'>
                        <span>{users.itemTypeDetail}</span>
                        <span>{users.itemAvailableLevel}</span>
                     </div>
                     <div className='itemitemitem'>{users.itemName}</div>
                  </div>
                  {/* <div className='growInfo'>{!users.growInfo ? <></> : users.growInfo.options.map((opt, index) => ( <span key={index}>[{index+1}옵션] {opt.explain}</span>))}
                  </div> */}
               </div>
            )) : <div style={{ textAlign: "center", width: "100%" }}>{alertMSG}</div>}
         </div>
      </div>
   )
}

export default AllItemSearch