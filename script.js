
function validation(){

    var user_name = document.getElementById("usr").value
    var password = document.getElementById("pass1").value
    var comfirm_password = document.getElementById("pass2").value
    var yob = document.getElementById("bday").value

    yob = parseInt(yob)
    var usr_l = user_name.length



    if(usr_l >= 8){
        alert("Username is too long (max 8 charectars)")
        return false
    }

    if(usr_l < 3){
        alert("Username is too short (min 3 charectars)")
        return false
    }

    if (password != comfirm_password){
       alert("PASSWORD IS INCORRECT")
       return false
    }

    if (yob > 2009){
        alert("You are too young to sighn up")
        return false
    }
    
}