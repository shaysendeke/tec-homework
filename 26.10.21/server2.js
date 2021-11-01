const express = require("express"),
    PORT = 8000
app = express()
app.use(express.json())

const { equal } = require("assert")
const fs = require("fs")
const file = "comments.json"

app.get("/", (req, res) => {
    res.send(`<h1>hello</h1>`)
    res.send(fs.readFileSync(file, "utf8"))
})

app.get("/comments", (req, res) => {
    res.send(fs.readFileSync(file, "utf8"))
})

app.get("/comments/:id", (req, res) => {
    let comments = JSON.parse(fs.readFileSync(file, "utf8"));
    let comment = comments.find((element) => element.id == req.params.id);
    return comment ? res.send(comment) : res.sendStatus(404)
})

app.delete("/comments/:id", (req, res) => {
    const comments = JSON.parse(fs.readFileSync(file, "utf8"))
    let comment = comments.findIndex((element) => element.id == req.params.id)
    if (comment == -1) {
        return res.sendStatus(404)
    }
    comments.splice(comment, 1)
    fs.writeFileSync(file, JSON.stringify(comments))
    res.send("commnet has deleted")
    res.sendStatus(200)
})

let freeId = 0

app.post("/comments", (req, res) => {
    const comments = JSON.parse(fs.readFileSync(file, "utf8"))
    const name = req.body.name
    const body = req.body.body
    const mail = req.body.mail
    if (name != undefined) {
        const comment = { name: name, body: body, mail: mail, id: freeId }
        comments.push(comment)
        freeId++
        fs.writeFileSync(file, JSON.stringify(comments))
        return res.sendStatus(201)
    }
    res.sendStatus(404)
})

app.patch("/comments/:id", (req, res) => {;
    const comments = JSON.parse(fs.readFileSync(file, "utf8"));
    let comment = comments.find((element) => element.id == req.params.id)
    if (comment == undefined) {
        res.sendStatus(404)
    }
    comment.name = req.body.name;
    comment.body = req.body.body;
    comment.mail = req.body.mail;
    fs.writeFileSync(file, JSON.stringify(comments));
    return comment ? res.send(comment) : res.sendStatus(404)
})

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
})