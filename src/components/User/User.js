const User = ({user}) => {
    const {name, username, email} = user;

    return (
        <div>
            <div>{name} {username} {email}</div>
        </div>
    );
};

export default User;