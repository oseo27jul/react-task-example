import {useContext, useState} from 'react'
import {TaskContext} from '../context/TaskContext'



function TaskForm() {
    const [title, setTitle] = useState("")
    const [description, setDescripcion] = useState("")
    const {createTask} = useContext(TaskContext)


    const handleSumbit = (e)=>{
        e.preventDefault()
        createTask({
            title,
            description
        })
        
        setTitle("");
        setDescripcion("")
    }


  return (
    <div className='max-w-md mx-auto'>
        <form onSubmit={handleSumbit} className='bg-slate-800 p-10 mb-4'>
            <h1 className='text-2xl font-bold mb-3 text-white'>Crea tu tarea</h1>
            <input placeholder='Escriba su tarea'  
            
            onChange={(e)=> setTitle(e.target.value)}
            value={title}
            autoFocus
            className='bg-slate-300 p-3 w-full mb-2'
            />
            <textarea placeholder="Descripcion" id="" cols="30" rows="2"
            onChange={e=>{setDescripcion(e.target.value)}}
            value={description}
            className='bg-slate-300 px-3 py-1 w-full mb-2'></textarea>
            <button className='bg-green-400 px-2 py-2 rounded-md mt-4 '>Guardar</button>
        </form>
    </div>
  )
}

export default TaskForm