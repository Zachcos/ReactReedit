import React from 'react';
import axios from 'axios';

export class Home extends React.Component {
  componentDidMount() {
    axios
      .get('http://www.reddit.com/r/all.json')
      .then(({ data }) => {
        console.log(data)
      })
  }

  render() {
    return <h3>This is the home component</h3>
  }
}

export default Home;
