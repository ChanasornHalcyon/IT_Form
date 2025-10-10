require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express();
app.use(cors());
app.use(express.json());

let db;
const initMySQL = async () => {
  db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
};

app.get("/", (req, res) => {
  res.send("✅ API is running on Railway");
});

app.post("/verifyUser", async (req, res) => {
  const { username, password } = req.body;
  try {
    const [rows] = await db.query(
      "SELECT * FROM user WHERE username = ? AND password = ?",
      [username, password]
    );
    if (rows.length > 0) {
      res.json({ success: true, user: rows[0] });
    } else {
      res.status(400).json({ success: false, message: "Invalid credentials" });
    }
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: "Database error" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => {
  await initMySQL();
  console.log(`🚀 Server running on port ${PORT}`);
});
