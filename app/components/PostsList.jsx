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
          <div className="panel-body container-fluid">
            <div style={{display: 'inline'}}>
              <span className="glyphicon glyphicon-arrow-up">
              </span><b style={{marginLeft: 5}}>{item.data.ups}</b>
            </div>
            <div style={{display: 'inline', marginLeft: 20}}>
              {item.data.title}
            </div>
          </div>
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
