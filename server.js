const express = require('express');
const multer  = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Cartella dove salvare i file caricati
const uploadDir = path.join(__dirname, 'files');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// Configura multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, file.originalname)
});
const upload = multer({ storage });

// Serve i file statici (html, css, js, ecc.)
app.use(express.static(__dirname));

// Endpoint upload
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).send('Nessun file caricato.');
  res.status(200).send('File caricato con successo!');
});

// (Opzionale) Serve i file caricati per il download
app.use('/files', express.static(uploadDir));

// Avvia il server
app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
});