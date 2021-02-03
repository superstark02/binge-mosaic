import './App.css';
import Home from './Pages/Home';
import { theme } from './Theme/Theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppDemo from './Pages/AppDemo';

const screenStyle = {
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.light,
  minHeight: '100vh'
};

document.getElementById("root").style.height = "100vh";

function App() {
  return (
    <div style={screenStyle} >
      <Router >
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/mosaic-app-demo' component={AppDemo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
