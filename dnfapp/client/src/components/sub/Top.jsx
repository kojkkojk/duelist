import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaToolbox, FaPen, FaUserAlt } from 'react-icons/fa'

function Top() {
   return (
      <div className='top'>
         <div className="menu">
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
            </ul>
         </div>
         <div className="searchbar">
            <div className='loginBox'>
               <div><FaUserAlt/></div>
               <div><span>LOGIN</span></div>
            </div>
         </div>
      </div>
   )
}

export default Top