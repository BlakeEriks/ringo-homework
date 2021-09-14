

class BasicHost {

    methods = []

    constructor(name, occupation) {
        this.name = name;
        this.occupation = occupation;
        this.empathy = getRandomInt(20);
        this.loyalty = getRandomInt(20);
        this.aggression = getRandomInt(20);
        this.curiosity = getRandomInt(20);
        this.bulkApperception = getRandomInt(20);
    }

    addMethod(method) {
        this.methods.push(method);
    }

    saySpecs() {
        console.log(`I am ${this.name} and I am a ${this.occupation}`)
    }

}

const names = [
    "Laila", "Jack", "Harley", "Hertha", "Darren", "Jolene", 
"Loura", "Lona", "Davida", "Reena", "Leland", "Ta", "Jen", 
"Linn", "Roslyn", "Margorie", "Rafaela", "Romona", "Shanel", "Stan"
];

const occupations = [
    "Clerical assistant", "Leaflet distributor", "Landowner",
"Special constable", "Anaesthetist", "Park-keeper", "Butler",
"Choreographer", "Blacksmith", "Chef", "Legal secretary",
"Song writer", "Librarian", "Landscape gardener"
   ];

hostArray = [];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

for (let i = 0; i < 100; i++) {
    hostArray.push(new BasicHost(
        names[getRandomInt(names.length)],
        occupations[getRandomInt(occupations.length)]));
    hostArray[i].saySpecs();
}



