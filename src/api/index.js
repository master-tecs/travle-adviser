import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "x-rapidapi-key":
            "d6a0684878msh590feb05d0c3a8ap19e736jsn6e80d2183ed5",
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    console.log("DATA", data);
    return data;
  } catch (error) {
    console.log("ERROR", error);
  }
};
