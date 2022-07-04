import { ADD_CONTACT, GET_CONTACTS } from "../ActionsTypes/contactsActionsTypes";


const initialState = {
  contacts: [],
};

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
          ...state,
          contacts: action.payload
      };
    case ADD_CONTACT:
      return {
       ...state,
       contacts:action.payload
      };

    default:
      return state;
  }
};
