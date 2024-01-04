const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');
const hbs = require('hbs');

// Pathing
const publicPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates");
const partialPath = path.join(templatePath, "partials");

app.set('view engine', 'hbs');
app.set("views", path.join(templatePath, "views"));
hbs.registerPartials(partialPath);
app.use(express.static(publicPath));

// Debugging View Resolution
console.log("Views Path:", app.get("views"));

// Routing
app.get("/", (req, res) => {
    res.render("index"); // Update the render path
});

app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/weather",(req,res)=>{
    res.render("weather");
})

// Handling 404 - Page Not Found
app.get("*", (req, res) => {
    res.render("404found");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
