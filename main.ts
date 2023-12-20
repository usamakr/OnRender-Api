import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Server running on On Render." });
});

app.listen(9000, () => {
  console.log(`Server started on port 9000.`);
});
