import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const {
          id,
          title,
          img,
          description,
          category,
          job,
          url,
          featuredImage,
          technology,
        } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={featuredImage} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <a href={url} className="item-text">
                  <h4>{title}</h4>{" "}
                </a>
              </header>
              <h4 className="price">{technology}</h4>

              <p>{description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
