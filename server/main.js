import {Players} from './../imports/api/players';

import {Meteor} from 'meteor/meteor';

Meteor.startup(() => {

  let obj = {
    name: 'Andrew',
    printName() {
      console.log(`Name: ${this.name}`);
    }
  }


  setTimeout(obj.printName.bind(obj), 1000);
obj.printName();

  // class Person {
  //   constructor(name = 'Anonymous', age = 0) {
  //     this.name = name;
  //     this.age = age
  //   }
  //
  //   getGreeting() {
  //     return `Hi! I am ${this.name}.`;
  //   }
  //
  //   getPersonDescription() {
  //     return `${this.name} is ${this.age} year(s) old`;
  //   }
  //
  // };
  //
  // class Employee extends Person {
  //   constructor(name, age, title) {
  //     super(name, age);
  //     this.title = title;
  //   }
  //
  //   hasJob() {
  //     return !!this.title
  //   }
  //
  //   getGreeting() {
  //     if(this.hasJob()) {
  //     return `Hi! I am ${this.name}.  I work as a ${this.title}.`;
  //   } else {
  //     return super.getGreeting();
  //   }
  //   }
  // };
  //
  // class Programmer extends Person {
  //   constructor(name, age, preferredLanguage = 'JavaScript') {
  //     super(name, age);
  //     this.preferredLanguage = preferredLanguage;
  //   }
  //
  //   getGreeting() {
  //     return super.getGreeting() + `  I am a ${this.preferredLanguage} developer.`;
  //   }
  // }
  //
  //
  // let mep = new Programmer('Mike', 25, 'Java');
  // console.log(mep.getGreeting());
  //
  //
  // let me = new Employee('Mike', 25, 'db admin');
  // console.log(me.getGreeting());
  // console.log(me.hasJob());
  //
  // let person = new Employee('Andrew');
  // console.log(person.getPersonDescription());
  // console.log(person.hasJob());
  // console.log(person.getGreeting());
  // Players.insert({
  //   name: 'Fred',
  //   score: 33
  // });

 //  console.log(Players.find().fetch());
 //
 // let numbers = [9, 99, 4, 56];
 //
 // let newNumbers = numbers.map((number) => number + 1);
 //
 // console.log(newNumbers);
});

// Object Spread Operator
// let user = {
//   name: 'Andrew',
//   location: 'Philadelphia',
//   age: 0
// };
//
// let person = {
//   age: 25,
//   ...user
// };
//
// // console.log(person);
//
// // Object Property Shorthand
// let bike = 'Scott';
// let stuff = {
//   bike,
//   laptop: 'Mac'
// };
//
// // console.log(stuff);
//
// let house = {
//   bedrooms: 2,
//   bathrooms: 1.5
// };
//
// let yearBuilt = 1995;
//
// let home = {
//   ...house,
//   bedrooms: 3,
//   yearBuilt,
//   flooring: 'Carpet'
// };
// console.log(home);


//import './../imports/utils';

// import {greetUser} from './../imports/utils';
// import add from './../imports/math';
//
//
// console.log('log from /server/main.js');
//
// console.log(greetUser());
// console.log(add(3,5));
// import { Meteor } from 'meteor/meteor';
//
// Meteor.startup(() => {
//   // code to run on server at startup
// });
