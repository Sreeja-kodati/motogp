const express = require('express');       // 1️⃣ Import express
const router = express.Router();          // 2️⃣ Create a router instance

// 3️⃣ Define your route
router.get('/', (req, res) => {
  res.render('index', { title: 'moto gp' });  // render the index view
});

// 4️⃣ Export router so app.js can use it
module.exports = router;
