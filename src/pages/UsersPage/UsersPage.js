import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import User from "../../components/User/User";
import {getAllUsers} from "../../store/user.slice";

const UsersPage = () => {
    const {users} = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
}

export default UsersPage;