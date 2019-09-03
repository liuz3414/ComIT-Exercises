const player = {
    name : null,
    energy : 100,
    lives : 3,
    loseEnergy :function(damage){
        this.energy -= damage;
        if(this.energy < 0 && this.lives > 0){
            this.energy = 0;
            this.lives--;
        }
    },
    recoverEnergy :function(energyUp){
        this.energy += energyUp;
        if(this.energy > 100)
            this.energy -= energyUp;
    },
    loseLife :function(){
        this.lives -= 1;
    },
    recoverLife :function(){
        this.lives += 1;
        if(this.lives > 99)
            this.lives--;
    }
};

player.name = "Jason";
player.loseLife();
player.loseEnergy(10);
player.loseEnergy(5);
player.loseEnergy(15);
player.loseEnergy(20);
player.recoverEnergy(10);
player.loseEnergy(30);
player.loseEnergy(40);
player.loseLife();
player.recoverLife();
player.recoverLife();

console.log(`The ${player.name} has ${player.energy} energy and ${player.lives} lifes`);