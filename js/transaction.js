document.getElementById("calculate").addEventListener("click", function () {
  const foodInput = document.getElementById("food-input");
  const foodAmountText = foodInput.value;
  const foodAmount = parseFloat(foodAmountText);
  //   console.log(foodAmount);
  const rentInput = document.getElementById("rent-input");
  const rentAmountText = rentInput.value;
  const rentAmount = parseFloat(rentAmountText);
  //   console.log(foodAmount);
  const clothesInput = document.getElementById("clothes-input");
  const clothesAmountText = clothesInput.value;
  const clothesAmount = parseFloat(clothesAmountText);
  //   console.log(foodAmount);
  const totalExpenseInput = document.getElementById("total-expense");
  const totalExpenseAmountText = totalExpenseInput.innerText;
  const totalExpenseAmount = parseFloat(totalExpenseAmountText);
  totalExpenseInput.innerText = foodAmount + rentAmount + clothesAmount;
  //   console.log(foodAmount);
  const incomeInput = document.getElementById("income-input");
  const incomeAmountText = incomeInput.value;
  const incomeAmount = parseFloat(incomeAmountText);
  //   console.log(foodAmount);
  const balanceInput = document.getElementById("balance-input");
  const balanceAmountText = balanceInput.innerText;
  const balanceAmount = parseFloat(balanceAmountText);
  balanceInput.innerText = incomeAmount - totalExpenseInput.innerText;
  //   console.log(foodAmount);

  //   const balanceTotal = incomeAmount - totalExpenseInput.innerText;
});

document.getElementById("save-button").addEventListener("click", function () {
  const saveInput = document.getElementById("save-input");
  const saveAmountText = saveInput.value;
  const saveAmount = parseFloat(saveAmountText);
  //   console.log(foodAmount);
  const incomeInput = document.getElementById("income-input");
  const incomeAmountText = incomeInput.value;
  const incomeAmount = parseFloat(incomeAmountText);
//   console.log(incomeAmount);
// get saving amount
  const savingAmountInput = document.getElementById("saving-amount");
  const savingAmountText = savingAmountInput.innerText;
  const savingAmount = parseFloat(savingAmountText);
  savingAmountInput.innerText = incomeAmount / saveAmount;

  const balanceInput = document.getElementById("balance-input");
  const balanceAmountText = balanceInput.innerText;
  const balanceAmount = parseFloat(balanceAmountText);
  balanceInput.innerText = incomeAmount - totalExpenseInput.innerText;
//   get remaining balance
  const remainingBalanceInput = document.getElementById("remaining-balance");
  const remainingBalanceText = remainingBalanceInput.innerText;
  const remainingBalance = parseFloat(remainingBalanceText);
  remainingBalanceInput.innerText = balanceInput.innerText - savingAmountInput.innerText;
});
