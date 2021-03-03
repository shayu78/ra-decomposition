import React from 'react';
import PropTypes from 'prop-types';

/**
 * Компонент «Биржевая катировка»: формирует биржевую котировку.
 */
export default function Quote(props) {
  const { item } = props;

  return (
    <li className='stocks__item'>
      <a className='stocks__item__link' href={item.link}>{item.name}</a>
      <span className='stocks__item__value'>{item.value}</span>
      <span className='stocks__item__delta'>{item.delta}</span>
      {item.delta_unit && <span className='stocks__item__delta__unit'>{item.delta_unit}</span>}
  </li>
  );
}

Quote.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    delta: PropTypes.number.isRequired,
    delta_unit: PropTypes.string,
  }),
};
