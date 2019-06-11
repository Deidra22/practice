function validInput(){
    let form = document.forms["accountForm"].value;
    if (form == ""){
        alert("Input all sections");
        return false;
    }else{
        alert("Win!");
    }
}