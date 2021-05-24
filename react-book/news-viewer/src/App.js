import React, { useCallback, useState } from "react";

import "./App.css";
import NewsList from "./components/NewsList/NewsList";
import Categories from "./components/categories/Categories";

function App() {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />;
    </>
  );
}

export default App;
