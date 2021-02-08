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
import PlayScreen from './Pages/PlayScreen';
import { useState, useEffect } from 'react';

const screenStyle = {
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.light,
  minHeight: '100vh'
};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

document.getElementById("root").style.height = "100vh";

function App() {
  const { height, width } = useWindowDimensions();

  if (width > 1024) {
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
            <Route exact path='/play/:id/:season/:episode' component={PlayScreen} />
            <Route exact path='/about' component={About} />
          </Switch>
        </Router>
      </div>
    );
  }else{
    return(
      <iframe style={{border:"none", outline:"none"}} height="100%" width="100%" src="https://project-ott-d883c.web.app/" />
    )
  }
}

export default App;
