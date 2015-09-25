function buttonPressed(){
    var message = document.getElementById("message").value;
    if(message){
        /*alert(message);*/
        document.getElementById("background");
        background.style.background = message;
    }
    else{
        alert("What color do you want the website to be?");
    }
}