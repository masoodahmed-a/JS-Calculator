let outputScreen = document.getElementById("output")

function display(num){
    outputScreen.value += num
}
function calculate(){
    outputScreen.value = eval(outputScreen.value)
}
function clr() {
    outputScreen.value = ""
}

