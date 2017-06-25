import React from 'react';
import Navigation from 'Navigation';

export class Main extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
