const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('DevSecOps Pipeline Target App Running!');
});

// INTENTIONALLY VULNERABLE ENDPOINT FOR CODEQL TO CATCH
app.get('/greet', (req, res) => {
    // This is a Cross-Site Scripting (XSS) vulnerability.
    // It takes untrusted user input (name) and renders it directly as HTML.
    res.send(`<h1>Hello, ${req.query.name}</h1>`); 
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
