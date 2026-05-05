const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // CodeSandbox needs this port

app.use(express.static('public')); // Or wherever your HTML files are

app.listen(port, () => {
  console.log(`Your proxy is live on port ${port}`);
});
