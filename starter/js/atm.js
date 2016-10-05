//Begin with the document ready function
$(document).ready(function(){
  //On click of the depositChecking button
  $("#depositChecking").on("click", checkingDeposit);
  //On click of the withdrawChecking button
  $("#withdrawChecking").on('click', checkingWithdrawal);

  $("#depositSavings").on('click', savingsDeposit);

  $("#withdrawSavings").on('click', savingsWithdrawal);

})
    //Checking account deposit function
function checkingDeposit() {
  //Get value from the amountChecking input field
    var amt = +$('#amountChecking').val();
    //Take that value and add it to the existing value in the checkingBalance div
    var prevBalance = +$('#checkingBalance span').text();
    $('#checkingBalance span').text(amt + prevBalance);
    $('#amountChecking').val('');

}



    //Checking account withdrawl funtion
function checkingWithdrawal(x) {
  //Get value from the amountChecking input field
    var amt = +$('#amountChecking').val();
    var prevBalance = +$('#checkingBalance span').text();
    var savBal = +$('#savingsBalance span').text();
    // If that value is greater than the value in the account ignore that action
    // In other words if this would put the account into a negative balance do not allow it      console.log("insufficient funds");
    if (amt <= prevBalance) {
      $('#checkingBalance span').text(prevBalance - amt);

            //Else subtract that value from the current amount in the checking account
    } else if (amt <= prevBalance + savBal){
      $('#checkingBalance span').text('0');
      var newAmt = (prevBalance + savBal) - amt;
      $('#savingsBalance span').text(newAmt);

    } else {
      console.log('insufficient funds');
    }

    $('#amountChecking').val('');

}

function savingsDeposit() {
  var amt = +$('#amountSavings').val();
  var prevBalance = +$('#savingsBalance span').text();
  $('#savingsBalance span').text(amt + prevBalance);
  $('#amountSavings').val('');
}

function savingsWithdrawal() {
  var amt = +$('#amountSavings').val();
  var prevBalance = +$('#savingsBalance span').text();
  var cheBal = +$('#checkingBalance span').text();
  // If that value is greater than the value in the account ignore that action
  // In other words if this would put the account into a negative balance do not allow it      console.log("insufficient funds");
  if (amt <= prevBalance) {
    $('#savingsBalance span').text(prevBalance - amt);

          //Else subtract that value from the current amount in the checking account
  } else if (amt <= prevBalance + cheBal){
    $('#savingsBalance span').text('0');
    var newAmt = (prevBalance + cheBal) - amt;
    $('#checkingBalance span').text(newAmt);

  } else {
    console.log('insufficient funds');
  }

  $('#amountSavings').val('');
}





    //Savings account deposit function

      //On click of the depositSavings button

        //Get value from the amountSavings input field

        //Take that value and add it to the existing value in the savingsBalance div

    //Savings account withdraw funtion

      //On click of the withdrawl button

        //Get value from the amountSavings input field

         //If that value is greater than the value in the account ignore that action
         //In other words if this would put the account into a negative balance do not allow it

         //Else subtract that value from the current amount in the savings account

// Bonus-- get the two accounts to work with each other and allow for overdraft protection

// Double Bonus-- This isnt very DRY.  Using the keyword "this" see if you can make the withdraw and deposit functions work for both accounts
