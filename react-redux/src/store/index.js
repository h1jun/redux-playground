import { createStore } from "redux";

export const INCREMENT = "increment";
export const INCREASE = "increase";
export const DECREMENT = "decrement";
export const TOGGLE = "toggle";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter,
      };
    case INCREASE:
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
      };
    case DECREMENT:
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };
    case TOGGLE:
      return {
        showCounter: !state.showCounter,
        counter: state.counter,
      };
    default:
      return {
        showCounter: state.showCounter,
        counter: state.counter,
      };
  }
};

const store = createStore(counterReducer);

export default store;
