//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyCq5cCUkPq4dhBBRMBQYNvsBBMijhtHeW8",
    authDomain: "kwitter-6cfac.firebaseapp.com",
    databaseURL: "https://kwitter-6cfac-default-rtdb.firebaseio.com",
    projectId: "kwitter-6cfac",
    storageBucket: "kwitter-6cfac.appspot.com",
    messagingSenderId: "446974216501",
    appId: "1:446974216501:web:e3ccea73a18a6bdae7a47c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("username");
room_name=localStorage.getItem("room_name");
function send(){
    mst= document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:mst,
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
function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location="index.html";
}