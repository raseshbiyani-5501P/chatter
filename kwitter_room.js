  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCXoNLUpidXoeaA-fmEzxxj0hXAOY0Diyg",
    authDomain: "kwitter-27083.firebaseapp.com",
    databaseURL: "https://kwitter-27083-default-rtdb.firebaseio.com",
    projectId: "kwitter-27083",
    storageBucket: "kwitter-27083.appspot.com",
    messagingSenderId: "669124631718",
    appId: "1:669124631718:web:34d45aa5a461cb63412867",
    measurementId: "G-YMRQBVN5FD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

console.log("Room_names - " +Room_names);
row = "<div class='Room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){

console.log(name);
localStorage.setItem("Room_name", name);
window.location = "kwitter_page.html";

}

function add_room(){

room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({

Room : room_name

});

localStorage.setItem("Room", room_name);
window.location = "kwitter_page.html";

}