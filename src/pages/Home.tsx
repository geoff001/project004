import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout currentPage="home">
      <div className="home-content">
        <h1 className="home-title">Welcome to Our Website</h1>
        <p className="home-description">
          This is a simple Next.js application built with TypeScript and Sass.
        </p>
      </div>
    </Layout>
  );
};

export default Home;