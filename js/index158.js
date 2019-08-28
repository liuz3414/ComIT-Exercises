const game1 = {
    name : "Call of duty",
    price : 80,
    sold : 100,
    console : "PC",
    showDetail: function(){
        console.log("name: " + this.name);
        console.log("price: " + this.price);
        console.log("sold: " + this.sold);
        console.log("console: " + this.console + "\n\n");
    }
};

const game2 = {
    name : "Uncharted 4",
    price : 40,
    sold : 100,
    console : "PS4",
    showDetail: function(){
        console.log("name: " + this.name);
        console.log("price: " + this.price);
        console.log("sold: " + this.sold);
        console.log("console: " + this.console + "\n\n");
    }
};

const game3 = {
    name : "Spiderman",
    price : 60,
    sold : 100,
    console : "XBox",
    showDetail: function(){
        console.log("name: " + this.name);
        console.log("price: " + this.price);
        console.log("sold: " + this.sold);
        console.log("console: " + this.console + "\n\n");
    }
};

let budget = 0;
let games = [game1, game2, game3];
let gameNames = [];
let gamePrices = [];

games.forEach(element => {
    budget += element.price;
    gameNames.push(element.name);
    gamePrices.push(element.price);
});

console.log(`I need ${budget} CAD to get all this PS$ great games!!`);
console.log(gameNames);
console.log(gamePrices);
