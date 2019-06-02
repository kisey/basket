import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { Recipe } from "./modules/recipe";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Recipe />
      <footer className="Footer Container">
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/roundicons"
          title="Roundicons"
        >
          Roundicons
        </a>,{" "}
        <a href="https://www.freepik.com/" title="Freepik">
          Freepik
        </a>,{" "}
        <a
          href="https://www.flaticon.com/authors/vectors-market"
          title="Vectors Market"
        >
          Vectors Market
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>{" "}
        is licensed by{" "}
        <a
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank"
        >
          CC 3.0 BY
        </a>
      </footer>
    </Provider>
  );
};

export default App;
