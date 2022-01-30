// // constructor function
// function Person () {
//     this.name = 'John',
//     this.age = 23
// }

// // create an object
// const person1 = new Person();







// constructor function
function Person (person_name, person_age, person_gender) {

    // assigning  parameter values to the calling object
     this.name = person_name,
     this.age = person_age,
     this.gender = person_gender,
 
     this.greet = function () {
         return ('Hi' + ' ' + this.name);
     }
 }
 
 
 // creating objects
 const person1 = new Person('John', 23, 'male');
 const person2 = new Person('Sam', 25, 'female');
 
 // accessing properties
//  console.log(person1); // "John"
 console.log(person2.greet()); // "Sam"
 