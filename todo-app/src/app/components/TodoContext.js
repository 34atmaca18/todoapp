import React,{createContext,useContext,useState} from 'react'

const TodoContext = createContext()
export function TodoProvider({children}){
    
    const [todos, setTodos] = useState([])

    const addtodos = (todo) => {
        setTodos([...todos,todo])
    }
    const removetodos = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    }
    return (
        <TodoContext.Provider value={{todos,addtodos,removetodos}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext
export function myContext(){
    return useContext(TodoContext)
}