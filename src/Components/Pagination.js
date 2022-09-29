import React from "react";
import { useRecoilState } from "recoil";
import { selectedPageState } from "../atoms";

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
    <div className="pag-button">
      <button onClick={previousPageHandler}>-</button>
      <p>{selectedPage + 1}</p>
      <button onClick={nextPageHandler}>+</button>
    </div>
  );
};

export default Pagination;
