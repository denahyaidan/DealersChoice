const express = require('express');
const app = express();
const db = require('./database');

const PORT = 3000;

app.listen(process.env.PORT || 3000);

app.get('/', (req, res, next) => {
    res.send(`<html>
    <h1> Choose your Pokemon! </h1>
    <ul>
    ${db.map((data)=> {
        return `
        <li> 
        <a href=/pokemon/${data.PokemonId}>
        ${data.Name} 
        </a>
        </li>
        `
    }).join('')}
    </ul>
    </html>
    `);
})

app.get('/pokemon/:id', (req, res, next) => {
        const id = req.params.id - 1
        const data = db[id]
        res.send(`<html>
        <h1> ${data.Name} </h1>
        <h2> ${data.Description} </h2>
        <input type="button" onclick="window.location.href='/';" value="Back to Home" />
        </html>
        `)
        }
) 