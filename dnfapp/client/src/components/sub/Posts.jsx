import React, { useEffect, useState } from 'react'
import { firestoreDB } from '../../firebase/configs';
import { doc, getDoc } from "firebase/firestore";
import { useParams } from 'react-router-dom'
function Posts() {
   let { userId } = useParams();
   const docRef = doc(firestoreDB, "PON", userId)
   const [postDatas, setPostDatas] = useState({
      date: "",
      dataIndex: 0,
      desc: "",
      title: "",
      user: ""
   })
   const callPosts = async () => {
      await getDoc(docRef).then(data => {
         if (data.exists()) {
            setPostDatas(data.data());
         } else {
            setPostDatas({
               date: "--",
               dataIndex: 0,
               desc: "Sorry, We could not find this post",
               title: "Sorry, We could not find this post",
               user: "--"
            });
         }
      })
   }
   useEffect(() => {
      callPosts()
   }, [])

   return (
      <div className='boardPage'>
         <div className='boardSection'>
            <div></div>
            <div className='noticeTable'>
               <div className='notice'>
                  {postDatas.date} {postDatas.title} {postDatas.user}
               </div>
            </div>
            <div className='freeTable'>
               <div className='free'>
                  {postDatas.desc}
               </div>
            </div>
         </div>
         <div className="recommand">

         </div>
      </div>
   )
}

export default Posts