const UserPosts = ({post}) => {
    const {id, title} = post;

    return (
        <div>
            {id} {title}
        </div>
    );
};

export default UserPosts;