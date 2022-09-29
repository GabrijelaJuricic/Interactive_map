import React from "react";
import { useRecoilState } from "recoil";
import { selectedPageState } from "../atoms";
import "./Pagination.css";

const Pagination = () => {
  const [selectedPage, setSelectedPage] = useRecoilState(selectedPageState);

  const previousPageHandler = () => {
    if (selectedPage > 0) setSelectedPage((currPage) => currPage - 1);
  };

  const nextPageHandler = () => {
    // Edge case for disabling this button when
    // there is no more geoJson data still needs to be done
    setSelectedPage((currPage) => currPage + 1);
  };
  return (
    <div className="button-container">
      <button
        type="button"
        className="pagination-button"
        onClick={previousPageHandler}
      >
        Nazad
      </button>
      <h3>{selectedPage + 1}</h3>
      <button
        type="button"
        className="pagination-button"
        onClick={nextPageHandler}
      >
        Dalje
      </button>
    </div>
  );
};

export default Pagination;
