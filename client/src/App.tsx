import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { RecipePage } from "./recipe/components/RecipePage";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RecipePage />
    </Provider>
  );
};

export default App;
