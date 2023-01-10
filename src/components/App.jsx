import { useState, useEffect } from 'react';

import { Box } from './Box';
import shortid from 'shortid';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addName = data => {
    const contact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };

    const contactName = [];

    contacts.forEach(contact => contactName.push(contact.name));

    contactName.includes(contact.name)
      ? alert(`${contact.name} is already in contacts.`)
      : setContacts(prevState => [contact, ...prevState]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Box as="div" p={15}>
      <h1>Phonebook</h1>
      <Box as="div" display="flex" alignItems="center">
        <Box as="div" display="flex" flexDirection="column" width={320}>
          <Form onSubmitForm={addName} contacts={visibleContacts} />
          {/* <h2>Contacts</h2> */}
          <Filter value={filter} onChange={changeFilter} />
        </Box>
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </Box>
    </Box>
  );
}

// class OldApp extends Component {
//   state = {
//     contacts: [
//       // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],

//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   addName = data => {
//     const contact = {
//       id: shortid.generate(),
//       name: data.name,
//       number: data.number,
//     };

//     const contactName = [];

//     this.state.contacts.forEach(contact => contactName.push(contact.name));

//     contactName.includes(contact.name)
//       ? alert(`${contact.name} is already in contacts.`)
//       : this.setState(prevState => ({
//           contacts: [contact, ...prevState.contacts],
//         }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     const normalizeFilter = this.state.filter.toLowerCase();
//     const visibleContacts = this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizeFilter)
//     );

//     return (
//       <Box as="div" p={15}>
//         <h1>Phonebook</h1>
//         <Box as="div" display="flex" alignItems="center">
//           <Box as="div" display="flex" flexDirection="column" width={320}>
//             <Form onSubmitForm={this.addName} contacts={visibleContacts} />
//             {/* <h2>Contacts</h2> */}
//             <Filter value={this.state.filter} onChange={this.changeFilter} />
//           </Box>
//           <ContactList
//             contacts={visibleContacts}
//             onDeleteContact={this.deleteContact}
//           />
//         </Box>
//       </Box>
//     );
//   }
// }
// export default App;
