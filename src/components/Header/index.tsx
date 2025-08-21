import "./header.style.scss";
import HeaderNav from "./components/Nav.tsx";
import HeaderInput from "./components/Input.tsx";
import Profile from "./components/Profile.tsx";

export default function Header() {
  return (
    <header className="header">
      {/* лого вставим когда будет слайд бар */}
      {/* <HeaderLogo /> */}
      <HeaderNav />
      <div className="header__container">
      <HeaderInput />
      <Profile />
      </div>
    </header>
  );
}
