import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectContact, deleteContact } from "../actions/contactActions.js";
import "./ContactList.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const handleSelectContact = (contact) => {
    dispatch(selectContact(contact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <h2 className="header">Contact List</h2>
      <div className="contact-list-container">
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id} className="contact-item">
              <div>
                <strong>Name:</strong> {contact.name}
              </div>
              <div>
                <strong>Email:</strong> {contact.email}
              </div>
              <div>
                <strong>Number:</strong> {contact.number}
              </div>
              <div className="contact-buttons">
                <button onClick={() => handleSelectContact(contact)}>
                  Edit
                </button>
                <button onClick={() => handleDeleteContact(contact.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactList;
