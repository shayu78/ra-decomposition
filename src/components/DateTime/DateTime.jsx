import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import "moment/locale/ru";

/**
 * Компонент «Дата»: отображает текущую дату и время в заданном формате или по умолчанию.
 */
export default function DateTime(props) {
  const { format } = props;

  return (
    <span className='date__time'>{moment().format(`${format}`)}</span>
  );
}

DateTime.defaultProps = {
  format: 'D MMMM, dddd LT',
};

DateTime.propTypes = {
  format: PropTypes.string,
};
