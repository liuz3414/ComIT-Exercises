let getHexaColor = (color) => {
    if(color == "white"){
        return "#FFFFFF";
    }else if(color == "black"){
        return "#000000";
    }else if(color == "blue"){
        return "#0b24fb";
    }else if(color == "green"){
        return "#0e7e12";
    }else if(color == "yellow"){
        return "#fffd38";
    }else if(color == "pink"){
        return "#fec1cc";
    }
}

console.log(getHexaColor("white"));