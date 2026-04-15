import { useState } from "react";
import { getSiteContent } from "./siteContent";

function App({ locale = "en" }) {
  const [openFaq, setOpenFaq] = useState(0);
  const year = new Date().getFullYear();
  const content = getSiteContent(locale);
  const phoneLink = "tel:+16464540300";
  const mapsLink =
    "https://www.google.com/maps/search/?api=1&query=224+E+116th+St,+New+York,+NY+10029";
  const phoneLabel = "(646) 454-0300";
  const shopName = "MQ Barber Shop";
  const shopAddress = "224 E 116th St, New York, NY 10029";
  const languageSwitchHref = locale === "en" ? "/es/" : "/";
  const groupedServices = content.serviceGroups.map((group) => ({
    ...group,
    items: content.services.filter((service) => service.group === group.id),
  }));

  return (
    <div className="barber-page">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <header className="masthead">
        <div className="container masthead-row">
          <a className="brand-lockup" href="#top" aria-label={`${shopName} home`}>
            <span className="brand-square">MQ</span>
            <span className="brand-copy">
              <strong>{shopName}</strong>
              <small>{content.brandTagline}</small>
            </span>
          </a>

          <div className="masthead-meta">
            {content.headerMeta.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <nav className="masthead-nav" aria-label="Primary">
            {content.nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="masthead-actions">
            <a className="language-toggle" href={languageSwitchHref}>
              {content.languageSwitchLabel}
            </a>
            <a className="masthead-cta" href={phoneLink}>
              {content.hero.primaryCta}
            </a>
          </div>
        </div>
        <div className="container mobile-quicknav" aria-label="Mobile shortcuts">
          <a className="mobile-quicknav-link" href="#services">
            {content.mobileServicesLabel}
          </a>
          <a className="mobile-quicknav-link mobile-quicknav-link-secondary" href={languageSwitchHref}>
            {content.languageSwitchLabel}
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-intro">
              <span className="eyebrow">{content.hero.eyebrow}</span>
              <h1>{content.hero.title}</h1>
              <p className="hero-text">{content.hero.text}</p>

              <div className="hero-actions">
                <a className="btn btn-primary" href={phoneLink}>
                  {content.hero.primaryCta}
                </a>
                <a className="btn btn-secondary" href={mapsLink} target="_blank" rel="noreferrer">
                  {content.hero.secondaryCta}
                </a>
              </div>

              <div className="facts-grid">
                {content.quickFacts.map((item) => (
                  <article className="fact-card" key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </article>
                ))}
              </div>
            </div>

            <section className="showcase-panel" id="photos" aria-label={`${shopName} photos`}>
              <article className="showcase-main">
                <img
                  className="showcase-main-image"
                  src={content.photos.main.image}
                  alt={content.photos.main.alt}
                />
                <div className="showcase-overlay">
                  <span className="note-tag">{content.photos.main.kicker}</span>
                  <h2>{content.photos.main.title}</h2>
                  <p>{content.photos.main.text}</p>
                </div>
              </article>

              <div className="showcase-stack">
                {content.photos.supporting.map((item) => (
                  <article className="photo-card" key={item.id}>
                    <img className="photo-card-image" src={item.image} alt={item.alt} />
                    <div className="photo-card-copy">
                      <span className="card-tag">{item.kicker}</span>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>

        <section className="section section-notes">
          <div className="container split-layout">
            <div className="section-head section-head-narrow">
              <span className="eyebrow">{content.notesSection.eyebrow}</span>
              <h2>{content.notesSection.title}</h2>
            </div>

            <div className="notes-grid">
              {content.studioNotes.map((item) => (
                <article className="note-card" key={item.title}>
                  <span className="card-tag">{content.notesSection.cardLabel}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container pricing-layout">
            <div className="pricing-intro">
              <span className="eyebrow">{content.servicesSection.eyebrow}</span>
              <h2>{content.servicesSection.title}</h2>
              <p>{content.servicesSection.text}</p>
            </div>

            <div className="service-board-stack">
              <div className="service-board">
                {groupedServices.map((group) => (
                  <article className="menu-group" key={group.id}>
                    <div className="menu-group-head">
                      <span className="card-tag">{group.title}</span>
                    </div>

                    <div className="menu-list">
                      {group.items.map((service) => (
                        <div className="menu-row" key={service.name}>
                          <div className="menu-copy">
                            <strong>{service.name}</strong>
                            <span>{service.note}</span>
                          </div>
                          <span className="menu-price">{service.price}</span>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>

              <article className="service-note-card">
                <span className="eyebrow">{content.serviceNotice.eyebrow}</span>
                <h3>{content.serviceNotice.title}</h3>
                <p>{content.serviceNotice.text}</p>
                <div className="service-note-list">
                  {content.serviceNotice.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="container experience-layout">
            <div className="experience-copy">
              <span className="eyebrow eyebrow-dark">{content.experienceSection.eyebrow}</span>
              <h2>{content.experienceSection.title}</h2>
            </div>

            <div className="experience-grid">
              {content.experienceSteps.map((item) => (
                <article className="experience-card" key={item.step}>
                  <span className="process-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-visit" id="visit">
          <div className="container visit-layout">
            <article className="panel panel-soft">
              <span className="eyebrow">{content.visitSection.leftEyebrow}</span>
              <h2>{content.visitSection.leftTitle}</h2>
              <p>{content.visitSection.leftText}</p>

              <div className="reviews-list">
                {content.contactHighlights.map((item) => (
                  <article className="review-card" key={item.title}>
                    <div className="review-top">
                      <strong>{item.title}</strong>
                      <span>{item.subtitle}</span>
                    </div>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </article>

            <article className="panel panel-visit">
              <span className="eyebrow">{content.visitSection.rightEyebrow}</span>
              <h2 className="visit-title">{content.visitSection.rightTitle}</h2>
              <p>{content.visitSection.rightText}</p>

              <div className="hours-card">
                {content.hours.map(([day, time]) => (
                  <div className="hours-row" key={day}>
                    <span>{day}</span>
                    <span>{time}</span>
                  </div>
                ))}
              </div>

              <div className="contact-actions">
                <a className="btn btn-primary" href={phoneLink}>
                  {content.visitSection.callButton}
                </a>
                <a className="btn btn-secondary" href={mapsLink} target="_blank" rel="noreferrer">
                  {content.visitSection.directionsButton}
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="container faq-layout">
            <div className="faq-copy">
              <span className="eyebrow">{content.faqSection.eyebrow}</span>
              <h2>{content.faqSection.title}</h2>
            </div>

            <div className="faq-list">
              {content.faqs.map((item, index) => {
                const isOpen = openFaq === index;

                return (
                  <article className={`faq-card${isOpen ? " is-open" : ""}`} key={item.question}>
                    <button
                      type="button"
                      className="faq-trigger"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.question}</span>
                      <span className="faq-icon">{isOpen ? "-" : "+"}</span>
                    </button>
                    {isOpen ? <p className="faq-answer">{item.answer}</p> : null}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cta-panel" id="book">
              <div className="cta-copy">
                <span className="eyebrow">{content.cta.eyebrow}</span>
                <h2>{content.cta.title}</h2>
                <p>{content.cta.text}</p>
              </div>

              <div className="cta-side">
                <a className="btn btn-primary btn-large" href={phoneLink}>
                  {content.cta.primaryButton}
                </a>
                <a className="btn btn-secondary" href={mapsLink} target="_blank" rel="noreferrer">
                  {content.cta.secondaryButton}
                </a>
                <div className="chip-card">
                  <span className="payment-label">{content.cta.detailsLabel}</span>
                  <div className="chip-grid">
                    {content.cta.detailChips.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-row">
          <div>&copy; {year} {shopName}</div>
          <div className="footer-meta">
            <span>{shopAddress}</span>
            <span>{phoneLabel}</span>
            <span>{content.footerHours}</span>
          </div>
        </div>
      </footer>

      <div className="mobile-bookbar">
        <a className="btn btn-primary" href={phoneLink}>
          {content.hero.primaryCta}
        </a>
      </div>
    </div>
  );
}

export default App;
