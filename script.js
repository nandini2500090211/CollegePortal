javascript
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let role = document.getElementById("role").value;

    if (role === "admin" &&
        username === "admin" &&
        password === "admin123") {

        window.location.href = "admin.html";

    } else if (role === "student" &&
        username === "student" &&
        password === "stud123") {

        window.location.href = "student.html";

    } else {
        document.getElementById("message").innerText =
            "Invalid username or password!";
    }
}
