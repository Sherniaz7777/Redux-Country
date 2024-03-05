import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountry } from "./redux/slice/asyncActions/asyncActions";

const SearchCountry = () => {
  const { countryData, status, error } = useSelector((state) => state);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountry());
  }, [dispatch]);

  // console.log(countryData);

  const handlAddSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      dispatch(getCountry(searchQuery));
      setSearchQuery("");
    }
  };

  return (
    <div>
      <div className="container">
        <h1>Search Countries</h1>
        <div className="search">
          <form onSubmit={handlAddSearch}>
            <input
              type="text"
              placeholder="Search Country..."
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" onSubmit={handlAddSearch}>
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
        <ul>
          {countryData.map((el) => (
            <div key={el.cca3}>
              <h3 style={{padding:20, textAlign:'center', marginTop:20, color:'aliceblue'}}>{el.name.common}</h3>
              <div style={{display:"flex",gap:30, justifyContent:"center"}}>
                <img src={el.flags.png} alt="Flag" />
                <img style={{ width: 200 }} src={el.coatOfArms.png} alt="" />
              </div>
              <div style={{display:"flex", justifyContent:'center', gap:40, marginTop:40, color:'aliceblue', fontSize:25}}>
                <h3>Population: {el.population}</h3>
                
                <h3>Capital: {el.capital}</h3>
              </div>
              
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchCountry;
