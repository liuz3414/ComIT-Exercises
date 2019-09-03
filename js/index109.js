let validateUser = (username, password) => {
    if((username=="nacho" && password=="Nerd1979")||
        (username=="pedro" && password=="Batman0217")||
        (username=="marta" && password=="Mother2312")){
        return true;
    }
}

if(validateUser("nacho", "Nerd1979")){
    console.log(`Welcome ${username}, nice to see you again`);
}else{
    console.log("Please input valid credentials");
}

if(validateUser("naho", "Nerd979")){
    console.log(`Welcome ${username}, nice to see you again`);
}else{
    console.log("Please input valid credentials");
}