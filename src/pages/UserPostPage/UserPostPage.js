import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../../services/user.service";
import UserPosts from "../../components/UserPosts/UserPosts";
import "./UserPostPage.css";

const UserPostPage = () => {
    const {id} = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        userService.getPostsById(id).then(value => setPosts([...value]));
    }, [id]);

    return (
        <>
            <div className={'user_posts'}>{posts.map(post => <UserPosts key={post.id} post={post}/>)}</div>
        </>
    );
};

export default UserPostPage;