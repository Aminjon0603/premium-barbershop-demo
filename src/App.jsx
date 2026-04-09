import { useEffect, useState } from "react";
import {
  experienceSteps,
  faqs,
  galleryShots,
  hours,
  quickFacts,
  reviews,
  services,
  studioNotes,
} from "./siteContent";

function App() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const year = new Date().getFullYear();
  const activeShot = galleryShots[activeSlide];
  const phoneLink = "tel:+12125550147";
  const mapsLink = "https://maps.google.com/?q=Lower+Manhattan,+New+York,+NY";
  const phoneLabel = "+1 (212) 555-0147";

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
          <a className="brand-lockup" href="#top" aria-label="Atelier Nine home">
            <span className="brand-square">A9</span>
            <span className="brand-copy">
              <strong>Atelier Nine</strong>
              <small>Premium barber studio demo</small>
            </span>
          </a>

          <div className="masthead-meta">
            <span>Lower Manhattan</span>
            <span>Open 7 days</span>
            <span>By appointment</span>
          </div>

          <nav className="masthead-nav" aria-label="Primary">
            <a href="#carousel">Gallery</a>
            <a href="#services">Services</a>
            <a href="#visit">Contact</a>
          </nav>

          <a className="masthead-cta" href="#book">
            Book now
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-intro">
              <span className="eyebrow">Premium barber studio</span>
              <h1>A sharp, modern barbershop site built to feel ready for a real client.</h1>
              <p className="hero-text">
                This demo shows how a premium neighborhood shop can present services,
                atmosphere, pricing, and booking clearly without leaning on generic salon copy
                or visual filler.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" href={phoneLink}>
                  Book a cut
                </a>
                <a className="btn btn-secondary" href="#carousel">
                  View gallery
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

            <section className="carousel-panel" id="carousel" aria-label="Barbershop lookbook carousel">
              <div className="carousel-topline">
                <span className="carousel-kicker">Gallery</span>
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
              <span className="eyebrow">What the site communicates</span>
              <h2>Clear positioning, cleaner service presentation, and a stronger first impression.</h2>
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
              <span className="eyebrow">Services</span>
              <h2>Simple service tiers that feel realistic for a premium local shop.</h2>
              <p>
                The goal here is clear value, not inflated pricing. That makes the demo easier
                to adapt for real barber brands while still feeling polished and premium.
              </p>
            </div>

            <div className="pricing-grid">
              {services.map((service) => (
                <article className="pricing-card" key={service.name}>
                  <span className="card-tag">{service.note}</span>
                  <h3>{service.name}</h3>
                  <strong>{service.price}</strong>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="container experience-layout">
            <div className="experience-copy">
              <span className="eyebrow eyebrow-dark">Experience flow</span>
              <h2>A short service story that explains what the client experience actually feels like.</h2>
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
              <span className="eyebrow">Client proof</span>
              <h2>Social proof and practical details that help the site feel ready to launch.</h2>

              <div className="reviews-list">
                {reviews.map((review) => (
                  <article className="review-card" key={review.name}>
                    <div className="review-top">
                      <strong>{review.name}</strong>
                      <span>{review.role}</span>
                    </div>
                    <div className="review-stars">5-star review</div>
                    <p>{review.text}</p>
                  </article>
                ))}
              </div>
            </article>

            <article className="panel panel-visit">
              <span className="eyebrow">Visit the studio</span>
              <h2>Lower Manhattan, New York, NY</h2>
              <p>
                The contact section is intentionally grounded and useful, so the demo still
                reads like a real business website instead of only a portfolio concept.
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
                  Open map
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="container faq-layout">
            <div className="faq-copy">
              <span className="eyebrow">FAQ</span>
              <h2>Useful answers that make the demo feel complete without adding filler.</h2>
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
                <span className="eyebrow">Final CTA</span>
                <h2>A polished barber studio demo that is ready to show to clients.</h2>
                <p>
                  Clear services, strong structure, responsive layout, and enough flexibility to
                  swap in real branding, pricing, testimonials, and location details quickly.
                </p>
              </div>

              <div className="cta-side">
                <a className="btn btn-primary btn-large" href={phoneLink}>
                  Reserve appointment
                </a>
                <div className="chip-card">
                  <span className="payment-label">Included</span>
                  <div className="chip-grid">
                    <span>Full carousel</span>
                    <span>New masthead</span>
                    <span>Different page rhythm</span>
                    <span>Lower pricing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-row">
          <div>&copy; {year} Atelier Nine</div>
          <div className="footer-meta">
            <span>Premium barbershop demo</span>
            <span>{phoneLabel}</span>
            <span>React and Vite landing page concept</span>
          </div>
        </div>
      </footer>

      <div className="mobile-bookbar">
        <a className="btn btn-primary" href={phoneLink}>
          Book now
        </a>
      </div>
    </div>
  );
}

export default App;
