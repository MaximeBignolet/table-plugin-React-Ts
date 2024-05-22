import React, { useEffect, useState } from "react";
import { TableConfig } from "./Types/TableConfig";
import "./styles.modules.css";
import { showItemsPerPage } from "./Utils/FiltersItemsPerPage";

/**
 * Props for the Table component.
 * @property {TableConfig[]} columns - Array of configurations for each column of the table.
 * @property {Record<string, string>[]} data - Array of objects, each representing a row of data.
 */
interface TableProps {
  columns: TableConfig[];
  data: Record<string, string>[];
}

/**
 * Renders a table with dynamic columns and data.
 *
 * Example usage:
 * ```jsx
 * const columns = [
 *   { title: "First Name", dataKey: "firstName" },
 *   { title: "Last Name", dataKey: "lastName" }
 * ];
 * const data = [
 *   { firstName: "John", lastName: "Doe" },
 *   { firstName: "Jane", lastName: "Doe" }
 * ];
 *
 * <Table columns={columns} data={data} />
 * ```
 *
 * @component
 * @param {TableProps} props - The props for the Table component.
 * @returns {React.ReactElement} - A React Element representing a table.
 */
export const Table = ({ columns, data }: TableProps): React.ReactElement => {
  const [itemsPerPage, setItemsPerPage] = useState(data);

  const handleChangeItemsPerPage = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const numItems = Number(e.target.value);
    const filteredData = showItemsPerPage(data, numItems);
    setItemsPerPage(filteredData);
  };

  useEffect(() => {
    setItemsPerPage(showItemsPerPage(data, 10));
  }, [data]);

  return (
    <div>
      <div className="btn_container">
        Show{" "}
        <select
          name="itemsPerPage"
          id="itemsPerPage"
          onChange={handleChangeItemsPerPage}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        entries
      </div>
      <table>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th scope="col" key={index}>
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {itemsPerPage.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td key={colIndex}>{row[col.dataKey]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
