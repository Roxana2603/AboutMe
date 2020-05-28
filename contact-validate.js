function validation(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    let status = document.getElementById("status");
    let text;

   
    if(name.length <5){
       text = "Please enter e valid name";
       status.innerHTML = text;
       status.style.visibility = "visible";
       return false;       
    }
    if(email.indexOf("@") == -1 || email.length <6){
        text = "Please enter e valid email";
        status.innerHTML = text;
        status.style.visibility = "visible";
        return false;       
     }
     if(subject.length <=2){
        text = "Please enter e valid subject";
        status.innerHTML = text;
        status.style.visibility = "visible";
        return false;       
     }
     if(message.length <=20){
        text = "Please enter e valid message";
        status.innerHTML = text;
        status.style.visibility = "visible";
        return false;       
     }

    return true;
}