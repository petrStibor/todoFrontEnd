import {useState, useEffect} from 'react'
import axios from 'axios'

import Header from './components/Header';
import Tasks from './components/Tasks'


const App = ()=>{

  const [tasks, setTask] = useState([{}]);
  const [newTask, setNewTask] = useState('');

  // display all tasks
  useEffect(()=>{
    const getItems = async ()=>{
      const result = await axios.get('http://localhost:5000/tasks')
      setTask(result.data)
    }
    getItems()
  },[])


  // add new user to the database
  const addTask = async (e)=>{
    e.preventDefault()
    try {
      if(newTask === ''){
        window.alert('You cant add empty task!')
      }
      else {
        const result = await axios.post('http://localhost:5000/tasks/new', {
        item: newTask
      })
      setTask(prev => [...prev, result.data])
      setNewTask('')
      }
    }
    catch(err) {
      console.log(err)
    }
  }


  // delete task 
  const deleteTask = async (id)=>{
    try{
      const result = await axios.delete(`http://localhost:5000/tasks/${id}`)
      const newItems = tasks.filter(task=> task._id !== id)
      setTask(newItems)
      console.log('Task was deleted!')
    }
    catch(err) {
      console.log(err)
    }
  }


  return (
    <div className='app-container'>
      <Header addTask={addTask} newTask={newTask} setNewTask={setNewTask} />
      <Tasks tasks={tasks} deleteTask={deleteTask} />
    </div>
  )
}

export default App