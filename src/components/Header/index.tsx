import "./header.style.scss";
import HeaderNav from "./components/Nav.tsx";
import Sidebar from "../Sidebar/index.tsx";
import Profile from "./components/Profile.tsx";
/// Here starts menu
export default function Header() {
  return (
    <header className="header">
      <Sidebar />
      {/* лого вставим когда будет слайд бар */}
      {/* <HeaderLogo /> */}
      <HeaderNav />
      <Profile />
      {/* <HeaderInput /> */}
    </header>
  );
}
