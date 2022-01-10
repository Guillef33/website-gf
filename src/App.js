// Components
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import Nav from './components/Nav/Nav'

import Home from "./components/Home";
import ProjectList from "./components/ProjectList";
import ProjectPage from "./components/ProjectPage";

import Portfolio from './components/portfolio/Portfolio'

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SobreMi from './components/Sobre-mi';
// import Panel from './components/NavBarHam';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        {/* <Panel /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={ProjectList} />
          <Route path="/projects" component={ProjectList} />

          <Route path="/portfolio" component={Portfolio} />
          <Route path="/sobre-mi" component={SobreMi} />

          <Route path="/projectos/:idUrl" component={ProjectPage} />
          <Route path="/contacto" component={Contacto} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
