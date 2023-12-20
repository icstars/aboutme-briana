// Function to create a new user object
function createUser(username, email, password) {
    return { username, email, password };
}

// Array to store user objects
let users = [];

// Function to add a new user
function addNewUser() {
    // Prompting for user details
    let username = prompt("Enter username:");
    let email = prompt("Enter email:");
    let password = prompt("Enter password:");

    // Creating a new user object and adding it to the array
    let newUser = createUser(username, email, password);
    users.push(newUser);

    // Printing the array to the console
    console.log(users);
}

// Function to display a user's details
function displayUser() {
    let username = prompt("Enter the username of the user you want to see:");
    let foundUser = users.find(user => user.username === username);

    if (foundUser) {
        console.log(foundUser);
    } else {
        console.log("User not found.");
    }
}

// Main loop
while (true) {
    addNewUser();

    if (!confirm("Do you want to make another user?")) {
        if (confirm("Do you want to see a user?")) {
            displayUser();
        }
        break;
    }
}