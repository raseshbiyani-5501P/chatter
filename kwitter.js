function Add_user_name(){

    User_name = document.getElementById("user_name");
    localStorage.setItem("user_name" , User_name);
    window.location = "kwitter_room.html"

}

