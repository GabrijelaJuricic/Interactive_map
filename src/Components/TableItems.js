import React from "react";

const TableItems = (props) => {
  return (
    <tr scope="row">
      <td>{props.naziv}</td>
      <td>{props.ps_br}</td>
      <td>{props.e_br}</td>
      <td>{props.tip_objekta}</td>
      <td>{props.lucka_kapetanija}</td>
    </tr>
  );
};

export default TableItems;
