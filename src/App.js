import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
      persons: [
        { name: 'Regina', age: 30 },
        { name: 'Matt', age: 34 },
        { name: 'Julia', age: 24 }     
      ],
      otherState: 'some other value'
    };



  switchNameHandler = () => {
      // console.log('Was clicked!');
      // DON'T DO THIS: this.state.persons[0].name = 'Gina';
      // don't mutate the state directly like above!
      this.setState({
        persons: [
          { name: 'Gina', age: 30 },
          { name: 'Matty', age: 34 },
          { name: 'Julia', age: 25 }
        ],
      });
    };
  
  render () {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler} />
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;





