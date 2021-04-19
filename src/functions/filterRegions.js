const useSet = (arr) => {
  return [...new Set(arr)];
};

function FilterRegions(props) {
  //   const [region, setRegion] = React.useState([]);

  let regions = props.map((country) => {
    return country.region;
  });

  regions = useSet(regions);

  //   setRegion(regions);
  return regions;
}

export default FilterRegions;
