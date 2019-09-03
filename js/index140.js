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

let filtered = mutants.filter(function(mutant){
    return (mutant!='Magneto'&&mutant!='Iceman'&&mutant!='Gambit');
});

console.log(filtered);