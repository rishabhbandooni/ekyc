import './App.css';

// import SigninPage from './pages/signin';

import Home from './pages';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
  <Switch>
    <Route path ='/' component = {Home} exact />
  </Switch>

    </Router>
    
  );
}

export default App;
