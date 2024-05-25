/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { TableConfig } from "./Types/TableConfig";
import "./styles.modules.css";
import { Paginate } from "../Pagination";

/**
 * Props for the Table component.
 * @property {TableConfig[]} columns - Array of configurations for each column of the table.
 * @property {Record<string, string>[]} data - Array of objects, each representing a row of data.
 */
export interface TableProps {
  columns: TableConfig[];
  data: Record<string, any>[];
  columnQuery: string[];
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

export const Table = ({
  columns,
  data,
  columnQuery,
}: TableProps): React.ReactElement => {
  const [displayItems, setDisplayItems] = useState<Record<string, any>[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [lengthFilteredData, setLengthFilteredData] = useState<number | undefined>(0);

  const handlePagination = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  function handleSearchOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const searchValue = e.target.value.toLocaleLowerCase();

    if (searchValue === '') {
      setDisplayItems(data.slice(0, itemsPerPage));
      setLengthFilteredData(0);
      return;
    }
    const filteredData = data.filter((item) =>
      Object.entries(item).some(([key, value]) =>
        columnQuery.includes(key) && value.toString().toLowerCase().includes(searchValue)
      )
    );
    setDisplayItems(filteredData.slice(0, itemsPerPage));
    setLengthFilteredData(filteredData.length);
  }

  const handleChangeItemsPerPage = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(e.target.value)) ;
    setCurrentPage(1);
  };

  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const filteredData = lengthFilteredData === 0 ? data : data.slice(0, lengthFilteredData);

    setDisplayItems(filteredData.slice(start, end));
  }, [currentPage, itemsPerPage, data, lengthFilteredData]);

  return (
    <div>
      <div className="btn_container">
        <div className="select_container">
          Show{" "}
          <select
            name="itemsPerPage"
            id="itemsPerPage"
            onChange={handleChangeItemsPerPage}
            defaultValue={10}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <p>entries</p>
        </div>
        <div>
          {columnQuery && columnQuery.length > 0 ? (
            <form className="form_search">
              <label htmlFor="search">Search</label>
              <input
                type="search"
                name="search"
                id="search"
                onChange={handleSearchOnChange}
              />
            </form>
          ) : null}
        </div>
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
          {displayItems?.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td key={colIndex}>{row[col.dataKey]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="display_items_per_page">
        <p>
          Showing 1 to {displayItems?.length} of {data.length}
        </p>
        <div className="pagination_container">
          {lengthFilteredData === 0 ? (
            <Paginate
              currentPage={currentPage}
              totalPages={Math.ceil(data.length / itemsPerPage)}
              handlePagination={handlePagination}
            />
          ) : (
            <Paginate
              currentPage={currentPage}
              totalPages={Math.ceil(displayItems.length / itemsPerPage)}
              handlePagination={handlePagination}
            />
          )}
        </div>
      </div>
    </div>
  );
};
