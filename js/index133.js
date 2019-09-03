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

let stop = false;
for(let i = 0; i < mutants.length && !stop; i++){
    console.log(mutants[i]);
    if(mutants[i] == 'Magneto')
        stop = true;
}

let index = mutants.indexOf('Magneto');
if (index !== -1) {
    mutants.splice(index, 1);
}

for(let i = 0; i < mutants.length; i++){
    console.log(mutants[i].toUpperCase() + ", position: " + (i+1));
}