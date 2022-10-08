import { useState } from "react"
import { Grid, Container } from "@mui/material"
import Form from "./Form"
import Todos from "./Todos"
import toast from 'react-hot-toast'

function Hero() {
  const [todos, setTodos] = useState([])

  function newTodo(todo){
    toast.success("New Todo Added")
    setTodos([todo, ...todos])
  }

  function delTodo(id){
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Container>
        <Grid container spacing={4}>
            <Grid item sm={6} xs={12}>
                <Form newTodo={newTodo} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Todos delTodo={delTodo} todos={todos} />
            </Grid>
        </Grid>
    </Container>
  )
}
export default Hero