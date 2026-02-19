function getValueFromInput(id) {

    let inputValue = document.getElementById(id);
    return inputValue.value;

}

function clearInput(id) {
    document.getElementById(id).value = "";
}


// show and hide features


function showHide(id) {
    let addMoneySection = document.getElementById("admoneysection");
    let cashOutSection = document.getElementById("cashoutsection");

    addMoneySection.classList.add("hidden")
    cashOutSection.classList.add("hidden")
    let unHideSection = document.getElementById(id);
    unHideSection.classList.remove("hidden");

}
showHide();
