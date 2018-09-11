// jshint ignore: start

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    let firstFive = contacts.slice(0, 5);
    this.setState({
      contacts: firstFive
    });
  }

  addRandom(e) {
    let newStatContacts = this.state.contacts.slice();
    newStatContacts.push(contacts[Math.floor(Math.random() * contacts.length)]);
    this.setState({
      contacts: newStatContacts
    });
  }

  sortByName(e) {
    this.setState({
      contacts: this.state.contacts.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else {
          return -1;
        }
      })
    });
  }

  sortByPopularity(e) {
    this.setState({
      contacts: this.state.contacts.sort((a, b) => a.popularity - b.popularity)
    });
  }

  delete(i) {
    console.log(i);
    this.state.contacts.splice(i, 1);
    this.setState({ contacts: this.state.contacts });
  }
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>

        <button onClick={e => this.addRandom(e)}>Add random Actor</button>
        <button onClick={e => this.sortByName(e)}>Sort by name</button>
        <button onClick={e => this.sortByPopularity(e)}>
          Sort by popularity
        </button>

        <div className="contact">
          <p>Picture</p>
          <p>Name</p>
          <p>Popularity</p>
        </div>

        {this.state.contacts.map((contact, i) => (
          <div className="contact" key={i}>
            <img src={contact.pictureUrl} alt="" />
            <p>{contact.name}</p>
            <p>{contact.popularity}</p>
            <button onClick={e => this.delete(i)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }
}
export default App;
