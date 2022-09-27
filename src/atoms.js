import { atom } from "recoil";

export const fetchedGeoJsonDataState = atom({
  key: "fetchedGeoJsonDataState",
  default: [],
});

export const truthfulnessOfFetchedDataState = atom({
  key: "truthfulnessOfFetchedDataState",
  default: false,
});
