import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import List from "./components/List/List";
import { getPlacesData } from "./api/index";
import "./App.scss";
import { useEffect, useState } from "react";

function App() {
  const [places, setPlaces] = useState([]);
  const [fliteredPlases, setFliteredPlases] = useState([]);
  const [coordinates, setCoordinates] = useState();
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [autocomplete, setAutocomplete] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const fliteredPlaces = places.filter((place) => place.rating > rating);
    setFliteredPlases(fliteredPlaces);
  }, [rating]);

  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);

      getPlacesData(type, bounds?.sw, bounds?.ne).then((data) => {
        setPlaces(
          data?.fliteredPlaces((place) => place.name && place.num_reviews > 0)
        );
        setIsLoading(false);
      });
    }
  }, [type, bounds]);

  const onLoad = (autocomplete) => setAutocomplete(autocomplete);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.lat();
    const lng = autocomplete.getPlace().geometry.lng();
    setCoordinates({ lat, lng });
  };

  return (
    <div className="app">
      <Header onLoad={onLoad} onPlaceChanged={onPlaceChanged} />
      <div className="container">
        <List
          places={fliteredPlases.length ? fliteredPlases : places}
          childClicked={childClicked}
          isLoading={isLoading}
          type={type}
          setType={setType}
          rating={rating}
          setRating={setRating}
        />
        <Map
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
          places={fliteredPlases.length ? fliteredPlases : places}
          setChildClicked={setChildClicked}
        />
      </div>
    </div>
  );
}

export default App;
