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
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;/*  */
                  Room_names = childKey;
                  //Start code
                  console.log("roomname-"+Room_names);
                  row="<div class='room_name' id="+Room_names+"onclick='redirecttoroomname(this.id)'>"+Room_names+"</div><hr>";
                  document.getElementById("output").innerHTML+=row;


                  //End code
            });
      });
}
getData();

function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"addingroom_name"
      })
      localstorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function redirecttoroomname(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";

}
function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
}