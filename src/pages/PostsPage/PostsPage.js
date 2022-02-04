import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {postService} from "../../services/post.service";
import Post from "../../components/Post/Post";
import "./PostsPage.css";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]));
    }, []);

    return (
        <div className={'post_body'}>
            <div>{posts.map(post => <Post key={post.id} post={post}/>)}</div>
            <div className={'post_details'}><Outlet/></div>
        </div>
    );
};

export default PostsPage;