import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAC1LEq5QgdvlosTQRgIjuTcT-_LQkopjU",
  authDomain: "expensetracker-b3677.firebaseapp.com",
  databaseURL: "https://expensetracker-b3677.firebaseio.com",
  projectId: "expensetracker-b3677",
  storageBucket: "expensetracker-b3677.appspot.com",
  messagingSenderId: "524204999627",
  appId: "1:524204999627:web:c1bdbe694762daaffdac4e"
  };

  firebase.initializeApp(firebaseConfig);

firebase.messaging();
export default firebase;
//   const messaging= firebase.messaging();
//   export function initNofication() {
//     Notification.requestPermission().then((permission)=>{
//         if (permission) {
//             console.log("Permission Granted")
//             return messaging.getToken().then((token)=>{
//                 console.log("Token:",token);
//             })
//         } else {
//             console.log("Error in Token generation");
//         }
//     }).catch((err)=>{
//         console.log("Error in Permission Grantation :",err)
//     })
//   }
  

