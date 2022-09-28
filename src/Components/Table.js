import React from "react";
import jsonData from "../data/data.json";
import TableItems from "./TableItems";
import "./Table.css";

const Table = () => {
  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th scope="col">Naziv</th>
          <th scope="col">Ps_br</th>
          <th scope="col">E_br</th>
          <th scope="col">Tip objekta</th>
          <th scope="col">Lučka kapetanija</th>
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
  );
};

export default Table;
