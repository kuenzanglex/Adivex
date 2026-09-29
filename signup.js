function showSignup() {

    document.getElementById("loginPage").style.display = "none";
    document.getElementById("signupPage").style.display = "block";

}


function showLogin() {

    document.getElementById("signupPage").style.display = "none";
    document.getElementById("loginPage").style.display = "block";

}

function signup() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (name === "" || email === "" || password === "" || confirmPassword === "") {

        alert("Please fill in all fields");

        return;
    }

    if (password !== confirmPassword) {

        alert("Passwords do not match");

        return;
    }


    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);


    alert("Account created successfully!");

    showLogin();

}


function login() {

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let savedEmail = localStorage.getItem("email");
    let savedPassword = localStorage.getItem("password");

    if (email === savedEmail && password === savedPassword) {


        window.location.href = "dashboard.html";

    } else {

        alert("Invalid email or password");

    }

}