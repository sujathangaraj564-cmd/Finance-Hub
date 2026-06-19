const members =
  JSON.parse(localStorage.getItem("members")) || [];

document.getElementById("totalMembers").innerText =
  members.length;