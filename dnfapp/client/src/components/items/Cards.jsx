import React, { useEffect, useState } from 'react';
import { getDatabase, ref, child, get } from "firebase/database";
import { useParams } from 'react-router-dom'

function Cards() {
   let { rarity } = useParams();
   const dbRef = ref(getDatabase());
   const [cardChup, setCardChup] = useState([])
   const callcall = () => {
      get(child(dbRef, `detailCard/${rarity}`)).then((snapshot) => {
         if (snapshot.exists()) {
            setCardChup(snapshot.val());
         } else {
            console.log("No data available");
         }
      }).catch((error) => {
         console.error(error);
      });
   }
   useEffect(() => {
      callcall()
   }, [])

   return (
      <div className='cardPage'>
         <table className='cardTable'>
            <colgroup>
               <col width={"15%"}/>
               <col width={"30%"}/>
               <col width={"55%"}/>
            </colgroup>
            <tbody>
            {cardChup.length > 1 &&
            cardChup.map((data, index) => (
               <tr className='cardPotrait' key={index}>
                  <td><div className='cardPotraitIMG'><img src={`https://img-api.neople.co.kr/df/items/${data.itemId}`} alt="cardImg" width={"40px"} height={"40px"}/></div></td>
                  <td className={`rpoc ${data.itemRarity}`}>{data.cardInfo && data.cardInfo.slots ? <p style={{color:"black"}}>{data.cardInfo.slots[0].slotName}</p> : <p style={{color:"black"}}>기타</p>}<p>{data.itemName}</p></td>
                  <td>
                     <div className='tuy'>{data.cardInfo && data.cardInfo.enchant.map((info, index2) => (
                     <div key={index2}>
                        <p style={{color:"#36ba59"}}>{index2 === 0 ? "기본" : index2 + `업글`}</p>
                        {info.status && info.status.map((ro, index3) => (<p key={index3}>{ro.name} +{ro.value}</p>))}
                        {info.explain && <p>{info.explain}</p>}
                     </div>))}</div>
                  </td>
               </tr>))}
            </tbody>
         </table>
         
      </div>
   )
}

export default Cards