import React from 'react'
import { Link } from 'react-router-dom'
function Top() {
   return (
      <div className='Top'>
         <ul>
            <li><Link to={"/"}>캐릭터 검색</Link></li>
            <li><Link to={"/items"}>아이템 검색</Link></li>
            <li><Link to={"/boards"}>자유 게시판</Link></li>
            <li><Link to={"/"}>문의하기</Link></li>
            <li><Link to={"/"}>문의하기</Link></li>
         </ul>
      </div>
   )
}

export default Top