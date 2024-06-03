import {useEffect, useState} from 'react';
import { useAuth } from './myHook';
//points to imput and button both
const Todoform= ()=>{
    const {addTodo,toEdit, editValue, setEditValue ,updateTodo} = useAuth()
    const[task,setTask] = useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(toEdit){
            updateTodo(task);
        }
        else{
            addTodo(task);
        }
        setTask('');
        setEditValue('');
    }
    const handleChange = (e) =>{
        setTask(e.target.value);
    }
    useEffect(()=>{
        if(toEdit){
            setTask(editValue);
        }
    },[toEdit,editValue]);

    return(
        <>
        <form className="form" onSubmit={handleSubmit}>
            <input className="input" onChange={handleChange} value={task} type ="text" placeholder = "Enter a task"/>
            <button className="button" type = "submit">{toEdit?'Update':'Add'}</button>
        </form>
        </>
    );
};

export default Todoform;