import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Project = (props) => {
  const { img, title, author, id, category, description, technology } = props; // objet destructuring the properties

  const url = `/projectos/${id}`;

  const [style, setStyle] = useState({ display: "none" });

    const [readMore, setReadMore] = useState(false);


  return (
    <article
      className="project productBox"
      onMouseEnter={(e) => {
        setStyle({ display: "block" });
      }}
      onMouseLeave={(e) => {
        setStyle({ display: "none" });
      }}
    >
      <div className="imageContainer">
        <img src={img} alt="cover" className="imageSize" />
        {/* <Link to={url}>
          <div className="hoverState" style={style}>
            <button className="btn-comprar">Comprar</button>
          </div>
        </Link>*/}
      </div>
      <h1 className="book-title">{title}</h1>
      <h4>{author}</h4>
      <p className="Categoria" style={{ margin: "auto" }}>
        Business: {category}
      </p>
      <p className="Categoria" style={{ margin: "auto" }}>
        Tecnology: {technology}
      </p>
      <p>
        {/* {readMore ? description : `${description.substring(0, 200)}...`} */}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "show less" : "read more"}
        </button>
      </p>
      <Link to={url}>
        <div>
          <button className="btn-comprar">Comprar</button>
        </div>
      </Link>
    </article>
  );
};

export default Project;
