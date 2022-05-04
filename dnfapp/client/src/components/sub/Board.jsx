import React from 'react'

function Board() {
   return (
      <div className='boardPage'>
         <h2>게시판</h2>
         <div className='noticeTable'>
            <table>
               <colgroup>
                  <col width={"10%"}/>
                  <col width={"70%"}/>
                  <col width={"10%"}/>
                  <col width={"10%"}/>
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
         <div className='freeTable'>
            <table>
               <colgroup>
                  <col width={"10%"}/>
                  <col width={"70%"}/>
                  <col width={"10%"}/>
                  <col width={"10%"}/>
               </colgroup>
               <tbody>
                  <tr>
                     <th>1</th>
                     <td>2</td>
                     <th>1</th>
                     <th>1</th>
                  </tr>
                  <tr>
                     <th>1</th>
                     <td>2</td>
                     <th>1</th>
                     <th>1</th>
                  </tr>
                  <tr>
                     <th>1</th>
                     <td>2</td>
                     <th>1</th>
                     <th>1</th>
                  </tr>
                  <tr>
                     <th>1</th>
                     <td>2</td>
                     <th>1</th>
                     <th>1</th>
                  </tr>
                  <tr>
                     <th>1</th>
                     <td>2</td>
                     <th>1</th>
                     <th>1</th>
                  </tr>
                  <tr>
                     <th>1</th>
                     <td>2</td>
                     <th>1</th>
                     <th>1</th>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   )
}

export default Board