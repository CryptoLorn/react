const PostComments = ({comment}) => {
    const {id, name, email, body} = comment;

    return (
        <div>
            <b>id:</b> {id}<br/>
            <b>name:</b> {name}<br/>
            <b>email:</b> {email}<br/>
            <b>body:</b> {body}
        </div>
    );
};

export default PostComments;