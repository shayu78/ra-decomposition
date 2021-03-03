import React from 'react';
import PropTypes from 'prop-types';

/**
 * Компонент «Баннер»: графический файл, помещаемый на веб-страницу и имеющий гиперссылку на рекламируемую страницу.
 */
export default function Banner(props) {
  const { image, link } = props;

  return (
    <div className="banner">
      <a className="banner__link" href={link}>
        <img className="banner__image" src={image} alt="Баннер" />
      </a>
    </div>
  );
}

Banner.propTypes = {
  image: PropTypes.string,
  link: PropTypes.string.isRequired,
};
