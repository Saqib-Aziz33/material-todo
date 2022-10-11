import { useState, useEffect } from "react"
import { Grid, Container } from "@mui/material"
import Form from "./Form"
import Todos from "./Todos"
import toast from 'react-hot-toast'
// firebase
import db from "../../firebase"
import { collection, addDoc, getDocs } from 'firebase/firestore'


function Hero() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getTodos(){
      try {
	      setLoading(true)
	      const querySnapshot = await getDocs(collection(db, "todos"));
        querySnapshot.forEach((doc) => {
          todos.push({id: doc.id, ...doc.data()})
        });
	      setLoading(false)
      } catch (e) {
        setLoading(false)
        console.log('error while fetching', e.message)
      }
    }

    getTodos()
  }, [])

  async function newTodo(todo){
    toast.success("New Todo Added")
    setTodos([todo, ...todos])
    try {
      const docRef = await addDoc(collection(db, "todos"), todo);
    
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
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
                <Todos loading={loading} delTodo={delTodo} todos={todos} />
            </Grid>
        </Grid>
    </Container>
  )
}
export default Hero