import React from "react";
import { TableConfig } from "./Types/TableConfig";
import "./styles.modules.css";

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
  return (
    <div>
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
          {data.map((row, rowIndex) => (
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
