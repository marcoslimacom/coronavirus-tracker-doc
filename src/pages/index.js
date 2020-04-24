import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Coronavirus Tracker Map Dashboard</>,
    imageUrl: "img/logo.svg",
    imageAlt: "Coronavirus Tracker Map Dashboard - Marcos Lima",
    description: (
      <>
        Add coronavirus dashboard to your website or web system. Easy, optimized
        installation and automatically updated daily.
      </>
    ),
  },
  {
    title: <>Support</>,
    imageUrl: "img/support.png",
    description: (
      <>
        Always ready to serve you quickly and efficiently, any questions you
        consider important and let us know. Access this{" "}
        <a href="https://marcoslima.com/support">link</a>.
      </>
    ),
  },
  {
    title: <>Marcos Lima</>,
    imageUrl: "img/logo-marcoslima.png",
    imageAlt: "Marcos Lima",
    description: (
      <>
        Discover other products and personalized services with high quality and
        with the deadline that your company needs. Access this{" "}
        <a href="https://marcoslima.com">link</a>.
      </>
    ),
  },
];

function Feature({ imageUrl, imageAlt, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4 text--center", styles.feature)}>
      {imgUrl && (
        <div>
          <img className={styles.featureImage} src={imgUrl} alt={imageAlt} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title} Docs`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/requirements")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
