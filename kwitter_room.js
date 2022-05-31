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
document.getElementById("username").innerHTML="Welcome "+user_name;
function add_room(){
    room_name= document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"hello Aydin"
    });
    localStorage.setItem("room_name",room_name);
    window.location="letschatpage.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("room_name"+room_name);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    
}