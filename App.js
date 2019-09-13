import React, { Component } from 'react';
// import React, { useState } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [
        {name: 'Jason', age: 28, id: 0},
        {name: 'Jay', age: 29, id: 1},
        {name: 'James', age: 26, id: 2}
      ],
      otherState: 'other values'
    };
  }

  switchName = (newName) => {
    // Why always return a function ?
    return () => {
      this.setState({
        persons: [
          {name: newName, age: 27},
          {name: newName, age: 26},
          {name: newName, age: 6}
        ]
      })
    };
  }

  changeName = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: 27},
        {name: event.target.value, age: 26},
        {name: event.target.value, age: 6}
      ]

    })
  }

  render() {
    const {persons} = this.state;
    // Maybe need indexes?
    const items = persons.map(person => 
      <Person name={person.name} age={person.age} change={this.changeName}/>);


    return (
      <div className="App">
        <button onClick={this.switchName('New name')}>Switch Game</button>
        {items}
          
        {/* <Person 
            name={persons[0].name}
            age={persons[0].age}
          />
        <Person 
            name={persons[1].name}
            age={persons[1].age}
        />
        <Person 
            name={persons[2].name}
            age={persons[2].age}
        /> */}
      </div>
    );
  };
  
}

export default App;