
function addUser() {

    user_name = document.getElementById("user_name").value;
   password = document.getElementById("password_name").value;

    localStorage.setItem("password_name", password)
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "kwitter_room.html";
  }
  
  
