import React from 'react';
import axios from 'axios';

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
    return <h3>This is the home component</h3>
  }
}

export default Home;
