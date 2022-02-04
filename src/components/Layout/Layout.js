import React from 'react';
import {Outlet, Link} from "react-router-dom";

import "./Layout.css"

const Layout = () => {
    return (
        <>
            <div className={'header'}>
                <div><Link to={'/cars'}>Cars</Link></div>
                <div><Link to={'/users'}>Users</Link></div>
                <div><Link to={'/posts'}>Posts</Link></div>
                <div><Link to={'/comments'}>Comments</Link></div>
            </div>
            <div className={'body'}><Outlet/></div>
        </>

    );
};

export default Layout;