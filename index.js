const express = require('express');
const fs = require('fs');

const app = express();

const port = process.env.PORT || 3000;

app.listen(port);
console.log('Server started at http://localhost:' + port);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './pages/home.html'));
});

app.get('/first_xss', (req, res) => {
    let userInput = req.query.name || 'Dany !';

    // Comment or uncomment here to test the first xss type
    // userInput = userInput.replace(">", "").replace("<", "");

    // Comment or uncomment here to test the second xss type
    userInput = userInput.replaceAll(">", "").replaceAll("<", "");

    fs.readFile('pages/first_xss.html', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Erreur lors de la lecture du fichier externe.');
            return;
        }

        const modifiedData = data.replace('{input}', `${userInput}`);

        res.send(modifiedData);
    });
});