let biggerNumber = (firstNumber, secondNumber) => {
    if(typeof(firstNumber) != "number" || typeof(secondNumber) != "number"){
        console.log("Invalid input");
    }else{
        if(firstNumber>secondNumber)
            return `Number ${firstNumber} is bigger than ${secondNumber}`;
        else if(firstNumber<secondNumber)
            return `Number ${secondNumber} is bigger than ${firstNumber}`;
        else
            return `Both numbers are ${firstNumber}`;
    }
    
}

biggerNumber(3, 5);
biggerNumber(6, 3);
biggerNumber(2, 2);
