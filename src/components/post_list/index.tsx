import axios from 'axios';
import { useEffect, useState } from 'react';
import { PostItem } from '../post_item';
import './PostList.css'

function PostList() {

  // interface contract for send the object to a component
  interface ItemProps {  
    _id: number;
    user_name: string;
    content: string;
  }

  // states
  const [posts, setPosts] = useState<Array<ItemProps>>([])
  const [loading, setLoading] = useState<Boolean>(true);

  // useEffect Hook
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3001/api/v1/posts');
        setPosts(response.data);
      } catch (error) {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <p>
      <div>
        {
          (
            <div>
              <h1>Data from the server:</h1>
              <table id="customers">
                  { 
                    posts.map(item => (
                      <tr>
                        <PostItem post={item} />
                      </tr>
                    ))
                  }
              </table>
            </div>
         )
        }
      </div>
    </p>
  );
}

export { PostList };
