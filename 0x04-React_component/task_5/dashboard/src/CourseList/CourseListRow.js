import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow(props) {
  const isHeader = props.isHeader;
  const textFirstCell = props.textFirstCell;
  const textSecondCell = props.textSecondCell;
  let rows;

  if (isHeader) {
    if (textSecondCell == null) {
      rows = <th colSpan="2">{textFirstCell}</th>
    } else {
      rows = (
        <>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </>
      )
    }
  } else {
    rows = (
      <>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </>
    )
  }

  return (
    <tr>{rows}</tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
}

export default CourseListRow;
