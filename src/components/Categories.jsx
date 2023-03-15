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
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h2>Here is a list of the categorgies:</h2>
      <CategoryCard categoriesList={categoriesList}></CategoryCard>
    </div>
  );
};

export default Categories;
