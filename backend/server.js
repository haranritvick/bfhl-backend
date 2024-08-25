const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require('cors');
app.use(cors());


app.use(express.json());

app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    const userId = "jasmitha_pesala_10052004";
    const email = "jasmitha.21bce9754@vitapstudent.ac.in"; 
    const rollNumber = "21BCE9754"; 

    let numbers = [];
    let alphabets = [];
    let highestLowercase = '';

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (typeof item === 'string') {
            alphabets.push(item);
            if (item >= 'a' && item <= 'z' && item > highestLowercase) {
                highestLowercase = item;
            }
        }
    });

    res.json({
        is_success: true,
        user_id: userId,
        email: email,
        roll_number: rollNumber,
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
    });
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
