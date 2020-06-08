/* The 3-part Action Suite 
// 1. actions -> objects that use a "type" property to describe events that have occurred in the UI, and an optional "payload" property to send data from the UI to the reducer
// 2. action creators - functions that simply create an action object, and return that action object
// 3. ACTION_TYPES - variables to manage action type strings so that we avoid really hard to find bugs from misspelled action types

*/

export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const UPDATE_ITEM = "UPDATE_ITEM";

// action creator
export const toggleCompleted = () => {
  // create and return action objects
  return { type: TOGGLE_COMPLETED };
};

export const updateItem = (newItem) => {
  return { type: UPDATE_ITEM, payload: newItem };
};
