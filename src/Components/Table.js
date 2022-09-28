import React from "react";
import jsonData from "../data/data.json";
import TableItems from "./TableItems";
import "./Table.css";

const Table = () => {
  return (
    <div>
      <table className="table table-striped table-bordered w-50 rounded shadow-lg p-3 mb-5 bg-white rounded">
        <thead>
          <tr>
            <th scope="col" className="text-center align-middle">
              Naziv
            </th>
            <th scope="col" className="text-center align-middle">
              Ps_br
            </th>
            <th scope="col" className="text-center align-middle">
              E_br
            </th>
            <th scope="col" className="text-center align-middle">
              Tip objekta
            </th>
            <th scope="col" className="text-center align-middle">
              Lučka kapetanija
            </th>
          </tr>
        </thead>
        <tbody>
          {jsonData.features.map((data) => (
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
      {/* <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">
              Previous
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};

export default Table;
