import { useDispatch, useSelector } from "react-redux";
import { FaTrash, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RemoveFavouriteCompany } from "../redux/actions";

const FavouriteCompany = () => {
  const companies = useSelector(state => state.favouriteCompany.content);

  const dispatch = useDispatch();

  return (
    <div className="my-4 mx-4">
      <div className="d-flex bg-light justify-content-center align-align-items-center">
        {companies.length > 0 ? (
          <>
            <FaStar className="stars-selected" />
            <h2 className="fw-bold m-0">Lista preferiti</h2>
          </>
        ) : (
          <h2 className="fw-bold bg-light text-center">
            Nessun preferito aggiunto
          </h2>
        )}
      </div>

      <ul className="list-group">
        {companies.map((company, i) => (
          <li
            key={`company-${company}-${i}`}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <Link className="link-pref" to={`/${company}`}>
              {company}
            </Link>
            <FaTrash
              onClick={() => {
                dispatch(RemoveFavouriteCompany(i));
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavouriteCompany;
