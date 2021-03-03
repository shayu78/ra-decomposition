import React from 'react';
import PropTypes from 'prop-types';

/**
 * Компонент «Завлекаловка»: формирует тизер.
 */
export default function Teaser(props) {
  const { image, link, title, description } = props;

  return (
    <div className="teaser">
      <a className="teaser__link" href={link}>
        <img className="teaser__image" src={image} alt="Изображение" />
        <h3 className="teaser__title">{title}</h3>
      </a>
      <p className="teaser__description">{description}</p>
    </div>
  );
}

Teaser.propTypes = {
  image: PropTypes.string,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
