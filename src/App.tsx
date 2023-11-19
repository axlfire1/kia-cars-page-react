import 'whatwg-fetch'
import './App.css';
import { PostList } from '../src/components/post_list';
import { Counter } from '../src/components/counter';
import {CustomButton} from './components/custom_button'

function App() {

  return (
    <div className="App">
      <table>
        <tr>
          <td>
            <PostList/>
          </td>
          <td>
            <Counter/>
          </td>
        </tr>
      </table>

      <CustomButton/>
    </div>
  );
}

export default App;
