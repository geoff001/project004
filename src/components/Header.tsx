import NavLink from "./NavLink";
import { faHome, faInfoCircle, faFootball } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  currentPage?: string;
}

const Header = ({ currentPage }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header-container no-wrap">
        <div className="header-layout">
          <button className="header-logo">LOGO HERE</button>
          <div className="header-links">
            <nav className="nav">
              <NavLink href="/" currentPage={currentPage} icon={faHome}>
                Home
              </NavLink>
              <NavLink href="/sportsbook" currentPage={currentPage} icon={faFootball}>
                Sportsbook
              </NavLink>
              <NavLink href="/about" currentPage={currentPage} icon={faInfoCircle}>
                About
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;