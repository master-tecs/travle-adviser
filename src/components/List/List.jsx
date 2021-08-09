import { CircularProgress } from "@material-ui/core";
import { useState } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import "./List.scss";

function List({ places }) {
  const [type, setType] = useState("resturants");
  const [rating, setRating] = useState("");

  return (
    <div className="list">
      <h4>Restaurants, Hotels, and Attractions around you</h4>
      <form action="">
        <label>Type</label>
        <select
          name=""
          value={type}
          onChange={(e) => setType(e.target.value)}
          id=""
        >
          <option value="restaurants">Restaurants</option>
          <option value="hotels">Hotels</option>
          <option value="attractions">Attractions</option>
        </select>
      </form>

      <form action="">
        <label for="rating">Rating</label>
        <select
          name=""
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          id=""
        >
          <option value={0}>All</option>
          <option value={3}>Above 3</option>
          <option value={4}>Above 4</option>
          <option value={4.5}>Above 4.5</option>
        </select>
      </form>

      <div className="list__container">
        {places?.map((place, index) => (
          <div className="list__container--item" key={index}>
            <PlaceDetails place={place} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
