function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

class Fighter {

    constructor(name) {
        this.name = name;
        this.health = 10;
        this.strength = 5 + getRandomInt(6);
        this.defense = 5 + getRandomInt(6);
    }

    attack(enemy) {
        let difference = this.strength - enemy.defense;
        let damage = 1;
        if (difference > 1) damage = difference;
        if (enemy.health - damage < 0) enemy.health = 0;
        else enemy.health -= damage;
        
        console.log(`${this.name} did ${damage} damage to ${enemy.name} who is left with ${enemy.health} health`);
    }
}

let jackie = new Fighter('Jackie Chan');
let tyson = new Fighter('Mike Tyson');

while (jackie.health > 0 && tyson.health > 0) {
    jackie.attack(tyson);
    if (tyson.health > 0) tyson.attack(jackie);
}

let winner = (tyson.health === 0) ? jackie : tyson;

console.log(`${winner.name} won the fight!`);