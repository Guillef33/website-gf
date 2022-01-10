// Constants

const projects = [
  {
    id: "1",
    img: "https://secureservercdn.net/50.62.172.157/qnk.569.myftpupload.com/wp-content/uploads/2021/10/iniciativaLogo.png",
    title: "Iniciativa de archivos",
    partner: "",
    technology: "WordPress",
    job: "BackEnd Developer",
    url: "https://iniciativadearchivos.org/",
    category: "ONG",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut orci id elit varius gravida vel eget augue. Morbi laoreet luctus quam vel tempor. Pellentesque a maximus nibh. ",
    isNovedad: true,
    featuredImage:
      "https://images.unsplash.com/photo-1641579281152-e5d633aa3775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  },

  {
    id: "2",
    img: "https://ecospend.com/wp-content/uploads/2021/10/logoOk3-01-300x150.png",
    title: "Ecospend",
    partner: "",
    technology: "WordPress",
    job: "BackEnd Developer",
    url: "https://ecospend.com/",
    category: "FinTech",
    description:
      "Proin faucibus sem in suscipit malesuada. Phasellus varius tristique gravida. Aliquam imperdiet, augue nec vehicula tempus, ipsum mauris dapibus erat, in laoreet nisl risus interdum nibh. ",
    isNovedad: true,
    featuredImage:
      "https://images.unsplash.com/photo-1641579281152-e5d633aa3775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  },

  {
    id: "3",
    img: "https://buscatucoach.com/wp-content/uploads/2020/12/Cursos-BuscaTuCoach.png",
    title: "Busca tu coach",
    partner: "",
    technology: "WordPress",
    job: "FrontEnd Developer",
    url: "https://buscatucoach.com/",
    category: "App",
    description:
      "Nam quis est et velit aliquam sodales. Nam ac massa dolor. Duis placerat massa sit amet sollicitudin hendrerit. Sed vel mauris in mi vehicula fermentum. Nunc fermentum enim quis lacus laoreet fermentum. ",
    isNovedad: true,
    featuredImage:
      "https://images.unsplash.com/photo-1641579281152-e5d633aa3775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  },
  {
    id: "4",
    img: "https://www.audiencemakerssa.com/assets/img/Logo%20chico%20sin%20subt%20nuevo-blanco01-01-01.png",
    title: "Audience Makers",
    partner: "Uanaknow",
    technology: "Javascript",
    job: "FrontEnd Developer",
    url: "https://www.audiencemakerssa.com/",
    category: "Landing Page",
    description:
      "Nam quis est et velit aliquam sodales. Nam ac massa dolor. Duis placerat massa sit amet sollicitudin hendrerit. Sed vel mauris in mi vehicula fermentum. Nunc fermentum enim quis lacus laoreet fermentum. ",
    isNovedad: true,
    featuredImage:
      "https://images.unsplash.com/photo-1641579281152-e5d633aa3775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  },
  {
    id: "5",
    img: "https://www.fjcommunications.com/images/fj-communcations-red.png",
    title: "FJ Communicatios",
    partner: "Uanaknow",
    technology: "Javascript",
    job: "FrontEnd Developer",
    url: "https://www.fjcommunications.com//",
    category: "Landing Page",
    description:
      "Consultoría de comunicación y RR.PP. tanto en España, Europa, como LATAM y EEUU. Queremos ayudarte a comunicar, poner tu marca en movimiento y llenarla de contenido.  ",
    isNovedad: true,
    featuredImage:
      "https://images.unsplash.com/photo-1641579281152-e5d633aa3775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  },
  {
    id: "6",
    img: "https://www.fjcommunications.com/images/fj-communcations-red.png",
    title: "Marefish",
    partner: "TNP Creative",
    technology: "WordPress",
    job: "FrontEnd Developer",
    url: "https://www.marefish.es",
    category: "Ecommerce",
    description:
      "Se pesca por la noche, se descarga de madrugada, se subasta por la mañana, por la tarde viaja a MARE FISH y por la noche llega a nuestro puesto de Mercamadrid.",
    isNovedad: true,
    featuredImage:
      "https://images.unsplash.com/photo-1641579281152-e5d633aa3775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  },
  {
    id: "7",
    img: "https://www.fjcommunications.com/images/fj-communcations-red.png",
    title: "Auditor Bot",
    partner: "Shake Again",
    technology: "Laravel",
    job: "Project Managment",
    url: "https://auditorbot.com/",
    category: "Web Scraping App",
    description:
      "App realizada en Laravel para brindar informacion de pricing a responsables de ecommerce. Mi tarea tuvo que ver con liderar el proceso de desarrollo y los entregables",
    isNovedad: true,
    featuredImage:
      "https://images.unsplash.com/photo-1641579281152-e5d633aa3775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
  },
];

export default projects;
