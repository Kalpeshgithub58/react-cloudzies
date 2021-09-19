import React from "react";
import DataTable from "react-data-table-component";
import PropTypes from "prop-types";
import Loader from "../Loader/Loader";
import "./Table.scss";

const Table = ({ columns, columnsValues, isLoading, title }) => {
  return (
    <div>
      <div className="table-title">
        <h1>{title}</h1>
      </div>
      {isLoading ? (
        <div className="center">
          <Loader />
        </div>
      ) : (
        <DataTable columns={columns} data={columnsValues} pagination />
      )}
    </div>
  );
};

Table.propTypes = {
  title: PropTypes.string,
  columns: PropTypes.array,
  columnsValues: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default Table;
