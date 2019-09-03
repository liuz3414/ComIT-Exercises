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
    console.log("name: " + element.name);
    console.log("price: " + element.price);
    console.log("sold: " + element.sold);
    console.log("console: " + element.console + "\n\n");
});