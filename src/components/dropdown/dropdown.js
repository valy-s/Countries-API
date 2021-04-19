import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function showDropdown() {
  const ddList = document.querySelector(".dd__list");
  const ddIcon = document.querySelector(".dd__icon");
  const ddWrapper = document.querySelector(".dd__wrapper");

  const ddWrapperPos = ddWrapper.getBoundingClientRect();
  const top = ddWrapperPos.bottom + window.pageYOffset + 10;
  ddList.style.top = `${top}px`;

  ddList.classList.toggle("show__dd");
  ddIcon.classList.toggle("dd__icon__down");
}

function filterRegions(countries) {
  let regions = [];
  countries.map((country) => {
    if (!regions.includes(country.region)) {
      regions.push(country.region);
    }
    return country.region;
  });
  return ["All", ...regions];
}

function Dropdown(props) {
  return (
    <div className="dd__wrapper">
      <div className="dd__header" onClick={showDropdown}>
        <div className="dd__header__title">
          <span>Filter by Region</span>
          <FontAwesomeIcon className="dd__icon" icon={faChevronDown} />
        </div>
      </div>
      <ul className="dd__list">
        {filterRegions(props.countries).map((region) => {
          return (
            <li className="dd__list__item" key={region} onClick={props.onClick}>
              {region}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Dropdown;
