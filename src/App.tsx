import { useEffect, useState } from 'react';
import './site.css';
import {
  ArrowDown, ArrowRight, ArrowUpRight, Clock3, Instagram, MapPin,
  Menu, Phone, Quote, Sparkles, X, Facebook,
} from 'lucide-react';

const address = 'Sia Sarees, Productivity Road, Vishwas Colony, Alkapuri, Vadodara, Gujarat 390007, India';
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
const reviewsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
const phoneUrl = 'tel:9825592622';
const instagramUrl = 'https://www.instagram.com/siasarees/';
const facebookUrl = 'https://www.facebook.com/siasareesvadodara/';
const navItems = [
  ['Home', '#home'], ['About', '#about'], ['Collections', '#collections'],
  ['Gallery', '#gallery'], ['Reviews', '#reviews'], ['Visit Us', '#visit'],
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('keydown', onKey); };
  }, []);
  const close = () => setOpen(false);
  return (
    <header className={`nav-wrap ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="shell nav-inner">
        <a href="#home" className="brand" onClick={close} aria-label="Sia Sarees home">
          <span className="brand-mark">S</span><span><b>SIA SAREES</b><small>Traditional · Ethnic · Designer</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([name, href]) => <a key={href} href={href}>{name}</a>)}
        </nav>
        <a className="nav-cta" href="#visit">Visit Store <ArrowUpRight size={14} /></a>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setOpen(!open)} data-testid="button-mobile-menu">
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      <nav id="mobile-navigation" className={`mobile-nav ${open ? 'mobile-nav-open' : ''}`} aria-label="Mobile navigation" aria-hidden={!open}>
        {navItems.map(([name, href], i) => <a key={href} href={href} onClick={close} tabIndex={open ? 0 : -1} style={{ transitionDelay: open ? `${i * 35}ms` : '0ms' }}>{name}<ArrowRight size={15} /></a>)}
        <a className="mobile-nav-cta" href="#visit" onClick={close} tabIndex={open ? 0 : -1}>Visit Store <ArrowUpRight size={15} /></a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-photo"><img src="/images/editorial-hero.jpg" alt="Fashion editorial of a woman in an elegant wine-toned saree" width="1200" height="1500" fetchPriority="high" /></div>
      <div className="hero-wash" />
      <div className="shell hero-content">
        <div className="hero-copy reveal">
          <span className="eyebrow hero-eyebrow">Sia Sarees · Alkapuri, Vadodara</span>
          <h1 className="serif">Elegance woven<br />into <em>every saree.</em></h1>
          <p>Discover traditional, ethnic and designer sarees at Sia Sarees, Alkapuri, Vadodara.</p>
          <div className="hero-actions"><a href="#collections" className="btn">Explore Collections <ArrowRight size={15} /></a><a href="#visit" className="hero-secondary">Visit our store <ArrowDown size={14} /></a></div>
        </div>
        <div className="hero-note"><span className="note-rule" /><span>THE ART OF<br />DRESSING WELL</span><span className="note-index">01 / 04</span></div>
      </div>
      <span className="hero-side-label">TRADITION, REIMAGINED</span>
    </section>
  );
}

function TrustBar() {
  const facts = [['458+', 'Google Reviews'], ['Traditional', 'Ethnic & Designer Sarees'], ['Alkapuri', 'Vadodara'], ['Open', 'Closes 8:30 PM']];
  return <section className="trust-bar" aria-label="Store information"><div className="shell trust-grid">{facts.map(([value, label], i) => <div className="trust-item" key={label}><span className="trust-value">{value}</span><span className="trust-label">{label}</span>{i < facts.length - 1 && <i aria-hidden="true" />}</div>)}</div></section>;
}

function About() {
  return <section id="about" className="about-section section-pad">
    <div className="shell about-grid">
      <div className="about-image"><img src="/images/traditional.jpg" alt="Inspirational traditional saree styling in warm heritage surroundings" width="900" height="1125" loading="lazy" /><span className="image-caption">A world of expressive drapes</span><span className="about-image-seal">S<br /><small>SIA SAREES</small></span></div>
      <div className="about-copy"><span className="eyebrow">A place for considered style</span><h2 className="section-title">Discover<br /><em>Sia Sarees</em></h2><p>Sia Sarees is a saree shop in Alkapuri, Vadodara, featuring a wide range of traditional, ethnic, and designer sarees.</p><p>Find a moment to browse, explore different expressions of Indian style, and see what speaks to you in person.</p><a href="#visit" className="text-link">Visit Sia Sarees <ArrowRight size={16} /></a></div>
      <div className="about-index">01 <span>—</span> THE BOUTIQUE</div>
    </div>
  </section>;
}

const collections = [
  { title: 'Traditional Sarees', description: 'Classic ethnic styles for timeless occasions.', image: '/images/traditional.jpg', alt: 'Traditional saree editorial in a heritage courtyard' },
  { title: 'Ethnic Sarees', description: 'Elegant Indian styles for celebrations and cultural occasions.', image: '/images/ethnic.jpg', alt: 'Contemporary ethnic saree editorial beside a terracotta wall' },
  { title: 'Designer Sarees', description: 'Contemporary and statement saree styles.', image: '/images/designer.jpg', alt: 'Designer saree editorial in soft afternoon light' },
];
function Collections() {
  return <section id="collections" className="collections-section section-pad">
    <div className="shell"><div className="section-heading"><div><span className="eyebrow">Explore the possibilities</span><h2 className="section-title">Explore our <em>style.</em></h2></div><p>Three ways into the world of sarees.<br />One thoughtful visit to discover more.</p></div>
      <div className="collection-grid">{collections.map((item, i) => <article className="collection-card" key={item.title}><a href="#visit" className="collection-photo" aria-label={`Enquire or visit Sia Sarees for ${item.title}`}><img src={item.image} alt={item.alt} width="800" height="1000" loading="lazy" /><span className="collection-count">0{i + 1}</span><span className="collection-arrow"><ArrowUpRight size={18} /></span></a><div className="collection-info"><div><span className="card-kicker">SIA SAREES / COLLECTION</span><h3 className="serif">{item.title}</h3><p>{item.description}</p></div><a href="#visit" className="text-link">Enquire / Visit <ArrowRight size={15} /></a></div></article>)}</div>
    </div>
  </section>;
}

function Experience() {
  const experiences = ['Explore traditional styles', 'Discover ethnic fashion', 'Browse designer sarees', 'Get personal attention while shopping'];
  return <section className="experience-section"><div className="shell experience-layout"><div className="experience-intro"><span className="eyebrow">Come and take your time</span><h2 className="section-title">A saree shopping experience <em>worth visiting.</em></h2><a href="#visit" className="btn btn-light">Find us in Alkapuri <ArrowRight size={15} /></a></div><div className="experience-list">{experiences.map((item, i) => <div className="experience-row" key={item}><span>0{i + 1}</span><p>{item}</p><Sparkles size={17} strokeWidth={1.4} /></div>)}</div><span className="experience-ornament" aria-hidden="true">S</span></div></section>;
}

const gallery = [
  { image: '/images/ethnic.jpg', label: 'Ethnic', alt: 'Editorial inspiration: graceful ethnic saree styling', shape: 'gallery-tall' },
  { image: '/images/traditional.jpg', label: 'Traditional', alt: 'Editorial inspiration: traditional saree in warm daylight', shape: 'gallery-short' },
  { image: '/images/designer.jpg', label: 'Designer', alt: 'Editorial inspiration: contemporary designer saree styling', shape: 'gallery-short' },
  { image: '/images/editorial-hero.jpg', label: 'A closer look', alt: 'Editorial inspiration: rich saree drape and border detail', shape: 'gallery-tall' },
];
function Gallery() {
  return <section id="gallery" className="gallery-section section-pad"><div className="shell"><div className="gallery-heading"><span className="eyebrow">The language of drape</span><h2 className="section-title">A little <em>inspiration.</em></h2><p>Indian style, seen through a modern lens.</p></div><div className="gallery-grid">{gallery.map((item, i) => <figure key={item.label} className={`gallery-tile ${item.shape}`}><img src={item.image} alt={item.alt} loading="lazy" width="800" height="1000" /><figcaption><span>0{i + 1}</span>{item.label}</figcaption></figure>)}</div><p className="gallery-disclaimer">Images are for visual inspiration. Visit the store for current collections and availability.</p></div></section>;
}

const reviews = [
  { name: 'Sam S', text: 'Very good service...attended very well...prices little high..but good quality' },
  { name: 'Nairuti Pathak', text: 'Very good collection of dresses at reasonable price' },
  { name: 'P V', text: 'Excellent service offers by salesmen.' },
];
function Reviews() {
  return <section id="reviews" className="reviews-section section-pad"><div className="shell"><div className="reviews-heading"><div><span className="eyebrow">Kind words, shared</span><h2 className="section-title">What our customers <em>say.</em></h2></div><div className="reviews-volume"><b>458</b><span>Google<br />Reviews</span></div></div><div className="review-grid">{reviews.map((review, i) => <article className="review-card" key={review.name}><Quote size={21} strokeWidth={1.3} /><p>“{review.text}”</p><div className="review-byline"><span className="review-initial">{review.name.slice(0, 1)}</span><span>{review.name}</span><small>GOOGLE REVIEW</small></div><span className="review-number">0{i + 1}</span></article>)}</div><a className="text-link reviews-more" href={reviewsUrl} target="_blank" rel="noopener noreferrer">See more reviews <ArrowUpRight size={15} /></a></div></section>;
}

function Social() {
  return <section className="social-section"><div className="shell social-layout"><div><span className="eyebrow">A window into our world</span><h2 className="section-title">Follow <em>Sia Sarees.</em></h2><p>Follow along for a little inspiration from Sia Sarees.</p></div><div className="social-links"><a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="social-card"><span className="social-icon"><Instagram size={21} /></span><span><small>INSTAGRAM</small><b>@siasarees</b></span><ArrowUpRight size={17} /></a><a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="social-card"><span className="social-icon"><Facebook size={21} /></span><span><small>FACEBOOK</small><b>Sia Sarees Vadodara</b></span><ArrowUpRight size={17} /></a></div></div></section>;
}

function VisitCallout() {
  return <section className="visit-callout"><div className="shell callout-inner"><span className="eyebrow">Your next visit starts here</span><h2 className="serif">Find your next<br /><em>favourite saree.</em></h2><p>Visit Sia Sarees in Alkapuri, Vadodara and explore our range of traditional, ethnic and designer sarees.</p><div className="callout-actions"><a href={phoneUrl} className="btn btn-light"><Phone size={15} /> Call Store</a><a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn callout-outline"><MapPin size={15} /> Get Directions</a><a href="#contact" className="callout-quiet">Visit Us <ArrowDown size={14} /></a></div><span className="callout-side">VADODARA · GUJARAT</span></div></section>;
}

function Location() {
  return <section id="visit" className="location-section section-pad"><div className="shell"><div className="location-head"><span className="eyebrow">Come find us</span><h2 className="section-title">Visit <em>Sia Sarees.</em></h2></div><div className="location-card"><div className="location-detail"><span className="location-mark"><MapPin size={21} /></span><h3 className="serif">Sia Sarees</h3><address>Productivity Road,<br />Vishwas Colony,<br />Alkapuri, Vadodara,<br />Gujarat 390007</address><div className="location-meta"><a href={phoneUrl}><Phone size={15} />098255 92622</a><p><Clock3 size={15} />Open · Closes 8:30 PM</p></div><a className="btn" href={mapsUrl} target="_blank" rel="noopener noreferrer">Get Directions <ArrowUpRight size={15} /></a></div><div className="map-panel"><iframe title="Map showing Sia Sarees in Alkapuri, Vadodara" src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><a className="map-overlay-link" href={mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={14} /> Open in Google Maps <ArrowUpRight size={13} /></a></div></div></div></section>;
}

function Contact() {
  return <section id="contact" className="contact-section"><div className="shell contact-inner"><div><span className="eyebrow">We'd love to welcome you</span><h2 className="section-title">Planning a <em>visit?</em></h2><p>Contact Sia Sarees for store-related enquiries or visit us at our Alkapuri location.</p></div><div className="contact-actions"><a className="btn" href={phoneUrl}>Call 098255 92622 <Phone size={15} /></a><a className="text-link" href={mapsUrl} target="_blank" rel="noopener noreferrer">Get Directions <ArrowUpRight size={15} /></a></div></div></section>;
}

function Footer() {
  return <footer className="footer"><div className="shell"><div className="footer-main"><div className="footer-brand"><a href="#home" className="brand"><span className="brand-mark">S</span><span><b>SIA SAREES</b><small>Traditional · Ethnic · Designer</small></span></a><p>Traditional · Ethnic · Designer</p></div><div className="footer-address"><span className="footer-label">FIND US</span><p>Productivity Road,<br />Vishwas Colony, Alkapuri,<br />Vadodara, Gujarat 390007</p><a href={phoneUrl}>098255 92622</a><small>Open · Closes 8:30 PM</small></div><div className="footer-links"><span className="footer-label">QUICK LINKS</span><div>{navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div></div><div className="footer-social"><span className="footer-label">FOLLOW ALONG</span><a href={instagramUrl} target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight size={14} /></a><a href={facebookUrl} target="_blank" rel="noopener noreferrer">Facebook <ArrowUpRight size={14} /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Sia Sarees. All rights reserved.</span><a href="#home">Back to top ↑</a></div></div></footer>;
}

function MobileActionBar() {
  return <nav className="mobile-action-bar" aria-label="Quick actions"><a href={phoneUrl}><Phone size={17} /><span>Call</span></a><a href={mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={17} /><span>Directions</span></a><a href={instagramUrl} target="_blank" rel="noopener noreferrer"><Instagram size={17} /><span>Instagram</span></a></nav>;
}

function App() {
  return <><a className="skip-link" href="#main">Skip to content</a><Navbar /><main id="main"><Hero /><TrustBar /><About /><Collections /><Experience /><Gallery /><Reviews /><Social /><VisitCallout /><Location /><Contact /></main><Footer /><MobileActionBar /></>;
}

export default App;
