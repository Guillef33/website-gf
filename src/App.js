// Components
import Contacto from './components/contacto/Contacto'
import Footer from './components/Footer';
import Nav from './components/nav/Nav';

import Home from "./components/Home";
import ProjectList from "./components/projects/ProjectList";
import ProjectPage from "./components/projects/ProjectPage";

import Portfolio from './components/portfolio/Portfolio'

//React
import ReactProjects from './pages/react/page/ReactProjects';
import Login from './pages/react/projects/login/Login';
import Counter from "./pages/react/projects/counter/Counter";


import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SobreMi from './pages/Sobre-mi';
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

          {/* <React /> */}
          <Route path="/react-projects" component={ReactProjects} />
          <Route path="/login" component={Login} />
          <Route path="/counter" component={Counter} />

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
