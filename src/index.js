const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');
const hbs=require('hbs');

// Pathing
const js_path = path.join(__dirname, "../public");
// const css_path = path.join(__dirname, "../public/css");
// const img_path=path.join(__dirname,"../public/image");

app.set('view engine','hbs');
// app.use(express.static(img_path));
app.use(express.static(js_path));
// app.use(express.static(css_path));


// Routing
app.get("/", (req, res) => {
    res.send("This is Mitanshu's page.");
});

app.get("/about", (req, res) => {
    res.send("This is Mitanshu. What should I tell you?");
});

// Handling 404 - Page Not Found
app.get("*", (req, res) => {
    res.send("Oops! This page does not exist.");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
 