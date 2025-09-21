import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

const Layout = ({ children, currentPage }: LayoutProps) => {
  return (
    <div className="page-container">
      <Header currentPage={currentPage} />
      <main className="main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
