function registerData() {
    let name, email, password, phone;
    name = document.getElementById("input-name").value;
    email = document.getElementById("input-email").value;
    phone = document.getElementById("input-phone").value;
    password = document.getElementById("input-password").value;
    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_records.some((v) => { return v.email == email })) {
        alert("Извините, такой пользователь уже существует.");
    } else {
        user_records.push({
            "name": name,
            "email": email,
            "password": password,
            "phone": phone,
        })
        localStorage.setItem("users", JSON.stringify(user_records));
        alert("Вы зарегистрированы");
        window.location.href = "index.html";
    }
}