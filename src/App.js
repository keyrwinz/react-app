import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Kolin', age: 22},
      { id: 2, name: 'Keyrwin', age: 20},
      { id: 3, name: 'Kenkenn', age: 19}
    ],
    showPersons: false
  }

  deletPersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const show = this.state.showPersons;
    this.setState({ showPersons: !show });
  }

  render() {
    const style ={
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid lightgreen',
      borderRadius: '10px',
      padding: '8px',
      cursor: 'pointer',
      display: 'block',
      margin: '5px auto',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => {this.deletPersonHandler(index)}}
              changed={(event) => {this.nameChangedHandler(event, person.id)}} />
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style.border = '1px solid orange';
      style[':hover'] = {
        backgroundColor: 'orange',
        color: 'black'
      }
    }

    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>React Application</h1>
          <p className={classes.join(' ')}>TESTING</p>
          <button
            style={style}
            onClick={this.togglePersonsHandler}>Show Persons</button>
          {persons}
        </div>
      </StyleRoot>
    )
  }
}

export default Radium(App);
