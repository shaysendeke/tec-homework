const express = require("express"),
    PORT = 2000;
const path = require("path"),
    app = express();
const axios = require("axios")
    // app.use(express.static(path.join(__dirname, "..", "public")))

const hbs = require("hbs");
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "..", "templates", "views"))
hbs.registerPartials(path.join(__dirname, "..", "templates", "partials"))

app.get("/city", (req, res) => {
    const API_KEY = process.env.OPEN_API_KEY;
    const city = req.query.city
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    axios.get(url)
        .then(function(response) {
            if (response.status == 200) {
                res.render("index", { city: `City Name: ${response.data.name}`, lat: `Lantitue: ${response.data.coord.lat}`, lon: `Lantitue: ${response.data.coord.lon}` })
            }
        })
        .catch(function(err) {
            res.send(err)
        })
})

app.get("/", (req, res) => {
    res.render("index")
})
app.get("/about", (req, res) => {
    res.render("about", { about: "hbs about dynamic" })
})
app.get("/help", (req, res) => {
    res.render("help", { about: "hbs help dynamic" })
})


app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
})