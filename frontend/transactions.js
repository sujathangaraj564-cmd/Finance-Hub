let transactions =
  JSON.parse(
    localStorage.getItem("transactions")
  ) || [];

displayTransactions();

function addTransaction() {
  const name =
    document.getElementById("personName")
      .value;

  const amount =
    document.getElementById("amount")
      .value;

  if (name === "" || amount === "") {
    alert("Fill all fields");
    return;
  }

  transactions.push({
    name: name,
    amount: Number(amount)
  });

  localStorage.setItem(
    "transactions",
    JSON.stringify(transactions)
  );

  document.getElementById(
    "personName"
  ).value = "";

  document.getElementById(
    "amount"
  ).value = "";

  displayTransactions();
}

function displayTransactions() {
  const list =
    document.getElementById(
      "transactionList"
    );

  list.innerHTML = "";

  let total = 0;

  transactions.forEach(
    (transaction, index) => {

      total += transaction.amount;

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
              ${transaction.name}
            </strong>
            <br>
            ₹${transaction.amount}
          </div>

          <button
            onclick="deleteTransaction(${index})"
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
    "totalTransactions"
  ).innerText =
    "₹" + total.toLocaleString();
}

function deleteTransaction(index) {
  transactions.splice(index, 1);

  localStorage.setItem(
    "transactions",
    JSON.stringify(transactions)
  );

  displayTransactions();
}