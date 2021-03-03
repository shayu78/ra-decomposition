import React from 'react';
import PropTypes from 'prop-types';

/**
 * Компонент «Подсказка поиска»: формирует панель подсказок для поиска.
 */
export default function SearchHint(props) {
  const { text } = props;

  return (
    <div className='search__hint'>
      <span className='search__static__hint__text'>Найдется всё. Например, </span>
      <span className='search__dynamic__hint__text'>{text}</span>
    </div>
  );
}

SearchHint.defaultProps = {
  text: 'фаза луны сегодня',
};

SearchHint.propTypes = {
  text: PropTypes.string,
};
