import React from 'react';
import PropTypes from 'prop-types';

/**
 * Компонент «Виджет»: формирует виджет.
 */
export default function Widget(props) {
  const { title, link } = props;

  return (
    <div className="widget">
      <a className='widget__link' href={link}>
        <h3 className='widget__header'>{title}</h3>
      </a>
      {props.children}
    </div>
  );
}

Widget.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
};
