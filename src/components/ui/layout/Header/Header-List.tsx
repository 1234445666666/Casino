import './Header-Style.scss';
import { HeaderItems } from './Header-List';

export default function HeaderMenu() {
  return (
    <header className="header">
      <ul className="List">
      {HeaderItems.map((item , index) => (
        <li key={index}>{item}</li>
      ))}
      </ul>
    </header>
  );
};

