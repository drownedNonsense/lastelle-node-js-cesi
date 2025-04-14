const readline = require('readline/promises')
const { stdin: input, stdout: output } = require('process');

const riddles = Object.entries({
    'Quel est la capitale de la France ?' : 'Paris',
    'Quel est le plus grand océan de la planète ?' : 'Pacifique',
    'Combien de continents y a-t-il sur Terre ?' : '6',
})

const rl = readline.createInterface({ input, output });

async function main() {

    var validResponseCount = 0

    console.log('Bienvenue au jeu de devinettes !')
    console.log('Répondez aux questions suivantes :')
    
    for (const [riddle, expectedAnswer] of riddles) {
        const answer = await rl.question(`\n${riddle} `);
        if (answer === expectedAnswer) {
            validResponseCount++
            console.log('Bonne réponse !')
        } else console.log('Mauvaise réponse...')
    }
    
    console.log(`Votre score : ${validResponseCount}/${riddles.length}`)   
}

main()