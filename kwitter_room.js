
var firebaseConfig = {
  apiKey: "AIzaSyB3c8TSWHeZtz-9GPpAeiwkqvbw7Zi_4bA",
  authDomain: "kwitter-a84db.firebaseapp.com",
  databaseURL: "https://kwitter-a84db-default-rtdb.firebaseio.com",
  projectId: "kwitter-a84db",
  storageBucket: "kwitter-a84db.appspot.com",
  messagingSenderId: "282547873241",
  appId: "1:282547873241:web:b49fbc31136f901788a5c8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
    row = "<div class='room name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
     });});}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose: "Room Name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "chat_page.html"
    }

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "chat_page.html"
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}


