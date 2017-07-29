import React from 'react';

const PostsList = ({ posts }) => {
  const renderPosts = () => {
    let bgColor = '';
    return posts.map(item => {
      if (item.data.over_18) {
        bgColor = 'crimson'
      } else {
        bgColor = 'lightblue'
      }

      return (
        <div className="panel panel-default" style={{backgroundColor: bgColor}} key={item.data.id}>
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
