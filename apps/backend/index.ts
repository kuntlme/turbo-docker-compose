import express from "express"
import { prismaClient } from "db/client";  

const app = express();
app.use(express.json())

app.get("/user", async (req, res) => {
    const user = await prismaClient.user.findMany({})
    res.json({user})
})


app.post("/user", async (req, res) => {
    const user = await prismaClient.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()

        }
    })
    res.json({user})
})

app.get("/todo", async (req, res) => {
    const userId = req.body.userId;

    const todos = await prismaClient.todo.findMany({
        where: {
            userId: userId
        }
    })

    res.json({todos})
})

app.post("/todo", async (req, res) => {
    const userId = req.body.userId;
    const task = req.body.task;

    const todo = await prismaClient.todo.create({
        data: {
            task: task,
            userId: userId,
            done: false
        }
    })

    res.json({todo})
})

app.get("/", (req, res) => {
    res.json("hsd")
})

app.listen(8080, () => console.log("listening"));