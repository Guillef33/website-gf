import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, img, description, category, job, url, featuredImage } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={featuredImage} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4 className="price">{job}</h4>
              </header>
              <h4>{title}</h4>
              <p>{category}</p>
              <p className="item-text">{url}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
