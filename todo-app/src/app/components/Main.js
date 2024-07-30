'use client'
import React,{useState} from 'react'
import { myContext } from './TodoContext'

const Main = () => {
    const {todos,addtodos,removetodos} = myContext()
    const [newTask, setNewTask] = useState('')

    const handleAddtoDo = () => {
        if (newTask === ''){
            alert('place can not be empty!')
            return;
        }
        addtodos(newTask)
        setNewTask('')
    }

  return (
    <div className='w-full h-fit text-white py-[100px] flex flex-col gap-5'>
        <div 
        id='top'
        className='flex flex-col gap-2 flex-wrap w-full justify-center'>
            <h1 className='text-[30px] max-md:text-[20px] w-full text-center'>To do App!</h1>
            <div 
            className='max-md:w-[250px] rounded-[30px] flex w-full justify-center'
            >
                <input 
                className='bg-gray-200 text-black min-w-[250px] max-md:min-w-[200px] text-[13px] outline-none 
                border-[2px] border-black rounded-r-none px-4 py-2 border-r-[0] rounded-l-[30px]
                '
                value={newTask}
                placeholder='add new task..'
                onChange={(e) => setNewTask(e.target.value)}
                type="text" />
                <button
                onClick={handleAddtoDo}
                className='px-10 py-2 text-[13px] rounded-[30px] border-[2px] border-black rounded-l-none bg-gray-300
                text-black'
                >
                    Add task!
                </button>
            </div>
        </div>
        <div 
        id='bottom'
        className='w-full flex justify-center'>
            <ul
            className='flex flex-col gap-2'
            >
                {todos.map((todo,index) => (
                    <li 
                    key={index}
                    className='min-w-[200px] w-fit px-7 py-1 pl-3 bg-gray-300 rounded-[10px] text-black
                    flex justify-between relative text-[12px]
                    '>
                        <span>{todo}</span>
                        <button 
                        onClick={() => removetodos(index)}
                        className='text-black text-[9px] absolute right-2 top-0'>x</button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Main