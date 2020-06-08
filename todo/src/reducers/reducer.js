import { TOGGLE_COMPLETED, UPDATE_ITEM } from "../actions/itemActions";

export const initialState = {
  item: "Learn about reducers",
  completed: false,
  id: 3892987589,
};
export const itemReducer = (state = initialState, action) => {
  // console.log('&&&&&&&&&', state, action);
  switch (action.type) {
    case UPDATE_ITEM:
      return {
        ...state,
        title: action.payload,
        editing: false,
      };
    // NEW CASE HERE
    case TOGGLE_COMPLETED:
      return {
        ...state,
        editing: !state.editing,
      };
    // case 'ADD_FEATURE':
    //   return {
    //     ...state,
    //     car: {
    //       ...state.car,
    //       features: [...state.car.features, action.payload]
    //     }
    //   }
    default:
      return state;
  }
};
