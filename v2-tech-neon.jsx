// V2 · Tech Neon / HUD — hero-first sales page
// Redesigned with cesarfaria.com structure: giant stacked hero, big portrait,
// WhatsApp-style proof screenshots, 5 intercalated CTAs, big iconic path cards.

const V2_STYLES = `
.v2 {
  --bg: #000000;
  --bg-2: #0a0a0a;
  --bg-3: #141414;
  --bg-warm: #050505;
  --fg: #ffffff;
  --fg-2: #b0b0b0;
  --fg-3: #5a5a5a;
  --neon: #FE2C55;
  --neon-dim: rgba(254, 44, 85, 0.15);
  --neon-soft: rgba(254, 44, 85, 0.08);
  --red: #FE2C55;
  --red-dim: rgba(254, 44, 85, 0.12);
  --cyan: #25F4EE;
  --cyan-dim: rgba(37, 244, 238, 0.15);
  --grid: rgba(255, 255, 255, 0.03);
  --border: rgba(255, 255, 255, 0.08);
  --border-strong: rgba(255, 255, 255, 0.18);
  --wa-green: #005c4b;
  --wa-gray: #202c33;
  background:
    radial-gradient(ellipse 1200px 800px at 50% -200px, rgba(254, 44, 85, 0.03), transparent 70%),
    var(--bg);
  color: var(--fg);
  font-family: 'Space Grotesk', -apple-system, sans-serif;
  width: 100%;
  overflow-x: hidden;
}
.v2::before {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background-image:
    linear-gradient(var(--grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.5) 100%);
  -webkit-mask-image: linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.5) 100%);
}
.v2 { position: relative; }

/* BRAND CHIPS — inline accent for Meta/Google/TikTok (no pill bg) */
.v2 .chip {
  display: inline; align-items: baseline;
  font-family: inherit;
  font-weight: 600;
  padding: 0; border: none; background: none;
  border-radius: 0;
  vertical-align: baseline;
  line-height: inherit;
  white-space: nowrap;
}
.v2 .chip .chip-dot { display: none; }
.v2 .chip-meta { color: #4da3ff; }
.v2 .chip-google { color: #ffcf4d; }
.v2 .chip-tiktok { color: var(--cyan); }

/* Brand icons negative treatment */
.v2 .brand-icon-neg {
  display: inline-block; vertical-align: middle;
  opacity: 0.5; margin-right: 6px;
  filter: saturate(0.3);
  transform: translateY(-2px);
}
.v2 .b02-amp {
  color: #ffffff; font-weight: 300;
}

/* DISPLAY TYPE — large typographic moments for brand first-mentions */
.v2 .display-brand {
  display: block;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: clamp(72px, 9vw, 128px);
  line-height: 0.95;
  letter-spacing: -0.045em;
  margin: 32px auto;
  position: relative;
  text-align: center;
}
.v2 .display-brand.meta {
  color: rgba(254, 44, 85, 0.55);
  text-decoration: line-through;
  text-decoration-color: rgba(254, 44, 85, 0.5);
  text-decoration-thickness: 6px;
}
.v2 .display-brand.google {
  color: rgba(254, 44, 85, 0.55);
  text-decoration: line-through;
  text-decoration-color: rgba(254, 44, 85, 0.5);
  text-decoration-thickness: 6px;
}
.v2 .display-brand.tiktok {
  color: var(--fg);
  position: relative;
  display: block;
  width: fit-content;
  margin-left: auto; margin-right: auto;
}
.v2 .display-brand.tiktok::after {
  content: ''; display: block;
  width: 60%; height: 6px; margin-top: 8px; margin-left: auto; margin-right: auto;
  background: var(--cyan); box-shadow: 0 0 24px var(--cyan-dim);
}
.v2 .display-brand .tag {
  position: absolute; top: 12px; right: 0;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px; font-weight: 500;
  letter-spacing: 0.25em; text-transform: uppercase;
  color: var(--fg-3); text-decoration: none;
  white-space: nowrap;
}
.v2 .display-brand.meta .tag, .v2 .display-brand.google .tag { color: rgba(254, 44, 85, 0.7); }
.v2 .display-brand.tiktok .tag {
  color: var(--cyan);
  position: relative; left: auto; right: auto; top: auto;
  display: inline-block;
  margin-left: 24px;
  padding: 8px 12px;
  border: 1px solid var(--cyan-dim);
  background: rgba(37, 244, 238, 0.06);
  box-shadow: 0 0 28px rgba(37, 244, 238, 0.06);
  transform: none; vertical-align: middle;
}

/* HUD STAT CARDS — dopamine beats */
.v2 .stat-row {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 0; margin: 48px 0;
  border: 1px solid var(--border);
  background: var(--bg-warm);
}
.v2 .stat-cell {
  padding: 32px 28px; position: relative;
  border-right: 1px solid var(--border);
}
.v2 .stat-cell:last-child { border-right: none; }
.v2 .stat-cell .stat-k {
  font-family: 'IBM Plex Mono', monospace; font-size: 10px;
  letter-spacing: 0.22em; color: var(--fg-3); margin-bottom: 14px;
}
.v2 .stat-cell .stat-v {
  font-family: 'Space Grotesk', sans-serif; font-weight: 700;
  font-size: clamp(38px, 4.4vw, 58px); line-height: 1;
  letter-spacing: -0.035em; margin-bottom: 10px;
}
.v2 .stat-cell.neg .stat-v { color: #FE2C55; }
.v2 .stat-cell.pos .stat-v { color: var(--cyan); }
.v2 .stat-cell .stat-l {
  font-size: 13px; line-height: 1.35; color: var(--fg-2); max-width: 220px;
}
.v2 .stat-cell::before {
  content: ''; position: absolute; top: 12px; right: 12px;
  width: 8px; height: 8px; border: 1px solid var(--border-strong);
  transform: rotate(45deg);
}

/* TIMELINE ANTES/AGORA */
.v2 .timeline {
  position: relative; margin: 64px 0; padding-left: 40px;
}
.v2 .timeline::before {
  content: ''; position: absolute; left: 13px; top: 8px; bottom: 8px; width: 1px;
  background: linear-gradient(180deg,
    rgba(254, 44, 85, 0.4) 0%,
    rgba(254, 44, 85, 0.4) 45%,
    var(--cyan) 55%,
    var(--cyan) 100%);
}
.v2 .tl-node {
  position: relative; padding: 22px 0 22px 12px;
}
.v2 .tl-node::before {
  content: ''; position: absolute; left: -33px; top: 28px;
  width: 14px; height: 14px; border-radius: 50%;
  background: var(--bg); border: 2px solid;
}
.v2 .tl-node.before::before { border-color: #FE2C55; }
.v2 .tl-node.after::before {
  border-color: var(--cyan);
  box-shadow: 0 0 12px var(--cyan);
}
.v2 .tl-node.pivot::before {
  background: var(--cyan); border-color: var(--cyan);
  box-shadow: 0 0 20px var(--cyan);
  width: 18px; height: 18px; left: -35px;
}
.v2 .tl-label {
  font-family: 'IBM Plex Mono', monospace; font-size: 10px;
  letter-spacing: 0.24em; text-transform: uppercase;
  margin-bottom: 6px;
}
.v2 .tl-node.before .tl-label { color: #FE2C55; }
.v2 .tl-node.after .tl-label { color: var(--cyan); }
.v2 .tl-node.pivot .tl-label { color: var(--cyan); font-weight: 600; }
.v2 .tl-text {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 17px; line-height: 1.45; color: var(--fg-2);
  max-width: 640px;
}
.v2 .tl-text b { color: var(--fg); font-weight: 600; }
.v2 .tl-node.after .tl-text b { color: var(--cyan); }
.v2 .mono { font-family: 'IBM Plex Mono', monospace; }
.v2 .label { font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--fg-3); }
.v2 .label-neon { color: var(--cyan); }
.v2 .section { padding: 120px 32px; position: relative; }
.v2 .container { max-width: 1200px; margin: 0 auto; }

.v2 .cta-btn {
  display: inline-flex; align-items: center; gap: 14px;
  background: var(--neon); color: #ffffff;
  padding: 22px 32px; border: none; cursor: pointer;
  font-family: 'IBM Plex Mono', monospace; font-weight: 700;
  font-size: 13px; letter-spacing: 0.22em; text-transform: uppercase;
  transition: all .15s; text-decoration: none; position: relative;
  line-height: 1; overflow: hidden;
}
button.cta-btn { -webkit-appearance: none; appearance: none; }
.v2 .cta-btn::before {
  content: ''; position: absolute; top: 0; left: -100%; width: 60%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
  transform: skewX(-20deg);
  animation: v2-shimmer 3s ease-in-out infinite;
  pointer-events: none;
}
@keyframes v2-shimmer {
  0% { left: -100%; }
  60% { left: 150%; }
  100% { left: 150%; }
}
.v2 .cta-btn:hover { box-shadow: 0 0 32px var(--neon-dim); transform: translateY(-2px); }
.v2 .cta-btn .arrow { font-weight: 900; font-size: 15px; }
.v2 .cta-btn.jumbo { padding: 26px 40px; font-size: 14px; }
.v2 .offer .cta-btn.jumbo {
  padding: 30px 52px; font-size: 16px; letter-spacing: 0.26em;
  animation: v2-cta-glow 2.2s ease-in-out infinite;
  box-shadow: 0 0 24px var(--neon-dim);
}
@keyframes v2-cta-glow {
  0%, 100% { box-shadow: 0 0 24px var(--neon-dim); }
  50% { box-shadow: 0 0 48px var(--neon), 0 0 80px var(--neon-dim); }
}

.v2 .cta-wrap { display: flex; justify-content: center; padding: 48px 0 24px; }

/* HERO — giant stacked headline + big portrait */
.v2 .hero { padding: 56px 32px 100px; position: relative; }
.v2 .hero-head {
  display: flex; justify-content: space-between; align-items: center;
  padding-bottom: 24px; margin-bottom: 56px;
  border-bottom: 1px solid var(--border);
  font-family: 'IBM Plex Mono', monospace; font-size: 10px;
  letter-spacing: 0.2em; color: var(--fg-3); text-transform: uppercase;
}
.v2 .hero-head .status { display: flex; align-items: center; gap: 10px; color: var(--cyan); }
.v2 .live-dot { width: 8px; height: 8px; background: var(--neon); border-radius: 50%; box-shadow: 0 0 12px var(--neon); animation: v2-pulse 1.6s ease-in-out infinite; display: inline-block; }
@keyframes v2-pulse { 50% { opacity: 0.5; transform: scale(0.85); } }

.v2 .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: stretch; }
.v2 .hero-left { padding-bottom: 12px; }
.v2 .hero-eyebrow {
  font-family: 'IBM Plex Mono', monospace; font-size: 12px;
  letter-spacing: 0.24em; color: var(--cyan); text-transform: uppercase;
  margin-bottom: 28px; display: inline-flex; align-items: center; gap: 12px;
  padding: 8px 14px; border: 1px solid var(--cyan); background: var(--cyan-dim);
}
.v2 .hero h1 {
  font-family: 'Space Grotesk', sans-serif; font-weight: 600;
  font-size: clamp(44px, 5.8vw, 84px); line-height: 0.94;
  letter-spacing: -0.04em; margin: 0; color: var(--fg);
}
.v2 .hero h1 .neon { color: var(--neon); }
.v2 .hero h1 .num { color: var(--neon); font-weight: 700; }
.v2 .hero h1 .slash { color: var(--fg-3); font-weight: 300; }
.v2 .hero h1 .l2 { display: block; margin-top: 8px; }
.v2 .hero-subs { max-width: 560px; margin-top: 40px; }
.v2 .hero-subs p { font-size: 17px; line-height: 1.55; color: var(--fg-2); margin: 0 0 16px; }
.v2 .hero-subs p b { color: var(--fg); font-weight: 500; }
.v2 .hero-highlight {
  display: flex; gap: 14px; padding: 20px 22px; margin-top: 24px;
  background: var(--bg-2); border-left: 3px solid var(--cyan);
  font-size: 16px; line-height: 1.5; color: var(--fg-2);
  max-width: 560px;
}
.v2 .hero-highlight .star { color: var(--cyan); font-size: 18px; flex-shrink: 0; }
.v2 .hero-ctas { display: flex; gap: 16px; align-items: center; margin-top: 44px; flex-wrap: wrap; }
.v2 .hero-tag { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--fg-3); letter-spacing: 0.2em; text-transform: uppercase; }

/* HERO RIGHT · Portrait + TikTok icon */
.v2 .hero-right { position: relative; }
.v2 .hero-portrait-big {
  min-height: 640px; height: 100%; background: var(--bg-2); border: 1px solid var(--border);
  position: relative; overflow: hidden;
  box-shadow: 0 40px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px var(--cyan-dim);
}
.v2 .hero-portrait-img {
  position: absolute; inset: 0; width: 100%; height: 100%;
  object-fit: cover; object-position: center 25%;
  filter: contrast(1.05) saturate(0.85) brightness(0.95);
  z-index: 0;
}
.v2 .hero-portrait-big::before {
  content: ''; position: absolute; inset: 0;
  background:
    linear-gradient(180deg, transparent 40%, rgba(5,6,6,0.55) 100%),
    repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(255,255,255,0.025) 4px, rgba(255,255,255,0.025) 5px);
  pointer-events: none; z-index: 2;
}
.v2 .hero-portrait-big::after {
  content: ''; position: absolute; left: 0; right: 0; height: 2px;
  background: var(--cyan); opacity: 0.5;
  animation: v2-scan 3.5s linear infinite; z-index: 3;
  box-shadow: 0 0 12px var(--cyan);
}
@keyframes v2-scan { 0%{top:0} 100%{top:100%} }

.v2 .hero-portrait-frame-tl, .v2 .hero-portrait-frame-br {
  position: absolute; width: 24px; height: 24px; border: 2px solid var(--cyan); z-index: 4;
}
.v2 .hero-portrait-frame-tl { top: 12px; left: 12px; border-right: none; border-bottom: none; }
.v2 .hero-portrait-frame-br { bottom: 12px; right: 12px; border-left: none; border-top: none; }
.v2 .hero-portrait-rec {
  position: absolute; top: 16px; right: 16px; z-index: 4;
  display: flex; align-items: center; gap: 8px;
  font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: 0.2em;
  color: var(--cyan); padding: 4px 10px; background: rgba(0,0,0,0.8);
  border: 1px solid var(--cyan);
}
.v2 .hero-portrait-rec .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--red); animation: v2-pulse 1s ease-in-out infinite; }
.v2 .hero-portrait-foot {
  position: absolute; bottom: 16px; left: 16px; right: 16px; z-index: 4;
  font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: 0.2em;
  color: var(--fg-2); text-transform: uppercase;
  display: flex; justify-content: space-between; align-items: flex-end;
}
.v2 .hero-portrait-foot b { color: var(--cyan); }
.v2 .hero-portrait-foot .name { font-family: 'Space Grotesk', sans-serif; font-size: 22px; letter-spacing: -0.02em; text-transform: none; color: var(--fg); font-weight: 500; line-height: 1; }
.v2 .hero-portrait-foot .role { color: var(--fg-3); font-size: 10px; margin-top: 6px; }
.v2 .hero-portrait-foot .loc { text-align: right; }
.v2 .hero-portrait-foot .loc .city { color: var(--cyan); font-size: 11px; letter-spacing: 0.25em; }
.v2 .hero-portrait-foot .loc .coord { color: var(--fg-3); font-size: 9px; margin-top: 4px; letter-spacing: 0.15em; }

/* TikTok icon badge floating */
.v2 .tiktok-badge {
  position: absolute; right: -28px; top: 32px; z-index: 5;
  width: 96px; height: 96px; border-radius: 50%;
  background: var(--bg); border: 2px solid var(--cyan);
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 0 40px var(--cyan-dim);
  animation: v2-float 4s ease-in-out infinite;
}
@keyframes v2-float { 50% { transform: translateY(-8px); } }
.v2 .tiktok-badge svg { width: 52px; height: 52px; color: var(--fg); }
.v2 .tiktok-badge-label {
  position: absolute; bottom: -28px; left: 50%; transform: translateX(-50%);
  font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: 0.25em;
  color: var(--cyan); text-transform: uppercase; white-space: nowrap;
}

.v2 .hero-bottom {
  margin-top: 64px; padding-top: 32px; border-top: 1px solid var(--border);
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px;
}
.v2 .hero-stat .n { font-family: 'Space Grotesk', sans-serif; font-size: 32px; font-weight: 600; color: var(--fg); letter-spacing: -0.03em; line-height: 1; }
.v2 .hero-stat .n .neon { color: var(--neon); }
.v2 .hero-stat .l { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--fg-3); letter-spacing: 0.18em; text-transform: uppercase; margin-top: 8px; }

/* SECTION DIVIDER — sutil, HUD */
.v2 .sec-divider {
  background: var(--bg);
  padding: 0 32px;
  position: relative;
}
.v2 .sec-divider-inner {
  max-width: 1280px; margin: 0 auto;
  display: flex; align-items: center; gap: 16px;
  padding: 28px 0;
}
.v2 .sec-divider-line {
  flex: 1; height: 1px;
  background: linear-gradient(90deg,
    transparent 0%,
    var(--border) 10%,
    var(--border-strong) 50%,
    var(--border) 90%,
    transparent 100%);
}
.v2 .sec-divider-tick {
  width: 6px; height: 6px;
  border: 1px solid var(--border-strong);
  transform: rotate(45deg);
  flex-shrink: 0;
}
.v2 .sec-divider-badge {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 8px 14px;
  border: 1px solid var(--cyan-dim);
  background: rgba(0,0,0,0.6);
  font-family: 'IBM Plex Mono', monospace; font-size: 10px;
  letter-spacing: 0.28em; color: var(--fg-2);
  text-transform: uppercase; flex-shrink: 0;
}
.v2 .sec-divider-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--cyan); box-shadow: 0 0 8px var(--cyan);
  animation: v2-pulse 1.8s infinite;
}
.v2 .sec-divider-num { color: var(--cyan); letter-spacing: 0.22em; }
.v2 .sec-divider-arrow { color: var(--fg-3); font-size: 8px; }

/* BACKGROUND ALTERNATION */
.v2 .section { background: var(--bg); }
.v2 .section-alt { background: var(--bg-2); }
.v2 .section-alt::before {
  content: ''; position: absolute; inset: 0;
  background-image:
    linear-gradient(var(--grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid) 1px, transparent 1px);
  background-size: 40px 40px; pointer-events: none; opacity: 0.4;
}
.v2 .section-alt > .container { position: relative; z-index: 1; }
.v2 .section { position: relative; }

/* MODAL DE APLICAÇÃO */
.v2 .apply-overlay {
  position: fixed; inset: 0; z-index: 9999;
  background: rgba(5, 6, 6, 0.85);
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  display: flex; align-items: center; justify-content: center; padding: 24px;
  animation: apply-fade 0.2s ease-out;
}
@keyframes apply-fade { from { opacity: 0; } to { opacity: 1; } }
.v2 .apply-modal {
  position: relative;
  background: var(--bg);
  border: 1px solid var(--border-strong);
  width: 100%; max-width: 560px;
  padding: 56px 48px 44px;
  animation: apply-slide 0.28s cubic-bezier(.2,.8,.2,1);
  box-shadow: 0 0 80px rgba(0,0,0,0.8), 0 0 40px var(--neon-dim);
}
@keyframes apply-slide { from { opacity: 0; transform: translateY(16px) scale(0.98); } to { opacity: 1; transform: none; } }
.v2 .apply-corner {
  position: absolute; width: 14px; height: 14px; border: 1px solid var(--neon);
}
.v2 .apply-corner.tl { top: -1px; left: -1px; border-right: none; border-bottom: none; }
.v2 .apply-corner.tr { top: -1px; right: -1px; border-left: none; border-bottom: none; }
.v2 .apply-corner.bl { bottom: -1px; left: -1px; border-right: none; border-top: none; }
.v2 .apply-corner.br { bottom: -1px; right: -1px; border-left: none; border-top: none; }
.v2 .apply-close {
  position: absolute; top: 16px; right: 16px;
  background: transparent; border: 1px solid var(--border); color: var(--fg-2);
  width: 32px; height: 32px; cursor: pointer;
  font-family: 'IBM Plex Mono', monospace; font-size: 14px;
  transition: all .2s;
}
.v2 .apply-close:hover { border-color: var(--neon); color: var(--neon); }
.v2 .apply-tag {
  font-family: 'IBM Plex Mono', monospace; font-size: 11px;
  color: var(--neon); letter-spacing: 0.26em; margin-bottom: 16px;
}
.v2 .apply-title {
  font-family: 'Space Grotesk', sans-serif; font-weight: 600;
  font-size: 32px; line-height: 1.08; letter-spacing: -0.03em;
  color: var(--fg); margin: 0 0 14px;
}
.v2 .apply-title .neon { color: var(--neon); }
.v2 .apply-sub {
  font-size: 14px; line-height: 1.5; color: var(--fg-2);
  margin: 0 0 32px; max-width: 440px;
}
.v2 .apply-sub b { color: var(--fg); font-weight: 600; }
.v2 .apply-form { display: flex; flex-direction: column; gap: 20px; }
.v2 .apply-field { display: flex; flex-direction: column; gap: 8px; }
.v2 .apply-field-k {
  font-family: 'IBM Plex Mono', monospace; font-size: 10px;
  color: var(--fg-3); letter-spacing: 0.22em;
}
.v2 .apply-field input {
  background: var(--bg-2); border: 1px solid var(--border);
  padding: 16px 18px; font-size: 16px; color: var(--fg);
  font-family: 'Space Grotesk', sans-serif;
  outline: none; transition: border-color .2s, background .2s;
  width: 100%; box-sizing: border-box;
}
.v2 .apply-field input:focus { border-color: var(--neon); background: var(--bg-3); }
.v2 .apply-field input::placeholder { color: var(--fg-3); }
.v2 .apply-submit {
  background: var(--neon); color: #000000;
  border: none; padding: 20px 28px;
  font-family: 'Space Grotesk', sans-serif; font-weight: 700;
  font-size: 15px; letter-spacing: 0.1em;
  cursor: pointer; margin-top: 8px;
  display: inline-flex; align-items: center; justify-content: center; gap: 10px;
  transition: transform .15s, box-shadow .15s;
}
.v2 .apply-submit:hover { transform: translateY(-2px); box-shadow: 0 8px 24px var(--neon-dim); }
.v2 .apply-submit .arrow { font-size: 16px; }
.v2 .apply-submit.ghost {
  background: transparent; color: var(--fg-2);
  border: 1px solid var(--border); margin-top: 24px;
}
.v2 .apply-submit.ghost:hover { border-color: var(--neon); color: var(--neon); box-shadow: none; }
.v2 .apply-foot {
  font-family: 'IBM Plex Mono', monospace; font-size: 10px;
  color: var(--fg-3); letter-spacing: 0.18em;
  margin-top: 12px; display: flex; align-items: center; gap: 8px;
}
.v2 .apply-foot .live-dot { width: 6px; height: 6px; background: var(--neon); border-radius: 50%; animation: v2-pulse 1.4s infinite; }

/* SUCCESS STATE */
.v2 .apply-success { text-align: left; }
.v2 .apply-success-check {
  color: var(--neon);
  margin: 0 0 20px;
  filter: drop-shadow(0 0 16px var(--neon-dim));
}
.v2 .apply-success .apply-title .neon { color: var(--neon); }
.v2 .apply-success-meta {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 20px; padding: 20px 0;
  border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
  margin: 24px 0 8px;
}
.v2 .apply-success-meta > div { display: flex; flex-direction: column; gap: 6px; }
.v2 .apply-success-meta b { font-family: 'Space Grotesk', sans-serif; font-size: 15px; color: var(--fg); letter-spacing: -0.01em; }
.v2 .apply-success-meta b.neon { color: var(--neon); }

/* BLOCO 02 */
.v2 .section-head { display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 1px solid var(--border); padding-bottom: 32px; margin-bottom: 56px; text-align: center; flex-direction: column; align-items: center; }
.v2 .section-head-title h2 { font-family: 'Space Grotesk', sans-serif; font-weight: 500; font-size: clamp(36px, 4.4vw, 60px); line-height: 1; letter-spacing: -0.03em; margin: 10px 0 6px; max-width: none; }
.v2 .section-head-title h2 .neon { color: var(--neon); }
.v2 .section-head-title h2 .slash { color: var(--fg-3); }
.v2 .section-head-sub { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--fg-3); letter-spacing: 0.15em; }

/* Full-width variant — h2 spans entire container */
.v2 .section-head-full { display: block; padding-bottom: 32px; margin-bottom: 64px; border-bottom: 1px solid var(--border); }
.v2 .section-head-full .section-head-top {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 24px;
}
.v2 .section-head-h2-full {
  font-family: 'Space Grotesk', sans-serif; font-weight: 500;
  font-size: clamp(40px, 5.2vw, 80px); line-height: 1.02;
  letter-spacing: -0.035em;
  margin: 0; width: 100%; max-width: none;
}
.v2 .section-head-h2-full .neon { color: var(--neon); }

.v2 .diag-intro p { font-size: 17px; line-height: 1.55; color: var(--fg-2); max-width: 620px; margin: 0 auto 14px; text-align: center; }
.v2 .diag-intro { display: flex; flex-direction: column; align-items: center; }

.v2 .pains-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; margin-top: 56px; border: 1px solid var(--border); }
.v2 .pain-cell { padding: 28px 20px; border-right: 1px solid var(--border); position: relative; min-height: 180px; display: flex; flex-direction: column; justify-content: space-between; }
.v2 .pain-cell:last-child { border-right: none; }
.v2 .pain-cell .k { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--red); letter-spacing: 0.18em; }
.v2 .pain-cell .t { font-family: 'Space Grotesk', sans-serif; font-size: 18px; font-weight: 500; line-height: 1.25; letter-spacing: -0.01em; }
.v2 .pain-cell .x { color: var(--red); opacity: 0.4; font-size: 18px; }

/* BLOCO 02 — unificado (diag → proof → virada → resultados) */
.v2 .b02-subtitle { font-family: 'Space Grotesk', sans-serif; font-size: 22px; color: var(--fg-2); margin-top: 10px; font-weight: 400; font-style: italic; letter-spacing: -0.01em; }
.v2 .b02-transition { margin: 64px 0 56px; padding: 32px 36px; background: var(--bg-2); border-left: 3px solid var(--red); max-width: 820px; }
.v2 .b02-lead { font-family: 'Space Grotesk', sans-serif; font-size: 26px; font-weight: 500; color: var(--fg); line-height: 1.25; letter-spacing: -0.02em; margin-bottom: 10px; }
.v2 .b02-tail { font-family: 'Space Grotesk', sans-serif; font-size: 20px; color: var(--fg-2); line-height: 1.4; }
.v2 .b02-arrow-inline { color: var(--cyan); font-family: 'IBM Plex Mono', monospace; margin-left: 6px; }
.v2 .b02-divider { margin: 80px 0 24px; height: 1px; background: var(--border); position: relative; }
.v2 .b02-divider::after { content: '◈'; position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); background: var(--bg); padding: 0 16px; color: var(--cyan); font-size: 12px; }
.v2 .b02-pivot-title { font-family: 'Space Grotesk', sans-serif; font-size: 28px; color: var(--fg-2); margin-top: 16px; font-weight: 400; text-align: center; }
.v2 .b02-brand {
  font-family: 'Space Grotesk', sans-serif; font-weight: 500;
  font-size: clamp(80px, 14vw, 200px); line-height: 0.85;
  letter-spacing: -0.06em; color: var(--fg); margin: 16px 0 40px;
  text-shadow: 0 0 60px var(--cyan-dim);
}
.v2 .b02-brand .slash { color: var(--fg-3); font-weight: 300; }
.v2 .b02-pivot-body { font-size: 19px; line-height: 1.55; color: var(--fg-2); max-width: 780px; text-align: center; margin: 0 auto; }
.v2 .b02-results { list-style: none; padding: 0; margin: 0; border-top: 1px solid var(--border); }
.v2 .b02-results li { display: grid; grid-template-columns: 60px 24px 1fr; align-items: center; gap: 20px; padding: 24px 8px; border-bottom: 1px solid var(--border); font-family: 'Space Grotesk', sans-serif; font-size: 22px; font-weight: 500; color: var(--fg); letter-spacing: -0.015em; transition: background .2s; }
.v2 .b02-results li:hover { background: var(--bg-2); }
.v2 .b02-r-k { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--cyan); letter-spacing: 0.22em; }
.v2 .b02-r-bullet { width: 10px; height: 10px; background: var(--cyan); display: inline-block; justify-self: center; box-shadow: 0 0 12px var(--neon-dim); }

.v2 .pivot-quote { font-family: 'Space Grotesk', sans-serif; font-size: 24px; color: var(--fg); margin: 80px 0 48px; padding: 28px 32px; background: var(--bg-2); border-left: 3px solid var(--red); max-width: 820px; line-height: 1.35; font-weight: 500; }
.v2 .pivot-arrow { text-align: center; color: var(--cyan); font-family: 'IBM Plex Mono', monospace; font-size: 32px; margin: 24px 0 40px; }

/* WHATSAPP-STYLE TESTIMONIALS */
.v2 .wa-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 32px; }

/* PROOF PHONES — real print screenshots in iPhone frames */
.v2 .proof-phones { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; margin-top: 32px; align-items: start; }
.v2 .proof-phone { display: flex; flex-direction: column; align-items: center; gap: 14px; }
.v2 .proof-phone-frame {
  position: relative; width: 100%; max-width: 200px; aspect-ratio: 9/19.5;
  background: #000; border-radius: 38px; padding: 10px;
  border: 2px solid #1a1d1e; box-shadow:
    0 30px 60px -15px rgba(0,0,0,0.8),
    0 0 0 1px rgba(255,255,255,0.04) inset,
    0 0 40px -10px var(--neon-dim);
  overflow: hidden;
}
.v2 .proof-phone-notch {
  position: absolute; top: 12px; left: 50%; transform: translateX(-50%);
  width: 90px; height: 24px; background: #000; border-radius: 14px;
  z-index: 3;
}
.v2 .proof-phone-img {
  position: relative; width: 100%; height: 100%; object-fit: cover; object-position: center top;
  border-radius: 28px; display: block;
  filter: contrast(1.02) saturate(0.9);
}
.v2 .proof-phone-flash {
  position: absolute; inset: 10px; border-radius: 28px; pointer-events: none; z-index: 2;
  background: linear-gradient(180deg, rgba(254,44,85,0) 60%, rgba(254,44,85,0.08) 100%);
  border: 1px solid rgba(255,255,255,0.04);
}
.v2 .proof-phone-frame::after {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 50%;
  background: linear-gradient(180deg, rgba(255,255,255,0.04), transparent);
  border-radius: 38px 38px 0 0; pointer-events: none; z-index: 1;
}
.v2 .proof-phone-cap {
  display: flex; align-items: center; gap: 10px;
  font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.16em;
  color: var(--fg-3);
}
.v2 .proof-phone-k {
  display: inline-block; padding: 3px 8px; background: rgba(254,44,85,0.1);
  border: 1px solid rgba(254,44,85,0.3); color: #FE2C55;
  font-weight: 700;
}
.v2 .proof-phone-t { text-transform: uppercase; }
@media (max-width: 900px) {
  .v2 .proof-phones { grid-template-columns: 1fr; gap: 40px; }
  .v2 .proof-phone-frame { max-width: 320px; }
}
.v2 .wa-phone {
  background: #0b141a; border-radius: 14px; padding: 16px 14px;
  border: 1px solid var(--border); position: relative;
  box-shadow: 0 20px 40px -20px rgba(0,0,0,0.5);
  display: flex; flex-direction: column; gap: 10px;
  min-height: 340px;
}
.v2 .wa-head { display: flex; align-items: center; gap: 10px; padding: 6px 4px 12px; border-bottom: 1px solid rgba(255,255,255,0.05); }
.v2 .wa-avatar { width: 36px; height: 36px; border-radius: 50%; background: linear-gradient(135deg, #3a4a52, #25333b); display: flex; align-items: center; justify-content: center; color: #d8e2e6; font-weight: 600; font-size: 14px; font-family: 'Space Grotesk', sans-serif; }
.v2 .wa-name { font-size: 14px; color: #e9edef; font-weight: 500; }
.v2 .wa-sub { font-size: 11px; color: #8696a0; font-family: 'IBM Plex Mono', monospace; letter-spacing: 0.08em; margin-top: 2px; }
.v2 .wa-body { flex: 1; display: flex; flex-direction: column; gap: 8px; padding: 8px 2px; }
.v2 .wa-bubble {
  max-width: 86%; padding: 8px 12px 6px; border-radius: 8px;
  font-size: 13.5px; line-height: 1.4; color: #e9edef;
  position: relative; word-wrap: break-word;
}
.v2 .wa-bubble.in { background: var(--wa-gray); align-self: flex-start; border-top-left-radius: 2px; }
.v2 .wa-bubble.out { background: var(--wa-green); align-self: flex-end; border-top-right-radius: 2px; }
.v2 .wa-time { font-size: 10px; color: rgba(233,237,239,0.5); text-align: right; margin-top: 2px; font-family: 'IBM Plex Mono', monospace; }
.v2 .wa-tag {
  position: absolute; top: -1px; right: -1px;
  font-family: 'IBM Plex Mono', monospace; font-size: 9px;
  color: #000000; background: var(--red); padding: 4px 8px;
  letter-spacing: 0.15em; font-weight: 700;
}
.v2 .wa-foot {
  padding: 8px 4px 2px; border-top: 1px solid rgba(255,255,255,0.05);
  font-family: 'IBM Plex Mono', monospace; font-size: 10px;
  color: #8696a0; letter-spacing: 0.1em; display: flex; justify-content: space-between;
}

/* WA dropzone — print upload */
.v2 .wa-dropzone {
  cursor: pointer; transition: border-color .2s, transform .2s, box-shadow .2s;
  overflow: hidden; padding: 0; min-height: 420px;
}
.v2 .wa-dropzone .wa-tag { z-index: 2; border-radius: 0; }
.v2 .wa-dropzone:not(.has-img):hover {
  border-color: var(--neon); transform: translateY(-2px);
  box-shadow: 0 24px 48px -20px rgba(0,0,0,0.6), 0 0 0 1px var(--neon-dim);
}
.v2 .wa-dropzone.drag {
  border-color: var(--neon); box-shadow: 0 0 0 2px var(--neon-dim), 0 24px 48px -20px rgba(0,0,0,0.6);
  transform: scale(1.01);
}
.v2 .wa-drop-empty {
  flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 10px; padding: 32px 20px; text-align: center;
  background:
    repeating-linear-gradient(45deg, rgba(37,244,238,0.02) 0 10px, transparent 10px 20px),
    radial-gradient(ellipse at center, rgba(37,244,238,0.06), transparent 70%);
  border: 1px dashed var(--border-strong);
  border-radius: 10px; margin: 12px;
  transition: border-color .2s, background .2s;
}
.v2 .wa-dropzone:hover .wa-drop-empty,
.v2 .wa-dropzone.drag .wa-drop-empty {
  border-color: var(--neon);
  background:
    repeating-linear-gradient(45deg, rgba(37,244,238,0.05) 0 10px, transparent 10px 20px),
    radial-gradient(ellipse at center, rgba(37,244,238,0.12), transparent 70%);
}
.v2 .wa-drop-icon {
  color: var(--neon); opacity: 0.6; transition: opacity .2s, transform .2s;
}
.v2 .wa-dropzone:hover .wa-drop-icon { opacity: 1; transform: scale(1.08); }
.v2 .wa-drop-title {
  font-family: 'IBM Plex Mono', monospace; font-size: 12px;
  letter-spacing: 0.24em; color: var(--fg); font-weight: 600;
  margin-top: 4px;
}
.v2 .wa-drop-sub {
  font-family: 'Space Grotesk', sans-serif; font-size: 13px;
  color: var(--fg-2); letter-spacing: 0.01em;
}
.v2 .wa-drop-foot {
  margin-top: 16px; display: inline-flex; align-items: center; gap: 8px;
  font-family: 'IBM Plex Mono', monospace; font-size: 10px;
  color: var(--fg-3); letter-spacing: 0.2em;
  padding: 6px 12px; border: 1px solid var(--border);
  background: rgba(0,0,0,0.3);
}
.v2 .wa-drop-dot {
  width: 6px; height: 6px; border-radius: 50%; background: var(--neon);
  box-shadow: 0 0 8px var(--neon); animation: wa-pulse 1.6s infinite;
}
@keyframes wa-pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
.v2 .wa-drop-hint { color: var(--fg-3); opacity: 0.7; }

.v2 .wa-print-img {
  width: 100%; height: 100%; object-fit: cover;
  display: block; position: absolute; inset: 0;
  border-radius: 13px;
}
.v2 .wa-dropzone.has-img { cursor: default; }
.v2 .wa-print-clear {
  position: absolute; top: 10px; left: 10px; z-index: 3;
  width: 28px; height: 28px; border-radius: 50%;
  background: rgba(0,0,0,0.7); color: #fff; border: 1px solid rgba(255,255,255,0.2);
  font-size: 14px; cursor: pointer; display: grid; place-items: center;
  font-family: 'Space Grotesk', sans-serif; transition: background .2s, border-color .2s;
}
.v2 .wa-print-clear:hover { background: var(--red); border-color: var(--red); }

/* PIVOT — TIKTOK */
.v2 .pivot { padding: 140px 32px; background: var(--bg-2); overflow: hidden; position: relative; }
.v2 .pivot::before {
  content: ''; position: absolute; top: -200px; right: -200px; width: 600px; height: 600px;
  background: radial-gradient(circle, var(--cyan-dim), transparent 70%); pointer-events: none;
}
.v2 .pivot-brand-wrap { margin: 24px 0 48px; }
.v2 .pivot-brand {
  font-family: 'Space Grotesk', sans-serif; font-weight: 500;
  font-size: clamp(80px, 14vw, 220px); line-height: 0.85;
  letter-spacing: -0.06em; color: var(--fg); margin: 0;
  text-shadow: 0 0 60px var(--cyan-dim);
}
.v2 .pivot-brand .slash { color: var(--fg-3); }
.v2 .pivot-body { font-size: 19px; line-height: 1.55; color: var(--fg-2); max-width: 700px; margin-bottom: 56px; }
.v2 .results-grid { display: grid; grid-template-columns: repeat(5, 1fr); border: 1px solid var(--border); margin-top: 32px; }
.v2 .result-cell { padding: 28px 22px; border-right: 1px solid var(--border); min-height: 180px; display: flex; flex-direction: column; justify-content: space-between; position: relative; }
.v2 .result-cell:last-child { border-right: none; }
.v2 .result-metric { font-family: 'Space Grotesk', sans-serif; font-size: 44px; font-weight: 500; color: var(--cyan); line-height: 1; letter-spacing: -0.04em; }
.v2 .result-label { font-size: 13.5px; color: var(--fg-2); line-height: 1.4; }
.v2 .result-k { position: absolute; top: 12px; right: 14px; font-family: 'IBM Plex Mono', monospace; font-size: 9px; color: var(--fg-3); letter-spacing: 0.2em; }

/* BLOCO 03 */
/* BLOCO 03 — MAR AZUL · visual ocean experience */
.v2 .b03-section {
  background: linear-gradient(180deg, var(--bg) 0%, #050a14 40%, #030812 100%);
  overflow: hidden;
  position: relative;
}
.v2 .b03-ocean-bg {
  position: absolute; inset: 0; z-index: 0; pointer-events: none;
  overflow: hidden;
}
.v2 .b03-wave {
  position: absolute; left: -20%; right: -20%;
  height: 140px; border-radius: 50%;
  background: radial-gradient(ellipse at 50% 50%, rgba(100, 160, 255, 0.06) 0%, transparent 70%);
  filter: blur(20px);
  animation: b03-wave-float 14s ease-in-out infinite;
}
.v2 .b03-wave-1 { top: 20%; animation-delay: 0s; }
.v2 .b03-wave-2 { top: 50%; animation-delay: -5s; height: 180px; }
.v2 .b03-wave-3 { top: 80%; animation-delay: -10s; height: 160px; }
@keyframes b03-wave-float { 0%,100% { transform: translateY(0) scaleX(1); opacity: 0.7; } 50% { transform: translateY(-30px) scaleX(1.1); opacity: 1; } }
.v2 .b03-particles { position: absolute; inset: 0; }
.v2 .b03-dot {
  position: absolute; width: 3px; height: 3px; border-radius: 50%;
  background: rgba(37, 244, 238, 0.6);
  box-shadow: 0 0 8px rgba(37, 244, 238, 0.8);
  animation: b03-dot-rise ease-in-out infinite;
}
@keyframes b03-dot-rise { 0% { transform: translateY(20px); opacity: 0; } 30% { opacity: 1; } 100% { transform: translateY(-40px); opacity: 0; } }
.v2 .b03-section .container { position: relative; z-index: 2; }
.v2 .b03-head .b03-mar-azul {
  color: #25F4EE; font-style: italic; font-weight: 600;
  text-shadow: 0 0 30px rgba(37, 244, 238, 0.4); position: relative;
}
.v2 .b03-head .b03-mar-azul::after {
  content: ''; position: absolute; left: 0; right: 0; bottom: -6px; height: 3px;
  background: linear-gradient(90deg, transparent, #25F4EE, transparent); opacity: 0.7;
}
.v2 .b03-hero-display {
  position: relative; padding: 80px 32px 60px; margin: 20px 0 32px;
  border: 1px solid rgba(37, 244, 238, 0.14);
  background: rgba(5, 10, 20, 0.35);
  overflow: hidden; text-align: center;
}
.v2 .b03-mosaic {
  position: absolute; inset: 0; z-index: 0;
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 0;
}
.v2 .b03-mosaic img {
  width: 100%; height: 100%; object-fit: cover;
  filter: brightness(0.35) saturate(0.3) contrast(1.1);
  mix-blend-mode: luminosity;
}
.v2 .b03-mosaic::after {
  content: ''; position: absolute; inset: 0; z-index: 1;
  background:
    radial-gradient(ellipse 80% 80% at 50% 50%, rgba(5, 10, 30, 0.4), rgba(5, 10, 30, 0.85) 70%),
    linear-gradient(180deg, rgba(37, 244, 238, 0.08) 0%, transparent 40%, rgba(5, 10, 20, 0.6) 100%);
}
.v2 .b03-display-word, .v2 .b03-coord-tl, .v2 .b03-coord-br, .v2 .b03-depth-meter, .v2 .b03-scan-line {
  position: relative; z-index: 2;
}
.v2 .b03-coord-tl, .v2 .b03-coord-br {
  position: absolute; font-family: 'IBM Plex Mono', monospace;
  font-size: 10px; letter-spacing: 0.28em; color: rgba(37, 244, 238, 0.6);
}
.v2 .b03-coord-tl { top: 12px; left: 14px; font-size: 9px; opacity: 0.7; }
.v2 .b03-coord-br { bottom: 12px; right: 14px; font-size: 9px; opacity: 0.7; }
.v2 .b03-display-word {
  font-family: 'Space Grotesk', sans-serif; font-weight: 700;
  font-size: clamp(54px, 8vw, 108px); line-height: 0.9; letter-spacing: -0.05em;
  display: flex; flex-direction: column; align-items: center; gap: 2px;
}
.v2 .b03-display-word > span:first-child {
  color: rgba(255, 255, 255, 0.12);
  -webkit-text-stroke: 1px rgba(37, 244, 238, 0.3);
}
.v2 .b03-display-word .b03-display-azul {
  font-style: italic;
  text-shadow: 0 0 24px rgba(37, 244, 238, 0.35);
  background: linear-gradient(180deg, #69f7f2 0%, #25F4EE 100%);
  -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
}
.v2 .b03-scan-line { display: none; }
@keyframes b03-scan { 0% { top: 0%; opacity: 0; } 15% { opacity: 1; } 85% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
.v2 .b03-depth-meter {
  display: inline-flex; align-items: center; gap: 10px;
  margin-top: 20px; padding: 6px 12px;
  border: 1px solid rgba(37, 244, 238, 0.2);
  background: rgba(5, 10, 20, 0.5);
  font-family: 'IBM Plex Mono', monospace;
}
.v2 .b03-depth-label { font-size: 9px; letter-spacing: 0.24em; color: rgba(37, 244, 238, 0.65); }
.v2 .b03-depth-bar { width: 80px; height: 3px; background: rgba(37, 244, 238, 0.12); position: relative; overflow: hidden; }
.v2 .b03-depth-fill {
  position: absolute; inset: 0 70% 0 0;
  background: linear-gradient(90deg, #25F4EE, #69f7f2);
  box-shadow: 0 0 12px #25F4EE;
  animation: b03-depth-scan 2.4s ease-in-out infinite;
}
@keyframes b03-depth-scan { 0%,100% { inset: 0 70% 0 0; } 50% { inset: 0 15% 0 0; } }
.v2 .b03-depth-num { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 16px; color: #25F4EE; }
.v2 .b03-list-ocean { margin-top: 64px; border: none; display: grid; gap: 16px; }
.v2 .b03-item-card {
  display: grid; grid-template-columns: 120px 1fr; gap: 32px;
  padding: 32px 36px; align-items: center;
  background: linear-gradient(135deg, rgba(20, 35, 60, 0.5) 0%, rgba(5, 10, 20, 0.4) 100%);
  border: 1px solid rgba(37, 244, 238, 0.15);
  border-left: 2px solid rgba(37, 244, 238, 0.4);
  position: relative; overflow: hidden; transition: all .3s ease;
}
.v2 .b03-item-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, rgba(37, 244, 238, 0.4), transparent);
}
.v2 .b03-item-card:hover {
  border-left-color: #25F4EE;
  background: linear-gradient(135deg, rgba(20, 35, 60, 0.7) 0%, rgba(10, 20, 35, 0.5) 100%);
  transform: translateX(6px); box-shadow: -8px 0 24px rgba(37, 244, 238, 0.08);
}
.v2 .b03-item-k { display: flex; flex-direction: column; align-items: flex-start; gap: 12px; position: relative; }
.v2 .b03-item-num {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 32px; font-weight: 500; color: #25F4EE;
  letter-spacing: -0.02em; line-height: 1;
  text-shadow: 0 0 20px rgba(37, 244, 238, 0.3);
}
.v2 .b03-item-tick { width: 40px; height: 1px; background: linear-gradient(90deg, #25F4EE, transparent); }
.v2 .b03-item-body .txt {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(17px, 1.6vw, 21px); line-height: 1.5; color: var(--fg-2);
  letter-spacing: -0.005em; max-width: 780px; margin: 0;
}
.v2 .b03-item-card .metric {
  color: #69f7f2; font-weight: 700;
  font-family: 'Space Grotesk', sans-serif; font-variant-numeric: tabular-nums;
  text-shadow: 0 0 16px rgba(105, 247, 242, 0.3);
}
.v2 .b03-item-card .no-clone {
  color: var(--fg); font-weight: 700;
  text-decoration: underline; text-decoration-color: #25F4EE;
  text-decoration-thickness: 2px; text-underline-offset: 4px;
}
.v2 .b03-item-wave {
  position: absolute; right: 0; top: 0; bottom: 0; width: 100px;
  background: radial-gradient(circle at 100% 50%, rgba(37, 244, 238, 0.08), transparent 70%);
  pointer-events: none;
}

/* BLOCO 03 — MAR AZUL (legacy) */
  font-family: 'Space Grotesk', sans-serif; font-weight: 500;
  font-size: clamp(38px, 5vw, 68px); line-height: 1.05;
  letter-spacing: -0.035em; margin: 20px 0 48px; max-width: 980px;
  color: var(--fg);
}
.v2 .b03-head .neon { color: var(--neon); font-weight: 600; }
.v2 .b03-list { margin-top: 72px; border-top: 1px solid var(--border); }
.v2 .b03-item {
  display: grid; grid-template-columns: 80px 1fr;
  gap: 32px; padding: 36px 0;
  border-bottom: 1px solid var(--border);
  align-items: baseline;
  transition: background .2s, padding-left .2s;
}
.v2 .b03-item:hover { background: var(--bg-2); padding-left: 16px; }
.v2 .b03-item .k {
  font-family: 'IBM Plex Mono', monospace; font-size: 13px;
  color: var(--neon); letter-spacing: 0.22em;
}
.v2 .b03-item .txt {
  font-family: 'Space Grotesk', sans-serif; font-size: clamp(18px, 2vw, 24px);
  line-height: 1.4; color: var(--fg-2); letter-spacing: -0.01em; font-weight: 400;
  max-width: 820px;
}
.v2 .b03-item .txt b { color: var(--fg); font-weight: 600; }
.v2 .b03-item .txt .metric {
  color: var(--neon); font-weight: 700; font-family: 'Space Grotesk', sans-serif;
  font-variant-numeric: tabular-nums;
}
.v2 .b03-item .txt .no-clone {
  color: var(--fg); font-weight: 600;
  text-decoration: underline; text-decoration-color: var(--neon);
  text-decoration-thickness: 2px; text-underline-offset: 4px;
}

/* BLOCO 04 */
.v2 .pegar { position: relative; overflow: hidden; }
.v2 .pegar > .container { position: relative; z-index: 2; }

/* Background mosaic with two photos */
.v2 .pegar-bg-mosaic {
  position: absolute; inset: 0; z-index: 0; pointer-events: none;
  background: var(--bg-2);
  overflow: hidden;
}
.v2 .pegar-bg-mosaic img {
  position: absolute;
  height: 70%; max-height: 600px;
  width: auto;
  top: 50%; transform: translateY(-50%);
  object-fit: contain;
  filter: brightness(0.4) saturate(0.35) contrast(1.1);
}
.v2 .pegar-bg-mosaic img:first-child {
  left: 0;
  mask-image: linear-gradient(90deg, black 30%, transparent 85%), linear-gradient(180deg, transparent 0%, black 20%, black 70%, transparent 100%);
  -webkit-mask-image: linear-gradient(90deg, black 30%, transparent 85%), linear-gradient(180deg, transparent 0%, black 20%, black 70%, transparent 100%);
  mask-composite: intersect;
  -webkit-mask-composite: source-in;
}
.v2 .pegar-bg-mosaic img:last-child {
  right: 0;
  mask-image: linear-gradient(270deg, black 30%, transparent 85%), linear-gradient(180deg, transparent 0%, black 20%, black 70%, transparent 100%);
  -webkit-mask-image: linear-gradient(270deg, black 30%, transparent 85%), linear-gradient(180deg, transparent 0%, black 20%, black 70%, transparent 100%);
  mask-composite: intersect;
  -webkit-mask-composite: source-in;
}
.v2 .pegar-bg-mosaic::after {
  content: ''; position: absolute; inset: 0; z-index: 1;
  background:
    radial-gradient(ellipse 60% 40% at 85% 15%, rgba(37,244,238,0.06), transparent 60%),
    radial-gradient(ellipse 50% 50% at 10% 85%, rgba(37,244,238,0.04), transparent 60%);
}


.v2 .pegar-scan {
  position: absolute; left: 0; right: 0; top: 0; bottom: 0; pointer-events: none; z-index: 1;
  background-image: repeating-linear-gradient(0deg, transparent 0, transparent 3px, rgba(37,244,238,0.025) 3px, rgba(37,244,238,0.025) 4px);
  mix-blend-mode: screen;
}
.v2 .pegar h2 { font-family: 'Space Grotesk', sans-serif; font-weight: 600; font-size: clamp(44px, 5.4vw, 80px); line-height: 1; letter-spacing: -0.035em; margin: 20px 0 28px; }
.v2 .pegar h2 .neon { color: var(--neon); }
.v2 .pegar-body { font-size: 18px; line-height: 1.55; color: var(--fg-2); max-width: 640px; margin-bottom: 56px; }
.v2 .pegar-items { display: grid; grid-template-columns: repeat(5, 1fr); border: 1px solid var(--border); }
.v2 .pegar-item { padding: 26px 20px; border-right: 1px solid var(--border); min-height: 160px; position: relative; display: flex; flex-direction: column; justify-content: space-between; }
.v2 .pegar-item:last-child { border-right: none; }
.v2 .pegar-item .k { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--cyan); letter-spacing: 0.2em; }
.v2 .pegar-item .t { font-family: 'Space Grotesk', sans-serif; font-size: 17px; font-weight: 500; line-height: 1.3; letter-spacing: -0.01em; }
.v2 .pegar-item .check { color: var(--cyan); opacity: 0.4; align-self: flex-end; font-size: 18px; }
.v2 .pegar-closer { font-family: 'Space Grotesk', sans-serif; font-weight: 500; font-size: 30px; color: var(--neon); margin-top: 40px; letter-spacing: -0.02em; }

/* BLOCO 05 · PATHS COM ÍCONES GRANDES */
.v2 .paths-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.v2 .path-card {
  border: 1px solid var(--border); padding: 0; background: var(--bg-2);
  position: relative; min-height: auto; display: flex; flex-direction: column;
  transition: border-color .2s; overflow: hidden;
}
.v2 .path-card:hover { border-color: var(--neon); }
.v2 .path-card.path-cyan:hover { border-color: var(--cyan); }
.v2 .path-card.path-cyan .path-cpa-head .pulse { color: var(--cyan); }
.v2 .path-card.path-cyan .path-cpa-head .pulse::before { background: var(--cyan); box-shadow: 0 0 10px var(--cyan); }
.v2 .path-card.path-cyan .path-cpa::before {
  background: radial-gradient(ellipse 380px 120px at 30% 50%, rgba(37, 244, 238, 0.08), transparent 70%);
}
.v2 .path-card.path-cyan .path-cpa-curr { color: var(--cyan); }
.v2 .path-card.path-cyan .path-cpa-num {
  background: linear-gradient(180deg, #ffffff 0%, var(--cyan) 180%);
  -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
  text-shadow: none;
}
.v2 .path-card.path-cyan .path-cpa-bar::after {
  background: linear-gradient(90deg, var(--cyan), var(--cyan) 70%, transparent);
  box-shadow: 0 0 12px var(--cyan);
}
.v2 .path-card.path-cyan .path-icon-tag { color: var(--cyan); border-color: var(--cyan-dim); }

.v2 .path-icon-area {
  background: var(--bg-3); border-bottom: 1px solid var(--border);
  padding: 32px 24px; display: flex; align-items: center; justify-content: center;
  aspect-ratio: auto; position: relative; overflow: hidden;
}
.v2 .path-icon-area::before {
  content: ''; position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 20px 20px; pointer-events: none;
}
.v2 .path-icon-area.alt { background: linear-gradient(135deg, var(--bg-3), var(--bg-2)); }
.v2 .path-icon { position: relative; z-index: 1; }
.v2 .path-icon svg { color: var(--neon); filter: drop-shadow(0 0 20px var(--neon-dim)); }
.v2 .path-img {
  display: block; width: 100%; height: auto;
  object-fit: contain; object-position: center;
  filter: drop-shadow(0 0 30px var(--neon-dim));
}
.v2 .path-icon-area.has-img {
  padding: 0;
}
.v2 .path-icon-area.has-img .path-icon {
  position: absolute; inset: 0; width: 100%; height: 100%;
}
.v2 .path-icon-tag {
  position: absolute; top: 16px; left: 20px;
  font-family: 'IBM Plex Mono', monospace; font-size: 10px;
  color: var(--cyan); letter-spacing: 0.22em; text-transform: uppercase;
  background: rgba(0,0,0,0.6); padding: 4px 10px; border: 1px solid var(--cyan-dim);
}
.v2 .path-icon-badge {
  position: absolute; bottom: 16px; right: 20px;
  font-family: 'IBM Plex Mono', monospace; font-size: 10px;
  color: var(--fg-3); letter-spacing: 0.18em; text-transform: uppercase;
}

.v2 .path-body { padding: 28px 28px 24px; flex: 1; display: flex; flex-direction: column; }
.v2 .path-name { font-family: 'Space Grotesk', sans-serif; font-weight: 600; font-size: 36px; letter-spacing: -0.035em; margin: 0 0 16px; line-height: 0.95; }

/* CPA HERO — display gigante, destaque máximo */
.v2 .path-cpa {
  position: relative;
  padding: 24px 0 28px;
  margin: 0 0 32px;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  overflow: hidden;
}
.v2 .path-cpa::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 380px 120px at 30% 50%, var(--neon-soft), transparent 70%);
  pointer-events: none;
  opacity: 0.9;
}
.v2 .path-cpa-head {
  display: flex; justify-content: space-between; align-items: center;
  font-family: 'IBM Plex Mono', monospace; font-size: 10px;
  color: var(--fg-3); letter-spacing: 0.22em; text-transform: uppercase;
  margin-bottom: 10px;
  position: relative; z-index: 1;
}
.v2 .path-cpa-head .pulse {
  display: inline-flex; align-items: center; gap: 7px;
  color: var(--neon);
}
.v2 .path-cpa-head .pulse::before {
  content: ''; width: 6px; height: 6px; border-radius: 50%;
  background: var(--neon);
  box-shadow: 0 0 10px var(--neon);
  animation: v2-cpa-pulse 1.8s ease-in-out infinite;
}
@keyframes v2-cpa-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.3); }
}
.v2 .path-cpa-display {
  display: flex; align-items: baseline; gap: 6px;
  font-family: 'Space Grotesk', sans-serif;
  line-height: 0.9;
  position: relative; z-index: 1;
}
.v2 .path-cpa-lt {
  font-weight: 300;
  font-size: 44px;
  color: var(--fg-3);
  letter-spacing: -0.02em;
  transform: translateY(-8px);
}
.v2 .path-cpa-curr {
  font-weight: 400;
  font-size: 56px;
  color: var(--neon);
  letter-spacing: -0.04em;
  transform: translateY(-6px);
  opacity: 0.85;
  font-family: 'IBM Plex Mono', monospace;
}
.v2 .path-cpa-num {
  font-weight: 700;
  font-size: clamp(88px, 10vw, 128px);
  color: var(--fg);
  letter-spacing: -0.05em;
  text-shadow: 0 0 40px var(--neon-dim);
  background: linear-gradient(180deg, #ffffff 0%, var(--neon) 180%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.v2 .path-cpa-unit {
  font-weight: 500;
  font-size: 13px;
  color: var(--fg-3);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-family: 'IBM Plex Mono', monospace;
  margin-left: 10px;
  align-self: center;
  padding-bottom: 12px;
}
.v2 .path-cpa-meter {
  margin-top: 14px;
  display: grid; grid-template-columns: 1fr auto;
  gap: 10px; align-items: center;
  position: relative; z-index: 1;
}
.v2 .path-cpa-bar {
  height: 4px;
  background: var(--bg-3);
  border: 1px solid var(--border);
  position: relative;
  overflow: hidden;
}
.v2 .path-cpa-bar::after {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: var(--fill, 35%);
  background: linear-gradient(90deg, var(--neon), var(--neon) 70%, transparent);
  box-shadow: 0 0 12px var(--neon);
}
.v2 .path-cpa-vs {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px;
  color: var(--fg-3);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  white-space: nowrap;
}
.v2 .path-cpa-vs b { color: var(--fg-2); font-weight: 500; }

.v2 .path-bullets { list-style: none; padding: 0; margin: 0; flex: 1; display: flex; flex-direction: column; gap: 16px; }
.v2 .path-bullets li { display: flex; gap: 14px; align-items: baseline; font-size: 16px; color: var(--fg-2); line-height: 1.4; }
.v2 .path-bullets li .bullet { width: 6px; height: 6px; background: var(--cyan); flex-shrink: 0; transform: translateY(-2px); }

/* BLOCO 06 */
.v2 .foryou { position: relative; overflow: hidden; }
.v2 .foryou::after {
  content: '?'; position: absolute;
  top: 50%; left: 50%; transform: translate(-50%, -50%);
  font-family: 'Space Grotesk', sans-serif; font-weight: 700;
  font-size: clamp(300px, 50vw, 600px); line-height: 1;
  color: var(--neon); opacity: 0.04;
  pointer-events: none; z-index: 0;
}
.v2 .foryou > .container { position: relative; z-index: 1; }
.v2 .foryou h2 { font-family: 'Space Grotesk', sans-serif; font-weight: 600; font-size: clamp(36px, 4.4vw, 60px); line-height: 1.05; letter-spacing: -0.03em; margin: 20px 0 48px; max-width: none; white-space: nowrap; }
.v2 .foryou h2 .neon { color: var(--neon); }

/* foryou list — dossier / HUD rows */
.v2 .foryou-list {
  display: grid; gap: 12px; margin-top: 8px;
  counter-reset: foryou;
}
.v2 .foryou-item {
  counter-increment: foryou;
  position: relative;
  display: grid; grid-template-columns: 72px 1fr auto;
  gap: 28px; align-items: center;
  padding: 22px 28px 22px 22px;
  background: linear-gradient(90deg, var(--bg-2) 0%, rgba(15,18,17,0.4) 100%);
  border: 1px solid var(--border);
  border-left: 2px solid var(--neon-dim);
  transition: border-color .25s ease, transform .25s ease, background .25s ease;
  overflow: hidden;
}
.v2 .foryou-item::before {
  content: counter(foryou, decimal-leading-zero);
  font-family: 'IBM Plex Mono', monospace;
  font-size: 34px; font-weight: 500;
  color: var(--neon); letter-spacing: -0.02em;
  opacity: 0.85; line-height: 1;
  text-shadow: 0 0 18px var(--neon-dim);
  align-self: center;
}
.v2 .foryou-item::after {
  content: ''; position: absolute; top: 0; bottom: 0; right: 0;
  width: 140px;
  background: radial-gradient(circle at 100% 50%, var(--neon-soft), transparent 70%);
  opacity: 0; transition: opacity .3s ease;
  pointer-events: none;
}
.v2 .foryou-item:hover {
  border-left-color: var(--neon);
  transform: translateX(4px);
  background: linear-gradient(90deg, rgba(24,28,26,0.9) 0%, rgba(15,18,17,0.5) 100%);
}
.v2 .foryou-item:hover::after { opacity: 1; }
.v2 .foryou-item:hover .foryou-check { color: var(--cyan); border-color: var(--cyan); }
.v2 .foryou-t {
  font-family: 'Space Grotesk', sans-serif; font-size: 19px; font-weight: 500;
  line-height: 1.4; color: var(--fg); letter-spacing: -0.01em;
  position: relative; z-index: 1;
}
.v2 .foryou-check {
  color: var(--fg-3); transition: color .25s ease, border-color .25s ease;
  width: 36px; height: 36px; border: 1px solid var(--border-strong);
  display: grid; place-items: center; border-radius: 50%;
  position: relative; z-index: 1;
}
.v2 .foryou-check svg { width: 18px; height: 18px; }

/* BLOCO 07 */
.v2 .offer { padding: 140px 32px 60px; position: relative; overflow: hidden; background: var(--bg); }
.v2 .offer-bg {
  position: absolute; inset: 0; z-index: 0;
}
.v2 .offer-bg img {
  width: 100%; height: 100%; object-fit: cover; object-position: center 30%;
  filter: brightness(0.35) saturate(0.35) contrast(1.1);
}
.v2 .offer-bg::after {
  content: ''; position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 80% 70% at 50% 40%, rgba(0,0,0,0.3), rgba(0,0,0,0.85) 70%),
    linear-gradient(180deg, var(--bg) 0%, transparent 15%, transparent 85%, var(--bg) 100%);
}
.v2 .offer::before {
  content: ''; position: absolute; top: 0; left: 50%; transform: translateX(-50%);
  width: 900px; height: 600px; background: radial-gradient(ellipse, var(--neon-dim), transparent 70%);
  pointer-events: none; z-index: 1;
}
.v2 .offer-container { text-align: center; position: relative; max-width: 960px; margin: 0 auto; z-index: 2; }
.v2 .offer-eyebrow { font-family: 'IBM Plex Mono', monospace; font-size: 12px; letter-spacing: 0.3em; color: var(--neon); text-transform: uppercase; }
.v2 .offer-big { font-family: 'Space Grotesk', sans-serif; font-weight: 500; font-size: 28px; color: var(--fg-2); margin: 28px 0 12px; }
.v2 .offer-smash { font-family: 'Space Grotesk', sans-serif; font-weight: 600; font-size: clamp(48px, 7.5vw, 120px); line-height: 0.95; letter-spacing: -0.045em; margin: 0 0 48px; color: var(--fg); }
.v2 .offer-smash .strike { text-decoration: line-through; text-decoration-color: var(--red); text-decoration-thickness: 4px; color: var(--fg-3); }
.v2 .offer-smash .neon { color: var(--neon); }
.v2 .offer-body p { font-size: 18px; line-height: 1.6; color: var(--fg-2); max-width: 680px; margin: 0 auto 18px; }
.v2 .offer-duration { display: inline-flex; align-items: center; gap: 14px; padding: 18px 26px; background: var(--bg-2); border: 1px solid var(--neon); font-family: 'IBM Plex Mono', monospace; font-size: 12px; letter-spacing: 0.22em; color: var(--neon); text-transform: uppercase; margin: 48px 0; }
.v2 .offer-duration .indicator { width: 10px; height: 10px; background: var(--neon); box-shadow: 0 0 10px var(--neon); }
.v2 .offer-slots { display: flex; gap: 6px; justify-content: center; margin-bottom: 12px; }
.v2 .slot { width: 26px; height: 26px; border: 1px solid var(--border-strong); }
.v2 .slot.filled { background: var(--fg-3); border-color: var(--fg-3); }
.v2 .slot.available {
  border-color: var(--neon); background: var(--neon-dim);
  animation: v2-slot-pulse 1.8s ease-in-out infinite;
  box-shadow: 0 0 12px var(--neon-dim);
}
@keyframes v2-slot-pulse {
  0%, 100% { box-shadow: 0 0 12px var(--neon-dim); transform: scale(1); }
  50% { box-shadow: 0 0 22px var(--neon), 0 0 40px var(--neon-dim); transform: scale(1.12); }
}
.v2 .offer-slots-label { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--fg-3); letter-spacing: 0.25em; margin-top: 16px; margin-bottom: 48px; text-transform: uppercase; }
.v2 .offer-slots-label b { color: var(--neon); }

/* FOOTER */
.v2 .footer { padding: 56px 32px 40px; border-top: 1px solid var(--border); background: var(--bg-2); }
.v2 .footer-disclaimer { font-size: 11.5px; color: var(--fg-3); line-height: 1.6; max-width: 960px; margin: 0 auto 24px; text-align: center; }
.v2 .footer-bottom { display: flex; justify-content: center; align-items: center; gap: 24px; font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--fg-3); letter-spacing: 0.12em; flex-wrap: wrap; text-transform: uppercase; }
.v2 .footer-bottom a { color: var(--fg-3); text-decoration: none; }
.v2 .footer-bottom a:hover { color: var(--neon); }

/* swipe hint desktop-hidden by default */
.v2 .proof-swipe-hint { display: none; }

/* ===========================================================
   RESPONSIVE · MOBILE & TABLET
   =========================================================== */

/* TABLET (≤1024px) */
@media (max-width: 1024px) {
  .v2 .container { padding: 0 28px; }
  .v2 .section { padding: 100px 0; }

  /* HERO */
  .v2 .hero { padding: 40px 28px 72px; }
  .v2 .hero-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
  .v2 .hero h1 { font-size: clamp(32px, 4.5vw, 56px); }
  .v2 .hero-subs p { font-size: 15px; }
  .v2 .hero-highlight { font-size: 14px; padding: 16px 18px; }
  .v2 .hero-portrait-big { min-height: 480px; }
  .v2 .hero-bottom { grid-template-columns: repeat(4, 1fr); gap: 20px; }
  .v2 .hero-stat .n { font-size: 26px; }

  /* BLOCO 02 */
  .v2 .pains-grid { grid-template-columns: repeat(2, 1fr); }
  .v2 .pain-cell:nth-child(2) { border-right: none; }
  .v2 .display-brand { font-size: clamp(60px, 8vw, 100px); }
  .v2 .b02-pivot-body { font-size: 17px; }
  .v2 .stat-row { grid-template-columns: repeat(3, 1fr); }
  .v2 .proof-phones { grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .v2 .proof-phone-frame { max-width: 160px; }

  /* BLOCO 03 */
  .v2 .b03-item-card { grid-template-columns: 80px 1fr; gap: 20px; padding: 24px 28px; }
  .v2 .b03-display-word { font-size: clamp(48px, 7vw, 88px); }

  /* BLOCO 04 */
  .v2 .pegar h2 { font-size: clamp(40px, 6vw, 64px); }
  .v2 .pegar-items { grid-template-columns: repeat(3, 1fr); }
  .v2 .pegar-item:nth-child(3) { border-right: none; }
  .v2 .pegar-bg-mosaic img { height: 60%; max-height: 500px; }

  /* BLOCO 05 */
  .v2 .paths-grid { grid-template-columns: 1fr 1fr; gap: 20px; }
  .v2 .path-icon-area { aspect-ratio: auto; }
  .v2 .path-name { font-size: 30px; }
  .v2 .path-cpa-num { font-size: clamp(60px, 8vw, 90px) !important; }
  .v2 .path-body { padding: 24px 22px 20px; }

  /* BLOCO 06 */
  .v2 .foryou h2 { font-size: clamp(36px, 5vw, 52px); }
  .v2 .foryou-t { font-size: 17px; }

  /* BLOCO 07 */
  .v2 .offer-smash { font-size: clamp(40px, 6vw, 80px); }
  .v2 .offer .cta-btn.jumbo { padding: 26px 40px; font-size: 15px; }
}

/* MOBILE (≤768px) */
@media (max-width: 768px) {
  /* containers / sections */
  .v2 .container { padding: 0 18px; }
  .v2 .section { padding: 64px 0; }
  .v2 .hero { padding: 16px 0 32px; min-height: auto; }

  /* HERO */
  .v2 .hero-grid { grid-template-columns: 1fr; gap: 20px; align-items: start; }
  .v2 .hero-left { padding-bottom: 0; order: 1; }
  .v2 .hero-right { order: 2; }
  .v2 .hero h1 { font-size: clamp(40px, 11vw, 62px); line-height: 0.98; letter-spacing: -0.04em; }
  .v2 .hero-eyebrow { font-size: 11px; margin-bottom: 12px; }
  .v2 .hero-head { flex-wrap: wrap; gap: 8px; padding-bottom: 14px; margin-bottom: 28px; }
  .v2 .hero-subs { margin-top: 14px; }
  .v2 .hero-subs p { font-size: 15.5px; line-height: 1.45; margin: 0 0 10px; }
  .v2 .hero-highlight { padding: 14px 16px; margin-top: 14px; font-size: 14px; }
  .v2 .hero-ctas { flex-direction: column; align-items: center; gap: 10px; margin-top: 24px; }
  .v2 .hero-ctas .cta-btn { width: auto; justify-content: center; }
  .v2 .hero-tag { font-size: 10px; }
  .v2 .hero-portrait-big { aspect-ratio: 4/5; min-height: auto !important; height: auto; max-width: 100%; }
  .v2 .hero-bottom { display: grid !important; grid-template-columns: 1fr 1fr; gap: 12px 20px; margin-top: 20px; padding-top: 16px; }
  .v2 .hero-stat { min-width: 0; text-align: center; }
  .v2 .hero-stat .n { font-size: 24px; }
  .v2 .hero-stat .l { font-size: 9px; letter-spacing: 0.14em; }

  /* CTA buttons global */
  .v2 .cta-btn { padding: 16px 22px; font-size: 12.5px; letter-spacing: 0.12em; overflow: hidden; position: relative; }
  .v2 .cta-btn::before { width: 50%; }
  .v2 .cta-btn.jumbo { padding: 20px 24px; font-size: 14px; }
  .v2 .offer .cta-btn.jumbo { padding: 22px 28px; font-size: 14px; letter-spacing: 0.16em; }

  /* SECTION HEAD full */
  .v2 .section-head-full { gap: 16px; }
  .v2 .section-head-top { flex-direction: column; align-items: flex-start; gap: 6px; }
  .v2 .section-head-title h2 { font-size: clamp(30px, 8vw, 44px) !important; line-height: 1.05; }
  .v2 .section-head-h2-full { font-size: clamp(30px, 8vw, 44px) !important; line-height: 1.05; }

  /* BLOCO 02 */
  .v2 .pains-grid, .v2 .pains-grid-3 { grid-template-columns: 1fr !important; gap: 10px; }
  .v2 .pain-cell { padding: 16px 16px; min-height: auto; border-right: none; border-bottom: 1px solid var(--border); }
  .v2 .pain-cell:last-child { border-bottom: none; }
  .v2 .pain-cell .k { font-size: 9px; letter-spacing: 0.16em; }
  .v2 .pain-cell .t { font-size: 15px; line-height: 1.3; margin-top: 8px; }

  /* BLOCO 02 — proof-phones como carrossel horizontal */
  .v2 .proof-wrap { margin: 0 -18px; }
  .v2 .proof-phones {
    display: flex !important; grid-template-columns: none !important;
    overflow-x: auto; overflow-y: hidden;
    gap: 16px; padding: 8px 18px 24px;
    scroll-snap-type: x mandatory;
    scroll-padding: 0 18px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .v2 .proof-phones::-webkit-scrollbar { display: none; }
  .v2 .proof-phone {
    flex: 0 0 55%; max-width: 160px;
    scroll-snap-align: center;
  }
  .v2 .proof-phone-frame { max-width: 100%; border-radius: 22px; padding: 6px; }
  .v2 .proof-phone-cap { font-size: 10px; letter-spacing: 0.12em; }
  .v2 .proof-swipe-hint {
    display: block; text-align: center;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px; letter-spacing: 0.25em;
    color: var(--fg-3); margin-top: 4px;
    animation: swipeHintPulse 2s ease-in-out infinite;
  }
  @keyframes swipeHintPulse {
    0%,100% { opacity: 0.4; }
    50% { opacity: 1; color: var(--neon); }
  }

  .v2 .b02-pivot-title { font-size: clamp(30px, 8vw, 46px); }
  .v2 .b02-pivot-body { font-size: 16px; line-height: 1.55; }
  .v2 .b02-divider { margin: 36px 0; }
  .v2 .b02-brand { font-size: clamp(56px, 16vw, 120px) !important; }
  .v2 .b02-results li { grid-template-columns: 40px 16px 1fr; gap: 12px; padding: 18px 4px; font-size: 17px; }
  .v2 .b02-transition { padding: 22px 20px; }
  .v2 .b02-lead { font-size: 20px; }
  .v2 .b02-tail { font-size: 16px; }
  .v2 .pivot-quote { font-size: 18px; padding: 20px 18px; margin: 48px 0 32px; }
  .v2 .section-head { flex-direction: column; align-items: flex-start; gap: 12px; }
  .v2 .section-head-sub { font-size: 10px; }

  /* stat-row */
  .v2 .stat-row { grid-template-columns: 1fr !important; gap: 0 !important; }
  .v2 .stat-cell { padding: 20px 18px; border-right: none; border-bottom: 1px solid var(--border); }
  .v2 .stat-cell:last-child { border-bottom: none; }
  .v2 .stat-cell .stat-v { font-size: clamp(28px, 8vw, 40px); }

  /* wa-grid */
  .v2 .wa-grid { grid-template-columns: 1fr !important; }

  /* DISPLAY BRAND (Meta/Google/TikTok gigante) */
  .v2 .display-brand { font-size: clamp(56px, 18vw, 104px); letter-spacing: -0.04em; }
  .v2 .display-brand.tiktok { padding-right: 0; }

  /* BLOCO 03 — MAR AZUL */
  .v2 .b03-hero-display { padding: 56px 16px 40px; margin: 20px 0 32px; }
  .v2 .b03-display-word { font-size: clamp(52px, 16vw, 92px); letter-spacing: -0.04em; }
  .v2 .b03-coord-tl, .v2 .b03-coord-br { font-size: 9px; }
  .v2 .b03-depth-meter { flex-wrap: wrap; gap: 8px 12px; font-size: 10px; margin-top: 24px; }
  .v2 .b03-depth-bar { width: 100%; flex: 1 1 100%; order: 99; }
  .v2 .b03-list { grid-template-columns: 1fr; gap: 14px; }
  .v2 .b03-item-card { padding: 20px 18px; grid-template-columns: 1fr !important; gap: 12px; }
  .v2 .b03-item-k { flex-direction: row; align-items: center; gap: 12px; }
  .v2 .b03-item-body .txt { font-size: 15px; line-height: 1.5; }

  /* BLOCO 04 — PROMESSA */
  .v2 .pegar { padding: 72px 0; }
  .v2 .pegar h2 { font-size: clamp(34px, 9vw, 56px) !important; letter-spacing: -0.025em; }
  .v2 .pegar-body { font-size: 16px; line-height: 1.55; }
  .v2 .pegar-scan { opacity: 0.4; }
  .v2 .pegar-corner { width: 22px; height: 22px; }
  .v2 .pegar-corner.tl { top: 12px; left: 12px; }
  .v2 .pegar-corner.tr { top: 12px; right: 12px; }
  .v2 .pegar-corner.bl { bottom: 12px; left: 12px; }
  .v2 .pegar-corner.br { bottom: 12px; right: 12px; }
  .v2 .pegar-bg-mosaic img { height: 45%; max-height: 340px; filter: brightness(0.3) saturate(0.3) contrast(1.1); }
  .v2 .pegar-items { grid-template-columns: 1fr !important; }
  .v2 .pegar-item { min-height: auto; border-right: none; border-bottom: 1px solid var(--border); padding: 18px 16px; }
  .v2 .pegar-item:last-child { border-bottom: none; }
  .v2 .pegar-closer { font-size: 22px; }

  /* PIVOT */
  .v2 .pivot { padding: 72px 18px; }
  .v2 .pivot-brand { font-size: clamp(64px, 18vw, 140px); }
  .v2 .pivot-body { font-size: 16px; }

  /* PIVOT — results grid */
  .v2 .results-grid { grid-template-columns: 1fr 1fr !important; }
  .v2 .result-cell { min-height: auto; padding: 20px 16px; border-bottom: 1px solid var(--border); }
  .v2 .result-cell:nth-child(odd) { border-right: 1px solid var(--border); }
  .v2 .result-cell:nth-child(even) { border-right: none; }
  .v2 .result-cell:last-child { border-right: none; }
  .v2 .result-metric { font-size: 32px; }

  /* TikTok badge */
  .v2 .tiktok-badge { width: 64px; height: 64px; right: 8px; top: auto; bottom: 35%; }
  .v2 .tiktok-badge svg { width: 36px; height: 36px; }
  .v2 .tiktok-badge-label { font-size: 8px; bottom: -22px; }

  /* BLOCO 05 — PATHS */
  .v2 .paths-grid { grid-template-columns: 1fr !important; gap: 18px; }
  .v2 .path-card { min-height: auto; }
  .v2 .path-icon-area { min-height: auto; padding: 0; aspect-ratio: auto; }
  .v2 .path-body { padding: 24px 20px 28px; }
  .v2 .path-name { font-size: 22px; }
  .v2 .path-cpa-num { font-size: clamp(46px, 14vw, 68px) !important; }
  .v2 .path-bullets li { font-size: 14px; line-height: 1.45; }
  .v2 .path-img { width: 100%; height: auto; }

  /* BLOCO 06 — PARA QUEM É */
  .v2 .foryou h2 { font-size: clamp(36px, 10vw, 54px) !important; white-space: normal !important; margin: 16px 0 36px; line-height: 1.05 !important; text-align: center; }
  .v2 .foryou-list { gap: 10px; }
  .v2 .foryou-item { grid-template-columns: 40px 1fr 28px !important; gap: 10px !important; padding: 16px 14px !important; }
  .v2 .foryou-item::before { font-size: 16px !important; }
  .v2 .foryou-t { font-size: 15.5px !important; line-height: 1.5 !important; }
  .v2 .foryou-check { width: 24px !important; height: 24px !important; }

  /* BLOCO 07 — OFERTA */
  .v2 .offer-container { padding: 48px 22px !important; }
  .v2 .offer-big { font-size: clamp(40px, 11vw, 68px); letter-spacing: -0.03em; }
  .v2 .offer-smash { font-size: clamp(18px, 4.5vw, 26px); }
  .v2 .offer-body p { font-size: 15.5px; }
  .v2 .offer { padding: 80px 18px 48px; }
  .v2 .offer-duration { font-size: 10px; padding: 14px 16px; gap: 10px; letter-spacing: 0.14em; }
  .v2 .offer-slots { flex-wrap: wrap; gap: 5px; }
  .v2 .slot { width: 22px; height: 22px; }

  /* MODAL DE APLICAÇÃO */
  .v2 .apply-overlay { padding: 0; }
  .v2 .apply-modal { width: 100%; max-width: 100%; min-height: 100vh; border-radius: 0; padding: 80px 22px 40px; }
  .v2 .apply-corner { font-size: 9px; }
  .v2 .apply-close { top: 20px; right: 18px; }
  .v2 .apply-title { font-size: 24px !important; letter-spacing: -0.02em; }
  .v2 .apply-sub { font-size: 14px; }
  .v2 .apply-field { margin-bottom: 18px; }
  .v2 .apply-field-k { font-size: 10px; }
  .v2 .apply-field input, .v2 .apply-field select, .v2 .apply-field textarea {
    font-size: 15px; padding: 13px 14px;
  }
  .v2 .apply-submit { padding: 18px 22px; font-size: 13px; }
  .v2 .apply-success { padding: 60px 22px; }

  /* FOOTER */
  .v2 .footer-top { flex-direction: column; align-items: flex-start; gap: 20px; }
  .v2 .footer-disclaimer { font-size: 11px; line-height: 1.55; }
  .v2 .footer-bottom { flex-wrap: wrap; gap: 8px 12px; font-size: 10px; }

  /* SECTION DIVIDER */
  .v2 .sec-divider { padding: 16px 0; }
  .v2 .sec-divider-badge { font-size: 9px; padding: 4px 10px; letter-spacing: 0.12em; }

  /* labels / eyebrows gerais */
  .v2 .label, .v2 .eyebrow { font-size: 10px; letter-spacing: 0.18em; }

  /* prevent horizontal overflow */
  html, body { overflow-x: hidden; }
  .v2, .v2 .section, .v2 section { overflow-x: clip; }
}

/* SMALL MOBILE (≤420px) */
@media (max-width: 420px) {
  .v2 .container { padding: 0 14px; }
  .v2 .section { padding: 52px 0; }
  .v2 .hero h1 { font-size: clamp(36px, 12vw, 52px); }
  .v2 .hero-bottom { gap: 12px 16px; }
  .v2 .hero-stat .n { font-size: 20px; }
  .v2 .b03-display-word { font-size: clamp(44px, 15vw, 72px); }
  .v2 .display-brand { font-size: clamp(46px, 17vw, 78px); }
  .v2 .offer-big { font-size: clamp(34px, 11vw, 54px); }
  .v2 .offer-smash { font-size: clamp(16px, 4.2vw, 22px); }
  .v2 .slot { width: 18px; height: 18px; }
  .v2 .apply-modal { padding: 72px 18px 32px; }
  .v2 .results-grid { grid-template-columns: 1fr !important; }
  .v2 .result-cell { border-right: none !important; }
  .v2 .result-metric { font-size: 28px; }
  .v2 .pivot-brand { font-size: clamp(56px, 18vw, 120px); }
  .v2 .b02-brand { font-size: clamp(44px, 14vw, 80px) !important; }
}
`;

// TikTok logo SVG
const TikTokIcon = ({ size = 52 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z"/>
  </svg>
);

const MetaIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="brand-icon-neg">
    <path d="M6.915 4.03c-1.968 0-3.402 1.3-4.55 2.88-.876 1.206-1.517 2.727-1.892 3.555a.458.458 0 0 0 0 .374c.375.828 1.016 2.35 1.893 3.555 1.147 1.58 2.581 2.88 4.549 2.88 1.968 0 2.926-.88 3.58-1.838a6.28 6.28 0 0 0 .663-1.227h.063a6.28 6.28 0 0 0 .663 1.227c.654.958 1.612 1.838 3.58 1.838s3.402-1.3 4.55-2.88c.876-1.206 1.517-2.727 1.892-3.555a.458.458 0 0 0 0-.374c-.375-.828-1.016-2.35-1.893-3.555-1.147-1.58-2.581-2.88-4.549-2.88-1.968 0-2.926.88-3.58 1.838a6.28 6.28 0 0 0-.663 1.227h-.063a6.28 6.28 0 0 0-.663-1.227C9.841 4.91 8.883 4.03 6.915 4.03zM4.21 12c.263-.547.742-1.477 1.392-2.372C6.592 8.204 7.67 7.28 8.915 7.28c.406 0 .737.086 1.013.224L6.39 12.858a.248.248 0 0 1-.424.008A10.152 10.152 0 0 1 4.21 12zm4.603 2.39c-.986.63-1.898.86-1.898.86s.647 1.5 1.898 1.5c.742 0 1.29-.344 1.697-.838L8.813 14.39zm4.27-4.78c.407-.494.955-.838 1.697-.838 1.245 0 2.323.924 3.313 2.348.65.895 1.13 1.825 1.392 2.372a10.152 10.152 0 0 1-1.756.866.248.248 0 0 1-.424-.008l-3.538-5.364a2.05 2.05 0 0 1 1.013-.224l-1.697.848z"/>
  </svg>
);

const GoogleAdsIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="brand-icon-neg">
    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
    <circle cx="7" cy="18.5" r="3.5"/>
    <circle cx="17" cy="5.5" r="3.5"/>
    <rect x="5" y="8" width="14" height="8" rx="1" opacity="0.3"/>
  </svg>
);

const PillIcon = ({ size = 100 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.8">
    {/* frasco / pote */}
    <path d="M30 22 L70 22 L70 30 L72 30 L72 84 Q72 88 68 88 L32 88 Q28 88 28 84 L28 30 L30 30 Z" />
    <line x1="28" y1="36" x2="72" y2="36" />
    {/* rótulo */}
    <rect x="34" y="48" width="32" height="22" opacity="0.4"/>
    <line x1="38" y1="55" x2="62" y2="55" opacity="0.6"/>
    <line x1="38" y1="60" x2="56" y2="60" opacity="0.4"/>
    <line x1="38" y1="65" x2="60" y2="65" opacity="0.4"/>
    {/* cápsulas flutuando */}
    <g transform="translate(14 62) rotate(-18)">
      <rect x="0" y="0" width="16" height="7" rx="3.5" />
      <line x1="8" y1="0" x2="8" y2="7" />
    </g>
    <g transform="translate(74 14) rotate(22)">
      <rect x="0" y="0" width="14" height="6" rx="3" />
      <line x1="7" y1="0" x2="7" y2="6" />
    </g>
    {/* molécula */}
    <g opacity="0.7" transform="translate(10 14)">
      <circle cx="4" cy="4" r="2" fill="currentColor" />
      <circle cx="14" cy="9" r="2" fill="currentColor" />
      <circle cx="4" cy="14" r="1.5" fill="currentColor" />
      <line x1="4" y1="4" x2="14" y2="9"/>
      <line x1="14" y1="9" x2="4" y2="14"/>
    </g>
  </svg>
);

const PlayIcon = ({ size = 100 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.8">
    {/* monitor / browser */}
    <rect x="10" y="16" width="80" height="54" rx="4" />
    <line x1="10" y1="26" x2="90" y2="26" />
    <circle cx="16" cy="21" r="1.3" fill="currentColor" opacity="0.7"/>
    <circle cx="21" cy="21" r="1.3" fill="currentColor" opacity="0.5"/>
    <circle cx="26" cy="21" r="1.3" fill="currentColor" opacity="0.3"/>
    {/* play */}
    <circle cx="50" cy="48" r="13" opacity="0.5"/>
    <path d="M45 41 L45 55 L58 48 Z" fill="currentColor" stroke="none" />
    {/* base / suporte */}
    <line x1="40" y1="78" x2="60" y2="78" strokeLinecap="round" />
    <line x1="50" y1="70" x2="50" y2="78" />
    {/* módulos laterais */}
    <rect x="68" y="32" width="14" height="4" opacity="0.5"/>
    <rect x="68" y="40" width="10" height="4" opacity="0.35"/>
    <rect x="68" y="48" width="12" height="4" opacity="0.5"/>
    <rect x="16" y="58" width="8" height="4" opacity="0.4"/>
  </svg>
);

const APPLY_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSeIQtEgblXYTkB5qvZlZK53M9o-OhH07Ygm3j62w3pJmAUO2A/viewform';

function V2CTA({ label = 'FAZER APLICAÇÃO GRATUITA', jumbo = false }) {
  return (
    <div className="cta-wrap">
      <a
        href={APPLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`cta-btn ${jumbo ? 'jumbo' : ''}`}
      >
        {label} <span className="arrow">↗</span>
      </a>
    </div>
  );
}

function V2SectionDivider({ current, total }) {
  const pad = (n) => String(n).padStart(2, '0');
  return (
    <div className="sec-divider" aria-hidden="true">
      <div className="sec-divider-inner">
        <span className="sec-divider-tick"/>
        <span className="sec-divider-line"/>
        <span className="sec-divider-badge">
          <span className="sec-divider-dot"/>
          <span className="sec-divider-num">{pad(current)} / {pad(total)}</span>
          <span className="sec-divider-arrow">▼</span>
        </span>
        <span className="sec-divider-line"/>
        <span className="sec-divider-tick"/>
      </div>
    </div>
  );
}

function Chip({ brand, children }) {
  return (
    <span className={`chip chip-${brand}`}>
      <span className="chip-dot"/>
      {children}
    </span>
  );
}

function DisplayBrand({ brand, children, tag }) {
  return (
    <div className={`display-brand ${brand}`}>
      {children}
      {tag && <span className="tag">{tag}</span>}
    </div>
  );
}

// Parses copy inline and auto-replaces Meta/Google/TikTok with Chips
function withChips(text) {
  const parts = [];
  let remaining = text;
  const rx = /(TikTok|Meta|Google)/g;
  let lastIndex = 0;
  let match;
  let key = 0;
  while ((match = rx.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    const word = match[0];
    const brand = word.toLowerCase();
    parts.push(<Chip key={key++} brand={brand}>{word}</Chip>);
    lastIndex = match.index + word.length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}


function V2Marquee({ variant = 'default', reverse = false }) {
  const items = variants[variant] || variants.default;
  const row = items.flatMap((it, i) => [
    <span key={`t-${i}`} className="mq-item">{it}</span>,
    <span key={`s-${i}`} className="mq-sep">✪</span>
  ]);
  const loop = Array.from({ length: 6 }, (_, k) => (
    <span key={k} className="mq-group">{row}</span>
  ));
  return (
    <div className={`marquee mq-${variant}`}>
      <div className={`marquee-track ${reverse ? 'rev' : ''}`}>{loop}{loop}</div>
    </div>
  );
}

function WhatsAppProof({ idx, name, bubbles, time = '14:32' }) {
  const [img, setImg] = React.useState(() => {
    try { return localStorage.getItem(`wa_print_${idx}`) || ''; } catch { return ''; }
  });
  const [drag, setDrag] = React.useState(false);
  const inputRef = React.useRef(null);

  const loadFile = (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    const r = new FileReader();
    r.onload = () => {
      const data = r.result;
      setImg(data);
      try { localStorage.setItem(`wa_print_${idx}`, data); } catch {}
    };
    r.readAsDataURL(file);
  };

  const clear = (e) => {
    e.stopPropagation();
    setImg('');
    try { localStorage.removeItem(`wa_print_${idx}`); } catch {}
  };

  return (
    <div
      className={`wa-phone wa-dropzone ${img ? 'has-img' : ''} ${drag ? 'drag' : ''}`}
      onClick={() => !img && inputRef.current && inputRef.current.click()}
      onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
      onDragLeave={() => setDrag(false)}
      onDrop={(e) => {
        e.preventDefault(); setDrag(false);
        loadFile(e.dataTransfer.files && e.dataTransfer.files[0]);
      }}
      title={img ? '' : 'Clique ou arraste um print aqui'}
    >
      <input
        ref={inputRef} type="file" accept="image/*"
        style={{ display: 'none' }}
        onChange={(e) => loadFile(e.target.files && e.target.files[0])}
      />
      <div className="wa-tag">PRINT / 0{idx}</div>

      {img ? (
        <>
          <img src={img} alt={`Print ${idx}`} className="wa-print-img" />
          <button type="button" className="wa-print-clear" onClick={clear} title="Remover">✕</button>
        </>
      ) : (
        <div className="wa-drop-empty">
          <div className="wa-drop-icon">
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="5" width="18" height="14" rx="1.5"/>
              <circle cx="8.5" cy="10.5" r="1.5"/>
              <path d="M21 15l-5-5-9 9"/>
            </svg>
          </div>
          <div className="wa-drop-title">COLOQUE O PRINT AQUI</div>
          <div className="wa-drop-sub">Clique ou arraste uma imagem</div>
          <div className="wa-drop-foot">
            <span className="wa-drop-dot"/> SLOT / 0{idx}
            <span className="wa-drop-hint">· JPG / PNG</span>
          </div>
        </div>
      )}
    </div>
  );
}

function V2({ c }) {
  // Build whatsapp bubble sequences from the testimonial text
  const waProofs = c.bloco02.testimonials.map((t, i) => {
    const parts = t.text.split(/(?<=[.?!])\s/);
    const bubbles = parts.map((p, j) => ({
      side: j % 2 === 0 ? 'in' : 'in', // all incoming (user venting)
      text: p,
    }));
    return { name: t.name, bubbles, idx: i + 1 };
  });

  return (
    <div className="v2">
      <style>{V2_STYLES}</style>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-left">
              <div className="hero-eyebrow"><span className="live-dot"/> GRATUITO</div>
              <h1>
                Vou te ajudar a lucrar mais de <span className="num">$100.000</span> por mês escalando no <span className="neon">TikTok</span><span className="slash">.</span>
              </h1>
              <div className="hero-subs">
                <p>Enquanto a maioria insiste em vender no <b>Meta</b> e enfrenta prejuízo atrás de prejuízo…</p>
                <p>Você pode surfar em uma rede pouco explorada — <b>menos concorrência, CPA barato e vendas constantes.</b></p>
                <div className="hero-highlight">
                  <span className="star">✪</span>
                  <span>Se você for selecionado, vai ter acesso ao meu processo de contingência, teste e escala — além de um plano detalhado pra sair do zero até sua primeira grande escala no TikTok.</span>
                </div>
              </div>
              <div className="hero-ctas">
                <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="cta-btn">{c.hero.cta} <span className="arrow">↗</span></a>
                <span className="hero-tag">◐ SEM COMPROMISSO</span>
              </div>
            </div>
            <div className="hero-right">
              <div className="hero-portrait-big">
                <img className="hero-portrait-img" src="assets/caua.webp" alt="Cauã Albuquerque"/>
                <div className="hero-portrait-frame-tl"/>
                <div className="hero-portrait-frame-br"/>
                <div className="hero-portrait-foot">
                  <div>
                    <div className="name">Cauã Albuquerque</div>
                    <div className="role">◐ TIKTOK SCALER · 12M MENTOR</div>
                  </div>
                  <div className="loc">
                    <div className="city">DXB</div>
                    <div className="coord">25.2°N / 55.2°E</div>
                  </div>
                </div>
              </div>
              <div className="tiktok-badge">
                <TikTokIcon/>
                <div className="tiktok-badge-label">A REDE</div>
              </div>
            </div>
          </div>
          <div className="hero-bottom">
            <div className="hero-stat"><div className="n"><span className="neon">+250</span> alunos</div><div className="l">formados</div></div>
            <div className="hero-stat"><div className="n"><span className="neon">15×</span> mais</div><div className="l">faturamento vs meta</div></div>
            <div className="hero-stat"><div className="n"><span className="neon">12</span> meses</div><div className="l">acompanhamento</div></div>
            <div className="hero-stat"><div className="n"><span className="neon">EUA</span> + EU</div><div className="l">mercados-alvo</div></div>
          </div>
        </div>
      </section>

      <V2SectionDivider current={2} total={7}/>

      {/* BLOCO 02 — diagnóstico + prova + virada + resultados (unificado) */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div className="section-head-title">
              <h2>
                A falsa onda do <Chip brand="meta">Meta</Chip> <span className="b02-amp">&</span> <Chip brand="google">Google</Chip>
                <span className="slash">.</span>
              </h2>
              <div className="b02-subtitle">{c.bloco02.subtitle}</div>
            </div>
          </div>

          <div className="diag-intro">
            {c.bloco02.intro.map((p, i) => <p key={i}>{withChips(p)}</p>)}
          </div>

          <div className="pains-grid">
            {c.bloco02.pains.map((p, i) => (
              <div className="pain-cell" key={i}>
                <div className="k">ERROR_0{i+1}</div>
                <div className="t">{withChips(p)}</div>
                <div className="x">✕</div>
              </div>
            ))}
          </div>

          <div className="b02-transition">
            <div className="b02-lead">{c.bloco02.transitionLead}</div>
            <div className="b02-tail">{c.bloco02.transitionTail} <span className="b02-arrow-inline">↓</span></div>
          </div>

          <div className="proof-wrap">
            <div className="proof-phones" style={{marginTop: 48}}>
              {['assets/PREJUIZO1.webp','assets/PREJUIZO2.webp','assets/PREJUIZO3.webp'].map((src, i) => (
                <div className="proof-phone" key={i}>
                  <div className="proof-phone-frame">
                    <div className="proof-phone-notch"/>
                    <img src={src} alt={`Print de prejuízo ${i+1}`} className="proof-phone-img"/>
                    <div className="proof-phone-flash"/>
                  </div>
                  <div className="proof-phone-cap">
                    <span className="proof-phone-k">0{i+1}</span>
                    <span className="proof-phone-t">LUCRO NEGATIVO · META ADS</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="proof-swipe-hint">← DESLIZE PARA VER →</div>
          </div>

          <div className="b02-divider"/>
          <div className="b02-pivot-title">{c.bloco02.pivotTitle}</div>

          <DisplayBrand brand="tiktok" tag="◆ A REDE">TikTok</DisplayBrand>

          <div className="b02-pivot-body">{withChips(c.bloco02.pivotBody)}</div>

          <div className="label" style={{marginTop: 64, marginBottom: 20}}>◈ {c.bloco02.pivotResultsTitle}</div>
          <ul className="b02-results">
            {c.bloco02.pivotResults.map((r, i) => (
              <li key={i}>
                <span className="b02-r-k">0{i+1}</span>
                <span className="b02-r-bullet"/>
                <span className="b02-r-t">{withChips(r)}</span>
              </li>
            ))}
          </ul>
        </div>
        <V2CTA/>
      </section>

      <V2SectionDivider current={3} total={7}/>

      {/* BLOCO 03 — MAR AZUL */}
      <section className="section b03-section">
        <div className="b03-ocean-bg" aria-hidden="true">
          <div className="b03-wave b03-wave-1"/>
          <div className="b03-wave b03-wave-2"/>
          <div className="b03-wave b03-wave-3"/>
          <div className="b03-particles">
            {Array.from({length: 20}).map((_, i) => (
              <span key={i} className="b03-dot" style={{
                left: `${(i * 53) % 100}%`,
                top: `${(i * 37) % 100}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${4 + (i % 3)}s`
              }}/>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="section-head">
            <div className="section-head-title">
              <div className="label">◈ {c.bloco03.eyebrow}</div>
              <h2 className="b03-head">
                Enquanto todos estavam focados nas principais redes, eu descobri um <span className="b03-mar-azul">mar azul</span> praticamente intocado.
              </h2>
            </div>
          </div>

          <div className="b03-hero-display">
            <div className="b03-mosaic">
              <img src="assets/caua2.webp" alt=""/>
              <img src="assets/caua4.webp" alt=""/>
            </div>
            <div className="b03-coord-tl">25.2°N</div>
            <div className="b03-coord-br">55.2°E</div>
            <div className="b03-display-word">
              <span>MAR</span>
              <span className="b03-display-azul">AZUL</span>
            </div>
            <div className="b03-scan-line"/>
            <div className="b03-depth-meter">
              <div className="b03-depth-label">PROFUNDIDADE · INTOCADA</div>
              <div className="b03-depth-bar">
                <div className="b03-depth-fill"/>
              </div>
              <div className="b03-depth-num">∞</div>
            </div>
          </div>

          <V2CTA/>

          <div className="b03-list b03-list-ocean">
            {c.bloco03.body.map((p, i) => (
              <div className="b03-item b03-item-card" key={i}>
                <div className="b03-item-k">
                  <span className="b03-item-num">0{i+1}</span>
                  <span className="b03-item-tick"/>
                </div>
                <div className="b03-item-body">
                  <div className="txt">
                    {p.lead}{' '}
                    <span className={i === 3 ? 'no-clone' : 'metric'}>{p.highlight}</span>{' '}
                    {p.tail}
                  </div>
                </div>
                <div className="b03-item-wave"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      <V2SectionDivider current={4} total={7}/>

      {/* BLOCO 04 */}
      <section className="section section-alt pegar">
        <div className="pegar-bg-mosaic" aria-hidden="true">
          <img src="assets/caua5.webp" alt="" style={{objectPosition: 'center 30%'}}/>
          <img src="assets/caua6.webp" alt="" style={{objectPosition: 'center 40%'}}/>
        </div>
        <div className="pegar-scan"/>
        <div className="container">
          <div className="label">◈ {c.bloco04.eyebrow}</div>
          <h2>Eu vou pegar <span className="neon">na sua mão.</span></h2>
          <p className="pegar-body">{withChips(c.bloco04.body)}</p>
          <div className="label" style={{marginBottom:16}}>◈ {c.bloco04.subtitle}</div>
          <div className="pegar-items">
            {c.bloco04.items.map((item, i) => (
              <div className="pegar-item" key={i}>
                <div className="k">[0{i+1}]</div>
                <div className="t">{withChips(item)}</div>
                <div className="check">→</div>
              </div>
            ))}
          </div>
          <div className="pegar-closer">{withChips(c.bloco04.closer)}</div>
        </div>
        <V2CTA/>
      </section>

      <V2SectionDivider current={5} total={7}/>

      {/* BLOCO 05 — PATHS COM ÍCONES */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head-full">
            <div className="section-head-top">
              <div className="label">◈ {c.bloco05.eyebrow}</div>
            </div>
            <h2 className="section-head-h2-full">Existem 2 caminhos pra você faturar <span className="neon">MILHARES DE DÓLARES</span> todos os dias, e eu posso te ajudar em ambos…</h2>
          </div>
          <div className="paths-grid">
            {c.bloco05.paths.map((p, i) => (
              <div className={`path-card ${i === 1 ? 'path-cyan' : ''}`} key={i}>
                <div className={`path-icon-area has-img ${i === 1 ? 'alt' : ''}`}>
                  <div className="path-icon-tag">◈ MODELO 0{i+1}</div>
                  <div className="path-icon">
                    {i === 0 ? <img src="assets/nutraceutico.webp" alt="Nutracêutico" className="path-img"/> : <img src="assets/infoproduto.webp" alt="Infoproduto" className="path-img"/>}
                  </div>
                  <div className="path-icon-badge">{i === 0 ? '◆ HIGH TICKET' : '◆ LOW TICKET'}</div>
                </div>
                <div className="path-body">
                  <div className="path-name">{p.name}</div>
                  {(() => {
                    // Extract numeric CPA from p.stat (e.g. "CPA < $120" → "120")
                    const m = p.stat.match(/\$\s*([\d.]+)/);
                    const num = m ? m[1] : '—';
                    // Market comparison: Meta ~R$30k / TikTok much lower. Relative fill.
                    const fill = i === 0 ? '38%' : '18%';
                    const vs = i === 0 ? 'vs. mercado $300+' : 'vs. mercado $80+';
                    return (
                      <div className="path-cpa">
                        <div className="path-cpa-head">
                          <span>◈ CPA ALVO</span>
                          <span className="pulse">TRACKING · LIVE</span>
                        </div>
                        <div className="path-cpa-display">
                          <span className="path-cpa-lt">&lt;</span>
                          <span className="path-cpa-curr">$</span>
                          <span className="path-cpa-num">{num}</span>
                          <span className="path-cpa-unit">USD</span>
                        </div>
                        <div className="path-cpa-meter">
                          <div className="path-cpa-bar" style={{'--fill': fill}}/>
                          <div className="path-cpa-vs">{vs}</div>
                        </div>
                      </div>
                    );
                  })()}
                  <ul className="path-bullets">
                    {p.bullets.filter(b => !/^CPA menor que/i.test(b)).map((b, j) => <li key={j}><span className="bullet"/>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <V2CTA/>
      </section>

      <V2SectionDivider current={6} total={7}/>

      {/* BLOCO 06 */}
      <section className="section section-alt foryou">
        <div className="container">
          <div className="section-head section-head-full">
            <div className="section-head-top">
              <div className="label">◈ {c.bloco06.eyebrow}</div>
            </div>
            <h2 className="section-head-h2-full">Para quem é a <span className="neon">consultoria</span>…</h2>
          </div>
          <div className="foryou-list">
            {c.bloco06.items.map((item) => (
              <div className="foryou-item" key={item.k}>
                <div className="foryou-t">{item.text}</div>
                <div className="foryou-check">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 11l4.5 4.5L18 6"/></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <V2SectionDivider current={7} total={7}/>

      {/* BLOCO 07 · OFERTA */}
      <section className="offer" id="aplicacao">
        <div className="offer-bg">
          <img src="assets/caua1.webp" alt=""/>
        </div>
        <div className="container offer-container">
          <div className="offer-eyebrow">◈ {c.bloco07.eyebrow}</div>
          <div className="offer-big">{c.bloco07.bigTitle}</div>
          <h2 className="offer-smash"><span className="strike">Não vou te vender</span> <span className="neon">nada.</span></h2>
          <div className="offer-body">
            {c.bloco07.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="offer-duration"><span className="indicator"/> {c.bloco07.duration}</div>
          <div className="offer-slots">
            {Array.from({length: c.scarcity.slots.total}).map((_, i) => (
              <div key={i} className={`slot ${i < (c.scarcity.slots.total - c.scarcity.slots.left) ? 'filled' : 'available'}`}/>
            ))}
          </div>
          <div className="offer-slots-label">VAGAS · <b>{c.scarcity.slots.left}/{c.scarcity.slots.total}</b> DISPONÍVEIS · ATUALIZADO AGORA</div>
          <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="cta-btn jumbo">{c.bloco07.cta} <span className="arrow">↗</span></a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-disclaimer">{c.footer.disclaimer}</div>
        <div className="footer-bottom">
          <a href="#">{c.footer.links[0]}</a><span>·</span>
          <a href="#">{c.footer.links[1]}</a><span>·</span>
          <span>{c.footer.copyright}</span>
        </div>
      </footer>
    </div>
  );
}

window.V2 = V2;
