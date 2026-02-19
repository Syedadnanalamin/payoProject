
let addMoneyBtn = document.getElementById("addmoneybtn");
let selectConainer = document.getElementById("selectcontainer");


addMoneyBtn.addEventListener("click", () => {
    let selectValue = selectConainer.value;
    let bankAccountNum = getValueFromInput("bank_num");
    let addedAmount = getValueFromInput("addedamount");
    let addPin = getValueFromInput("addpin");

    if (selectValue == "") {
        alert("Please select a bank account")
        return
    }

    if (bankAccountNum.length != 11) {

        alert("Please enter a correct number");
        return;
    }

    if (addPin != "1234") {
        alert("Pin is incorrect,try again")

    }



    let totalamountAdd = Number(addedAmount) + Number(presentBalance.innerText);
    presentBalance.innerText = totalamountAdd;

    alert("Transaction success")
    clearInput("bank_num");
    clearInput("addedamount");
    clearInput("addpin");
    clearInput("selectcontainer");




})


