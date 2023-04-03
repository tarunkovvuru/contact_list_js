import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../actions/contactActions";

const ContactList = () => {
  const contacts = useSelector((state) => {
    console.log("state", state);
    return state.contacts
  });
  const maleCount = useSelector((state) => state.maleCount);
  const femaleCount = useSelector((state) => state.femaleCount);
  const businessCount = useSelector((state) => state.businessCount)
  const personalCount = useSelector((state) => state.personalCount)
  const dispatch = useDispatch();
  const [filterType, setFilterType] = useState("All");

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (

    <div>
      {console.log(maleCount, "malecount")}
      {console.log(contacts, "contacts")}
      <h2>Contact List</h2>
      <p>Male Count: {contacts.maleCount}</p>
      <p>Female Count: {contacts.femaleCount}</p>
      <p>Business Count: {contacts.businessCount}</p>
      <p>Personal Count: {contacts.personalCount}</p>
      <div>
        <label>Filter:</label>
        <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <option value="All">All</option>
          <option value="Personal">Personal</option>
          <option value="Business">Business</option>
        </select>
      </div>
      <ul>
        {contacts.contacts.map((contact) => {
          console.log(contact, "contact inside map");
          if (filterType === 'All' || contact.type === filterType) {
            return (
              <li key={contact.id}>
                {contact.firstName} {contact.lastName} ({contact.email}) - {" "}
                - {contact.phone} - {contact.gender} - {contact.type}{" "}
                <button onClick={() => handleDelete(contact.id)}>Delete</button>
              </li>
            )
          }
        })}
      </ul>
    </div>
  );
};

export default ContactList;
