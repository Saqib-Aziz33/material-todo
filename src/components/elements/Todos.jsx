import {Stack, Box, Typography, Paper} from "@mui/material"

function Todos(props) {
  return (
    <Box>
        <Typography variant="h4" sx={{mb: '2rem'}}>Todos</Typography>
        <Stack gap={4}>
            {props.todos.length === 0 ? <Typography variant="body1" sx={{opacity: '0.5'}}>No Todos yet</Typography> : props.todos.map((todo, index) => (
                <Box key={index}>
                    <Paper elevation={2} sx={{p: '2rem 1rem'}}>
                        <Typography variant="h6">{todo.title}</Typography>
                        <Typography variant="body1">{todo.desc}</Typography>
                    </Paper>
                </Box>
            ))}
        </Stack>
    </Box>
  )
}
export default Todos