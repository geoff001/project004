import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { isPageAvailable } from "../utils/pageAvailability";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  currentPage?: string;
  className?: string;
  icon?: IconDefinition;
}

const NavLink = ({ 
  href, 
  children, 
  currentPage, 
  className = "",
  icon
}: NavLinkProps) => {
  const isAvailable = isPageAvailable(href);
  const isActive = currentPage === href.replace('/', '') || (href === '/' && currentPage === 'home');
  const baseClassName = `nav-link ${isActive ? 'active' : ''} ${className}`.trim();

  const content = (
    <>
      {icon && <FontAwesomeIcon icon={icon} className="nav-icon" />}
      <span className="nav-text">{children}</span>
    </>
  );

  if (isAvailable) {
    return (
      <Link 
        href={href} 
        className={baseClassName}
      >
        {content}
      </Link>
    );
  }

  return (
    <span 
      className={`${baseClassName} disabled`}
      aria-disabled="true"
    >
      {content}
    </span>
  );
};

export default NavLink;