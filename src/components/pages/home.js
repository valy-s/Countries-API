import SearchBar from "../searchBar/searchBar.js";
import Dropdown from "../dropdown/dropdown.js";
import FetchData from "../../functions/fetchData.js";
import DisplayData from "../../functions/displayData.js";
import React from "react";

function Home() {
  const countries = FetchData();
  const [filtered, setFiltered] = React.useState([]);

  function search(e) {
    let filtered = countries.filter((country) => {
      return country.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    return setFiltered(filtered);
  }

  function filterRegion(e) {
    if (e.target.textContent === "All") {
      e.target.parentElement.classList.remove("show__dd");
      const ddIcon = document.querySelector(".dd__icon");
      ddIcon.classList.toggle("dd__icon__down");
      return setFiltered(countries);
    }
    let regionFilter = countries.filter((country) => {
      return (
        country.region.toLowerCase() === e.target.textContent.toLowerCase()
      );
    });
    e.target.parentElement.classList.remove("show__dd");
    const ddIcon = document.querySelector(".dd__icon");
    ddIcon.classList.toggle("dd__icon__down");
    return setFiltered(regionFilter);
  }

  React.useEffect(() => {
    setFiltered(countries);
  }, [countries]);

  React.useEffect(() => {
    DisplayData(filtered);
  }, [filtered]);

  return (
    <>
      <div className="searchWrapper">
        <SearchBar onChange={search} />
        <Dropdown countries={countries} onClick={filterRegion} />
      </div>
      <div className="cardsWrapper">{DisplayData(filtered)}</div>
    </>
  );
}

export default Home;
