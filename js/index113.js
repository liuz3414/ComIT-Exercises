let getShapePerimiter = (base, height) => {
    if(base > 100 || height > 100){
        console.log("The perimiter is to big");
    }else if(base==height){
        console.log("The perimiter is fine");
        return 4 * base;
    }else{
        console.log("The perimiter is fine");
        return 2 * (base + height);
    }
    
}