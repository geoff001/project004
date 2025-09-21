import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout currentPage="home">
      <div className="home-content">
        <h1 className="home-title">Welcome to Our Website</h1>
        <p className="home-description">
          This is a simple Next.js application built with TypeScript and Sass.
        </p>
        <div className="home-cta">
          {/* <Link href="/about" className="btn-primary">
            Learn More About Us
          </Link> */}
        </div>
      </div>
    </Layout>
  );
}
