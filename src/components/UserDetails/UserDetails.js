import './UserDetails.css'

const UserDetails = ({user, getUserId}) => {
    const {id, name, username, email, address, phone, website, company} = user;

    return (
        <div className={'user_details'}>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>

            <div>{address.street}</div>
            <div>{address.suite}</div>
            <div>{address.city}</div>
            <div>{address.zipcode}</div>
            <div>{address.geo.lat}</div>
            <div>{address.geo.lng}</div>

            <div>{phone}</div>
            <div>{website}</div>

            <div>{company.name}</div>
            <div>{company.catchPhrase}</div>
            <div>{company.bs}</div>

            <button onClick={() => getUserId(id)}>GetPosts</button>
        </div>
    );
};

export default UserDetails;