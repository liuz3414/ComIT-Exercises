const number = {
    value : 100,
    add : (num1, num2)=>{
        if(typeof(num1)!="number"||typeof(num2)!="number")
            console.log("Wrong type of input.");
        else
            console.log(num1+num2);
    },
    subtract : (num1, num2)=>{
        if(typeof(num1)!="number"||typeof(num2)!="number")
            console.log("Wrong type of input.");
        else
            console.log(num1-num2);
    },
    multiply : (num1, num2)=>{
        if(typeof(num1)!="number"||typeof(num2)!="number")
            console.log("Wrong type of input.");
        else
            console.log(num1*num2);
    },
    divide : (num1, num2)=>{
        if(typeof(num1)!="number"||typeof(num2)!="number")
            console.log("Wrong type of input.");
        else
            console.log(num1/num2);
    },
    remainder : (num1, num2)=>{
        if(typeof(num1)!="number"||typeof(num2)!="number")
            console.log("Wrong type of input.");
        else
            console.log(num1%num2);
    }
};

number.add(2, 10);
number.subtract(10, 5);
number.multiply(3, 100);
number.divide(40, 2);
number.remainder(20, 2);