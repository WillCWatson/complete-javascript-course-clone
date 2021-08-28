// // // let js = "amazing";

// // // let math = 40+29+14-39
// // // console.log(math)

// // // let firstName = "Jonas";
// // // console.log(firstName);

// // // // variables work basically how I'd expect, use let to create them
// // // // this tutorial uses camel case variable names, so there's that
// // // // can't start variables with numbers, you'll get a syntax error
// // // // only a-Z, 0-9, _, and $ allowed in variabes.
// // // // don't use reserve keywords for variable names, even if you can.
// // // // capital first letter names are for objects and classes and stuff.
// // // // all caps used for constants
// // // // better to use descriptive variable names, e.g. not using variableName0 and variableName1

// // // //Data Types

// // // // all values are either objects or primitives
// // // // Number, basically floats and doubles, also used for ints
// // // // String, sequence of characters
// // // // boolean, true/false
// // // // undefined, for variables that have not been assigned a value
// // // // Null, an empty value
// // // // symbol, value that is unique and cannot be changed
// // // //      seems very useful for functional stuff
// // // // BigInt, another type for numbers, for really big ints

// // // // JS uses dynamic typing, such that only values have types, not variables.
// // // // variables can start as numbers and be assigned to strings at a later time.
// // // // could lead to difficult-to-find bugs

// // /*  
// //     multiline 
// //     comment
// // */

// // let javaScriptIsFun = true;
// // console.log(javaScriptIsFun);

// // console.log(typeof javaScriptIsFun);

// // javaScriptIsFun = "Yes";
// // console.log(typeof javaScriptIsFun);

// // // types change, as shown here.

// // // undefined variable testing
// // let year;
// // console.log(typeof year);

// // // DYNAMIC TYPING
// // year = 1991;
// // console.log(typeof year);

// // // This is a bug with typeof, will be addressed later
// // console.log(typeof null);

// // let, const, and var

// // let is the type of declaration you should use when variables need to change
// // const creates a constant value that cannot change
// // USE CONST UNLESS YOU'RE SURE THE VALUE NEEDS TO CHANGE
// // var is the old way of doing things, it has issues apparently

// // let
// // let is block-scoped
// let age = 30;
// age = 31;

// // const
// const birthYear = 1991;
// // immutable variable, using this for things that can't change is ideal

// // gives an error because there's no initial value
// // const job;
// // Best to have as few variable changes as possible

// // var
// // AVOID USING VAR
// var job = 'programmer';
// job = 'teacher';
// // Differences will be explained in section 7
// // var is function-scoped, never use this
// // let is the more normal way of doing things, var is the bad old JS way of doing things

// // this works, but don't use this
// // this creates a global variable, just don't do this.
// lastName = "Watson";


// Basic operators
// transform values

// arithmetic operators
// + - * / ** % 

const currentYear = 2021;
const ageJonas = currentYear - 1991;
const ageSarah = currentYear - 2018;
console.log( ageJonas, ageSarah);

console.log(ageSarah * 2, ageSarah / 2, ageSarah ** 3);
// ** is the "to the power of" operator

const firstName = "Jonas";
const lastName = "Scmedtmann";
console.log(firstName + " " +lastName);
// better way to do this, called "Template Strings"

// Assignment operators
let x = 10 + 5