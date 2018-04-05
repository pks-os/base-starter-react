import React, { Component } from 'react';

import '@webcomponents/webcomponentsjs/webcomponents-loader.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {greeting: "React App"};
    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    this.setState({greeting: this.refs.text.value})
  }

  render() {
    return (
      <div className="App">
        <vaadin-text-field ref="text" placeholder="Type Something"></vaadin-text-field>
        <vaadin-button onClick={this.clicked}>Click Me!</vaadin-button>
        <h2>Hello {this.state.greeting}!</h2>
      </div>
    );
  }
}

export default App;
