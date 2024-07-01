/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { TableConfig } from "./Types/TableConfig";
import "./styles.modules.css";
import { Paginate } from "../Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

/**
 * Props for the Table component.
 */
export interface TableProps {
  /**
   * Array of configurations for each column of the table.
   */
  columns: TableConfig[];
  /**
   * Array of objects, each representing a row of data.
   */
  data: Record<string, any>[];
  /**
   * Array of column names to be included in the search functionality.
   */
  columnQuery: string[];
  /**
   * Array of column names to be sorted.
   */
  colmunToSort: string[];
}

/**
 * Table component that displays data in a tabular format with pagination and search functionality.
 *
 * @param columns - An array of column objects that define the table columns.
 * @param data - An array of data objects to be displayed in the table.
 * @param columnQuery - An array of column names to be included in the search functionality.
 * @param colmunToSort - An array of column names to be sorted.
 * @returns A React element representing the table component.
 */
export const Table = ({
  columns,
  data,
  columnQuery,
  colmunToSort
}: TableProps): React.ReactElement => {
  const [displayItems, setDisplayItems] = useState<Record<string, any>[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [lengthFilteredData, setLengthFilteredData] = useState<number | undefined>(0);
  const [filteredDataArrayState, setFilteredDataArrayState] = useState<Record<string, any>[]>([]);
  const [hasUserClick, setHasUserClick] = useState<boolean>(false);
  const filteredDataArray: Record<string, any>[] = [];
  const filteredColumnToSort: Record<string, any>[] = [];

  /**
   * Handles the pagination functionality by updating the current page number.
   *
   * @param pageNumber - The page number to navigate to.
   */
  const handlePagination = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  /**
   * Handles the search functionality by filtering the data based on the search value.
   *
   * @param e - The change event object.
   */
  function handleSearchOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const searchValue = e.target.value.toLocaleLowerCase();

    if (searchValue === '') {
      setDisplayItems(data.slice(0, itemsPerPage));
      setLengthFilteredData(0);
      return;
    }
    data.forEach((item) => {
      const entries = Object.entries(item).filter(([key]) =>
        columnQuery.includes(key)
      );
      const valuesToCompare = entries.map((el) => el[1].toString().toLocaleLowerCase());
      const commonValues = valuesToCompare.filter((value) => value.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
      if (commonValues.length > 0) {
        filteredDataArray.push(item);
        setLengthFilteredData(filteredDataArray.length);
      }
    });
    setFilteredDataArrayState(filteredDataArray);
    setDisplayItems(filteredDataArray.slice(0, itemsPerPage));
    setLengthFilteredData(filteredDataArray.length);
  }

  //Filtrer par date aux différents formats

  /**
   * Handles the column sorting functionality.
   *
   * @param e - The click event object.
   */
  const getColumnToSort = (e: any) => {
    const colId = e.target.id;
    if (!colmunToSort.includes(colId)) return;
    data.forEach((item) => {
      const entriesToSort = Object.entries(item).filter(([key]) =>
        colmunToSort.includes(key)
      );
      entriesToSort.find(([key]) => {
        if (key === colId) {
          filteredColumnToSort.push(item);
        }
      }
      );
      setHasUserClick(!hasUserClick)
    })
    filteredColumnToSort.sort((a, b) => {
      const aValue = a[colId];
      const bValue = b[colId];
    
      const aValueIsDate = aValue instanceof Date;
      const bValueIsDate = bValue instanceof Date;
    
      if (aValueIsDate && bValueIsDate) {
        return hasUserClick ? bValue.getTime() - aValue.getTime() : aValue.getTime() - bValue.getTime();
      }
    
      if (!hasUserClick) {
        if (aValue < bValue) { return -1; }
        if (aValue > bValue) { return 1; }
      } else {
        if (aValue > bValue) { return -1; }
        if (aValue < bValue) { return 1; }
      }
      return 0;
    });    
    setDisplayItems(filteredColumnToSort.slice(0, itemsPerPage));
  }

  /**
   * Handles the change event of the items per page select element.
   *
   * @param e - The change event object.
   */
  const handleChangeItemsPerPage = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    if (lengthFilteredData === 0) {
      setDisplayItems(data.slice(start, end));
    } else {
      setDisplayItems(filteredDataArrayState.slice(start, end));
    }
  }, [currentPage, itemsPerPage, data, lengthFilteredData, filteredDataArrayState]);

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
            {columns.map((col) => (
              <th scope="col" key={col.dataKey} id={col.dataKey} onClick={getColumnToSort} className="cursor-pointer">
                {col.title} {colmunToSort.includes(col.dataKey) ? <FontAwesomeIcon icon={faSort} /> : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayItems?.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td key={colIndex}>
                  {row[col.dataKey] instanceof Date ?
                    row[col.dataKey].toLocaleDateString() :
                    row[col.dataKey]}
                </td>
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
