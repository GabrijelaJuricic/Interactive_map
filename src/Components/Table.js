import React, { Fragment, useEffect } from "react";
import jsonData from "../data/data.json";
import TableItems from "./TableItems";
import Pagination from "./Pagination";
import { useRecoilState, useRecoilValue } from "recoil";
import { paginatedGeoJsonDataState, selectedPageState } from "../atoms";
import "./Table.css";

const Table = () => {
  const [paginatedGeoJsonData, setPaginatedGeoJsonData] = useRecoilState(
    paginatedGeoJsonDataState
  );
  const selectedPage = useRecoilValue(selectedPageState);

  useEffect(() => {
    setPaginatedGeoJsonData(
      jsonData.features.slice(selectedPage * 20, (selectedPage + 1) * 20)
    );
  }, [selectedPage]);

  return (
    <Fragment>
      <div className="container">
        <div className="table-container">
          <table className="table table-striped table-bordered w-50 rounded mb-3 shadow-lg bg-white rounded">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="text-center align-middle"
                  style={{ width: "51%" }}
                >
                  Naziv
                </th>
                <th
                  scope="col"
                  className="text-center align-middle"
                  style={{ width: "10%" }}
                >
                  Ps_br
                </th>
                <th
                  scope="col"
                  className="text-center align-middle"
                  style={{ width: "10%" }}
                >
                  E_br
                </th>
                <th
                  scope="col"
                  className="text-center align-middle"
                  style={{ width: "10%" }}
                >
                  Tip
                </th>
                <th
                  scope="col"
                  className="text-center align-middle"
                  style={{ width: "18%" }}
                >
                  Lučka kapetanija
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedGeoJsonData.map((data) => (
                <TableItems
                  naziv={data.properties.naziv_objekta}
                  ps_br={data.properties.ps_br}
                  e_br={data.properties.e_br}
                  tip_objekta={data.properties.tip_objekta}
                  lucka_kapetanija={data.properties.lucka_kapetanija}
                ></TableItems>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination />
      </div>
    </Fragment>
  );
};

export default Table;
