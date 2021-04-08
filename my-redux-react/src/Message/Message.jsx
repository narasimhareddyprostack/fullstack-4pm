import React from "react";
import {
  sayGMAction,
  sayGNAction,
  sayGAAction,
} from "../redux/message/message.action";
import { useDispatch, useSelector } from "react-redux";
let Message = () => {
  let message = useSelector((state) => {
    return state.message;
  });
  let dispatch = useDispatch();
  let sayGMHandler = () => {
    dispatch(sayGMAction());
  };
  let sayGNHandler = () => {
    dispatch(sayGNAction());
  };
  let sayGAHandler = () => {
    dispatch(sayGAAction());
  };
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <pre>{JSON.stringify(message)}</pre>
                <h1>Message: {message.message}</h1>
              </div>
              <div className="card-body">
                <button
                  className="btn btn-secondary mr-4"
                  onClick={sayGMHandler}
                >
                  Good Morning
                </button>
                <button className="btn btn-danger mr-4" onClick={sayGAHandler}>
                  Good Afternoon
                </button>
                <button className="btn btn-primary mr-4" onClick={sayGNHandler}>
                  Good Night
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Message;
