const foodValue = {
    grass : 1,
    candy : 2,
    bread : 3,
    tofu : 4,
    meat : 5
}

const Tamagotchi = {
    name : 'Da Kine',
    weight : '8oz',
    age : '2 weeks',
    birthday : '03/04/1998',
    description : 'a cute lil guy',
    hungerLevel : 3,
    happinessLevel : 3,
    attentionLevel : 3,
    lifeStage : 'Baby', // Baby, Child, Teen, and Adult

    isHungry : function() {
        return this.hungerLevel < 3;
    },
    isHappy : function() {
        return this.happinessLevel > 3;
    },
    needsAttention : function() {
        return this.attentionLevel < 3;
    },

    eat : function(food) {
        this.hungerLevel += foodValue[food];
        console.log(`${this.name} ate the ${food}`)
    },

    play : function() {
        this.happinessLevel++;
        this.needsAttention = false;
        this.weight--;
        console.log(`You play with ${this.name}`);
    },

    speak : function() {
        let msg = `${this.name} `;
        this.isHungry() ? msg += "is hungry!" : 
        !this.isHappy() ? msg += "is sad!" :
        this.needsAttention() ? msg += "wants attention!" :
        msg += "is stoked.";
        console.log(msg);
    },
}

Tamagotchi.speak();

Tamagotchi.hungerLevel = 0;

Tamagotchi.speak();

Tamagotchi.eat('tofu');

Tamagotchi.speak();

Tamagotchi.play();

Tamagotchi.speak();