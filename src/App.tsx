import { useState } from 'react'
import type { FormEvent } from 'react'

interface WorkItem {
  id: string
  title: string
  category: string
  desc: string
  thumbnail: string
  tag: string
}

const WORKS_DATA: WorkItem[] = [
  {
    id: '1',
    title: 'Neon Odyssey | Cyberpunk Short',
    category: 'Cinematics',
    desc: 'Cinematic color grading, seamless match cuts, dynamic sound design in DaVinci Resolve.',
    thumbnail: '/images/project_one.jpg',
    tag: 'Cinematic Reel'
  },
  {
    id: '2',
    title: 'Urban Rhythm | Streetwear Film',
    category: 'Brand Films',
    desc: 'High-energy commercial cut with rhythmic beat-synced speed ramps and custom typography.',
    thumbnail: '/images/project_two.jpg',
    tag: 'Commercial'
  },
  {
    id: '3',
    title: 'Visions of Tokyo | Travel Documentary',
    category: 'Shorts & Reels',
    desc: 'Atmospheric storytelling with ambient foley, whip pans, and nostalgic film grain emulation.',
    thumbnail: '/images/project_three.jpg',
    tag: 'Documentary'
  },
  {
    id: '4',
    title: 'Midnight Motion | Music Video Edit',
    category: 'Cinematics',
    desc: 'Experimental optical flow warping, glitch transitions, and reactive audio pulses.',
    thumbnail: '/images/hero_portrait.jpg',
    tag: 'Music Video'
  }
]

export default function App() {
  const [activeModal, setActiveModal] = useState<'works' | 'contact' | 'creators' | null>(null)
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [activeVideo, setActiveVideo] = useState<WorkItem | null>(null)
  const [subscribed, setSubscribed] = useState(false)
  const [messageSent, setMessageSent] = useState(false)

  const filteredWorks = selectedFilter === 'All'
    ? WORKS_DATA
    : WORKS_DATA.filter((w) => w.category === selectedFilter)

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault()
    setMessageSent(true)
    setTimeout(() => {
      setMessageSent(false)
      setActiveModal(null)
    }, 2200)
  }

  const handleCreatorsSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
    setTimeout(() => {
      setSubscribed(false)
      setActiveModal(null)
    }, 2200)
  }

  return (
    <>
      {/* ===== HEADER NAVIGATION ===== */}
      <header className="site-header">
        <div className="header-left" />

        {/* 3-Layer Sliced Center Logo */}
        <div className="header-center">
          <div 
            className="sliced-logo" 
            onClick={() => setActiveModal(null)}
            title="notbyadi*"
          >
            <div className="slice-row row-top">
              <span className="slice-text">NOTBYADI</span>
            </div>
            <div className="slice-row row-mid">
              <span className="slice-text">NOTBYADI</span>
            </div>
            <div className="slice-row row-bot">
              <span className="slice-text">NOTBYADI</span>
            </div>
          </div>
        </div>

        <div className="header-right">
          <button 
            className="nav-icon-btn" 
            title="Creators Club"
            onClick={() => setActiveModal('creators')}
          >
            <i className="fa-regular fa-user"></i>
          </button>
          <button 
            className="nav-icon-btn" 
            title="Works"
            onClick={() => setActiveModal('works')}
          >
            <i className="fa-solid fa-bag-shopping"></i>
          </button>
        </div>
      </header>

      {/* ===== MAIN HERO / SHOWCASE ===== */}
      <main className="hero-showcase">
        <div className="hero-canvas">
          {/* Top Left Link */}
          <button 
            className="floating-link pos-creators"
            onClick={() => setActiveModal('creators')}
          >
            CREATORS CLUB*
          </button>

          {/* Centerpiece Ink Etching with Glitch Feathers */}
          <div className="sketch-wrapper">
            <img 
              src="/images/adi_birds_sketch.jpg" 
              alt="Two falcons in flight with pixel glitch tails - notbyadi" 
              className="sketch-image"
            />
          </div>

          {/* Bottom Left Link */}
          <button 
            className="floating-link pos-contact"
            onClick={() => setActiveModal('contact')}
          >
            CONTACT NOTBYADI*
          </button>

          {/* Right Floating Cluster: Handwritten red notes + WORKS button */}
          <div className="pos-works-cluster">
            <div className="handwritten-arrow-text">
              <span>click here!!</span>
            </div>

            <div 
              className="works-btn-wrapper"
              onClick={() => setActiveModal('works')}
              title="Open Works"
            >
              {/* Hand-drawn red scribble oval */}
              <svg className="hand-drawn-oval" viewBox="0 0 140 50" preserveAspectRatio="none">
                <path d="M 14,25 C 12,11 32,5 70,5 C 112,5 128,12 126,25 C 124,38 108,45 68,45 C 28,45 10,37 14,25 Z M 16,23 C 14,13 36,8 72,8 C 114,8 122,14 120,24 C 118,34 102,41 70,41 C 34,41 16,33 16,23" />
              </svg>
              <button className="works-cta-btn">
                WORKS*
              </button>
            </div>

            <div className="handwritten-subtext">
              Ab dekh bhi lo yrr.
            </div>
          </div>
        </div>
      </main>

      {/* ===== BOTTOM STATUS BAR ===== */}
      <footer className="bottom-bar">
        <div className="bottom-bar-left">
          <span className="pulse-dot"></span>
          <span>AVAILABLE FOR NEW PROJECTS</span>
        </div>
        <div className="bottom-bar-right">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
          >
            Instagram*
          </a>
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
          >
            YouTube*
          </a>
          <a 
            href="mailto:contact@notbyadi.com" 
            className="social-link"
          >
            Email*
          </a>
        </div>
      </footer>

      {/* ========================================================
          MODAL: WORKS GALLERY
         ======================================================== */}
      <div className={`modal-backdrop ${activeModal === 'works' ? 'open' : ''}`}>
        <div className="modal-panel">
          <div className="modal-header">
            <div className="modal-title-wrap">
              <h2 className="modal-title">FEATURED WORKS <span className="modal-asterisk">*</span></h2>
            </div>
            <button 
              className="modal-close-btn"
              onClick={() => setActiveModal(null)}
              aria-label="Close"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="modal-body">
            {/* Filter Tabs */}
            <div className="filter-tabs">
              {['All', 'Cinematics', 'Brand Films', 'Shorts & Reels'].map((cat) => (
                <button
                  key={cat}
                  className={`filter-tab ${selectedFilter === cat ? 'active' : ''}`}
                  onClick={() => setSelectedFilter(cat)}
                >
                  {cat}*
                </button>
              ))}
            </div>

            {/* Works Grid */}
            <div className="works-grid">
              {filteredWorks.map((work) => (
                <div 
                  key={work.id} 
                  className="work-card"
                  onClick={() => setActiveVideo(work)}
                >
                  <div className="work-thumb-wrapper">
                    <img src={work.thumbnail} alt={work.title} className="work-thumb" />
                    <div className="work-play-badge">
                      <div className="play-circle">
                        <i className="fa-solid fa-play"></i>
                      </div>
                    </div>
                  </div>
                  <div className="work-info">
                    <span className="work-category-badge">{work.tag}*</span>
                    <h3 className="work-title">{work.title}</h3>
                    <p className="work-desc">{work.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MODAL: CONTACT NOTBYADI*
         ======================================================== */}
      <div className={`modal-backdrop ${activeModal === 'contact' ? 'open' : ''}`}>
        <div className="modal-panel" style={{ maxWidth: '820px' }}>
          <div className="modal-header">
            <div className="modal-title-wrap">
              <h2 className="modal-title">CONTACT NOTBYADI <span className="modal-asterisk">*</span></h2>
            </div>
            <button 
              className="modal-close-btn"
              onClick={() => setActiveModal(null)}
              aria-label="Close"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="modal-body">
            <div className="contact-layout">
              <div className="contact-info-col">
                <h3>LET'S CREATE SOMETHING SICK.</h3>
                <p>
                  Whether it's a cinematic short, high-retention reel editing, brand campaign, or creative direction — let's bring the vision to life.
                </p>

                <div className="contact-methods">
                  <a href="mailto:contact@notbyadi.com" className="contact-item">
                    <i className="fa-regular fa-envelope"></i>
                    <span>contact@notbyadi.com</span>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <i className="fa-brands fa-instagram"></i>
                    <span>@notbyadi</span>
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <i className="fa-brands fa-youtube"></i>
                    <span>youtube.com/@notbyadi</span>
                  </a>
                </div>
              </div>

              <div className="contact-form-col">
                {messageSent ? (
                  <div style={{ padding: '40px 20px', textAlign: 'center' }}>
                    <i className="fa-solid fa-check" style={{ fontSize: '2.5rem', color: '#10b981', marginBottom: '16px' }}></i>
                    <h4 style={{ fontFamily: 'var(--font-main)', fontSize: '1.4rem', fontWeight: 800 }}>MESSAGE SENT!</h4>
                    <p style={{ color: 'var(--ink-secondary)', marginTop: '8px' }}>I'll get back to you shortly.</p>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleContactSubmit}>
                    <div className="form-group">
                      <label className="form-label">Your Name</label>
                      <input type="text" required placeholder="What should I call you?" className="form-input" />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input type="email" required placeholder="name@domain.com" className="form-input" />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Project Details</label>
                      <textarea required placeholder="Tell me about your project, timeline & budget..." className="form-textarea"></textarea>
                    </div>

                    <button type="submit" className="form-submit-btn">
                      <span>SEND INQUIRY*</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MODAL: CREATORS CLUB*
         ======================================================== */}
      <div className={`modal-backdrop ${activeModal === 'creators' ? 'open' : ''}`}>
        <div className="modal-panel" style={{ maxWidth: '680px' }}>
          <div className="modal-header">
            <div className="modal-title-wrap">
              <h2 className="modal-title">CREATORS CLUB <span className="modal-asterisk">*</span></h2>
            </div>
            <button 
              className="modal-close-btn"
              onClick={() => setActiveModal(null)}
              aria-label="Close"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="modal-body">
            <div className="creators-content">
              <span className="creators-badge">EXCLUSIVE ACCESS</span>
              <h3>JOIN THE INNER CIRCLE</h3>
              <p>
                Get direct access to my private video editing presets, LUT packs, sound design libraries, and behind-the-scenes timelines.
              </p>

              <div className="creators-perks">
                <div className="perk-card">
                  <i className="fa-solid fa-film"></i>
                  <h4>LUT Packs</h4>
                  <p>Film emulation & clean digital grades.</p>
                </div>
                <div className="perk-card">
                  <i className="fa-solid fa-waveform-lines"></i>
                  <h4>SFX Library</h4>
                  <p>Handcrafted whooshes, hits & textures.</p>
                </div>
                <div className="perk-card">
                  <i className="fa-solid fa-code"></i>
                  <h4>Project Files</h4>
                  <p>Deconstruct complete Premiere & Resolve timelines.</p>
                </div>
              </div>

              {subscribed ? (
                <div style={{ padding: '20px', background: '#e6f7ef', border: '1px solid #10b981', color: '#065f46' }}>
                  <p style={{ fontWeight: 700, margin: 0 }}>🎉 Welcome to the club! Check your inbox soon.</p>
                </div>
              ) : (
                <form className="creators-form" onSubmit={handleCreatorsSubmit}>
                  <input 
                    type="email" 
                    required 
                    placeholder="Enter your email" 
                    className="form-input" 
                    style={{ flex: 1 }}
                  />
                  <button type="submit" className="form-submit-btn">
                    JOIN CLUB*
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          MODAL: VIDEO PLAYER PREVIEW
         ======================================================== */}
      {activeVideo && (
        <div className="modal-backdrop open">
          <div className="modal-panel" style={{ maxWidth: '850px' }}>
            <div className="modal-header">
              <h3 className="modal-title">{activeVideo.title}</h3>
              <button 
                className="modal-close-btn"
                onClick={() => setActiveVideo(null)}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modal-body" style={{ padding: 0 }}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: '#000' }}>
                <img 
                  src={activeVideo.thumbnail} 
                  alt={activeVideo.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} 
                />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', textAlign: 'center', padding: '20px', background: 'rgba(0,0,0,0.45)' }}>
                  <div className="play-circle" style={{ width: '64px', height: '64px', fontSize: '1.4rem', marginBottom: '16px' }}>
                    <i className="fa-solid fa-play"></i>
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-main)', fontSize: '1.4rem', fontWeight: 800 }}>{activeVideo.title}</h4>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#e5e5e5', maxWidth: '500px', marginTop: '8px' }}>
                    {activeVideo.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
