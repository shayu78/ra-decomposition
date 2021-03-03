import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Quote from '../Quote/Quote';

/**
 * Компонент «Список биржевых котировок»: формирует список биржевых котировок.
 */
export default function Quotes(props) {
  const { data } = props;

  const id_data = data.map((value) => {
    value.id = nanoid();
    return value;
  });

  return (
    <div className="stocks">
      <ul className="stocks__items">
        {id_data.map((value) => <Quote key={value.id} item={value} />)}
      </ul>
    </div>
  );
}

Quotes.propTypes = {
  data: PropTypes.array.isRequired,
};
