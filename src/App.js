import {Routes, Route} from "react-router-dom";

import UsersPage from "./pages/UsersPage/UsersPage";
import Layout from "./components/Layout/Layout";
import UserDetailsPage from "./pages/UserDetailsPage/UserDetailsPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import UserPostPage from "./pages/UserPostPage/UserPostPage";
import PostDetailsPage from "./pages/PostDetailsPage/PostDetailsPage";
import PostCommentsPage from "./pages/PostCommentsPage/PostCommentsPage";
import AlbumsPage from "./pages/AlbumsPage/AlbumsPage";
import PhotosPage from "./pages/PhotosPage/PhotosPage";

function App() {

  return (
      <div className={'wrapper'}>
        <Routes>
          <Route path={'/'} element={<Layout/>}>
            <Route path={'users'} element={<UsersPage/>}>
              <Route path={':id'} element={<UserDetailsPage/>}>
                <Route path={'posts'} element={<UserPostPage/>}/>
              </Route>

              <Route path={':id/albums'} element={<AlbumsPage/>}>
                <Route path={':photoId/photos'} element={<PhotosPage/>}/>
              </Route>

            </Route>

            <Route path={'posts'} element={<PostsPage/>}>
              <Route path={':id'} element={<PostDetailsPage/>}>
                <Route path={'comments'} element={<PostCommentsPage/>}/>
              </Route>
            </Route>
          </Route>
        </Routes>
      </div>
  );
}

export default App;