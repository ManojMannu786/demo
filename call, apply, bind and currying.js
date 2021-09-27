obj = {num : 8};

//call
function add(a){
    return this.num + a;
}

console.log(add.call(obj,2));

//apply
arr = [1,2,3]
function subtract(x,y,z){
    return this.num-x;
}

console.log(subtract.apply(obj,arr))

//bind
let bound1 = add.bind(obj)
console.log(bound1(10))

let bound2 = subtract.bind(obj)
console.log(bound2(4,21,2))

student = {age : 20};
function printAge(){
    console.log(this.age)
}
printAge.bind(student)();

//currying
 let multiply = function(a,b){
     console.log(a*b);
 }
 
 //currying using bind
 let multiplyWith2 = multiply.bind(this , 2);
 multiplyWith2(5);

 let multiplyWith3 = multiply.bind(this , 3);
 multiplyWith3(5);

 //currying with clouser
 let adding = function (x){
     return function (y){
         console.log(x + y);
     }
 }

 let addingWith10 = adding(10);
 addingWith10(3);

 let addingWith50 = adding(50);
 addingWith50(3);