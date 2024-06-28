// primitive type

// const names = 4;
// names = 1;
// console.log(names);

//ref type 

// let name ='anant';
// let age = '30';
// person is a object 
// let person = {
    // // name:'anant',
    // age:'30',
// }
// dot notation
// person.name = 'anant'

// bracket notation - if the property that user is selecting is changing at runtime then we can access that property using bracket notation in a dynamic way
// let select = 'name'
// person[select] = 'anantggg'
// console.log(person.name);

// Array

// let SelectedColors = ['red','blue'];
// SelectedColors[2] = 1;
// console.log(SelectedColors.length);

//function

function greet(name){
    console.log('hey' + name);
}
// greet('anant');
// greet('anant gggg');

function square(number){
    return number * number;
}
let number = square(2)
console.log(number);
// here we are making 2 function calls which are square function and log function

