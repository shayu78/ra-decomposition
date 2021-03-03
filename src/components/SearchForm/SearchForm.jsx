import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DEFAULT_FORM_VALUE = {
  text: '',
};

/**
 * Компонент «Форма поиска»: формирует форму для поиска.
 */
export default function SearchForm(props) {
  const { onHandleSubmit } = props;
  const [form, setForm] = useState(DEFAULT_FORM_VALUE);

  const onSubmit = (event) => {
    event.preventDefault();
    onHandleSubmit(form);
    setForm(DEFAULT_FORM_VALUE);
  }

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__input__container">
        <label className="visually-hidden" htmlFor="text">Введите запрос</label>
        <input className="form__input" value={form.text} name="text"
          id="text" required onChange={onInputChange} />
      </div>
      <button className="form__button">Найти</button>
    </form>
  );
}

SearchForm.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};
