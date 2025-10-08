const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2");

app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "khemnak1530",
  database: "halcyon_internal",
});

app.post("/verifyUser", (req, res) => {
  const { username, password } = req.body;
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
