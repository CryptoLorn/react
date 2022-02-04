import {useState} from "react";

import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import UserDetails from "./components/UserDetails/UserDetails";
import {postService} from "./services/post.service";

function App () {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  const getUser = (user) => {
    setUser(user);
    setPosts([]);
  };

  const getUserId = (id) => {
    postService.getByUserId(id).then(value => setPosts([...value]));
  };

  return (
      <div>
        <div className={'wrapper'}>
          <Users getUser={getUser}/>
          {user && <UserDetails user={user} getUserId={getUserId}/>}
        </div>
        <Posts posts={posts}/>
      </div>
  );
}

export default App;