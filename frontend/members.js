let members = JSON.parse(localStorage.getItem("members")) || [];

displayMembers();

function addMember() {
  const name = document.getElementById("memberName").value;
  const email = document.getElementById("memberEmail").value;

  if (name === "" || email === "") {
    alert("Please fill all fields");
    return;
  }

  const member = {
    name: name,
    email: email
  };

  members.push(member);

  localStorage.setItem("members", JSON.stringify(members));

  document.getElementById("memberName").value = "";
  document.getElementById("memberEmail").value = "";

  displayMembers();
}

function displayMembers() {
  const memberList = document.getElementById("memberList");

  memberList.innerHTML = "";

  members.forEach((member, index) => {
    memberList.innerHTML += `
      <li style="
        background:#1b1b1b;
        color:white;
        padding:15px;
        margin-bottom:10px;
        border-radius:10px;
        display:flex;
        justify-content:space-between;
        align-items:center;
      ">
        <div>
          <strong>${member.name}</strong><br>
          ${member.email}
        </div>

        <div>
  <button
    onclick="editMember(${index})"
    style="
      background:#d4af37;
      width:auto;
      padding:10px 20px;
      color:black;
      margin-right:10px;
    "
  >
    Edit
  </button>

  <button
    onclick="deleteMember(${index})"
    style="
      background:red;
      width:auto;
      padding:10px 20px;
      color:white;
    "
  >
    Delete
  </button>
</div>
      </li>
    `;
  });
}

function deleteMember(index) {
  members.splice(index, 1);

  localStorage.setItem("members", JSON.stringify(members));

  displayMembers();
}
function searchMember() {
  const search = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(search)
  );

  displayFilteredMembers(filteredMembers);
}

function displayFilteredMembers(data) {
  const memberList = document.getElementById("memberList");

  memberList.innerHTML = "";

  data.forEach((member, index) => {
    memberList.innerHTML += `
      <li style="
        background:#1b1b1b;
        color:white;
        padding:15px;
        margin-bottom:10px;
        border-radius:10px;
        display:flex;
        justify-content:space-between;
        align-items:center;
      ">
        <div>
          <strong>${member.name}</strong><br>
          ${member.email}
        </div>

        <div>
  <button
    onclick="editMember(${index})"
    style="
      background:#d4af37;
      width:auto;
      padding:10px 20px;
      color:black;
      margin-right:10px;
    "
  >
    Edit
  </button>

  <button
    onclick="deleteMember(${index})"
    style="
      background:red;
      width:auto;
      padding:10px 20px;
      color:white;
    "
  >
    Delete
  </button>
</div>
      </li>
    `;
  });
}
function editMember(index) {
  const newName = prompt(
    "Enter New Name",
    members[index].name
  );

  const newEmail = prompt(
    "Enter New Email",
    members[index].email
  );

  if (newName && newEmail) {
    members[index].name = newName;
    members[index].email = newEmail;

    localStorage.setItem(
      "members",
      JSON.stringify(members)
    );

    displayMembers();
  }
}