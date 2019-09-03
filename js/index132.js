let mutants = [
    'Professor X'
    ,'Cyclops'
    ,'Iceman'
    ,'Angel'
    ,'Beast'
    ,'Phoenix'
    ,'Logan'
];

if(mutants.indexOf('Logan') >= 0 &&
    mutants.indexOf('Professor X') >= 0){
    console.log("We love X-Men");
}
if(mutants.indexOf('Gambit') < 0){
    console.log("X-Men sucks");
}