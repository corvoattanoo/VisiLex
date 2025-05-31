const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// CORS'u aç (Angular'dan gelen isteklere izin ver)
app.use(cors());

// Basit bir endpoint
app.get('/api/message', (req, res) => {
  res.json({ message: 'Merhaba Angular!' });
});

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
});
