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

    const renderItems = () => {
      return this.state.data.map(item => {
        return (
          <div className="panel panel-default">
            <div className="panel-body">
              {item.data.title}
            </div>
          </div>
        )
      }
    )}

    return(
      <div>
        {renderItems()}
      </div>
    )
  }
}

export default Home;
