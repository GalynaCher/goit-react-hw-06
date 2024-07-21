// import React from 'react'; 
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox.jsx";
import ContactForm from "./ContactForm/ContactForm.jsx";

function App() {

  return (
    <div style={{ padding: 20 }}>
      <h1>Phonebook</h1>
      <ContactForm /> 
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
