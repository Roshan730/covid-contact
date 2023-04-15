import {
  ADD_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  SELECT_CONTACT,
} from "../actions/contactActions.js";

const initialState = {
  contacts: [],
  selectedContact: null,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case EDIT_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
        selectedContact: null,
      };
    case SELECT_CONTACT:
      return { ...state, selectedContact: action.payload };
    default:
      return state;
  }
};

export default contactReducer;
