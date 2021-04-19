import Card from "../components/card/card.js";

function DisplayCountries(props) {
  let cards = props.map((country) => {
    const { numericCode, flag, name, population, region, capital } = country;
    return (
      <Card
        key={numericCode}
        flag={flag}
        name={name}
        population={population}
        region={region}
        capital={capital}
      />
    );
  });
  return cards;
}

export default DisplayCountries;
