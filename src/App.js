
import './App.css';
import '../src/styles/index.css'
import CreateEmployee from './pages/CreateEmployee/CreateEmployee';
import { Provider } from "react-redux";
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    
      <CreateEmployee></CreateEmployee>
    </div>
    </Provider>
  );
}

export default App;
