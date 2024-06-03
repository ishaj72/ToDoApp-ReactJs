import Todoform from './todoform'
import Todos from './Todos'
import './todowrapper.css'
const Todowrapper =()=>{
    return(
        <div className="todo_head">
        <div>
            <p className='above_heading'></p>
        <h1 className="todo_heading">To do list</h1>
        </div>
        <Todoform />
        <Todos/>
        </div>
    );
};

export default Todowrapper;