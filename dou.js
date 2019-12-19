 function paul_shake(action, selector) {
    var status = false;

    action.addEventListener("click", function () {
        if(status === true){
            status = false;
            action.innerHTML = "抖起来"
            selector.style = "overflow: auto;";
        }
        else{
            status = true;
            action.innerHTML = "停止抖"
            selector.style = "overflow: auto;animation: shake-it .5s reverse infinite cubic-bezier(0.68, -0.55, 0.27, 1.55)";
        }
    })
}