let name = localStorage.getItem("name");
let email = localStorage.getItem("email");


if (name) {
    document.getElementById("profileName").textContent = name;
}


if (email) {
    document.getElementById("profileEmail").textContent = email;
}


function goBack() {

    window.location.href = "dashboard.html";

}