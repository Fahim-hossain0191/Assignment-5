document.getElementById('sign_in').addEventListener("click",function(){
    const get_username=document.getElementById('username');
    const username=get_username.value;
    console.log(username);
    const get_password=document.getElementById('password');
    const password=get_password.value;
    console.log(password);
    if(username=="admin" && password=="admin123"){
        alert("correct password");
        window.location.assign("home.html");
    }else{
        alert("Wrong password");
    }
})