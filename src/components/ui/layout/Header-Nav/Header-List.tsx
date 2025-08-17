import './Header-Style.scss';
import { HeaderItems } from './Header-List';

export default function HeaderMenu() {
  return (
    <header className="header">
      <nav className="nav">
      {HeaderItems.map((item , index) => (
        <a className='nav__link' key={index}>{item}</a>
      ))}
      </nav>
    </header>
  );
};

