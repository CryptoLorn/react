import {useSelector} from "react-redux";

import "./Count.css";

const Count = () => {
    const {all, completed} = useSelector(state => state.todo);

    return (
        <div className={'counter'}>
            <div>All: {all}</div>
            <div>Completed: {completed}</div>
        </div>
    );
};

export default Count;