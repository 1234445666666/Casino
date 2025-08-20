import "./header.style.scss";
import HeaderLogo from "./components/Logo.tsx";
import HeaderInput from "./components/Input.tsx";
import HeaderNav from "./components/Nav.tsx";
/// Here starts menu
export default function Header() {
  return (
    <header className="header">
    {/* лого вставим когда будет слайд бар */}
    {/* <HeaderLogo /> */}
      <HeaderNav />
      <HeaderInput />
    </header>
  );
}

