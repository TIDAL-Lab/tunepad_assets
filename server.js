const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors')
const PORT = 3030;

app.use(cors())
app.use(express.static(path.join(__dirname, 'latest')));
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
