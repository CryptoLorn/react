import {Link, useLocation, useParams, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services/post.service";

const PostDetailsPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setPost(state);
            return;
        }

        postService.getById(id).then(value => setPost({...value}));
    }, [id, state]);

    return (
        <>
            {post && (
                <div>
                    <h3>{post.id}</h3>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>

                    <Link to={"comments"}><button>Comments</button></Link>
                </div>
            )}
            <Outlet/>
        </>
    );
};

export default PostDetailsPage;