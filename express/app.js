const express = require('express')

const app = express();
const NAME  = 'Express2000'
const PORT  = process.env.PORT || 3000
const INDEX = '/bienvenue'

function redirectHome(_, res) {
    res.redirect(INDEX)
}

app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`)
})

app.get(INDEX, (_, res) => {
    res.send(`
        <h1>Bienvenue sur ${NAME}!</h1>
        <ul>
            <li><a href="/info">Info</li>
            <li><a href="/acces-interdit">Accès interdit</li>
        </ul>
    `)
})

app.get('/info', (_, res) => {
    res.json({
        name: 'John Doe',
        age: 33,
        email: 'john.doe@gmail.com'
    })
})

app.get('/acces-interdit', (_, res) => {
    res.status(401).send()
})

app.get('/redirection-accueil', redirectHome)
app.get(/(.*)/, redirectHome)
