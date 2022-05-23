import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaToolbox, FaPen, FaQuestionCircle, FaRegCommentDots } from 'react-icons/fa'

function Top() {
   return (
      <div className='Top'>
         <ul>
            <li>
               <Link to={"/"}>
                  <span className='icons'><FaSearch /></span>
                  <span>캐릭터 검색</span>
               </Link></li>
            <li>
               <Link to={"/items"}>
                  <span className='icons'><FaToolbox /></span>
                  <span>아이템 검색</span>
               </Link></li>
            <li>
               <Link to={"/boards"}>
                  <span className='icons'><FaPen /></span>
                  <span>자유 게시판</span>               
               </Link></li>
            <li>
               <Link to={"/"}>
                  <span className='icons'><FaQuestionCircle /></span>
                  <span>문의하기</span>
               </Link></li>
            <li>
               <Link to={"/"}>
                  <span className='icons'><FaRegCommentDots /></span>
                  <span>던붕이</span>
               </Link></li>
         </ul>
      </div>
   )
}

export default Top