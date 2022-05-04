import React, { useState } from 'react';
import axios from 'axios';

function AllItemSearch() {
   const [itemList, setItemList] = useState([])
   const [itemName, setItemName] = useState("")
   const [alertMSG, setalertMSG] = useState("");
   const typingItemName = (e) => { setItemName(e.target.value) };

   const pullApi = async () => {
      axios.get("/item", { params: { itemName: itemName } }).then(res => {
         console.log(res.data.rows);
         setItemList(res.data.rows);
      })
   }
   const check = () => {
      if (itemName.length === 0) {
         setalertMSG("아이템 명을 입력하세요!")
         setTimeout(() => {
            setalertMSG("")
         }, 1500);
      } else if (itemName.length !== 0) {
         pullApi()
         setItemName("")
      }
   }
   const onKeyEnter = (e) => {
      if (e.key === 'Enter' && itemName.length === 0) {
         setalertMSG("아이템 명을 입력하세요!")
         setTimeout(() => {
            setalertMSG("")
         }, 1500);
      } else if (e.key === 'Enter' && itemName.length !== 0) {
         pullApi()
         setItemName("")
      }
   }

   return (
      <div className='charSearchTop'>
         <div className='charSearch'>
            <span><h2>아이템 검색</h2>유니크 등급 이상의 아이템만 검색이 가능합니다</span>
            <div>
               <input type="text" onChange={typingItemName} onKeyDown={onKeyEnter} value={itemName}/><button onClick={check}>검색</button>
            </div>
         </div>
         <div className='ItemsLists'>
            {itemList.length > 0 ? itemList.map((users, index) => (
               <React.Fragment key={index}>
                  {users.itemType === "아바타" || users.itemType === "스태커블" ? "" :
                     users.itemRarity === "레어" || users.itemRarity === "언커먼" || users.itemRarity === "커먼" ? "" :
                     <div className='itemNames' >
                        <div className="tetes">
                           <div className='imgbox'>
                              <img src={`https://img-api.neople.co.kr/df/items/${users.itemId}`} alt="info" height={"50px"} />
                           </div>
                           <div className='itemitemitem'>{users.itemName}</div>
                        </div>
                     </div>}
               </React.Fragment>
            )) :
               <div style={{ textAlign: "center", width: "100%" }}>{alertMSG}</div>}
         </div>
      </div>
   )
}

export default AllItemSearch