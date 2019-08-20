let even = (number) => {
    if(number %2 == 0)
        return true;
    else
        return false;
}

check(number) {
    if(even(number))
        console.log(number + " is even");
    else
        console.log(number + " is odd");
}

check(2);
check(5);
check(3);
check(24);
check(12);