//create action types
let GOOD_MORNING = "GOOD_MORNING";
let GOOD_NIGHT = "GOOD_NIGHT";
let GOOD_AFTERNOON = "GOOD_AFTERNOON";

//create actions
let sayGMAction = () => {
  return { type: GOOD_MORNING };
};

let sayGNAction = () => {
  return { type: GOOD_NIGHT };
};
let sayGAAction = () => {
  return { type: GOOD_AFTERNOON };
};
export {
  GOOD_MORNING,
  GOOD_NIGHT,
  GOOD_AFTERNOON,
  sayGMAction,
  sayGAAction,
  sayGNAction,
};
