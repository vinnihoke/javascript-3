/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding will give you everything on the global scope because this is the default. Window would essentially be left of the function invocation. Using 'use strict' will not allow you to accidentally call the window object.
* 2. Implicit binding is setting this to anything left of the '.'. We'll be referring to what is left of the '.'
* 3. New binding is taking in a constructor function and is building a new object using the params. 
* 4. Explicit binding means we are passing attr or methods to a new object. We do this using .call, .apply, and .bind. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function windowBinding(){
	console.log(this);
}

windowBinding();

// Principle 2

// code example for Implicit Binding

var me = {
	name: "Vinni",
	sayName: function(){
		console.log(`Hello, my name is ${this.name}`);
	}
}

me.sayName();


// Principle 3

// code example for New Binding

function Fren(name, age, hobby){
	this.name = name;
	this.age = age;
	this.hobby = hobby;
}

const you = new Fren("Jonny", 28, "Apple Picking");

console.log(you);

// Principle 4

// code example for Explicit Binding

function Person(attr){
	this.name = attr.name;
	this.country = attr.country;
	this.legalDrinkingAge = attr.legalDrinkingAge;
}

Person.prototype.canDrink = function(){
	if(this.age >= this.legalDrinkingAge){
		return `${this.name} is old enough to drink in the ${this.country}`;
	} else {
		return `${this.name} is NOT old enough to drink in the ${this.country}`;
	}
};

function BritishPerson(attr){
	Person.call(this, attr);
	this.age = attr.age;
}

BritishPerson.prototype = Object.create(Person.prototype);


const david = new BritishPerson({
	name: "David",
	country: "UK",
	legalDrinkingAge: 18,
	age: 24,
});

console.log(david.canDrink());
console.log(david);


