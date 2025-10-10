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

app.get("/user/", async (req, res) => {
  
  const results = await db.query("select * from user ");
  if (results[0].length > 0) {
    res.json(results[0]);
  } else {
    res.status(404).json({
      message: "หาไม่เจอ",
    });
  }
});

const PORT = 4000;
app.listen(PORT, async () => {
  await initMySQL();
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
