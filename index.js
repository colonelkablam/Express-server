import express from "express";
const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>")
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1>")
});

app.get("/contact", (req, res) => {
    res.send("<h1>I live in Wood Green!</h1><p>+44 1224 567890")
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});