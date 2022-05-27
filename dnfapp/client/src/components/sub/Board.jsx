import React from 'react';
import { firestoreDB } from '../../firebase/configs';
import { collection, getDocs } from "firebase/firestore";

function Board() {
   const querySnap = getDocs(collection(firestoreDB, "PON"));
   const call = async () => {
      await querySnap.then(data=>{
         data.forEach((doc) => {
           console.log(doc.id,"+",doc.data());
         })
      })
   }
   return (
      <div className='boardPage'>
         <div className='noticeTable'>
            <table>
               <colgroup>
                  <col width={"10%"} />
                  <col width={"70%"} />
                  <col width={"10%"} />
                  <col width={"10%"} />
               </colgroup>
               <thead>
                  <tr>
                     <th>번호</th>
                     <th>제목</th>
                     <th>작성자</th>
                     <th>날짜</th>
                  </tr>
                  <tr>
                     <th>Notice</th>
                     <th>검색어 선별에서 발생하는 문제에 관한 해결책 안내</th>
                     <th>운영자</th>
                     <th>05/02/22</th>
                  </tr>
                  <tr>
                     <th>Notice</th>
                     <th>아이템 서치중 칭호 관련 아이템 표기 오류</th>
                     <th>운영자</th>
                     <th>05/02/22</th>
                  </tr>
               </thead>
            </table>
         </div>
         <button onClick={call}>onClick</button>
         <div className='freeTable'>
            <table>
               <colgroup>
                  <col width={"10%"} />
                  <col width={"70%"} />
                  <col width={"10%"} />
                  <col width={"10%"} />
               </colgroup>
               <tbody>

               </tbody>
            </table>
         </div>
      </div>
   )
}

export default Board