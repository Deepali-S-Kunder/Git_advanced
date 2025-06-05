import { useState } from 'react'
import './App.css';
const App = () => {
    const [tasks,setTasks] = useState([])
    const [text,setText] = useState('')
    const [date,setDate] = useState('')
    const [des,setDes] = useState('')
    const [all,setAll] = useState(false)
    const [c,setC] = useState(false)
    const [p,setP] = useState(false)
    const changeText = (e) => {
        setText(e.target.value)
    }

    const changeDate = (e) => {
        setDate(e.target.value)
    }

    const changeDes = (e) => {
        setDes(e.target.value)
    }

    const add = () => {
        if(text !== '')
            setTasks([...tasks, {text:text,date:date,des:des,id:Date.now(),completed:false}])
    }

    const del = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const changeCompleted = (id) => {
    setTasks(
    tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  );
    }

    const changeAll = () => {
      setAll(true)
      setC(false)
      setP(false)
    }

    const changeC = () => {
      setAll(false)
      setC(true)
      setP(false)
    }

    const changeP = () => {
      setAll(false)
      setC(false)
      setP(true)
    }

    const filtered = () => {
      if(all)
        return tasks
      else if(c)
        return tasks.filter((task) => task.completed)
      else if(p)
        return tasks.filter((task) => !task.completed)
      return tasks
    }

    const FilteredList = filtered()
  return (
    <div className='container'>
        <h1>To Do List</h1>
        <input type = 'text' placeholder = 'Enter the task here' onChange = {changeText}></input><br></br>
        <input type = 'date' placeholder = 'Enter the date here' onChange = {changeDate}></input><br></br>
        <input type = 'text' placeholder = 'Descrip' onChange = {changeDes}></input><br></br>
        <button onClick = {add}>Add</button><br></br>
        <button onClick={changeAll}>All</button>
        <button onClick={changeC}>Completed</button>
        <button onClick={changeP}>Pending</button>    
            {
                FilteredList.map((task) => (
                   <p>{task.text}<br></br>
                   {task.date}<br></br>
                   {task.des}<br></br>
                   <button onClick={() => changeCompleted(task.id)}>{task.completed?"Not Complete":"Complete"}</button>
                   <button onClick={() => del(task.id)}>Delete</button>
                   </p>
                ))
            }
    </div>
  )
}
export default App