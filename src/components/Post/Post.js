import {Link} from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;

    return (
        <div>
            {title}<Link to={id.toString()}><button>Details</button></Link>
        </div>
    );
};

export default Post;