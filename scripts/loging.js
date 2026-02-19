let correctNum = "01605394419";
let correctPin = "1234";

let inputNum = document.getElementById("num");
let inputPin = document.getElementById("pin");
let form_Btn = document.getElementById("form_btn");

form_Btn.addEventListener("click", function () {
    if (correctNum == inputNum.value && correctPin == inputPin.value) {
        alert("loging success");
        window.location.assign("home.html")
    }
    else {

        alert("loging failed")
    }

});
