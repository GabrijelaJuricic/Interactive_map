import { atom } from "recoil";

export const fetchedGeoJsonDataState = atom({
  key: "fetchedGeoJsonDataState",
  default: [],
});

export const truthfulnessOfFetchedDataState = atom({
  key: "truthfulnessOfFetchedDataState",
  default: false,
});

export const selectedPageState = atom({
  key: "selectedPageState",
  default: 0,
});
export const paginatedGeoJsonDataState = atom({
  key: "paginatedGeoJsonDataState",
  default: [],
});
