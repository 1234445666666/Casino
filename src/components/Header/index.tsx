import "./header.style.scss";
import HeaderInput from "./components/Input.tsx";
import Profile from "./components/Profile.tsx";
import CurrencySelect from "./components/Currency.tsx";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <HeaderInput />
        <Profile />
        <CurrencySelect />
      </div>
    </header>
  );
}
