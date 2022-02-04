import {Link, Outlet} from "react-router-dom";
import './Layout.css';

const Layout = () => {
    return (
        <>
            <div className={'header'}>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>
            </div>
            <div className={'body'}>
                <Outlet/>
            </div>
        </>
    );
};

export default Layout;