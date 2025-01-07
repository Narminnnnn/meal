import React, { useState, useEffect } from "react";
import "./Search.css";
import { CiSearch } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import axios from "axios";

const Search = () => {
  const [search, setSearch] = useState(""); 
  const [data, setData] = useState([]); 
  const [filteredData, setFilteredData] = useState([]); 
  const [loading, setLoading] = useState(false); 

  const getApi = async () => {
    setLoading(true); 
    try {
      const res = await axios.get("https://dummyjson.com/recipes");
      setTimeout(() => {
        setData(res.data.recipes); 
        setFilteredData(res.data.recipes); 
        setLoading(false); 
      }, 1000);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); 
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase(); 
    setSearch(value); 

    if (value !== "a-z" && value !== "z-a") {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(value)
      );
      setFilteredData(filtered);
    }
  };

  const handleSort = (order) => {
    let sorted = [...data];
    if (order === "a-z") {
      sorted.sort((a, b) => a.name.localeCompare(b.name)); // A-Z sıralama
    } else if (order === "z-a") {
      sorted.sort((a, b) => b.name.localeCompare(a.name)); // Z-A sıralama
    }
    setFilteredData(sorted);
  };

  return (
    <>
      <section className="productSection">
        <div className="combineSearch">
          <div className="home">
            <button className="homebtn">
              <a href="/"><IoHome /> </a>
            </button>
          </div>
          <div className="textProduct">
            <h2 className="partName">Search Product</h2>
          </div>
        </div>

        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="searchInp"
            placeholder="Find something..."
            value={search}
            onChange={handleSearch}
          />
          <CiSearch />
        </form>
<div className="sortAZ">

        <button className="sort" onClick={() => handleSort("a-z")}>A-Z</button>
        <button className="sort" onClick={() => handleSort("z-a")}>Z-A</button>
</div>

        <div className="containerSearch">
          {loading ? (
            <img src={"https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"} alt="loading..." />
          ) : filteredData.length > 0 ? (
            <div className="axios-boxs">
              {filteredData.map((item) => (
                <div className="axios-box" key={item.id}>
                  <div className="cart">
                    <div className="image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="cartText">
                      <h3 className="cartName">{item.name}</h3>
                      <p className="cartAbout">{item.instructions}</p>
                    </div>
                    <div className="price">
                      <p className="dollar">{item.rating}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Search;
