const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Use API Routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Host a public folder

// // GET Route for 404 page
// app.get('/404', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/404.html'))
// );

app.listen(PORT, () =>
  console.log(`Note app is now listening at http://localhost:${PORT}`)
);
