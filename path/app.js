const path = require('path')


const relativePath = path.join('documents', 'rapport.txt')
console.log(`chemin >> ${relativePath}\n`)

const absolutePath = path.resolve(relativePath)
console.log(`chemin absolu >> ${absolutePath}\n`)
console.log(`extension en .txt ? >> ${path.extname(absolutePath) !== 'txt'}\n`)

console.log(`nom du fichier >>' ${path.basename(absolutePath)}\n`)
console.log('détails :')

console.log(path.parse(absolutePath))
console.log(`chemin normalisé >> ${path.normalize(absolutePath)}\n`)