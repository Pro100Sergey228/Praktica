function loginData(){
    let inputEmail, inputPassword;
    inputEmail = document.querySelector("#input-email").value;
    inputPassword = document.querySelector("#input-password").value;
        let user_records = new Array();

        user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
        
        if(user_records.some((v)=>{return v.email == inputEmail && v.password == inputPassword})){
            
            let current_user=user_records.filter((v)=>{return v.email==inputEmail && v.password==inputPassword})[0]
            localStorage.setItem('name',current_user.name);
            localStorage.setItem('email',current_user.email);
            window.location.href="profile.html"
        }
        else{
            alert('Извините, пароль или логин введён неверно.');
        }
};