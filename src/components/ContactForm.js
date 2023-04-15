import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact, editContact } from "../actions/contactActions.js";
import "./ContactForm.css";
import ContactList from "./ContactList.js";

const ContactForm = () => {
  const selectedContact = useSelector((state) => state.selectedContact);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (selectedContact) {
      setName(selectedContact.name);
      setEmail(selectedContact.email);
      setNumber(selectedContact.number);
      setIsEditMode(true);
    }
  }, [selectedContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      dispatch(editContact({ id: selectedContact.id, name, email, number }));
      setIsEditMode(false);
    } else {
      dispatch(addContact({ id: Date.now(), name, email, number }));
    }
    setName("");
    setEmail("");
    setNumber("");
  };

  return (
    <div>
      <h2 className="header">Contact Form</h2>
      <div className="contact-form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button type="submit">{isEditMode ? "Save" : "Add"}</button>
          {isEditMode && (
            <button type="button" onClick={() => setIsEditMode(false)}>
              Cancel
            </button>
          )}
        </form>
      </div>
      <ContactList />
    </div>
  );
};

export default ContactForm;
