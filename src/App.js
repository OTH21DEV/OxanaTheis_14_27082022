import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "../src/styles/index.css";
import CreateEmployee from "./pages/CreateEmployee/CreateEmployee";
import CurrentEmployees from "./pages/CurrentEmployees/CurrentEmployees";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<CreateEmployee />}></Route>
            <Route path="/allemployees" element={<CurrentEmployees/>}></Route>
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
