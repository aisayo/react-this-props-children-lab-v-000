// Code Invitation Component Here
import React from 'react';
import ReactDOM from 'react-dom';

class Invitation extends React.Component {
  render() {
    return (
      <div className="invitation">
        <h1>You've been invited!</h1>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
export default Invitation;
