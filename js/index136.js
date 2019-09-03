let mutants = [
    'Professor X'
    ,'Cyclops'
    ,'Iceman'
    ,'Angel'
    ,'Magneto'
    ,'Beast'
    ,'Phoenix'
    ,'Logan'
    ,'Gambit'
];

let result = [];

mutants.forEach(iterate = (mutants) => {
    if(mutants == 'Iceman'||mutants == 'Phoenix'||mutants == 'Logan')
        result.push(mutants);
});

console.log(result.join(" "));