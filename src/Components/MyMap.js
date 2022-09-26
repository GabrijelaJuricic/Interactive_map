import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useRecoilState } from "recoil";
import { fetchedGeoJsonDataState } from "../atoms";
import "./MyMap.css";

const MyMap = () => {
  const [fetchedGeoJsonData, setFetchedGeoJsonData] = useRecoilState(
    fetchedGeoJsonDataState
  );

  useEffect(() => {
    fetch("https://plovput.li-st.net/getObjekti/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFetchedGeoJsonData(data);
      });
  }, []);

  console.log(fetchedGeoJsonData.features);

  return (
    <MapContainer
      center={[44.663689, 16.278737]}
      zoom={7}
      maxBounds={[
        [47, 12.5],
        [41.9, 20],
      ]}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker
        key={Math.random()}
        position={[45.8115689798883, 15.914671526419859]}
      ></Marker>
    </MapContainer>
  );
};
export default MyMap;
