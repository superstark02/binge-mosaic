import './App.css';
import Home from './Pages/Home';
import { theme } from './Theme/Theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppDemo from './Pages/AppDemo';
import Display from './Pages/Display';
import AppDisplay from './Pages/AppDisplay';
import Temp from './Pages/Temp';
import Contact from './Pages/Contact';
import About from './Pages/About';

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
          <Route exact path='/display/:id' component={Display} />
          <Route exact path='/app/:id' component={AppDisplay} />
          <Route exact path='/movies' component={Temp} />
          <Route exact path='/hollywood' component={Temp} />
          <Route exact path='/bollywood' component={Temp} />
          <Route exact path='/tv' component={Temp} />
          <Route exact path='/movies' component={Temp} />
          <Route exact path='/anime' component={Temp} />
          <Route exact path='/contact-us' component={Contact} />
          <Route exact path='/about' component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
