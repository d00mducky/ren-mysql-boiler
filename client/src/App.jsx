import React from 'react';

// import child components
import Test from './components/Test'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  // runs when App is mounted to the DOM
  componentDidMount() {
    this.props.services.videos.exampleVideoServiceMethod();
  }

  render () {
    return (
      <div className="app-render">
        <h1>hello from client/src/App.jsx ! :)</h1>
        <Test />
      </div>
    );
  }
}

export default App;