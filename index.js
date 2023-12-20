
function createUser(username, email, password) {
    return { username, email, password };
}

let users = [];

function addNewUser() {
    let username = prompt("Enter username:");
    let email = prompt("Enter email:");
    let password = prompt("Enter password:");

    let newUser = createUser(username, email, password);
    users.push(newUser);

    console.log("User added. Current users:", users);
}

function displayUser() {
    let username = prompt("Enter the username of the user you want to see:");
    console.log("Searching for user:", username);

    let foundUser = users.find(user => user.username === username);

    if (foundUser) {
        console.log("User found:", foundUser);
    } else {
        console.log("User not found.");
    }
}

do {
    addNewUser();
} while (confirm("Do you want to make another user?"));

if (confirm("Do you want to see a user?")) {
    displayUser();
}