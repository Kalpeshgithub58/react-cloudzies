import React from "react";
import DataTable from "react-data-table-component";
import PropTypes from "prop-types";




const Table = ({columns,columnsValues}) => {
  return (
    <>
      <DataTable columns={columns} data={columnsValues} />
    </>
  );
};

Table.propTypes = {
  title: PropTypes.string,
  columns: PropTypes.array,
  columnsValues: PropTypes.array,
};

export default Table;
