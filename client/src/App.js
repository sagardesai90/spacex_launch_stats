import React, { Component } from 'react';
import spacexLogo from './spacexLogo.png';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from "react-apollo";

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql'
});

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
