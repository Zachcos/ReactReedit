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
            <div style={{display: 'inline'}}>
              <span className="glyphicon glyphicon-arrow-up">
              </span><b style={{marginLeft: 5}}>{item.data.ups}</b>
            </div>
            <div style={{display: 'inline', marginLeft: 20}}>
              {item.data.title}
            </div>
          </div>
          <hr />
            <p style={{marginLeft: 10}}>Post by: <b><a href={`http://www.reddit.com/u/${item.data.author}`} target="_blank">{item.data.author}</a></b></p>
        </div>
      )
    }
  )}

  return (
    <div>
      {renderPosts()}
    </div>
  )
}



export default PostsList;
