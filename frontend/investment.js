let investments =
  JSON.parse(
    localStorage.getItem("investments")
  ) || [];

displayInvestments();

function addInvestment() {
  const name =
    document.getElementById(
      "investorName"
    ).value;

  const amount =
    document.getElementById(
      "investmentAmount"
    ).value;

  if (name === "" || amount === "") {
    alert("Fill all fields");
    return;
  }

  investments.push({
    name: name,
    amount: Number(amount)
  });

  localStorage.setItem(
    "investments",
    JSON.stringify(investments)
  );

  document.getElementById(
    "investorName"
  ).value = "";

  document.getElementById(
    "investmentAmount"
  ).value = "";

  displayInvestments();
}

function displayInvestments() {
  const list =
    document.getElementById(
      "investmentList"
    );

  list.innerHTML = "";

  let total = 0;

  investments.forEach(
    (investment, index) => {

      total += investment.amount;

      list.innerHTML += `
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
            <strong>
              ${investment.name}
            </strong>
            <br>
            ₹${investment.amount}
          </div>

          <button
            onclick="deleteInvestment(${index})"
            style="
              background:red;
              width:auto;
              padding:10px 20px;
              color:white;
            "
          >
            Delete
          </button>

        </li>
      `;
    }
  );

  document.getElementById(
    "totalInvestment"
  ).innerText =
    "₹" + total.toLocaleString();
}

function deleteInvestment(index) {
  investments.splice(index, 1);

  localStorage.setItem(
    "investments",
    JSON.stringify(investments)
  );

  displayInvestments();
}