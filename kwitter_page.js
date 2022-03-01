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

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function send(){

msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({

      name:user_name,
      message:msg,
      like:0
});

      document.getElementById("msg").value = "";

    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

console.log(firebase_message_id);
console.log(message_data);

name1 = message_data['name'];
message = message_data['message'];
like = message_data['like'];

name_with_tag = "<h4>'+name1+'<img class='user_tick' src='tick.png'></h4>";

message_with_tag = "<h4 class='message_h4'>'+message+'</h4>";

like_button = "<button class='btn btn-warning' id='+firebase_message_id+' onclick='update_likes(this.id)' value='+like+'>";

span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>LIKE : '+like+'</span> </button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;

output = document.getElementById("output").innerHTML +=row;

//End code
      } });  }); }
getData();

function update_likes(message_id){

button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes)+1;
console.log(updated_likes);

firebase.database().ref(room_name).child(message_id).update({

      like : updated_likes      
      });
      
}

function logout(){

localStorage.removeItem("user_name");
localStorage.removeItem("room_name");

window.location = "index.html";

}