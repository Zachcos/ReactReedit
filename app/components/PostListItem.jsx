import React from 'react';

const PostListItem = ({data}) => {
  let bgColor = '';
  {(data.over_18) ? bgColor = 'crimson' : bgColor = 'lightblue'}

  return (
    <div className="panel panel-default" style={{backgroundColor: bgColor}} >
      <div className="panel-body">
        <div style={{display: 'inline'}}>
          <span className="glyphicon glyphicon-arrow-up">
          </span><b style={{marginLeft: 5}}>{data.ups}</b>
        </div>
        <div style={{display: 'inline', marginLeft: 20}}>
          <a href={`http://www.reddit.com${data.permalink}`}>{data.title}</a>
        </div>
      </div>
      <hr />
        <p style={{marginLeft: 10}}>Post by: <b><a href={`http://www.reddit.com/u/${data.author}`}>{data.author}</a></b></p>
        <p style={{marginLeft: 10}}>{data.num_comments} comments</p>
    </div>
  )
}


export default PostListItem;
