const express = require("express"),
    PORT = 8080
app = express()
app.use(express.json())

const comments = []

app.get("/", (req, res) => {
    res.send("this is home page ")
})

app.get("/comments", (req, res) => {
    res.send(comments)
})

app.get("/comments/:id", (req, res) => {
    let comment = comments.find((element) => element.id == req.params.id)
    return comment ? res.send(comment) : res.sendStatus(404)
})

let freeId = 0

app.post("/comments", (req, res) => {
    const name = req.body.name
    const body = req.body.body
    const mail = req.body.mail
    if (name != undefined) {
        const comment = { name: name, body: body, mail: mail, id: freeId }
        comments.push(comment)
        freeId++
        return res.sendStatus(201)
    }
    res.sendStatus(404)
})

app.delete("/comments/:id", (req, res) => {
    let comment = comments.findIndex((element) => element.id == req.params.id)
    if (comment == -1) {
        return res.sendStatus(404)
    }
    comments.splice(comment, 1)
    res.sendStatus(200)
})

app.patch("/comments/:id", (req, res) => {;
    let comment = comments.find((element) => element.id == req.params.id)
    comment.name = req.body.name, comment.body = req.body.body, comment.mail = req.body.mail
    return comment ? res.send(comment) : res.sendStatus(404)
})

app.listen(PORT, () => {
    console.log(`
                    running on pot ${PORT}
                    `);
})