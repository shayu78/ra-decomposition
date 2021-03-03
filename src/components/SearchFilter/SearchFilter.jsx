import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

/**
 * Компонент «Фильтр поиска»: формирует список поисковых категорий.
 */
export default function SearchFilter(props) {
  const { data, onSelectFilter } = props;

  const id_data = data.map((value) => {
    value.id = nanoid();
    return value;
  });

  return (
    <div className="search__filter">
      <ul className="search__filter__items">
        {id_data.map((value) => {
          return <li key={value.id} className='search__filter__item'
            onClick={() => onSelectFilter(value)}>
              <a className='search__filter__item__link' href={value.link}>{value.title}</a>
            </li>
        })}
      </ul>
    </div>
  );
}

SearchFilter.propTypes = {
  data: PropTypes.array.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
};
