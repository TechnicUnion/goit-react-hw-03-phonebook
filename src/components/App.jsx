import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  changeFilter = eve => {
    this.setState({ filter: eve.currentTarget.value });
  };

  getFilteredOutContacts = () => {
    const normalizeFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(person =>
      person.name.toLowerCase().includes(normalizeFilter)
    );
  };

  formSubmitHandler = data => {
    this.state.contacts.map(contact => contact.name).includes(data.name)
      ? alert(`${data.name} is already in contacts.`)
      : this.setState(prevState => ({
          contacts: [
            ...prevState.contacts,
            { id: nanoid(), name: data.name, number: data.number },
          ],
        }));
  };

  deletContact = contactsId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== contactsId),
    }));
  };

  render() {
    const filteredOutContactsList = this.getFilteredOutContacts();
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          itemList={filteredOutContactsList}
          onDeleteClick={this.deletContact}
        />
      </div>
    );
  }
}

export default App;
