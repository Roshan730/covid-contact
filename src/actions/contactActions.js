// Action types
export const ADD_CONTACT = "ADD_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT";
export const SELECT_CONTACT = "SELECT_CONTACT";

// Action creators
export const addContact = (contact) => {
  return {
    type: ADD_CONTACT,
    payload: contact,
  };
};

export const deleteContact = (id) => {
  return {
    type: DELETE_CONTACT,
    payload: id,
  };
};

export const editContact = (contact) => {
  return {
    type: EDIT_CONTACT,
    payload: contact,
  };
};

export const selectContact = (contact) => {
  return {
    type: SELECT_CONTACT,
    payload: contact,
  };
};
