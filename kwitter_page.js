//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyDM2_610FcBwBmEaLOdChyZ5_9BjzDTRzk",
    authDomain: "kanishk-s-kwitter.firebaseapp.com",
    databaseURL: "https://kanishk-s-kwitter-default-rtdb.firebaseio.com",
    projectId: "kanishk-s-kwitter",
    storageBucket: "kanishk-s-kwitter.appspot.com",
    messagingSenderId: "677204731113",
    appId: "1:677204731113:web:5af56cea8578e03cbb3c78"
  };
  
  // Initialize Firebase
  //const app = initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
