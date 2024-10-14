import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const received = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const jsonData = await received?.json();

    console.log(listOfRes);

    let resArray = await jsonData?.data?.cards;

    allRestraunts = resArray;

    setListOfRes(resArray);
    setFilteredRes(resArray);

    for (x = 0; x < 3; x++) {
      resArray.shift();
    }
  };

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurants = listOfRes.filter((res) =>
                res.card.card.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRes(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRes.filter(
              (res) => res.starRating >= 4.2
            );
            setFilteredRes(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      {/* <button className="clear-filters-btn" onClick={setFilteredRes(listOfRes)}>
        Clear Filters
      </button> */}
      <div className="restaurant-container">
        {filteredRes.map((restaurant) => (
          <RestaurantCard
            key={restaurant?.card?.card?.info?.id}
            restaurantsData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
