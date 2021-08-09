import "./PlaceDetails.scss";

function PlaceDetails({ place }) {
  return <div className="placeDetails">{place.name}</div>;
}

export default PlaceDetails;
