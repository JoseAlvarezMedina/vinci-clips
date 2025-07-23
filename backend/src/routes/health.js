// backend/src/routes/health.ts
// Simple health endpoint so Docker (and humans) can quickly verify the API is up.
// It avoids touching heavy deps (DB/LLM) to stay fast and reliable.

const { Router } = require('express');
const router = Router();

router.get('/', (_req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

module.exports = router;
