let members = JSON.parse(localStorage.getItem("members")) || [];

document.getElementById("totalMembers").innerText =
  members.length;
  let width = members.length * 40;

if (width > 1000) {
  width = 1000;
}

document.getElementById("memberBar").style.width =
  width + "px";
  let investments =
  JSON.parse(
    localStorage.getItem("investments")
  ) || [];

const activityList =
  document.getElementById(
    "activityList"
  );

activityList.innerHTML = "";

// Members
members.slice(-3).forEach(member => {
  activityList.innerHTML += `
    <li style="margin-bottom:15px;">
      👤 ${member.name} joined as member
    </li>
  `;
});

// Investments
investments.slice(-3).forEach(investment => {
  activityList.innerHTML += `
    <li style="margin-bottom:15px;">
      💰 ${investment.name}
      invested ₹${investment.amount}
    </li>
  `;
});