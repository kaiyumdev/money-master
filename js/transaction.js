//get input value
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  // clear input field
  inputField.value = "";
  return amountValue;
}
const totalExpenseInput = document.getElementById("total-expense");

document.getElementById("calculate").addEventListener("click", function () {
  const foodAmount = getInputValue("food-input");
  const rentAmount = getInputValue("rent-input");
  const clothesAmount = getInputValue("clothes-input");
  const incomeAmount = getInputValue("income-input");
  
 
  
  const totalExpenseAmountText = totalExpenseInput.innerText;
  const totalExpenseAmount = parseFloat(totalExpenseAmountText);
  totalExpenseInput.innerText = foodAmount + rentAmount + clothesAmount;
  //   console.log(foodAmount);

  const balanceInput = document.getElementById("balance-input");
  const balanceAmountText = balanceInput.innerText;
  const balanceAmount = parseFloat(balanceAmountText);
  console.log(balanceAmount);
  balanceInput.innerText = (incomeAmount) - (totalExpenseInput.innerText);
  //   console.log(foodAmount);

  //   const balanceTotal = incomeAmount - totalExpenseInput.innerText;
});

document.getElementById("save-button").addEventListener("click", function () {
  const saveAmount = getInputValue("save-input");
  const incomeAmount = getInputValue("income-input");


  const savingAmountInput = document.getElementById("saving-amount");
  const savingAmountText = savingAmountInput.innerText;
  const savingAmount = parseFloat(savingAmountText);
  savingAmountInput.innerText = (incomeAmount * saveAmount) / 100;

  const balanceInput = document.getElementById("balance-input");
  const balanceAmountText = balanceInput.innerText;
  const balanceAmount = parseFloat(balanceAmountText);
  balanceInput.innerText = incomeAmount - totalExpenseInput.innerText;
  //   get remaining balance
  const remainingBalanceInput = document.getElementById("remaining-balance");
  const remainingBalanceText = remainingBalanceInput.innerText;
  const remainingBalance = parseFloat(remainingBalanceText);
  // console.log(balanceAmountText);
  // console.log(savingAmountText);
  // console.log(savingAmountInput);
  remainingBalanceInput.innerText =
   parseFloat(balanceAmount) - parseFloat(savingAmountInput.innerText);
});


// first

// function updateTotalField(totalFieldId, amount) {

//   const totalExpenseInput = document.getElementById(totalFieldId);
//   const totalExpenseAmountText = totalExpenseInput.innerText;
//   const totalExpenseAmount = parseFloat(totalExpenseAmountText);
//   totalExpenseInput.innerText = totalExpenseAmount + amount;
// }
// update expense field
// function updateExpenseField(expenseFieldId, amount) {
//   const expenseElement = document.getElementById(totalFieldId);
//   const expenseText = expenseElement.innerText;
//   const expenseTotal = parseFloat(expenseText);

//   expenseElement.innerText = expenseTotal + amount;

  // const totalExpenseInput = document.getElementById("total-expense");
  // const totalExpenseAmountText = totalExpenseInput.innerText;
  // const totalExpenseAmount = parseFloat(totalExpenseAmountText);
  // totalExpenseInput.innerText = foodAmount + rentAmount + clothesAmount;

  // second
    // if (depositAmount > 0) {
  //   updateTotalField("deposit-total", depositAmount);
  //   // updateBalance(depositAmount, true);
  // }
  // const foodInput = document.getElementById("food-input");
  // const foodAmountText = foodInput.value;
  // const foodAmount = parseFloat(foodAmountText);
  //   console.log(foodAmount);

  // const rentInput = document.getElementById("rent-input");
  // const rentAmountText = rentInput.value;
  // const rentAmount = parseFloat(rentAmountText);
  //   console.log(foodAmount);

  // const clothesInput = document.getElementById("clothes-input");
  // const clothesAmountText = clothesInput.value;
  // const clothesAmount = parseFloat(clothesAmountText);
  //   console.log(foodAmount);

  // third
  // const incomeInput = document.getElementById("income-input");
  // const incomeAmountText = incomeInput.value;
  // const incomeAmount = parseFloat(incomeAmountText);
  //   console.log(foodAmount);

  // fourth

    // const saveInput = document.getElementById("save-input");
  // const saveAmountText = saveInput.value;
  // const saveAmount = parseFloat(saveAmountText);
  // //   console.log(foodAmount);
  // const incomeInput = document.getElementById("income-input");
  // const incomeAmountText = incomeInput.value;
  // const incomeAmount = parseFloat(incomeAmountText);
  //   console.log(incomeAmount);
  // get saving amount