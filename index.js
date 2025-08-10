const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello from the DevOps Git project!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
