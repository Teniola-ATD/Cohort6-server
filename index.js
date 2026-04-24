// Step 1: Import the express module
const express = require('express');

// Step 2: Create an Express application instance
const application = express();  

const studentInfo = [
    { name:"Alice", age: 20, grade: "A" },
    { name: "Bob", age: 21, grade: "B" },
    { name: "Charlie", age: 22, grade: "C" }
];

application.get("/all-data", (req, res) => {
    res.json(studentInfo[0]);
});

//step 3: Define a route handler for Get request to /
application.get('/', (req, res) => {
    res.send('Hello World! Welcome to Express.js');
});

application.get("/about", (req, res) => {
    res.send("This is the about page");
});

application.get("/contact", (req, res) => {
    res.send("This is the contact page");
}
// Step 4: Start listening on port 3000
application.listen(3000, function() => {
    console.log( 'Server is up and running');
});
















//Get a single user by D
application.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id); 
    const user = users.find(el => el.id === id);

    if (user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
});     



application.list(prompt,()=>{
    console.log('server is listening on port 3000');
})