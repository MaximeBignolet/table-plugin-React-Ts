import React, { useEffect, useState } from "react";
import { TableConfig } from "./Types/TableConfig";
import "./styles.modules.css";
import { Paginate } from "../Pagination";

interface TableProps {
  columns: TableConfig[];
  data: Record<string, string>[];
}

export const Table = ({ columns, data }: TableProps): React.ReactElement => {
  const [displayItems, setDisplayItems] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handlePagination = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleChangeItemsPerPage = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const numItems = Number(e.target.value);
    setItemsPerPage(numItems);
    setCurrentPage(1);
  };

  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setDisplayItems(data.slice(start, end));
  }, [data, currentPage, itemsPerPage]);

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
          {displayItems.map((row, rowIndex) => (
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
          Showing 1 to {displayItems.length} of {data.length}
        </p>
        <div className="pagination_container">
          <Paginate
            currentPage={currentPage}
            totalPages={Math.ceil(data.length / itemsPerPage)}
            handlePagination={handlePagination}
          />
        </div>
      </div>
    </div>
  );
};
