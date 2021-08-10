import { CircularProgress } from "@material-ui/core";
import { createRef, useEffect, useState } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import "./List.scss";

function List({
  places,
  childClicked,
  isLoading,
  type,
  setType,
  rating,
  setRating,
}) {
  const [elRefs, setElRefs] = useState([]);
  console.log({ childClicked });

  useEffect(() => {
    const refs = Array(places?.length)
      .fill()
      .map((_, i) => elRefs[i] || createRef());

    setElRefs(refs);
  }, [places]);

  return (
    <div className="list">
      <h3>Restaurants, Hotels, and Attractions around you</h3>
      {isLoading ? (
        <div className="loading">
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <div className="list__forms">
            <form action="">
              <label>Type</label>
              <select
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                id="type"
              >
                <option value="restaurants">Restaurants</option>
                <option value="hotels">Hotels</option>
                <option value="attractions">Attractions</option>
              </select>
            </form>

            <form action="">
              <label for="rating">Rating</label>
              <select
                name="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                id="rating"
              >
                <option value={0}>All</option>
                <option value={3}>Above 3</option>
                <option value={4}>Above 4</option>
                <option value={4.5}>Above 4.5</option>
              </select>
            </form>
          </div>

          <div className="list__container">
            {places?.map((place, index) => (
              <div className="list__container--item" key={index}>
                {place.name ? (
                  <PlaceDetails
                    selected={Number(childClicked) === index}
                    refProp={elRefs[index]}
                    place={place}
                  />
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default List;
