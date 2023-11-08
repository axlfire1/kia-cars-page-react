import React from 'react';

interface ItemProps {
  post:{
    _id: number;
    user_name: string;
    content: string;
  };
}

const PostItem: React.FC<ItemProps> = ({ post }) => {

  return (
    <tr>
      <td>
        {post._id}
      </td>
      <td>
        {post.user_name}
      </td>
      <td>
        {post.content}
      </td>
    </tr>
  );
};

export { PostItem };
