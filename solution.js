const now = new Date();
console.log(typeof now); //object
console.log(typeof Date);

console.log(now);
console.log(Date);
const test = new Date();

//1. now is an instance of class Date.
//2. now variable is the type object.
//3. Date is a class which acts as blueprint creating new objects.
//4. Date is the type function.
//5. if i console.log(now) i will receive an object with all properties inherited from class here it would be Date. it returns date!! it calls the function Date().

//6. if i console.log(date) it results in function date without invoking the function.
//7. console.log(new Date()); //calls the function Date and returns same value as variable now.
//8. yes now is truthy!!

//9.
console.log(now === test); //retusn false as the construtor of now is not test

//10.
console.log(now === Date); //returns false as the constructor of now is not Date function.

//11.
console.log(now === new Date()); //false

//12.
console.log(new Date() === new Date()); //false

console.log(now instanceof Date);
