import React from "react";
import "../header.style.scss";

export default function HeaderInput() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search__input"
        placeholder="Поиск..."
        onChange={handleChange}
      />
      <button type="submit" className="search__button">
        <span className="search-icon">click</span>
      </button>
    </form>
  );
}
