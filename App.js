import React, { Component } from 'react';
// import React, { useState } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [
        {id: '0', name: 'Jason', age: 28, id: 0},
        {id: '1', name: 'Jay', age: 29, id: 1},
        {id: '2', name: 'James', age: 26, id: 2}
      ],
      otherState: 'other values',
      showPersons: false
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

  deletePerson = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  changeName = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})    
  }

  togglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              name={person.name} 
              age={person.age} 
              // onClick={this.deletePerson(index)}
              changed={(event) => this.changeName(event, person.id)}
              key={person.id}
              />;
          })}
        </div>
      )
      
    }


    return (
      <div className="App">
        <button style={style} onClick={()=>this.togglePersons()}>Show Persons</button>
        {persons}
      </div>
    );
  };
  
}

export default App;