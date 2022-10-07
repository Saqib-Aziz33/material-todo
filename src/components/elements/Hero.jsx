import { useState } from "react"
import { Grid, Container } from "@mui/material"
import Form from "./Form"
import Todos from "./Todos"

function Hero() {
  const [todos, setTodos] = useState([])

  function newTodo(todo){
    setTodos([todo ,...todos])
  }

  return (
    <Container>
        <Grid container spacing={4}>
            <Grid item sm={6} xs={12}>
                <Form newTodo={newTodo} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Todos todos={todos} />
            </Grid>
        </Grid>
    </Container>
  )
}
export default Hero