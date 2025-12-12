const express = require('express');
const path = require('path');
const app = express();
const PORT = 3030;

// Serve static files from the "latest" directory
app.use(express.static(path.join(__dirname, 'latest')));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
