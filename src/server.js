const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'gemini-intranet' });
});

// Start server only when not imported by tests
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Gemini Intranet running at http://localhost:${PORT}`);
  });
}

module.exports = app;
