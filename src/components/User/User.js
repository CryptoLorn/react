import './User.css'

const User = ({user, getUser}) => {
    const {name} = user;

    return (
        <div className={'user_block'}>
            <div>{name}</div>
            <button onClick={() => getUser(user)}>GetDetails</button>
        </div>
    );
};

export default User;