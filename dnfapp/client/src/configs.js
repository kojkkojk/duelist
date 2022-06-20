export const serverName = {
   anton: "안톤", bakal: "바칼", cain: "카인", casillas: "카시야스", diregie: "디레지에", hilder: "힐더", prey: "프레이", siroco: "시로코"
}
export const test = (dateCal, date) => {
   let days = ""
   let d = dateCal.getTime() - date.dateIndex
   if (d < 86400000) {
      days = "최근"
   } else if (d > 86400000 && d < 172800000) {
      days = "하루전"
   } else if (d > 172800000 && d < 259200000) {
      days = "이틀 전"
   } else if (d > 259200000 && d < 345600000) {
      days = "사흘 전"
   } else {
      days = date.date
   }
   return days
}
export const todayIs = (dateCal) => {
   let month = dateCal.getUTCMonth() + 1
   let day = dateCal.getDate();
   if (dateCal.getUTCMonth() + 1 < 10) { month = "0" + (dateCal.getUTCMonth() + 1); };
   if (dateCal.getDate() < 10) { day = "0" + dateCal.getDate() }
   return `${month}/${day}`
}