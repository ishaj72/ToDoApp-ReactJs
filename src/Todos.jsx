import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useAuth } from './myHook';
import './todowrapper.css';

const Todos = () => {
    const { todos, removeTodo, editTodo } = useAuth();
    return (
        <div className="todos">
            {todos.map((todo, index) => (
                <div key={index} className="todo_container">
                    <p className="todo_text">{todo}</p>
                    <div className="todo_buttons">
                        <MdDelete size={"20px"} className="delete" onClick={() => { removeTodo(index) }} />
                        <CiEdit size={"20px"} className="update" onClick={() => { editTodo(index, todo) }} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Todos;