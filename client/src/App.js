import React, { Component } from 'react';
import spacexLogo from './spacexLogo.png';

class App extends Component {

  render () {
      return (
          <div className="App">
            <img src = {spacexLogo} alt = "SpaceX" style = {{width: 300, display: 'block', margin: 'auto'}}
            />
          </div>
    );
  }

}

export default App;
