let user  = {
    name : "Jason",
    username : "batman",
    password : "Alfred1960ROCKS!"
};

function shouldOpenBatCave(username, password){
    if(username=="batman" && password=="Alfred1960KPO!")
        return true;
    else
        return false;
}

if(shouldOpenBatCave(user.name, user.password)){
    console.log("Welcome back batman!!");
}else{
    console.log("Sorry, you can't enter the Batcave, try again..");
}
