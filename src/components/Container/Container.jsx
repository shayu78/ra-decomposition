import React from 'react';
import PropTypes from 'prop-types';

/**
 * Компонент «Контейнер»: компонент для размещения дочерних компонентов.
 */
export default function Container(props) {
  const { className } = props;

  return (
    <div className={className}>
      {props.children}
    </div>
  );
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
