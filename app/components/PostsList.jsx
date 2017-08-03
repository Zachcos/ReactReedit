import React from 'react';
import PostListItem from 'PostListItem';

const PostsList = ({ posts }) => {
  const renderPosts = () => {
    return posts.map(item => {
      return <PostListItem data={item.data} key={item.data.id} />
    }
  )}

  return (
    <div>
      {renderPosts()}
    </div>
  )
}



export default PostsList;
