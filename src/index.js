const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');
const hbs = require('hbs');

// Pathing
const js_path = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates");
const partialPath = path.join(templatePath, "partials");

app.set('view engine', 'hbs');
app.set("views", path.join(templatePath, "views"));
hbs.registerPartials(partialPath);
app.use(express.static(js_Path));

// Routing
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

// Handling 404 - Page Not Found
app.get("*", (req, res) => {
    res.render("404"); // Assuming you have a "404.hbs" view for handling 404 errors
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
