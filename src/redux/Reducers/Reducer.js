import { ADD_HONEY, DELETE_HONEY, GET_HONEY } from "../ActionsTypes/honeyActionsTypes";

const initialState = {
  honey: [],
};

export const honeyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HONEY:
      return {
        ...state,
        honey: action.payload,
      };
    case ADD_HONEY:
      return {
        ...state,
        honey: action.payload,
      };
    case DELETE_HONEY:
      return {
        ...state,
        honey: state.honey.filter((data) => data.id !== action.payload),
      };

    default:
      return state;
  }
};
