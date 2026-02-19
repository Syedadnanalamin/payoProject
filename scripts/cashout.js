let cashoutBtn = document.getElementById("cashoutbutton");
let presentBalance = document.getElementById("balance");
cashoutBtn.addEventListener("click", () => {

    let agentNum = getValueFromInput("agentnum");
    if (agentNum.length !== 11) {
        alert("Number is invalid")
        return;
    }
    let cashoutBalance = getValueFromInput("cashout_amount");
    let updatedBalance = Number(presentBalance.innerText) - Number(cashoutBalance);

    if (updatedBalance < 0) {
        alert("insufficiant amount")
        return;
    }
    let userPin = getValueFromInput("user_pin");
    if (userPin != 1234) {
        alert("Pin entered wrong,try again!")
        return;
    }

    presentBalance.innerText = updatedBalance;
    alert("Transaction success")
    clearInput("agentnum");
    clearInput("cashout_amount");
    clearInput("user_pin");

})