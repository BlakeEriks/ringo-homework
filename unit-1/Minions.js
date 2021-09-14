const minions = [
    "bob",
    "kevin",
    "stuart",
    "dave",
    "jerry",
    "mark",
    "tim",
    "phil",
    "carl",
];

const isCapitalized = minion => {
    return minion.charAt(0) === minion.charAt(0).toUpperCase();
}

// Print minions names with foreach
console.log('Minion names: ')

// Print all the minion names
minions.forEach(minion => console.log('-' + minion));

// Capitalize first letter of each minion name exception kevin
const capitalizedMinions = minions.map(minion => {
    if (minion !== 'kevin') {
        minion = minion.charAt(0).toUpperCase() + minion.slice(1);
    }
    return minion;
});

// Filter out kevin because his first letter isn't capitalized
const actuallyCapitalizedMinions = capitalizedMinions.filter(minion => minion.charAt(0) === minion.charAt(0).toUpperCase());

// Test if every minion in 'actuallyCapitalizedMinions' array has a capitalized first letter
const isEveryCapitalized = actuallyCapitalizedMinions.every(minion => isCapitalized(minion));

// Find which minion has an uncapitalized first letter in 'capitalizedMinions' (its kevin)
const uncapitalizedMinion = capitalizedMinions.find(minion => !isCapitalized(minion));
console.log('\nThe Uncapitalized Minion Is: ' + uncapitalizedMinion);

// Find index of minion with uncapitalized first letter in 'capitalizedMinions'
const uncapitalizedMinionIndex = capitalizedMinions.findIndex(minion => minion === uncapitalizedMinion);
console.log('\nThe Uncapitalized Minion Index: ' + uncapitalizedMinionIndex);

// Capitalize first letter of kevin's name in 'capitalizedMinions' array
capitalizedMinions[uncapitalizedMinionIndex] = capitalizedMinions[uncapitalizedMinionIndex].charAt(0).toUpperCase() + capitalizedMinions[uncapitalizedMinionIndex].slice(1);

// Test if every minion has a capitalized first letter
const isEveryCapitalized2 = actuallyCapitalizedMinions.every(minion => isCapitalized(minion));
console.log('\nIs Every Minion Capitalized Now? ' + (isEveryCapitalized2 ? 'Yes' : 'No'));

// Get name length sum of all minions
const minionNameLengthSum = minions.reduce( (acc, minion) => {return acc + minion.length}, 0)
console.log('\nSum of all minion name lengths: ' + minionNameLengthSum);

// Test if any minion has a name length of 6 or above
const sixOrAbove = minions.some(minion => minion.length >= 6);
console.log('\nAre there any minions with names length 6 of above? ' + (sixOrAbove ? 'Yes' : 'No')); 

// Test if any minion has a name length of 7 or above
const sevenOrAbove = minions.some(minion => minion.length >= 7);
console.log('\nAre there any minions with names length 7 of above? ' + (sevenOrAbove ? 'Yes' : 'No'));

// De-capitalize the first letter of kevin's name in 'capitalizedMinions'
capitalizedMinions[uncapitalizedMinionIndex] = capitalizedMinions[uncapitalizedMinionIndex].charAt(0).toLowerCase() + capitalizedMinions[uncapitalizedMinionIndex].slice(1);
console.log('\nWe just lowercased kevins name again');

// Test if some of the minions names are capitalized
const someCapitalized = capitalizedMinions.some(minion => isCapitalized(minion));
console.log('\nAre there some minion(s) with capital first letter? ' + (someCapitalized ? 'Yes' : 'No'));

// Test if some of the minions names are lowercased
const someLowercased = capitalizedMinions.some(minion => !isCapitalized(minion));
console.log('\nAre there some minion(s) with lowercase first letter? ' + (someLowercased ? 'Yes' : 'No'));

// Sort the minions by name length
console.log('\nMinions sorted by name length: ')
const sortedMinionsByNameLength = minions.sort( (minionA, minionB) => minionA.length - minionB.length);
console.log(sortedMinionsByNameLength);