import React from 'react'
import {Link} from 'react-router-dom'
function CardSelect() {
  return (
    <div>
      <ul>
         <li><Link to={"/card/legendary"}>레전더리 카드</Link></li>
         <li><Link to={"/card/unique"}>유니크 카드</Link></li>
         <li></li>
      </ul>
    </div>
  )
}

export default CardSelect