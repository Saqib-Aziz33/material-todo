import { Typography, Paper, IconButton } from "@mui/material";
import { AiOutlineDelete } from "react-icons/ai";
// import { TiTick } from "react-icons/ti";

function Todo({todo, delTodo}) {
  return (
    <Paper elevation={2} sx={{ p: "2rem 1rem", position: "relative" }}>
      <IconButton
        color="error"
        onClick={() => delTodo(todo.id)}
        sx={{ position: "absolute", top: "1rem", right: "1rem" }}
      >
        <AiOutlineDelete />
      </IconButton>
      {/* <IconButton
        color="success"
        sx={{ position: "absolute", top: "1rem", right: "3rem" }}
      >
        <TiTick />
      </IconButton> */}
      <Typography variant="h6">{todo.title}</Typography>
      <Typography variant="body1">{todo.desc}</Typography>
    </Paper>
  );
}
export default Todo;
