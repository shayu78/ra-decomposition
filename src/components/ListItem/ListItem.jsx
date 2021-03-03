import React from 'react';
import PropTypes from 'prop-types';

/**
 * Компонент «Элемент списка - ссылка»: формирует элемент списка ссылку, согласно входным данным.
 */
export default function ListItem(props) {
  const { className, titleClassName, textClassName, item } = props;

  return (
    <li className={className}>
      <a className="list__item__link" href={item.link}>
        {item.image && <img className="list__item__image" src={item.image} alt=" " />}
        {item.time && <span className="list__item__time">{item.time}</span>}
        {props.children && <span className={`list__item__title ${titleClassName}`}>{props.children}</span>}
        {item.text && <span className={`list__item__text ${textClassName}`}>{item.text}</span>}
      </a>
    </li>
  );
}

ListItem.propTypes = {
  className: PropTypes.string,
  titleClassName: PropTypes.string,
  textClassName: PropTypes.string,
  item: PropTypes.object.isRequired,
};
