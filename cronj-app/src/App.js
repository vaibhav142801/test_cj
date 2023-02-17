import logo from "./logo.svg";
import "./App.css";
import TodoContainer from "./screen/TodoContainer/TodoContainer";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <TodoContainer />
    </Provider>
  );
}

export default App;
