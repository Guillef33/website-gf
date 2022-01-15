import backgroundImage from "../projects/counter/counter.png";
import Login from "../projects/login/login.png";
import Regalo from "../projects/list/regalo.png";
import Jobs from "../projects/jobs/jobs.png";

const reactProjects = [
  {
    id: 1,
    title: "Cuenta Regresiva",
    recurso: ["setTimeout", "useState"],
    tipo: "Landing Page",
    image: backgroundImage,
    from: "FrontEnd Mentor",
    link: "counter",
  },
  {
    id: 2,
    title: "To Do List",
    recurso: ["useEffect", "useState"],
    tipo: "Challenge",
    image: Regalo,
    from: "Goncy Challenge",
    link: "list",
  },
  {
    id: 3,
    title: "Login",
    recurso: ["localStorage", "useState"],
    tipo: "Login Component",
    image: Login,
    from: "Cordoba React Devs",
    link: "login",
  },
  {
    id: 4,
    title: "Jobs List",
    recurso: ["useEffect", "useState"],
    tipo: "Landing Page",
    image: Jobs,
    from: "FrontEnd Mentor",
    link: "jobs",
  },
];

export default reactProjects;