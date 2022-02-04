const Post = ({post}) => {
    const {id, title, body} = post;

    return (
        <div>
            <div>{id}</div>
            <div><h4>{title}</h4></div>
            <div>{body}</div>
            <hr/>
        </div>
    )
}

export default Post;