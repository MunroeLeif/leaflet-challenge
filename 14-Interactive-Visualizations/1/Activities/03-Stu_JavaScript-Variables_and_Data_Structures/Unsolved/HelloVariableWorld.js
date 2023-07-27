// Create a variable called 'name' that holds your name in a string
let name = 'Leif Munroe'
// Create another variable called 'title' using a string template to say "<your name>'s First Plotly Chart"
let title = `${name}'s First Plotly Chart`;
// Create an array called 'books' of your favorite book titles
let books = ['Lord of the Rings', 'Inheritance Cycle', 'Cloud Atlas'];
// Create another array called 'timesRead' of how many times you've read each respective book
let timesRead = [10,16,3]
// Create a JavaScript object called 'myData' with four key-value pairs
// 1. name
// 2. favoriteBooks
// 3. timesRead
// 4. age

let myData = {
    name:name,
    favoriteBook:books,
    timesRead:timesRead,
    age:28
};

// use console.log() to print 'myData' to the console. Explore the output in the Chrome Console

console.log(myData);

// BONUS: in 'myData', consolidate the 'favoriteBooks' and 'timesRead' into one key called 'books' where the value is
// another javascript object, with keys 'titles' and 'timesRead'. 

myData = {
    name:name,
    books:{
        titles:books,
        timesRead:timesRead
    },
    age: 30
};
console.log(myData)