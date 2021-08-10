import { useMediaQuery } from "@material-ui/core";
import GoogleMapReact from "google-map-react";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";
import "./Map.scss";

function Map({
  coordinates,
  setCoordinates,
  setBounds,
  places,
  setChildClicked,
}) {
  const isDesktop = useMediaQuery("(min-width: 600px");

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBBg16CLt9YlnDxrUb4ZYSTyVrUg8BkNI4" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => {
          setChildClicked(child);
        }}
      >
        {places?.map(
          (place, i) =>
            place.name && (
              <div
                className="map__place"
                lat={Number(place.latitude)}
                lng={Number(place.longitude)}
                key={i}
              >
                {!isDesktop ? (
                  <LocationOnOutlinedIcon />
                ) : (
                  <div className="map__place--c">
                    <p>{place.name}</p>
                    <img
                      src={place.photo ? place.photo.images.large.url : ""}
                      alt={place.name}
                    />
                    <Rating
                      size="small"
                      value={Number(place.rating)}
                      readOnly
                    />
                  </div>
                )}
              </div>
            )
        )}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
