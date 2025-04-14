import { mkdir, readdir, readFile, rmdir, unlink, writeFile } from 'fs'
import { join } from 'path';

const dirPath  = 'nouveau_repertoire';
const filePath = join(dirPath, 'nouveau_fichier.txt');

mkdir(dirPath, { recursive: true }, () => {});
writeFile(filePath, 'Contenu du fichier à écrire.', () => {});
readFile(filePath, 'utf8', (_, data) => { console.log(data.toString()) });
readdir(dirPath, (_, data) => data.forEach(file => console.log(`- ${file}`)));
unlink(filePath, () => {});
rmdir(dirPath, { recursive: true }, () => {});

/*
Votre fichier de lancement sera un fichier app.js. Créez un script dans votre package du nom de "start" pour pouvoir le lancer
Créez un fichier bookInfo.js avec un objet contenant des informations sur un livre.
Dans app.js, utilisez require() pour importer le module bookInfo.js.
Affichez les détails du livre dans la console en utilisant les propriétés de l'objet importé.
Exécutez app.js pour vérifier les résultats.
*/