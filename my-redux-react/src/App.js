import Message from "./Message/Message";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
function App() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <a href="/"> Redux Example</a>
      </nav>
      <Provider store={store}>
        <Message />
      </Provider>
    </React.Fragment>
  );
}

export default App;
