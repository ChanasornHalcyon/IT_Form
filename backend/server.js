const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
