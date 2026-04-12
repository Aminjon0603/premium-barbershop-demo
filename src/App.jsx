import { useEffect, useState } from "react";
import {
  contactHighlights,
  experienceSteps,
  faqs,
  galleryShots,
  hours,
  quickFacts,
  services,
  studioNotes,
} from "./siteContent";

function App() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const year = new Date().getFullYear();
  const activeShot = galleryShots[activeSlide];
  const phoneLink = "tel:+16464540300";
  const mapsLink =
    "https://www.google.com/maps/search/?api=1&query=224+E+116th+St,+New+York,+NY+10029";
  const phoneLabel = "(646) 454-0300";
  const shopName = "MQ Barber Shop";
  const shopAddress = "224 E 116th St, New York, NY 10029";

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % galleryShots.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  const goPrev = () => {
    setActiveSlide((current) => (current - 1 + galleryShots.length) % galleryShots.length);
  };

  const goNext = () => {
    setActiveSlide((current) => (current + 1) % galleryShots.length);
  };

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
              <small>Barber shop in East Harlem</small>
            </span>
          </a>

          <div className="masthead-meta">
            <span>East Harlem</span>
            <span>Open daily</span>
            <span>8 AM - 11 PM</span>
          </div>

          <nav className="masthead-nav" aria-label="Primary">
            <a href="#carousel">Gallery</a>
            <a href="#services">Services</a>
            <a href="#visit">Contact</a>
          </nav>

          <a className="masthead-cta" href={phoneLink}>
            Call shop
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-intro">
              <span className="eyebrow">{shopName}</span>
              <h1>Sharp cuts and beard work in East Harlem.</h1>
              <p className="hero-text">
                MQ Barber Shop is open daily from 8:00 AM to 11:00 PM at 224 E 116th St,
                offering clean cuts, beard work, and a simple neighborhood shop experience
                clients can count on.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href={phoneLink}>
                  Call now
                </a>
                <a className="btn btn-secondary" href={mapsLink} target="_blank" rel="noreferrer">
                  Get directions
                </a>
              </div>

              <div className="facts-grid">
                {quickFacts.map((item) => (
                  <article className="fact-card" key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </article>
                ))}
              </div>
            </div>

            <section className="carousel-panel" id="carousel" aria-label="MQ Barber Shop gallery">
              <div className="carousel-topline">
                <span className="carousel-kicker">Inside MQ</span>
                <div className="carousel-counter">
                  <span>{String(activeSlide + 1).padStart(2, "0")}</span>
                  <span>/</span>
                  <span>{String(galleryShots.length).padStart(2, "0")}</span>
                </div>
              </div>

              <div className="carousel-stage">
                <img className="carousel-image" src={activeShot.image} alt={activeShot.alt} />
                <div className="carousel-overlay">
                  <span className="note-tag">{activeShot.kicker}</span>
                  <h2>{activeShot.title}</h2>
                  <p>{activeShot.text}</p>
                </div>

                <div className="carousel-controls">
                  <button type="button" className="carousel-arrow" onClick={goPrev} aria-label="Previous slide">
                    Prev
                  </button>
                  <button type="button" className="carousel-arrow" onClick={goNext} aria-label="Next slide">
                    Next
                  </button>
                </div>
              </div>

              <div className="carousel-footer">
                <div className="carousel-progress" aria-hidden="true">
                  {galleryShots.map((shot, index) => (
                    <span
                      key={shot.id}
                      className={`progress-dot${index === activeSlide ? " is-active" : ""}`}
                    />
                  ))}
                </div>

                <div className="thumb-rail">
                  {galleryShots.map((shot, index) => (
                    <button
                      key={shot.id}
                      type="button"
                      className={`thumb-card${index === activeSlide ? " is-active" : ""}`}
                      onClick={() => setActiveSlide(index)}
                      aria-pressed={index === activeSlide}
                    >
                      <img src={shot.image} alt={shot.alt} />
                      <span>{shot.kicker}</span>
                    </button>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="section section-notes">
          <div className="container split-layout">
            <div className="section-head section-head-narrow">
              <span className="eyebrow">Why clients choose MQ</span>
              <h2>Built for everyday cuts, beard work, and flexible daily hours.</h2>
            </div>

            <div className="notes-grid">
              {studioNotes.map((item) => (
                <article className="note-card" key={item.title}>
                  <span className="card-tag">Studio note</span>
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
              <span className="eyebrow">Current services</span>
              <h2>A straightforward service menu clients can scan fast.</h2>
              <p>
                The current draft menu covers everyday cuts, beard work, shaves, and finishing
                details. Call the shop directly to confirm current pricing or today's availability.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="pricing-card" key={service.name}>
                  <span className="card-tag">{service.note}</span>
                  <h3>{service.name}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="container experience-layout">
            <div className="experience-copy">
              <span className="eyebrow eyebrow-dark">What to expect</span>
              <h2>Easy to understand, easy to reach, and built around the services people need.</h2>
            </div>

            <div className="experience-grid">
              {experienceSteps.map((item) => (
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
              <span className="eyebrow">Need the basics fast?</span>
              <h2>Phone, location, and hours stay clear from top to bottom.</h2>
              <p>
                New clients should not have to hunt for the essentials. The site keeps the key
                details visible so people can call, get directions, and plan their visit quickly.
              </p>

              <div className="reviews-list">
                {contactHighlights.map((item) => (
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
              <span className="eyebrow">Visit MQ Barber Shop</span>
              <h2 className="visit-title">{shopAddress}</h2>
              <p>
                Call before you come in if you want to confirm today's availability, ask about a
                specific service, or check current pricing with the shop directly.
              </p>

              <div className="hours-card">
                {hours.map(([day, time]) => (
                  <div className="hours-row" key={day}>
                    <span>{day}</span>
                    <span>{time}</span>
                  </div>
                ))}
              </div>

              <div className="contact-actions">
                <a className="btn btn-primary" href={phoneLink}>
                  Call {phoneLabel}
                </a>
                <a className="btn btn-secondary" href={mapsLink} target="_blank" rel="noreferrer">
                  Get directions
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="container faq-layout">
            <div className="faq-copy">
              <span className="eyebrow">FAQ</span>
              <h2>Quick answers before clients call or stop by.</h2>
            </div>

            <div className="faq-list">
              {faqs.map((item, index) => {
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
                <span className="eyebrow">Contact MQ</span>
                <h2>Need a haircut, beard trim, line up, or shave?</h2>
                <p>
                  Call MQ Barber Shop to check today's availability, ask about the current service
                  menu, or get directions before you head over.
                </p>
              </div>

              <div className="cta-side">
                <a className="btn btn-primary btn-large" href={phoneLink}>
                  Call the shop
                </a>
                <a className="btn btn-secondary" href={mapsLink} target="_blank" rel="noreferrer">
                  Get directions
                </a>
                <div className="chip-card">
                  <span className="payment-label">Quick details</span>
                  <div className="chip-grid">
                    <span>Open daily</span>
                    <span>8 AM - 11 PM</span>
                    <span>224 E 116th St</span>
                    <span>{phoneLabel}</span>
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
            <span>Open daily 8:00 AM - 11:00 PM</span>
          </div>
        </div>
      </footer>

      <div className="mobile-bookbar">
        <a className="btn btn-primary" href={phoneLink}>
          Call shop
        </a>
      </div>
    </div>
  );
}

export default App;
