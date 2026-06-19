// Existing settings load
document.getElementById("adminName").value =
  localStorage.getItem("adminName") || "";

document.getElementById("adminPassword").value =
  localStorage.getItem("adminPassword") || "";

function saveSettings() {
  const name =
    document.getElementById("adminName").value;

  const password =
    document.getElementById("adminPassword").value;

  if (name === "" || password === "") {
    alert("Please fill all fields");
    return;
  }

  localStorage.setItem("adminName", name);
  localStorage.setItem("adminPassword", password);

  alert("Settings Saved Successfully!");
}