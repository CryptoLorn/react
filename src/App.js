import {Routes, Route} from 'react-router-dom'

import Layout from "./components/Layout/Layout";
import CarsPage from "./pages/CarsPage/CarsPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import CommentsPage from "./pages/CommentsPage/CommentsPage";

function App() {
  return (
      <div>
        <Routes>
          <Route path={'/'} element={<Layout/>}>
            <Route path={'cars'} element={<CarsPage/>}/>
            <Route path={'users'} element={<UsersPage/>}/>
            <Route path={'posts'} element={<PostsPage/>}/>
            <Route path={'comments'} element={<CommentsPage/>}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;