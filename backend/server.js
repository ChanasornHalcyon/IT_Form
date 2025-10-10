const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2/promise");

let db = null;

const initMySQL = async () => {
  db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "khemnak1530",
    database: "halcyon_internal",
  });
};
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running ✅");
});

app.post("/verifyUser/", async (req, res) => {
  const { username, password } = req.body;
  try {
    const [rows] = await db.query(
      "SELECT * FROM user WHERE username = ? AND password = ?",
      [username, password]
    );
    if (rows.length > 0) {
      res.json({ success: true, user: rows[0] });
    } else {
      res
        .status(400)
        .json({ success: false, message: "Username หรือ Password ไม่ถูกต้อง" });
    }
  } catch (err) {
    console.error("❌ Database error:", err);
  }
});

app.listen(PORT, async () => {
  try {
    await initMySQL();
    console.log(`🚀 Server running on port ${PORT}`);
  } catch (err) {
    console.error("❌ Failed to start server:", err);
    process.exit(1);
  }
});