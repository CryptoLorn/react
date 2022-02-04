import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import "./UsersPage.css";
import {userService} from "../../services/user.service";
import User from "../../components/User/User";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]));
    }, []);

    return (
        <div className={'body_wrapper'}>
            <div>{users.map(user => <User key={user.id} user={user}/>)}</div>
            <div className={'user_details'}><Outlet/></div>
        </div>
    );
};

export default UsersPage;