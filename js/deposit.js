// ** Click hobe jekhane event handler hobe se khane

// ** Step-1 deposit button event handler added
document.getElementById('deposit-button').addEventListener('click', function(){
    // console.log('Deposit button clicked')
    // ** here we'll grab the value from the Amount input field
   
    const depositField = document.getElementById('deposite');
    const deposit = depositField.value;

    const depositTotalElement = document.getElementById('deposite-total');
    const depositTotal = depositTotalElement.innerText;

    depositTotalElement.innerText = deposit;

    
})