let names = ['Walter', 'Jesse', 'Skylar', 'Marie', 'Todd', 'Pete'];

let bool = names.includes('Toddy');
let log = console.log;

log(bool);

let pos = names.indexOf('Marie');
log(pos);

let some = names.some(function(name){
    if(name.indexOf('a') > -1) {
        return true;} 
    });

log(some);

let find = names.find((name)=> {
    if(name.length > 5){
        return name;
    }
})
log(find)


