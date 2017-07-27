import React from 'react';

const PostsList = ({ posts }) => {
  const renderPosts = () => {
    return posts.map(item => {
      return (
        <div className="panel panel-default" key={item.data.id}>
          <div className="panel-body">
            {item.data.title}
          </div>
        </div>
      )
    }
  )}

  return (
    <div>
      {renderPosts()}
      <p>this is filler</p>
    </div>
  )
}



export default PostsList;
