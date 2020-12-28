import React from 'react';
import './App.css';
import  Namebar from './components/Namebar';
import firebase from './firebase'
function App() {

  const messaging= firebase.messaging();
  
    Notification.requestPermission().then((permission)=>{
        if (permission) {
            console.log("Permission Granted")
            return messaging.getToken().then((token)=>{
                console.log("Token:",token);
            })
        } else {
            console.log("Error in Token generation");
        }
    }).catch((err)=>{
        console.log("Error in Permission Grantation :",err)
    })
  
  return (
    <div>
      <Namebar/>
    </div>
  );
}


export default App;
