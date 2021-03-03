import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

/**
 * Компонент «Фильтр новостей»: формирует список новостных категорий.
 */
export default function NewsFilter(props) {
  const { data, onSelectFilter } = props;

  const id_data = data.map((value) => {
    value.id = nanoid();
    return value;
  });

  return (
    <div className="news__filter">
      <ul className="news__filter__items">
        {id_data.map((value) => {
          return <li key={value.id} className='news__filter__item'
            onClick={() => onSelectFilter(value)}>
              <a className='news__filter__item__link' href={value.link}>
                <h3>{value.title}</h3>
              </a>
            </li>
        })}
      </ul>
    </div>
  );
}

NewsFilter.propTypes = {
  data: PropTypes.array.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
};
