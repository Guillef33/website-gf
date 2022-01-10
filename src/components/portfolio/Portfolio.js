import React, { useState } from "react";
import WebCard from "./WebCard";
import Categories from "./Categories";
import items from "../projects/projects.js";

import './portfolio.css';

//Get all the value of the cateogies prop
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, seCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <h2 className="title">My portfolio</h2>
        <Categories categories={categories} filterItems={filterItems} />
        <WebCard items={menuItems} />
      </section>
    </main>
  );
}

export default App;
