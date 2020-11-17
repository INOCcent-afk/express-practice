const path = require("path");
const express = require("express");
const logger = require("./middleware/logger");

const app = express();
// app.use(logger);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/members", require("./routes/api/members"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
