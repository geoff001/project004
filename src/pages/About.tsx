import Link from "next/link";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout currentPage="about">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <div className="about-sections">
          <p className="about-description">
            We are a team of passionate developers who love building amazing web applications 
            using modern technologies like Next.js, TypeScript, and Sass.
          </p>
          
          <div className="about-section">
            <h2 className="section-title">Our Mission</h2>
            <p className="section-text">
              To create beautiful, performant, and user-friendly web experiences that make 
              a positive impact on people&apos;s lives.
            </p>
          </div>
          
          <div className="about-section">
            <h2 className="section-title">Technologies We Use</h2>
            <ul className="tech-list">
              <li>Next.js - React framework for production</li>
              <li>TypeScript - Type-safe JavaScript</li>
              <li>Sass - CSS with superpowers</li>
              <li>ESLint - Code quality and consistency</li>
            </ul>
          </div>
        </div>
        
        <div className="about-cta">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}
