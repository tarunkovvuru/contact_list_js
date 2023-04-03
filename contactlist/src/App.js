import React from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "./contacts.css";

function App() {
  return (
    <div className="App">
      <div className="contacts">
        <ContactForm />
        <ContactList />
      </div>
    </div>
  );
}

export default App;
