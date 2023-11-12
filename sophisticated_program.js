/*
 * Filename: sophisticated_program.js
 * Description: A sophisticated and elaborate program that showcases various features and concepts in JavaScript.
 */

// Global variable to hold the current date
var currentDate = new Date();

// Function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Class definition for a Book
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  getBookInfo() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
  }
}

// Array of books
var library = [
  new Book("The Great Gatsby", "F. Scott Fitzgerald", 180),
  new Book("To Kill a Mockingbird", "Harper Lee", 281),
  new Book("Pride and Prejudice", "Jane Austen", 432),
  new Book("1984", "George Orwell", 328),
  new Book("Moby-Dick", "Herman Melville", 635)
];

// Function to filter library books by author
function filterByAuthor(author) {
  return library.filter(book => book.author === author);
}

// Asynchronous function to fetch weather data
async function getWeatherData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
}

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Event listener for button click
document.querySelector("#myButton").addEventListener("click", function() {
  console.log("Button clicked!");
});

// Self-invoking function to display current date and time
(function() {
  console.log("Current Date and Time:", currentDate);
})();

// Function to check if a number is prime
function isPrime(num) {
  if (num === 2) {
    return true;
  } else if (num < 2 || num % 2 === 0) {
    return false;
  } else {
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}

// Example usage of various concepts and features
var num = 7;
console.log(num + " is" + (isPrime(num) ? " " : " not ") + "a prime number.");

console.log("Factorial of 6:", factorial(6));

console.log("Filtered books by author 'George Orwell':", filterByAuthor("George Orwell"));

console.log("Shuffled array:", shuffleArray([1, 2, 3, 4, 5]));

getWeatherData("https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=London")
  .then(data => {
    console.log("Weather Data:", data);
  })
  .catch(error => {
    console.log("Error:", error);
  });

// And many more lines of code...
// ...
// ... (continued)