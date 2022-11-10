const cors = require('cors');
const express = require('express');

const app = express();

app
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .get('/', (req, res) => res.send('<h1>Hello World!</h1>'))

app.listen(process.env.PORT || 3000, () => {
    console.log(new Date())
    console.log('Server is running...');
});