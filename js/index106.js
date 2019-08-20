let getUserID = () => {
    return 50;
}

let isUserValid = () => {
    let val = getUserID();
    if(val > 30){
        return true;
    }else{
        return false;
    }
}

if(isUserValid()){
    console.log("User valid");
}else{
    console.log("User not valid");
}
