const user = {
    username : null,
    password : null,
    greet : ()=>{
        if(username != null){
            console.log("Hello, I'm user %username%");
        }else{
            console.log("Please assign a username value");
        }
    },
    updatePassword : (word)=>{ password = word; },
    updaterUsername : (name)=>{ username = name; }
};

user.greet();
user.updatePassword("word");
user.updaterUsername("name");
user.greet
