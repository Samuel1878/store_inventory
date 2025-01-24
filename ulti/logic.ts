//Cup is basic measurement unit for rice
import moment from "moment";
export const P :number = 8 ;
export const B_6 :number = 6 * P ;
export const B_12 :number= 12 * P ;
export const B_full :number= 24 * P;

export const formatPrice= (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export default formatPrice;
export const getCurrentDate = () => {
  return moment().format('DD-MM-YYYY');
};
export const getCurrentTime = () => {
  const time = moment().format("HH:mm:ss");
  function convertToAMPM(time) {
    const [hours, minutes, seconds] = time.split(":").map(Number);
    const ampm = hours >= 12 ? "PM" : "AM";
    const hours12 = hours % 12 || 12; // Convert to 12-hour format
    return `${hours12}:${String(minutes).padStart(2, "0")} ${ampm}`;
  }
  return convertToAMPM(time)
}
export const cupToFormat = (c)=>{
    
}