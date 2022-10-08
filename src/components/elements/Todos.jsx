import {Stack, Box, Typography } from "@mui/material"
import Todo from "./Todo"

function Todos(props) {
  return (
    <Box>
        <Typography variant="h4" sx={{mb: '2rem'}}>Todos</Typography>
        <Stack gap={4}>
            {props.todos.length === 0 ? <Typography variant="body1" sx={{opacity: '0.5'}}>No Todos yet</Typography> : props.todos.map(todo => (
                <Todo delTodo={props.delTodo} todo={todo} key={todo.id} />
            ))}
        </Stack>
    </Box>
  )
}
export default Todos