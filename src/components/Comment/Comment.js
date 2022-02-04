const Comment = ({comment}) => {
    const {id, name, email, body} = comment;

    return (
        <div>
            <div>{id}</div>
            <div><h4>{name}</h4></div>
            <div>{email}</div>
            <div>{body}</div>
            <hr/>
        </div>
    )
}

export default Comment;