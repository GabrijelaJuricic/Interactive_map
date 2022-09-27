import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useRecoilState } from "recoil";
import jsonData from "../data/data.json";
import {
  fetchedGeoJsonDataState,
  truthfulnessOfFetchedDataState,
} from "../atoms";
import "./MyMap.css";

const MyMap = () => {
  const [fetchedGeoJsonData, setFetchedGeoJsonData] = useRecoilState(
    fetchedGeoJsonDataState
  );
  const [dataIsFetched, setDataIsFetched] = useRecoilState(
    truthfulnessOfFetchedDataState
  );

  // --- Fetching and storing data --- //
  useEffect(() => {
    setFetchedGeoJsonData(jsonData.features);
  }, []);

  useEffect(() => {
    setDataIsFetched(true);
  }, [fetchedGeoJsonData]);

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

      {dataIsFetched &&
        fetchedGeoJsonData.map((point) => {
          return (
            <Marker
              key={Math.random()}
              position={[
                point.geometry.coordinates[1],
                point.geometry.coordinates[0],
              ]}
            ></Marker>
          );
        })}
    </MapContainer>
  );
};
export default MyMap;
