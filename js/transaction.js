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
