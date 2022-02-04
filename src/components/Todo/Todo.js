import {useDispatch} from "react-redux";

import {changeStatus, deleteTodo} from "../../store/todo.slice";
import "./Todo.css";

const Todo = ({todo}) => {
    const {id, name, status} = todo;
    const dispatch = useDispatch();

    return (
        <div className={'wrapper'}>
            <input type="checkbox" value={status} onChange={() => dispatch(changeStatus({id}))}/>
            <div className={status ? 'completed' : ''}>{name}</div>
            <button onClick={() => dispatch(deleteTodo({id}))}>Delete</button>
        </div>
    )
}

export default Todo;