import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Eagle Bank API!');
});

app.listen(port, () => {
  console.log(`Eagle Bank API server is running on port ${port}`);
});

app.use(express.json());


// Senario: Create a new bank account
app.post('/v1/accounts', (req, res) => {
  // Handle account creation logic here
  res.status(201).send('Account created successfully');
});