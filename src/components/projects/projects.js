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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut orci id elit varius gravida vel eget augue. Morbi laoreet luctus quam vel tempor. Pellentesque a maximus nibh. In hac habitasse platea dictumst. Aenean in metus et diam maximus tincidunt. Praesent luctus nulla mollis, pulvinar leo eu, aliquam tellus. Proin porttitor odio non lectus venenatis, at ultrices metus aliquam. Integer dictum dolor sed bibendum placerat. Nunc sit amet ultricies nibh, mattis dignissim velit. ",
    isNovedad: true,
    featuredImage: 'https://images.unsplash.com/photo-1641579281152-e5d633aa3775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'
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
      "Proin faucibus sem in suscipit malesuada. Phasellus varius tristique gravida. Aliquam imperdiet, augue nec vehicula tempus, ipsum mauris dapibus erat, in laoreet nisl risus interdum nibh. Phasellus dignissim dui et libero mollis venenatis. Sed fringilla consequat turpis, at tincidunt ligula tempus sed. Nunc in venenatis purus, in scelerisque tellus. Vivamus ut felis risus. Mauris nunc odio, vehicula eget porttitor laoreet, vehicula id lorem. Phasellus luctus elit ligula, at pulvinar magna aliquet ac. Mauris libero lectus, eleifend ac vulputate sit amet, convallis vitae libero. Donec ut nibh purus. Ut vel lacus et leo congue accumsan. Cras feugiat molestie tincidunt. ",
    isNovedad: true,
    featuredImage: 'https://images.unsplash.com/photo-1641579281152-e5d633aa3775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'
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
      "Nam quis est et velit aliquam sodales. Nam ac massa dolor. Duis placerat massa sit amet sollicitudin hendrerit. Sed vel mauris in mi vehicula fermentum. Nunc fermentum enim quis lacus laoreet fermentum. Etiam vel posuere lacus, at pulvinar velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc molestie ex eu scelerisque mollis. Quisque vitae arcu vitae orci volutpat imperdiet ut in ipsum. Integer et lectus a ipsum consequat dictum quis at enim. Sed in tristique quam, id dignissim turpis. Donec mattis augue lacus, vel condimentum nunc convallis quis. Donec pellentesque lobortis rutrum. Nunc vel ex ultricies, cursus tortor ac, vulputate dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. ",
    isNovedad: true,
    featuredImage: 'https://images.unsplash.com/photo-1641579281152-e5d633aa3775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'
  },
  {
    id: "4",
    img: "https://www.audiencemakerssa.com/assets/img/Logo%20chico%20sin%20subt%20nuevo-blanco01-01-01.png",
    title: "Audience Makers",
    partner: "Uanaknow",
    technology: "HTML, CSS, JS, Bootstrap",
    job: "FrontEnd Developer",
    url: "https://www.audiencemakerssa.com/",
    category: "Landing Page",
    description:
      "Nam quis est et velit aliquam sodales. Nam ac massa dolor. Duis placerat massa sit amet sollicitudin hendrerit. Sed vel mauris in mi vehicula fermentum. Nunc fermentum enim quis lacus laoreet fermentum. Etiam vel posuere lacus, at pulvinar velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc molestie ex eu scelerisque mollis. Quisque vitae arcu vitae orci volutpat imperdiet ut in ipsum. Integer et lectus a ipsum consequat dictum quis at enim. Sed in tristique quam, id dignissim turpis. Donec mattis augue lacus, vel condimentum nunc convallis quis. Donec pellentesque lobortis rutrum. Nunc vel ex ultricies, cursus tortor ac, vulputate dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. ",
    isNovedad: true,
    featuredImage: 'https://images.unsplash.com/photo-1641579281152-e5d633aa3775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'
  },
  {
    id: "5",
    img: "https://www.fjcommunications.com/images/fj-communcations-red.png",
    title: "FJ Communicatios",
    partner: "Uanaknow",
    technology: "HTML, CSS, JS, Bootstrap",
    job: "FrontEnd Developer",
    url: "https://www.fjcommunications.com//",
    category: "Landing Page",
    description:
      "Consultoría de comunicación y RR.PP. tanto en España, Europa, como LATAM y EEUU. Queremos ayudarte a comunicar, poner tu marca en movimiento y llenarla de contenido.  ",
    isNovedad: true,
    featuredImage: 'https://images.unsplash.com/photo-1641579281152-e5d633aa3775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'
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
      "Se pesca por la noche, se descarga de madrugada, se subasta por la mañana, por la tarde viaja a MARE FISH y por la noche llega a nuestro puesto de Mercamadrid, lo preparamos COMO TÚ QUIERAS y te lo llevamos a tú casa, pasando horas en ese proceso. Ajustes de SEO. Integrado con RedSys como plataforma de pago.",
    isNovedad: true,
    featuredImage: 'https://images.unsplash.com/photo-1641579281152-e5d633aa3775?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'
  }
];

export default projects;
