import React from 'react';

const divStyle = {
  color:'white'
};

class About extends React.Component {

  render() {
    return (
      <div className="App-header" style={divStyle}>
        <h2>About Page</h2>
        <div>
          <p>This section contains information about...</p>
        </div>
      </div>
    )
  }
}



export default About;