import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";
import "./PlaceDetails.scss";

function PlaceDetails({ place, selected, refProp }) {
  if (selected) {
    refProp?.current?.scrollIntoView({ bahaviour: "smooth", block: "start" });
  }

  return (
    <div className="placeDetails">
      <img src={place.photo && place.photo.images.large.url} alt="" />
      <h3>{place.name}</h3>
      <div className="placeDetails__content">
        <Rating value={Number(place.rating)} readOnly />
        <p>out of {place.num_reviews} reviews</p>
      </div>
      <div className="placeDetails__content">
        <p>Price</p>
        <p>{place.price_level}</p>
      </div>
      <div className="placeDetails__content">
        <p>Ranking</p>
        <p>{place.ranking}</p>
      </div>
      {place?.awards?.map((award, i) => (
        <div className="placeDetails__award" key={i}>
          <img src={award.images.small} alt={award.display_name} />
          <p>{award.display_name}</p>
        </div>
      ))}
      <div className="placeDetails__cuisine">
        {place?.cuisine?.map(({ name }) => (
          <div className="placeDetails__cuisine--c" key={name}>
            <span>{name}</span>
          </div>
        ))}
      </div>
      {place?.address && (
        <div className="placeDetails__address">
          <LocationOnIcon />
          {place.address}
        </div>
      )}
      {place?.phone && (
        <div className="placeDetails__phone">
          <PhoneIcon />
          {place.phone}
        </div>
      )}

      <div className="placeDetails__cta">
        <button
          className="btn btn-primary"
          onClick={() => window.open(place.web_url, "_blank")}
        >
          Tiip Adviser
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => window.open(place.website, "_blank")}
        >
          Website
        </button>
      </div>
    </div>
  );
}

export default PlaceDetails;
