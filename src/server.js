import express from 'express';
import path from 'path';
const app = express();
const port = 3000;
app.use(express.static(path.resolve('src/public')));
// app.get('/', (req, res) => {
//     const indexFile = path.resolve('dist/public/index.html');
//     fs.readFile(indexFile, 'utf8', (err, data) => {
//         if (err) {
//             console.error('Fehler beim Lesen der Datei:', err);
//             res.status(500).send('Interner Serverfehler');
//             return;
//         }
//         res.send(data);
//     });
// });
app.listen(port, () => {
    console.log(`Beispiel-App läuft auf Port ${port}`);
});
