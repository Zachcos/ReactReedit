import React from 'react';
import axios from 'axios';

import PostsList from 'PostsList';

export class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      kind: '',
      data: []
    };
  }

  componentDidMount() {
    axios
    .get('http://www.reddit.com/r/all.json')
    .then(({ data }) => {
      this.setState({
        kind: data.kind,
        data: data.data.children
      })
    })
  }

  render() {
    return(
      <div>
        <PostsList posts={this.state.data} />
      </div>
    )
  }
}

export default Home;
