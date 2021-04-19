import { Link } from "react-router-dom";
function Card(props) {
  return (
    <Link to={`/${props.name}`}>
      <div className="card">
        <img className="card__img" src={props.flag} alt="country-flag" />
        <div className="card__content">
          <h1>{props.name}</h1>
          <div>
            <h2>
              Population: <span>{props.population.toLocaleString()}</span>
            </h2>
            <h2>
              Region: <span>{props.region}</span>
            </h2>
            <h2>
              Capital: <span>{props.capital}</span>
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
