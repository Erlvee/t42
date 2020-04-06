import React, { useState } from "react";

function Tables() {
    const object = [{id1: "15.00-17.00", id2: "17.00-19.00",
                    id3: "19.00"-"21.00", id4: "21.00-23.00"}];
  const tableTimes = [
    "15.00 - 17.00",
    "17.00 - 19.00",
    "19.00 - 21.00",
    "21.00 - 23.00"
  ];
  const [initTable, renderTable] = useState(false);
  const [selectedRow, setSelectedRow] = useState(false);
  const [value, setValue] = useState("");
  const [emailConfirm, setEmailConfirm] = useState(false);

  const handleChange = event => {
    setValue((event.target.className = "tbodyTd selected"));
  };

  const tableRows = () => {
    const TableList = () =>
      tableTimes.map(item => (
        <tr className="timesTr" key={item}>
          <td
            className={`tbodyTd ${!selectedRow ? "" : "selected"}`}
            style={{ backgroundColor: colorTableCells() }}
            onClick={() => setSelectedRow(!selectedRow)}
          >
            {item}
          </td>
        </tr>
      ));

    return (
      <table className="tableTimes">
        <thead>
          <tr>
            <th className="tableHead">Times Available</th>
          </tr>
        </thead>
        <tbody className="tbody">
          <TableList />
        </tbody>
      </table>
    );
  };

  const colorTableCells = () => {
    const colors = ["rgba(0,128,0, 0.5)"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  };

  const handleRowClick = () => {
    setSelectedRow();
  };

  return (
    <div className="tableContainer">
      <h3>I would like a table for</h3>
      <div className="tableBtnContainer">
        <input
          type="button"
          value="1-2"
          onClick={() => renderTable(!initTable)}
        />
        <input type="button" value="3-4" />
        <input type="button" value="4-6" />
      </div>
      <div>{initTable && tableRows()}</div>
      <div id="bookTableBtn">
        {initTable && (
          <button onClick={() => setEmailConfirm(!emailConfirm)}>
            Book table
          </button>
        )}
      </div>
      <div>{emailConfirm && 
        <p>Confirmation sent to somemail@mail.com</p>}
      </div>
    </div>
  );
}

export default Tables;