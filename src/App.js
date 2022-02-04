import {useEffect, useState} from "react";

import {userService} from "./services/user.service";
import Form from "./components/Form/Form";
import Users from "./components/Users/Users";

const App = () => {
  const [users, setUsers] = useState([]);
  const [filterUsers, setFilterUsers] = useState([]);

  useEffect(() => {
    userService.getAll().then(value => {
      setUsers([...value])
      setFilterUsers([...value])
    });
  }, []);

  const getFilter = (data) => {
    let filterArr = [...users];

    if (data.name) {
      filterArr = filterArr.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()));
    }

    if (data.username) {
      filterArr = filterArr.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()));
    }

    if (data.email) {
      filterArr = filterArr.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()));
    }

    setFilterUsers(filterArr);
  };


  return (
      <div>
        <Form getFiler={getFilter}/>
        <Users users={filterUsers}/>
      </div>
  );
};

export default App;