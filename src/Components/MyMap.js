import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useRecoilState } from "recoil";
import L from "leaflet";
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
      maxZoom={19}
      minZoom={7}
      maxBounds={[
        [47, 12.5],
        [41.9, 20],
      ]}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MarkerClusterGroup>
        {dataIsFetched &&
          fetchedGeoJsonData.map((point) => {
            return (
              <Marker
                key={Math.random()}
                position={[
                  point.geometry.coordinates[1],
                  point.geometry.coordinates[0],
                ]}
                icon={L.icon({
                  iconUrl:
                    "https://img.icons8.com/external-bearicons-outline-color-bearicons/64/000000/external-Port-location-bearicons-outline-color-bearicons.png",
                  iconSize: [34, 34],
                  iconAnchor: [15, 33],
                  popupAnchor: [2, -35],
                })}
              >
                <Popup className="popup">
                  <ul>
                    <li>
                      <strong>Naziv:</strong> {point.properties.naziv_objekta}
                    </li>
                    <li>
                      <strong>Ps_br:</strong> {point.properties.ps_br}
                    </li>
                    <li>
                      <strong>E_br:</strong> {point.properties.e_br}
                    </li>
                    <li>
                      <strong>Tip objekta:</strong>{" "}
                      {point.properties.tip_objekta}
                    </li>
                    <li>
                      <strong>Lučka kapetanija:</strong>{" "}
                      {point.properties.lucka_kapetanija}
                    </li>
                  </ul>
                </Popup>
              </Marker>
            );
          })}
      </MarkerClusterGroup>
    </MapContainer>
  );
};
export default MyMap;
