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

let games = [game1, game2, game3];

games.forEach(element => {
    element.showDetail();
});