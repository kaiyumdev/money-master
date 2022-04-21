//get input value
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  // clear input field
  // inputField.value = "";
  return amountValue;
}
const totalExpenseInput = document.getElementById("total-expense");

// calculate amount
document.getElementById("calculate").addEventListener("click", function () {
  const incomeAmount = getInputValue("income-input");
  if (incomeAmount <= 0 || isNaN(incomeAmount)) {
    alert("Income must be typeof number and positive value");
  }
  // expense amount
  const foodAmount = getInputValue("food-input");
  const rentAmount = getInputValue("rent-input");
  const clothesAmount = getInputValue("clothes-input");
  if((foodAmount <= 0 || isNaN(foodAmount)) || (rentAmount <= 0 || isNaN(rentAmount)) || (clothesAmount <= 0 || isNaN(clothesAmount))){
    alert("Income must be typeof number and positive value");
  }
  const totalExpenseAmountText = totalExpenseInput.innerText;
  const totalExpenseAmount = parseFloat(totalExpenseAmountText);
  totalExpenseInput.innerText = foodAmount + rentAmount + clothesAmount;

  if (incomeAmount < totalExpenseInput.innerText) {
    alert("Income can not be less than expense value!!")
  }
  //   console.log(foodAmount);
// balance amount
  const balanceInput = document.getElementById("balance-input");
  const balanceAmountText = balanceInput.innerText;
  const balanceAmount = parseFloat(balanceAmountText);
  console.log(balanceAmount);
  balanceInput.innerText = incomeAmount - totalExpenseInput.innerText;
});

document.getElementById("save-button").addEventListener("click", function () {
  const saveAmount = getInputValue("save-input");
  const incomeAmount = getInputValue("income-input");
  if((saveAmount <= 0 || isNaN(saveAmount)) || (incomeAmount <= 0 || isNaN(incomeAmount))){
    alert("Amount must be typeof number and positive value");
  }
// save amount
  const savingAmountInput = document.getElementById("saving-amount");
  const savingAmountText = savingAmountInput.innerText;
  const savingAmount = parseFloat(savingAmountText);
  savingAmountInput.innerText = (incomeAmount * saveAmount) / 100;

  // total balance
  const balanceInput = document.getElementById("balance-input");
  const balanceAmountText = balanceInput.innerText;
  const balanceAmount = parseFloat(balanceAmountText);
  balanceInput.innerText = incomeAmount - totalExpenseInput.innerText;

  //   get remaining balance
  const remainingBalanceInput = document.getElementById("remaining-balance");
  const remainingBalanceText = remainingBalanceInput.innerText;
  const remainingBalance = parseFloat(remainingBalanceText);

  remainingBalanceInput.innerText =
    parseFloat(balanceAmount) - parseFloat(savingAmountInput.innerText);

    
  if(balanceInput.innerText < savingAmountInput.innerText){
    alert("your don't enough balance to save amount")
  }
});

