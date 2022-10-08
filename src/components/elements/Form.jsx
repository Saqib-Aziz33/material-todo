import { useState } from "react"
import { Box, TextField, Typography, Button } from "@mui/material"
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast'


function Form(props) {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  function addNewTodo(params) {
    if(!title || !desc){
      toast.error('Fields are empty')
      return
    }
    setTitle('')
    setDesc('')
    props.newTodo({title, desc, id: uuidv4()})
  }

  return (
    <Box>
      <Box>
        <Typography variant="h4" className="mb-3">Add New Todo</Typography>
      </Box>
      <Box sx={{pr: {xs: 0, sm: '2rem'}}}>
        <TextField value={title} onChange={e => setTitle(e.target.value)} color="secondary" label="Title" variant="standard" fullWidth className="mb-3" />
        <TextField value={desc} onChange={e => setDesc(e.target.value)} color="secondary" rows={4} label="Description" variant="standard" fullWidth multiline className="mb-3" />
        <Button onClick={addNewTodo} variant="contained" color="secondary">Add</Button>
      </Box>
    </Box>
  )
}
export default Form