import { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import { fetchCategories } from "../api";

const Categories = () => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchCategories().then((categories) => {
      setCategoriesList(categories);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="loader">
        <span className="loader-text">loading</span>
        <span className="load"></span>
      </div>
    );
  }
  return (
    <div>
      <h2>Here is a list of the categorgies:</h2>
      <CategoryCard categoriesList={categoriesList}></CategoryCard>
    </div>
  );
};

export default Categories;
