import React from "react";
import { Recipe } from "./recipe/containers/Recipe";
import { Provider } from "react-redux";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Recipe />
    </Provider>
  );
};

export default App;
