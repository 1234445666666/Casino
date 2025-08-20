import { HeaderItems } from "../ui/Header-Nav/Header-List"
export function NavHeader() {
  return (
        <header className="header">
          <nav className="nav">
          {HeaderItems.map((item , index) => (
            <a className='nav__link' key={index}>{item}</a>
          ))}
          </nav>
        </header>
      );
}

export function LogoHeader() {
  return <h1 className="logo__name">BABOSH KAZINO</h1>;
}