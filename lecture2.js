console.log("hello world from external file")
var age = 24;
console.log(age);

var number =12, number2 = 14;
console.log(number + number2);

age = "shan";
console.log(age);
//naming convention
//firstname, lastName , first_name, _firstname
//1. cannot start with number e.g. 1name
//cannot start with symbol e.g. @name
//2. spaces are not allowed
//FirstName is preveffered way
//scope of var is global
//if we use variable first and declare after then we will see the error of undefined
//let and const have local scope we can't acces them outside of block
if(true){
  var name = "shan";
  let agee = 24;
  const pie = 3.14;
}
console.log(name);
console.log(agee);
console.log(pie);
