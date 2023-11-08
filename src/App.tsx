import 'whatwg-fetch'
import './App.css';
import { PostList } from '../src/components/post_list';

function App() {

  return (
    <div className="App">
      {<PostList/>}
    </div>
  );
}

export default App;
