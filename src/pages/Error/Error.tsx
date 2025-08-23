import "./Error.scss";
export default function Error() {
  return (
    <div className="error">
      <h1 className="error__title">Вы попали на несуществующую страницу!</h1>
      <h1 className="error__title">Проверьте правильность введенного адреса</h1>

      <button
        className="error__button"
        onClick={() => (window.location.href = "/")}
      >
        На главную страницу
      </button>
    </div>
  );
}
