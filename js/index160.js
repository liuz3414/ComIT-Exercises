let propertiesNames = ["name", "price", "sold", "console"];

const game1 = {
    name : "Call of duty",
    price : 80,
    sold : 100,
    console : "PC"
};

const game2 = {
    name : "Uncharted 4",
    price : 40,
    sold : 100,
    console : "PS4"
};

const game3 = {
    name : "Spiderman",
    price : 60,
    sold : 100,
    console : "XBox"
};

let games = [game1, game2, game3];

games.forEach(element => {
    console.log("name: " + element[propertiesNames[0]]);
    console.log("price: " + element[propertiesNames[1]]);
    console.log("sold: " + element[propertiesNames[2]]);
    console.log("console: " + element[propertiesNames[3]] + "\n\n");
});