const router = require("express").Router()
const Todo = require("../db/models/Todo")

router.get("/", (req, res, next) => {
    Todo.findAll()
    .then((todos)=>{
    res.send(todos)
    })
    // res.send("api its working");
  });

  router.post("/" ,(req,res,next)=>{
      Todo.create(req.body)
      .then((todo)=>{
        res.send(todo)
      })
      .catch((err)=>{
          console.log(err)
      })
  })

router.put("/:id" ,(req,res,next)=>{
    const id =req.params.id
    const body=req.body
      Todo.update(body, {where:{
          id
      }, returning:true 
    })
    .then((item)=>{
        res.send(item[1])
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
  })

  router.delete("/:id" ,(req,res,next)=>{
    const id =req.params.id
      Todo.findByPk(id)
      .then((task)=>{
          res.send(task.destroy())
      })
      .catch((err)=>{
          console.log(err)
      })
})

  module.exports= router


