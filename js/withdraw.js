// ** Step-1 add event handler at the button click

document.getElementById('withdraw-button').addEventListener('click', function(){
    // ** Step-2 we'll grab the value from the withdraw input field

    const withdrawInputField = document.getElementById('withdraw');
    const withdrawInputValueString  = withdrawInputField.value;
    const withdrawInputValue = parseFloat(withdrawInputValueString);

    // ** NaN check

    if (isNaN( withdrawInputValue)) {
        alert('Please enter a valid value');
        withdrawInputField.value = '';
        return;
    }

    // ** Step-3 Now we'll grab the previous withdraw total 

    const previousWithdrawTotalField = document.getElementById('withdraw-total');
    const previousWithdrawTotalValueString = previousWithdrawTotalField.innerText;
    const previousWithdrawTotalValue = parseFloat(previousWithdrawTotalValueString);

    // ** Step-4 Now we'll add the inputValue and the previous withdraw total

    const totalWithdraw = withdrawInputValue + previousWithdrawTotalValue;



    // ** Step-6 Now we'll grab the previous balance field 

    const previousBalanceField = document.getElementById('balance-display');
    const previousBalanceValueString = previousBalanceField.innerText;
    const previousBalanceValue = parseFloat(previousBalanceValueString);

     // ** Validation 

     if (withdrawInputValue > previousBalanceValue ) {
        alert('Not Enough Money available');
        withdrawInputField.value = '';
        return;
    }
    
    // ** Step-5 Update the previous withdraw total field

    previousWithdrawTotalField.innerText = totalWithdraw;

    
    // ** Step-7 We'll set the new balance after withdraw

    const totalBalanceAfterWithdraw = previousBalanceValue - withdrawInputValue;


    // ** Step-8 We' set the new balance after withdraw

    previousBalanceField.innerText = totalBalanceAfterWithdraw;

    

    // ** last step -> clear the input field

    withdrawInputField.value = '';
})