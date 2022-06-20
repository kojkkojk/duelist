import React, { useEffect, useState } from 'react';
import { firestoreDB } from '../../firebase/configs';
import { collection, getDocs } from "firebase/firestore";
import { test, todayIs } from '../../configs'
import { Link } from 'react-router-dom'

function Board() {
   const querySnap = getDocs(collection(firestoreDB, "PON"));
   const [lists, setlists] = useState([]);
   const dateCal = new Date();

   const call = async () => {
      await querySnap.then(data => {
         let list = []
         data.forEach((doc) => { list.push({ "postsId":doc.id,"data": doc.data() }) }); 
         //[{"postsId":00,"data":{...}},{"postsId":00,"data":{...}}] 형식
         let cleanUpList = list.sort((a,b)=>b.data.dateIndex - a.data.dateIndex);
         //올림차순 정리
         setlists(cleanUpList);
      })
   }
   useEffect(() => {
      call()
   }, [])

   return (
      <div className='boardPage'>
         <div className='boardSection'>
            <div className='deus'><h2>자유 게시판</h2></div>
            <div className='deus exmakina'><span>전체글</span><span>개념글</span><span>글쓰기</span></div>
            <div className='noticeTable'>
               <div className='notice'>
                  <div>
                     <span>번호</span>
                     <span style={{textAlign:"center"}}>제목</span>
                     <span>작성자</span>
                     <span>날짜</span>
                  </div>
                  <div>
                     <span>Notice</span>
                     <span>검색어 선별에서 발생하는 문제에 관한 해결책 안내</span>
                     <span>운영자</span>
                     <span>05/02/22</span>
                  </div>
                  <div>
                     <span>Notice</span>
                     <span>아이템 서치중 칭호 관련 아이템 표기 오류</span>
                     <span>운영자</span>
                     <span>{todayIs(dateCal)}</span>
                  </div>
               </div>
            </div>
            <div className='freeTable'>
               <div className='free'>
                  {lists.length < 1 ? <div><span style={{ textAlign: "center", width: "100%" }}>LOADING...</span></div> :
                  lists.map((elements, index) => (
                  <div key={index}>
                     <span>{lists.length - index}</span>
                     <span><Link to={`/boards/${elements.postsId}`}>{elements.data.title}</Link></span>
                     <span>{elements.data.user}</span>
                     <span>{test(dateCal, elements.data)}</span>
                  </div>))}
               </div>
            </div>
         </div>
         <div className="recommand">
         </div>
      </div>
   )
}

export default Board;