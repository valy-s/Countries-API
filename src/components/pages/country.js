import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Btn from "../btn/btn.js";
import SortData from "../../functions/sortData.js";

function Country({ match }) {
  const [country, setCountry] = React.useState([]);
  const [border, setBorder] = React.useState([]);
  const [name, setName] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      var data = await fetch(
        `https://restcountries.eu/rest/v2/name/${match.params.id}?fullText=true`
      ).then((res) => {
        return res.json();
      });
      setCountry(data);
      setBorder(data[0].borders);
    }
    fetchData();
  }, [match.params.id]);

  React.useEffect(() => {
    Promise.all(
      border.map((border) =>
        fetch(
          `https://restcountries.eu/rest/v2/alpha/${border.toLowerCase()}`
        ).then((res) => res.json())
      )
    ).then((borders) => {
      let bordersName = borders.map((border) => border.name);
      bordersName = SortData(bordersName);
      setName(bordersName);
    });
  }, [border]);

  return (
    <>
      <button className="backBtn">
        <Link to="/">
          <FontAwesomeIcon className="nav__icon" icon={faArrowLeft} />
          <span>Back</span>
        </Link>
      </button>

      {country.map((item) => {
        return (
          <div className="mainWrapper">
            <div className="countryFlag">
              <img src={item.flag} alt={`${item.name}-flag`} />
            </div>
            <div className="countryInfo__wrapper">
              <h1 className="countryName">{item.name}</h1>
              <div className="countryInfo">
                <div className="countryInfo__left">
                  <h3>
                    Native Name: <span>{item.nativeName}</span>
                  </h3>
                  <h3>
                    Population: <span>{item.population.toLocaleString()}</span>
                  </h3>
                  <h3>
                    Region: <span>{item.region}</span>
                  </h3>
                  <h3>
                    Sub Region: <span>{item.subregion}</span>
                  </h3>
                  <h3>
                    Capital: <span>{item.capital}</span>
                  </h3>
                </div>
                <div className="countryInfo__right">
                  <h3>
                    Top Level Domain: <span>{item.topLevelDomain}</span>
                  </h3>
                  <h3>
                    Currencies:{" "}
                    <span>
                      {item.currencies.map((curr, index) =>
                        index === item.currencies.length - 1
                          ? `${curr.name}`
                          : `${curr.name} , `
                      )}
                    </span>
                  </h3>
                  <h3>
                    Languages:{" "}
                    <span>
                      {item.languages.map((lang, index) =>
                        index === item.languages.length - 1
                          ? `${lang.name} `
                          : `${lang.name} , `
                      )}
                    </span>
                  </h3>
                </div>
              </div>
              <div className="borders">
                <h3>Border Countries: </h3>
                {name.length <= 0 ? (
                  <Btn key="N/A" link="/" text="N/A" />
                ) : (
                  name.map((item) => (
                    <Btn key={item} link={`/${item}`} text={item} />
                  ))
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Country;
