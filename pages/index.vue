<template>
  <div class="page">

    <!-- Nav -->
    <nav class="nav">
      <div class="nav-inner">
        <a href="/" class="nav-logo">
          <span class="logo-bracket">[</span>whitehome.io<span class="logo-bracket">]</span>
        </a>
        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>

    <!-- Hero -->
    <section class="hero">
      <div class="hero-inner">
        <p class="hero-eyebrow">Personal Home Lab</p>
        <h1>whitehome.io</h1>
        <p class="hero-sub">
          A self-hosted infrastructure for personal projects, development, and experimentation.
          Running 24/7 from home on bare-metal and virtualized hardware.
        </p>
        <a href="#services" class="btn-primary">Browse Services</a>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="section">
      <div class="section-inner about-layout">
        <div class="about-text">
          <h2 class="section-heading">About This Lab</h2>
          <p>
            whitehome.io is a personal home lab running on a mix of bare-metal servers and virtual
            machines. It started as a place to tinker, and has grown into the primary infrastructure
            for media, reading, and personal productivity — all owned and operated at home.
          </p>
          <p>
            Most services are private and only reachable on the local network or over VPN.
            The ones listed here are the exceptions — either intentionally public or relevant
            enough to surface.
          </p>
          <p>
            Things break. Services get swapped out. That's part of the deal.
          </p>
        </div>
        <div class="about-stack">
          <h3>Stack</h3>
          <dl>
            <div><dt>Hypervisor</dt><dd>Proxmox VE</dd></div>
            <div><dt>Kubernetes</dt><dd>Talos OS</dd></div>
            <div><dt>Access / Proxy</dt><dd>Pangolin</dd></div>
            <div><dt>Monitoring</dt><dd>Grafana + Prometheus + Gatus</dd></div>
            <div><dt>DNS</dt><dd>AdGuard Home</dd></div>
          </dl>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section id="services" class="section section-alt">
      <div class="section-inner">
        <h2 class="section-heading">Services</h2>
        <p class="section-sub">Publicly accessible services running on this infrastructure.</p>
        <div class="services-grid">
          <a
            v-for="service in services"
            :key="service.name"
            :href="service.url"
            target="_blank"
            rel="noopener noreferrer"
            class="service-card"
          >
            <div class="service-icon">
              <img v-if="service.icon" :src="service.icon" :alt="service.name" />
              <span v-else>{{ service.emoji }}</span>
            </div>
            <div class="service-body">
              <span class="service-name">{{ service.name }}</span>
              <span class="service-desc">{{ service.description }}</span>
            </div>
            <span class="service-arrow">→</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="section">
      <div class="section-inner section-center">
        <h2 class="section-heading">Contact</h2>
        <p class="section-sub">
          Questions about a service or want to get in touch?
        </p>
        <a href="mailto:admin@whitehome.io" class="btn-secondary">admin@whitehome.io</a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-inner">
        <span class="footer-logo">whitehome.io</span>
        <span class="footer-copy">Self-hosted with ♥</span>
      </div>
    </footer>

  </div>
</template>

<script setup lang="ts">
import audiobookshelfIcon from '~/assets/icons/audiobookshelf.png'
import calibrewebIcon from '~/assets/icons/calibreweb.png'
import freshrssIcon from '~/assets/icons/freshrss.png'
import jellyfinIcon from '~/assets/icons/jellyfin.png'
import overseerrIcon from '~/assets/icons/overseerr.png'
import readeckIcon from '~/assets/icons/readeck.png'

const services = [
  {
    name: 'Audiobookshelf',
    url: 'https://audiobookshelf.whitehome.io',
    description: 'Self-hosted audiobook & podcast server',
    icon: audiobookshelfIcon,
  },
  {
    name: 'Calibre-Web Automated',
    url: 'https://calibre.whitehome.io',
    description: 'Ebook library management & delivery',
    icon: calibrewebIcon,
  },
  {
    name: 'FreshRSS',
    url: 'https://freshrss.whitehome.io',
    description: 'Self-hosted RSS feed aggregator',
    icon: freshrssIcon,
  },
  {
    name: 'Jellyfin',
    url: 'https://jellyfin.whitehome.io',
    description: 'Open source media server',
    icon: jellyfinIcon,
  },
  {
    name: 'Overseerr',
    url: 'https://overseerr.whitehome.io',
    description: 'Media request & discovery tool',
    icon: overseerrIcon,
  },
  {
    name: 'Readeck',
    url: 'https://readeck.whitehome.io',
    description: 'Read-it-later & bookmarking service',
    icon: readeckIcon,
  },
]
</script>

<style>
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg-void:           #0e0e1a;
  --bg-shadow:         #1a1a30;
  --bg-card:           rgba(26, 26, 48, 0.92);
  --bg-elevated:       #24243e;
  --bg-input:          #121220;

  --amber-100:         #d4a040;
  --amber-200:         #e0b870;
  --amber-glow:        rgba(212, 160, 64, 0.3);
  --amber-glow-strong: rgba(212, 160, 64, 0.5);
  --amber-subtle:      rgba(212, 160, 64, 0.1);

  --ice-200:           #7a9cc0;
  --ice-glow:          rgba(122, 156, 192, 0.3);

  --lavender-200:      #8a8ab8;

  --grey-300:          #34344a;
  --text-primary:      #c8c8d8;
  --text-secondary:    #8888a0;
  --text-muted:        #5a5a74;

  --gradient-primary:  linear-gradient(90deg, #d4a040 0%, #7a9cc0 100%);
  --gradient-card:     linear-gradient(145deg, rgba(26,26,48,0.95), rgba(14,14,26,0.95));

  --border-default:    #34344a;
  --border-subtle:     rgba(136, 136, 160, 0.15);

  --shadow-amber:      0 0 20px rgba(212, 160, 64, 0.3);
  --shadow-card:       0 4px 24px rgba(0, 0, 0, 0.5);

  --radius-sm:         4px;
  --radius-md:         8px;
  --radius-lg:         12px;
  --radius-pill:       100px;

  --font-display:      'Outfit', sans-serif;
  --font-mono:         'JetBrains Mono', monospace;

  --transition-fast:   150ms ease;
  --transition-base:   250ms ease;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--bg-void);
  color: var(--text-primary);
  font-family: var(--font-display);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
}

body::before {
  content: '';
  position: fixed;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
}

.page {
  position: relative;
  z-index: 1;
}

/* ─── Nav ─────────────────────────────────── */
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(14, 14, 26, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-subtle);
}

.nav-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  text-decoration: none;
  letter-spacing: -0.01em;
  font-family: var(--font-mono);
}

.logo-bracket {
  color: var(--amber-100);
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color var(--transition-fast);
}

.nav-links a:hover {
  color: var(--amber-200);
}

/* ─── Hero ────────────────────────────────── */
.hero {
  padding: 7rem 2rem 6rem;
}

.hero-inner {
  max-width: 680px;
  margin: 0 auto;
}

.hero-eyebrow {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--amber-100);
  margin-bottom: 1rem;
}

.hero h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.1;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.25rem;
}

.hero-sub {
  font-size: 1.05rem;
  color: var(--text-secondary);
  max-width: 520px;
  margin-bottom: 2rem;
  font-weight: 300;
}

/* ─── Buttons ─────────────────────────────── */
.btn-primary {
  display: inline-flex;
  align-items: center;
  background: var(--gradient-primary);
  color: #0e0e1a;
  padding: 0.65rem 1.5rem;
  border-radius: var(--radius-md);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.875rem;
  text-decoration: none;
  box-shadow: var(--shadow-amber);
  transition: all var(--transition-base);
}

.btn-primary:hover {
  box-shadow: 0 0 30px var(--amber-glow-strong);
  transform: translateY(-1px);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  background: transparent;
  color: var(--amber-100);
  border: 2px solid var(--amber-100);
  padding: 0.65rem 1.5rem;
  border-radius: var(--radius-md);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.875rem;
  text-decoration: none;
  transition: all var(--transition-base);
}

.btn-secondary:hover {
  background: var(--amber-subtle);
  box-shadow: var(--shadow-amber);
}

/* ─── Sections ────────────────────────────── */
.section {
  padding: 5rem 2rem;
  border-bottom: 1px solid var(--border-subtle);
}

.section-alt {
  background: var(--bg-shadow);
}

.section-inner {
  max-width: 1100px;
  margin: 0 auto;
}

.section-center {
  text-align: center;
}

.section-heading {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.section-sub {
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 300;
  margin-bottom: 2.5rem;
}

/* ─── About Layout ────────────────────────── */
.about-layout {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 5rem;
  align-items: start;
}

.about-text h2 {
  margin-bottom: 1.25rem;
}

.about-text p {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 1rem;
  max-width: 56ch;
}

.about-text p:last-child {
  margin-bottom: 0;
}

.about-stack h3 {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--amber-100);
  margin-bottom: 1rem;
}

.about-stack dl {
  display: flex;
  flex-direction: column;
}

.about-stack dl > div {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0.55rem 0;
  border-bottom: 1px solid var(--border-default);
  font-size: 0.875rem;
  gap: 1rem;
}

.about-stack dl > div:first-child {
  border-top: 1px solid var(--border-default);
}

.about-stack dt {
  color: var(--text-secondary);
  flex-shrink: 0;
}

.about-stack dd {
  color: var(--text-primary);
  text-align: right;
  font-family: var(--font-mono);
  font-size: 0.8rem;
}

/* ─── Service Cards ───────────────────────── */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 0.75rem;
}

.service-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: var(--gradient-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  text-decoration: none;
  color: var(--text-primary);
  transition: all var(--transition-base);
}

.service-card:hover {
  border-color: var(--amber-100);
  box-shadow: var(--shadow-amber);
  transform: translateY(-2px);
}

.service-icon {
  flex-shrink: 0;
  width: 2.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: var(--radius-sm);
}

.service-icon span {
  font-size: 1.4rem;
}

.service-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  min-width: 0;
}

.service-name {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text-primary);
}

.service-desc {
  font-size: 0.8rem;
  color: var(--text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.service-arrow {
  color: var(--text-muted);
  font-size: 1rem;
  transition: color var(--transition-fast), transform var(--transition-fast);
  flex-shrink: 0;
}

.service-card:hover .service-arrow {
  color: var(--amber-100);
  transform: translateX(3px);
}

/* ─── Footer ──────────────────────────────── */
.footer {
  padding: 1.5rem 2rem;
  border-top: 1px solid var(--border-subtle);
}

.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-logo {
  font-size: 0.875rem;
  font-weight: 600;
  font-family: var(--font-mono);
  color: var(--text-secondary);
}

.footer-copy {
  font-size: 0.8rem;
  color: var(--text-muted);
}

/* ─── Responsive ──────────────────────────── */
@media (max-width: 800px) {
  .about-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 600px) {
  .nav-links {
    display: none;
  }

  .hero {
    padding: 4rem 1.25rem 3.5rem;
  }

  .section {
    padding: 3.5rem 1.25rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .footer-inner {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
}
</style>
