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
  --bg: #0d0f14;
  --bg-alt: #111318;
  --surface: #181b24;
  --surface-hover: #1e2130;
  --border: #252836;
  --text: #e2e8f0;
  --muted: #64748b;
  --accent: #6ee7b7;
  --accent-dim: rgba(110, 231, 183, 0.12);
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

/* ─── Nav ─────────────────────────────────── */
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(13, 15, 20, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
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
  color: var(--text);
  text-decoration: none;
  letter-spacing: -0.01em;
}

.logo-bracket {
  color: var(--accent);
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.15s;
}

.nav-links a:hover {
  color: var(--text);
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
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--accent);
  margin-bottom: 1rem;
}

.hero h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.1;
  color: var(--text);
  margin-bottom: 1.25rem;
}

.hero-sub {
  font-size: 1.05rem;
  color: var(--muted);
  max-width: 520px;
  margin-bottom: 2rem;
}

/* ─── Buttons ─────────────────────────────── */
.btn-primary {
  display: inline-block;
  background: var(--accent);
  color: #0d0f14;
  padding: 0.65rem 1.4rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: opacity 0.15s;
}

.btn-primary:hover {
  opacity: 0.88;
}

.btn-secondary {
  display: inline-block;
  border: 1px solid var(--border);
  color: var(--text);
  padding: 0.65rem 1.4rem;
  border-radius: 6px;
  font-weight: 500;
  font-size: 0.9rem;
  text-decoration: none;
  transition: border-color 0.15s, background 0.15s;
}

.btn-secondary:hover {
  border-color: var(--accent);
  background: var(--accent-dim);
}

/* ─── Sections ────────────────────────────── */
.section {
  padding: 5rem 2rem;
  border-bottom: 1px solid var(--border);
}

.section-alt {
  background: var(--bg-alt);
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
  margin-bottom: 0.5rem;
}

.section-sub {
  color: var(--muted);
  font-size: 0.95rem;
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
  color: var(--muted);
  font-size: 0.95rem;
  margin-bottom: 1rem;
  max-width: 56ch;
}

.about-text p:last-child {
  margin-bottom: 0;
}

.about-stack h3 {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--muted);
  margin-bottom: 1rem;
}

.about-stack dl {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.about-stack dl > div {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0.55rem 0;
  border-bottom: 1px solid var(--border);
  font-size: 0.875rem;
  gap: 1rem;
}

.about-stack dl > div:first-child {
  border-top: 1px solid var(--border);
}

.about-stack dt {
  color: var(--muted);
  flex-shrink: 0;
}

.about-stack dd {
  color: var(--text);
  text-align: right;
}

/* ─── Service Cards ───────────────────────── */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 0.625rem;
}

.service-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  text-decoration: none;
  color: var(--text);
  transition: border-color 0.15s, background 0.15s;
}

.service-card:hover {
  border-color: var(--accent);
  background: var(--surface-hover);
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
  border-radius: 6px;
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
}

.service-desc {
  font-size: 0.8rem;
  color: var(--muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.service-arrow {
  color: var(--muted);
  font-size: 1rem;
  transition: color 0.15s, transform 0.15s;
  flex-shrink: 0;
}

.service-card:hover .service-arrow {
  color: var(--accent);
  transform: translateX(3px);
}

/* ─── Footer ──────────────────────────────── */
.footer {
  padding: 1.5rem 2rem;
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
  color: var(--muted);
}

.footer-copy {
  font-size: 0.8rem;
  color: var(--muted);
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
