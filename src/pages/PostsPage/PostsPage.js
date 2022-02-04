import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import Post from "../../components/Post/Post";
import {getAllPosts} from "../../store/post.slice";

const PostsPage = () => {
    const {posts} = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts())
    }, [])

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
}

export default PostsPage;