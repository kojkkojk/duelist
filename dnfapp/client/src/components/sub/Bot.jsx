import React from 'react';
import { Link } from 'react-router-dom'
import { FaQuestionCircle, FaRegCommentDots } from 'react-icons/fa';

function Bot() {
   return (
      <div className="bot">
         <div>
            <ul>
               <li>
                  <Link to={"/"}>
                     <span className='icons'><FaQuestionCircle /></span>
                     <span>문의하기</span>
                  </Link>
               </li>
               <li>
                  <Link to={"/"}>
                     <span className='icons'><FaRegCommentDots /></span>
                     <span>던붕이</span>
                  </Link>
               </li>
            </ul>
         </div>
         <footer>
            <a href="http://developers.neople.co.kr" target={"_blank"} rel="noreferrer">
               <img src={`https://firebasestorage.googleapis.com/v0/b/plogprojects.appspot.com/o/gallery%2FTech.png?alt=media&token=ca786818-53a6-4207-8f5f-a8ebe2e4f4b6`} alt="Neople 오픈 API" />
            </a>
         </footer>
      </div>
   )
}

export default Bot