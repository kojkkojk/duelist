import React, { useState } from 'react';
import axios from 'axios';

function AllItemSearch() {
   const [itemList, setItemList] = useState([])
   const [itemName, setItemName] = useState("")
   const [alertMSG, setalertMSG] = useState("");
   const typingItemName = (e) => {setItemName(e.target.value)};

   const pullApi = async()=>{
      axios.get("/item",{params:{itemName:itemName}}).then(res=>{
         setItemList(res.data.rows);
      })
   }
   const check=()=>{
      if(itemName.length === 0){
         setalertMSG("캐릭터 명을 입력하세요!")
         setTimeout(() => {
            setalertMSG("")
         }, 1500);
      }else if( itemName.length !== 0){
         pullApi()
      }
   }

   return (
      <div className='charSearchTop'>
         <div className='charSearch'>
            <h2>아이템 검색</h2>
            <div>
               <input type="text" onChange={typingItemName} /><button onClick={check}>검색</button>
            </div>
         </div>
         <div className='ItemsLists'>
            {itemList.length > 0 ? itemList.map((users, index) => (
               <div className='itemNames' key={index}>
                  <img src={`https://img-api.neople.co.kr/df/items/${users.itemId}`} alt="info" width={"50px"}/>
               </div>)) :
               <div style={{ textAlign: "center", width: "100%" }}>{alertMSG}</div>}
         </div>
      </div>
   )
}

export default AllItemSearch