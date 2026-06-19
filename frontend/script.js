document
  .getElementById("loginForm")
  .addEventListener("submit", function (e) {

    e.preventDefault();

    const email =
      document.getElementById("email").value;

    const password =
      document.getElementById("password").value;

    if (
      email !== "" &&
      password === "admin123"
    ) {
      localStorage.setItem(
        "userEmail",
        email
      );

      window.location.href =
        "dashboard.html";

    } else {

      document.getElementById(
        "message"
      ).innerText =
        "Invalid Email or Password";
    }
  });