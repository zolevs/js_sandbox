function hello (name){
    console.log('---------');
    console.log('Hello  ' + name);
    console.log('---------');
}
// hello();

let a = hello;

console.log(a);
a('Zole');