// ** Click hobe jekhane event handler hobe se khane

// ** Step-1 deposit button event handler added
document.getElementById('deposit-button').addEventListener('click', function(){
    // console.log('Deposit button clicked')
    // ** here we'll grab the value from the Amount input field
   
    const newAmountField = document.getElementById('deposite');
    const newAmountString = newAmountField.value;
    const newAmount = parseFloat(newAmountString);

    const previousDepositAmountField = document.getElementById('deposite-total');
    const previousAmountString = previousDepositAmountField.innerText;
    const previousAmount = parseFloat(previousAmountString);

    const totalDisplayAmount = newAmount + previousAmount;

    previousDepositAmountField.innerText = totalDisplayAmount;

    // Grab the balance field and innerText

    const balanceAmountField = document.getElementById('balance-display');
    const balanceAmountString = balanceAmountField.innerText;
    const PreviousbalanceAmount = parseFloat(balanceAmountString);

    // New total balance amount

    const totalBalance = PreviousbalanceAmount + newAmount;

    balanceAmountField.innerText = totalBalance;


    // Value clear

    newAmountField.value = '';
    
})