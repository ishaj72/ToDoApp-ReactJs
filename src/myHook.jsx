import {createContext , useContext,useState} from 'react';
const AuthContext = createContext(null);

export const Myhook = ({children}) =>{
    const [todos,setTodos] = useState([])
    const [toEdit , setToEdit] = useState(false)
    const [editValue , setEditValue] = useState('')
    const [editIndex , setEditIndex] = useState(null)

    const addTodo = (task)=>{
        setTodos([...todos,task]);
    }
    const removeTodo = (index)=>{
        setTodos(todos.filter(
            (item, i ) =>i!==index 
    ))
    }
    const editTodo = (index , todo) => {
         setEditValue(todo);
         setEditIndex(index);
         setToEdit(true);
    }
    const updateTodo = (updatedTask)=>{
        const updateTodos = todos.map((todo,index)=>(
            index === editIndex ? updatedTask : todo
        ));
        setTodos(updateTodos);
        setToEdit(false);
        setEditIndex(null);
    }
    return(
        <AuthContext.Provider value={{
            todos, setTodos , toEdit , setToEdit , editValue , setEditValue ,setEditIndex , editIndex , addTodo ,updateTodo , removeTodo , editTodo
        }}>{children}</AuthContext.Provider>
    )
}
export const useAuth=()=>useContext(AuthContext);