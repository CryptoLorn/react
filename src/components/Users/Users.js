import {useEffect, useState} from "react";

import User from "../User/User";

export default function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            });
    }, []);

    return (
        <div className={'users_block'}>
            <h3>Users</h3>
            <ul>
                {
                    users.map(value => <li key={value.id}><User props={value}/></li>)
                }
            </ul>
        </div>
    );
}