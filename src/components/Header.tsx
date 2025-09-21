import Link from "next/link";

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage }: HeaderProps) {
  return (
    <header className="header">
      <nav className="nav">
        {/* <Link 
          href="/" 
          className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
        >
          Home
        </Link>
        <Link 
          href="/about" 
          className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
        >
          About
        </Link> */}
      </nav>
    </header>
  );
}
