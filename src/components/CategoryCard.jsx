import { Link } from "react-router-dom";

const CategoryCard = ({ categoriesList }) => {
  return (
    <div>
      <ul>
        {categoriesList.map((category) => {
          return (
            <li className="categoriesList" key={category.slug}>
              <p className="category-title">Category:</p>
              <p> {category.slug}</p>
              <p className="category-title">Description: </p>
              <p>{category.description}</p>

              <Link
                to={`/categories/${category.slug}/reviews?category=${category.slug}`}
              >
                <button className="button">See Reviews</button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryCard;
