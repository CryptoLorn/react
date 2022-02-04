import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

function App() {

  return (
      <div className={'wrapper'}>
        <div className={'top_block'}>
          <Users/>

          <Posts/>
        </div>

        <div>
          <Comments/>
        </div>
      </div>
  )
}


export default App;