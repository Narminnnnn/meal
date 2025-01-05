import React, { useState, useEffect } from "react";
import "./Search.css";
import Header from "../../Components/Header/Header";
import { CiSearch } from "react-icons/ci";
import axios from "axios";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [data, setData] = useState([]); 
  const [filteredData, setFilteredData] = useState([]); 
  const [loading, setLoading] = useState(false); 

 
  const fetchData = async () => {
    setLoading(true); 
    try {
      const res = await axios.get("https://dummyjson.com/recipes");
      setData(res.data.recipes); 
      setFilteredData(res.data.recipes); 
      setLoading(false); 
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase(); 
    setSearchQuery(value); 

    
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <Header />
      <section className="productSection">
        <h2 className="partName">Search Product</h2>
        <form
          action="#"
          onSubmit={(e) => e.preventDefault()} 
        >
          <input
            type="text"
            className="searchInp"
            placeholder="Find something..."
            value={searchQuery}
            onChange={handleSearch} 
          />
          <CiSearch />
        </form>

        <div className="containerSearch">
          {loading ? (
            <p>Loading...</p>
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
