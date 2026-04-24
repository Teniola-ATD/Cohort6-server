const express = require('express');

const application = express();

const port = 8000;
application.get('/', (req, res) => {
    res.send('server is up and running');
});

// Simulated in-memory database
const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
];


// Get all users
application.get('/users', (req, res) => {
    res.status(200).json(users);
});

//Get a single user by ID
application.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id); 
    const user = users.find(el => el.id === id);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
});


application.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
