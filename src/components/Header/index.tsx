import "./header.style.scss";
import { HeaderItems } from "./header.constant.ts";
import HeaderLogo from "./components/Logo.tsx";
import HeaderInput from "./components/Input.tsx";
/// Here starts menu
export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        {HeaderItems.map((item, index) => (
          <a className="nav__link" key={index}>
            {item}
          </a>
        ))}
      </nav>
      <HeaderInput />
    </header>
  );
}
