import create from 'zustand';
import { persist } from "zustand/middleware"

const useStore = create(persist(
   (set)=>({
      charData:{
         adventureName: "",
         characterId: "",
         characterName: "",
         guildId: "",
         guildName: "",
         jobGrowId: "",
         jobGrowName: "",
         jobId: "",
         jobName: "",
         level: 0,
         serverId: ""
      },
      changeCharData:(a)=>set(()=>({charData:{...a}}))
   }),
   {
     name: "charStorage", // unique name
     getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
   }
 ))

export default useStore;