import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Inicio`}
      description="Documentación centralizada para el equipo de desarrollo.">

      {/* Hero Section */}
      <header className="hero-section">
        <h1 className="hero-title">
          Construye software <br />
          <span>Más Rápido y Mejor</span>
        </h1>
        <p className="hero-subtitle">
          Bienvenido a <b>Dev Guides</b>, la plataforma centralizada de conocimiento de Mural Táctil.
          Aquí encontrarás estándares, guías de arquitectura, documentación de herramientas y mejores prácticas
          para elevar la calidad de nuestro software.
        </p>
        <div className="cta-buttons">
          <Link
            className="button-custom button-primary"
            to="/docs/intro">
            Explorar Documentación 🚀
          </Link>
          <Link
            className="button-custom button-secondary"
            to="/blog">
            Leer Novedades 📰
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="features-section">
        <h2 className="section-title">Tu Kit de Herramientas</h2>

        <div className="features-grid">
          {/* Card 1: Docusaurus */}
          <div className="feature-card">
            <span className="feature-icon">🦖</span>
            <h3 className="feature-title">Estandarización</h3>
            <p className="feature-desc">
              Aprende cómo documentamos nuestros proyectos usando <b>Docusaurus</b>.
              Mantén el conocimiento accesible y actualizado.
            </p>
            <Link to="/docs/docusaurus/setup" className="button button--link">Ir a la guía &rarr;</Link>
          </div>

          {/* Card 2: Docker */}
          <div className="feature-card">
            <span className="feature-icon">🐳</span>
            <h3 className="feature-title">Contenedorización</h3>
            <p className="feature-desc">
              Domina <b>Docker</b> y <b>Docker Compose</b>.
              Crea entornos de desarrollo reproducibles y despliegues seguros.
            </p>
            <Link to="/docs/docker/intro" className="button button--link">Ver tutoriales &rarr;</Link>
          </div>

          {/* Card 3: Bun */}
          <div className="feature-card">
            <span className="feature-icon">🍔</span>
            <h3 className="feature-title">Alto Rendimiento</h3>
            <p className="feature-desc">
              Descubre por qué usamos <b>Bun</b>.
              Tests instantáneos, instalaciones rápidas y un runtime moderno para JS/TS.
            </p>
            <Link to="/docs/bun/intro" className="button button--link">Leer más &rarr;</Link>
          </div>

          {/* Card 4: Blog */}
          <div className="feature-card">
            <span className="feature-icon">💡</span>
            <h3 className="feature-title">Blog Técnico</h3>
            <p className="feature-desc">
              Artículos de opinión, anuncios de lanzamientos y deep-dives técnicos
              escritos por el equipo.
            </p>
            <Link to="/blog" className="button button--link">Leer últimos posts &rarr;</Link>
          </div>
        </div>
      </main>

    </Layout>
  );
}
