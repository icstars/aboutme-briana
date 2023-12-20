function createUser(username, email, password) {
    return { username, email, password };
}


let users = [];

function addNewUser() {
    let username = prompt("Enter username:");
    if (!username) return; 

    let email = prompt("Enter email:");
    if (!email) return; 

    let password = prompt("Enter password:");
    if (!password) return; 

    let newUser = createUser(username, email, password);
    users.push(newUser);

    console.log("User added:", newUser);
}

function displayUser() {
    let username = prompt("Enter the username of the user you want to see:");
    if (!username) return; // Exit if no input is given

    let foundUser = users.find(user => user.username === username);

    if (foundUser) {
        alert("User found:\nUsername: " + foundUser.username + "\nEmail: " + foundUser.email);
    } else {
        alert("User not found.");
    }
}


do {
    addNewUser();
} while (confirm("Do you want to make another user?"));


do {
    displayUser();
} while (confirm("Do you want to see another user?"));