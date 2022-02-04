import {useLocation, useParams, Link, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../../services/user.service";

const UserDetailsPage = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setUser(state);
            return;
        }


        userService.getById(id).then(value => setUser({...value}));
    }, [id, state]);

    return (
        <>
            {user && (
                <div>
                    <div>{user.id}</div>
                    <div>{user.name}</div>
                    <div>{user.username}</div>
                    <div>{user.email}</div>

                    <div>{user.address.street}</div>
                    <div>{user.address.suite}</div>
                    <div>{user.address.city}</div>
                    <div>{user.address.zipcode}</div>
                    <div>{user.address.geo.lat}</div>
                    <div>{user.address.geo.lng}</div>

                    <div>{user.phone}</div>
                    <div>{user.website}</div>

                    <div>{user.company.name}</div>
                    <div>{user.company.catchPhrase}</div>
                    <div>{user.company.bs}</div>

                    <Link to={"posts"}><button>Posts</button></Link>
                </div>
            )}
            <Outlet/>
        </>
    );
};

export default UserDetailsPage;