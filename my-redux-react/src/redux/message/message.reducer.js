import { GOOD_MORNING, GOOD_NIGHT, GOOD_AFTERNOON } from "./message.action";

let initialState = {
  message: "Hello.....",
};
let messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOOD_MORNING:
      return {
        message: "Good Morning",
      };
    case GOOD_NIGHT:
      return {
        message: "Good Night",
      };
    case GOOD_AFTERNOON:
      return {
        message: "Good After - Go to Lunch",
      };
    default:
      return state;
  }
};
export { messageReducer };
