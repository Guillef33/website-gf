// Constants

import BuscaTuCoach from "./buscatucoach.jpg";
import FJComms from "./fjcomms.jpg";
import Iniciativa from "./iniciativa.jpg";
import Ecospend from "./ecospend.jpg";
import MareFish from "./marefish.jpg";
import Audience from "./audience.jpg";
import Auditorbot from "./auditorbot.jpg";
import Qualia from "./guaglia.jpeg";
import Allycart from "./logo-allycart.png";
import CounterImg from "../../pages/react/projects/counter/counter.png";

const projects = [
  {
    id: "1",
    img: Iniciativa,
    title: "Iniciativa de archivos",
    partner: "",
    technology: "WordPress",
    job: "BackEnd Developer",
    url: "https://iniciativadearchivos.org/",
    category: "ONG",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut orci id elit varius gravida vel eget augue. ",
    isNovedad: true,
    featuredImage:
      "https://images.unsplash.com/photo-1641579281152-e5d633aa3775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  },

  {
    id: "2",
    img: Ecospend,
    title: "Ecospend",
    partner: "",
    technology: "WordPress",
    job: "BackEnd Developer",
    url: "https://ecospend.com/",
    category: "FinTech",
    description:
      "Proin faucibus sem in suscipit malesuada. Phasellus varius tristique gravida. Aliquam imperdiet. ",
    isNovedad: true,
    featuredImage:
      "https://images.unsplash.com/photo-1641579281152-e5d633aa3775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  },

  {
    id: "3",
    img: BuscaTuCoach,
    title: "Busca tu coach",
    partner: "",
    technology: "WordPress",
    job: "FrontEnd Developer",
    url: "https://buscatucoach.com/",
    category: "App",
    description:
      "Nam quis est et velit aliquam sodales. Nam ac massa dolor. Duis placerat massa sit amet sollicitudin hendrerit.",
    isNovedad: true,
    featuredImage:
      "https://images.unsplash.com/photo-1641579281152-e5d633aa3775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  },
  {
    id: "4",
    img: Audience,
    title: "Audience Makers",
    partner: "Uanaknow",
    technology: "Javascript",
    job: "FrontEnd Developer",
    url: "https://www.audiencemakerssa.com/",
    category: "Landing Page",
    description:
      "Nam quis est et velit aliquam sodales. Nam ac massa dolor. Duis placerat massa sit amet sollicitudin hendrerit. ",
    isNovedad: true,
    featuredImage:
      "https://images.unsplash.com/photo-1641579281152-e5d633aa3775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  },
  {
    id: "5",
    img: FJComms,
    title: "FJ Communicatios",
    partner: "Uanaknow",
    technology: "Javascript",
    job: "FrontEnd Developer",
    url: "https://www.fjcommunications.com//",
    category: "Landing Page",
    description:
      "Consultoría de comunicación y RR.PP. tanto en España, Europa, como LATAM y EEUU. ",
    isNovedad: true,
    featuredImage:
      "https://images.unsplash.com/photo-1641579281152-e5d633aa3775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  },
  {
    id: "6",
    img: MareFish,
    title: "Marefish",
    partner: "TNP Creative",
    technology: "WordPress",
    job: "FrontEnd Developer",
    url: "https://www.marefish.es",
    category: "Ecommerce",
    description:
      "Ecommerce para MareFish historico negocio ubicado en Mercamadrid..",
    isNovedad: true,
    featuredImage:
      "https://images.unsplash.com/photo-1641579281152-e5d633aa3775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  },
  {
    id: "7",
    img: Auditorbot,
    title: "Auditor Bot",
    partner: "Shake Again",
    technology: "Laravel",
    job: "Project Managment",
    url: "https://auditorbot.com/",
    category: "Web Scraping App",
    description:
      "App realizada en Laravel para brindar informacion de pricing a responsables de ecommerce. ",
    isNovedad: true,
    featuredImage:
      "https://images.unsplash.com/photo-1641579281152-e5d633aa3775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  },
  {
    id: "8",
    img: Qualia,
    title: "Qualia Seguros",
    partner: "Shake Again",
    technology: "Javascript",
    job: "Front End",
    url: "https://contrata.qualiaseguros.com/landing/quienes-somos/",
    category: "Javascript",
    description: "Landings pages para el lanzamientos de la marca. ",
    isNovedad: true,
    featuredImage:
      "https://images.unsplash.com/photo-1641579281152-e5d633aa3775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  },
  {
    id: "9",
    img: Allycart,
    title: "Allycart",
    partner: "Allytech",
    technology: "Javascript",
    job: "Front End",
    url: "https://www.allycart.com/",
    category: "Javascript",
    description:
      "Landings page de Allycar, creá tu tienda online en pocos clics y empezá a conseguir clientes ",
    isNovedad: false,
    featuredImage: "",
  },
  {
    id: "10",
    img: CounterImg,
    title: "Cuenta Regresiva",
    partner: "FrontEnd Master",
    technology: "React",
    job: "Front End",
    url: "https://pruebas-react-3.vercel.app/countdowm",
    category: "React",
    description:
      "Landing page Countdown para el lanzamiento de un nuevo sitio web.",
    isNovedad: false,
    featuredImage: "",
  },
];

export default projects;
