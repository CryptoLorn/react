import {useDispatch} from "react-redux";

import {addTodo, countAll} from "../../store/todo.slice";

const Form = () => {
    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();
        dispatch(addTodo({todo: e.target.todo.value}));
        dispatch(countAll());
        e.target.reset();
    }

    return (
        <form onSubmit={submit}>
            <input type={'text'} name={'todo'}/>
            <button>Save</button>
        </form>
    )
}

export default Form;