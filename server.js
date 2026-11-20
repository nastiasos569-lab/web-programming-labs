const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const publicDir = path.join(__dirname, 'public');

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="uk">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Адаптивна розмітка — Роути</title>
      <style>
        body {
          font-family: system-ui, -apple-system, sans-serif;
          max-width: 640px;
          margin: 48px auto;
          padding: 0 20px;
          line-height: 1.6;
        }
        h1 { margin-bottom: 16px; }
        ul { list-style: none; padding: 0; }
        li { margin-bottom: 10px; }
        a {
          display: inline-block;
          padding: 10px 16px;
          background: #5894d2;
          color: #fff;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 500;
        }
        a:hover { background: #4279b5; }
      </style>
    </head>
    <body>
      <h1>Завдання 1 — Адаптивна розмітка</h1>
      <ul>
        <li><a href="/float">1. Float</a></li>
        <li><a href="/flexbox">2. Flexbox</a></li>
        <li><a href="/grid">3. Grid Layout</a></li>
      </ul>
    </body>
    </html>
  `);
});

app.get('/float', (req, res) => {
  res.sendFile(path.join(publicDir, 'float.html'));
});

app.get('/flexbox', (req, res) => {
  res.sendFile(path.join(publicDir, 'flexbox.html'));
});

app.get('/grid', (req, res) => {
  res.sendFile(path.join(publicDir, 'grid.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});