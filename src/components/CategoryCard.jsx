import { Link } from "react-router-dom";

const CategoryCard = ({ categoriesList }) => {
  return (
    <div>
      <ul>
        {categoriesList.map((category) => {
          return (
            <li className="categoriesList" key={category.category_id}>
              <p>Category: {category.slug}</p>
              <p>Description: {category.description}</p>

              <Link to={`categories/reviews`}>
                <button>See Reviews</button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryCard;
