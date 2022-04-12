import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <div className="app">
          <Form />
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
