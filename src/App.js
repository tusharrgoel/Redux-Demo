import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import ChocolateContainer from "./components/ChocolateContainer";
import UserContainer from "./components/userConatiner";
function App() {
  return (
    <Provider store={store}>
      <div>
        <UserContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <ChocolateContainer />
      </div>
    </Provider>
  );
}

export default App;
