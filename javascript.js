
total = 0
var subtract = document.getElementsByClassName("sub")

function addItem(){
    document.getElementsByClassName("sub").disabled = false;
    total = total + 1
    document.getElementById("cart_items").innerHTML = total
}

function subtractItem(){
    if(total <= 0){
        document.getElementsByClassName("sub").disabled = true;
    }
    else if (total > 0){
        document.getElementsByClassName("sub").disabled = false;
        total = total - 1
    }

    document.getElementById("cart_items").innerHTML = total
}

