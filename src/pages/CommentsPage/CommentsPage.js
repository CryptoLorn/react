import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import Comment from "../../components/Comment/Comment";
import {getAllComments} from "../../store/comment.slice";

const CommentsPage = () => {
    const {comments} = useSelector(state => state.comments);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComments())
    }, [])

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
}

export default CommentsPage;