import {Link} from "react-router-dom";

const User = ({user, album}) => {
    const {id, name} = user;

    return (
        <div>
            {name} <Link to={id.toString()} state={user}><button>Details</button></Link>
            <Link to={`${id.toString()}/albums`} state={album}><button>Albums</button></Link>
        </div>
    );
};

export default User;