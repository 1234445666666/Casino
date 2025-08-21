import { HeaderItems } from "./../header.constant.ts";

export default function Nav() {
  return (
    <nav className="nav">
      {HeaderItems.map((item, index) => (
        <a className="nav__link" key={'nav' + index}>
          {item}
        </a>
      ))}
    </nav>
  );
}
