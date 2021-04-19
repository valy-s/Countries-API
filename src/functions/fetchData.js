import React from "react";

const url = "https://restcountries.eu/rest/v2/all";

function FetchData() {
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      var data = await fetch(url).then((res) => {
        return res.json();
      });
      setCountries(data);
      localStorage.setItem("Countries", data);
    }
    fetchData();
  }, []);

  return countries;
}

export default FetchData;
