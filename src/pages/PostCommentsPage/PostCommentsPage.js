import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services/post.service";
import PostComments from "../../components/PostComments/PostComments";

const PostCommentsPage = () => {
    const {id} = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        postService.getCommentsById(id).then(value => setComments([...value]));
    }, [id]);

    return (
        <>
            <div>{comments.map(comment => <PostComments key={comment.id} comment={comment}/>)}</div>
        </>
    );
};

export default PostCommentsPage;