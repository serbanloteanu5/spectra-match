/* 
   File name: advancedWebsite.js
   Description: This code is an advanced website example showcasing various JavaScript concepts.
*/

// Global variables
const navItems = document.querySelectorAll('.nav-item');
const mainContent = document.querySelector('.main-content');

// Function to load content based on navigation item clicked
function loadContent(content) {
  fetch(`/api/${content}`)
    .then(response => response.json())
    .then(data => {
      mainContent.innerHTML = `<h1>${data.title}</h1>`;
      data.items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        mainContent.appendChild(listItem);
      });
    });
}

// Event listener for navigation items
navItems.forEach(navItem => {
  navItem.addEventListener('click', () => {
    const content = navItem.dataset.content;
    loadContent(content);
  });
});

// Class representing a user
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  displayUserInfo() {
    console.log(`User: ${this.name}, Email: ${this.email}`);
  }
}

// Class representing an admin user
class Admin extends User {
  constructor(name, email, role) {
    super(name, email);
    this.role = role;
  }

  displayUserInfo() {
    super.displayUserInfo();
    console.log(`Role: ${this.role}`);
  }
}

// Array of users
const users = [
  new User('John Doe', 'john@example.com'),
  new Admin('Jane Smith', 'jane@example.com', 'Super Admin'),
  new User('Mike Johnson', 'mike@example.com')
];

// Display user information
users.forEach(user => {
  user.displayUserInfo();
});

// Function to calculate the factorial of a number
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Output: 120

// Complex mathematical expression
const result = (Math.sin(30) + Math.cos(45)) * Math.pow(2, 3) + Math.sqrt(25);
console.log(result); // Output: 10.987688340595137

// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

// Complex conditional statement
let largeNumber;
if (randomNumber > 50) {
  largeNumber = true;
} else {
  largeNumber = false;
}

console.log(largeNumber);