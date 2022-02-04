const User = ({user}) => {
    const {name, username, email} = user;

    return (
        <div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
            <hr/>
        </div>
    )
}

export default User;