/* =========================================================
   Kunal Jena — Portfolio scripts
   ---------------------------------------------------------
   ✏️  EDIT HERE — works, experience, achievements, interests, playlist
   ========================================================= */
const CONFIG = {
  game: { embedUrl: "" }, // optional: real web build of Aranya (itch.io / WebGL URL)
  tracks: [
    { title: "Fairytale",     artist: "Alexander Rybak",          src: "music/fairytale.mp3" },
    { title: "Snowman",       artist: "Sia",                      src: "music/snowman.mp3" },
    { title: "Starboy",       artist: "The Weeknd ft. Daft Punk", src: "music/starboy.mp3" },
    { title: "Hurts So Good", artist: "Astrid S",                 src: "music/hurts-so-good.mp3" }
  ],
  behance: "https://www.behance.net/kunaljena"
};

const CATS = { uiux: "UI/UX", packaging: "Packaging", print: "Print", apparel: "Apparel", game: "Game" };

const WORKS = [
  {
    id: "soapy-suds", cat: "uiux", title: "Soapy Suds", subtitle: "On-demand laundry & dry-cleaning app",
    tags: ["Mobile app", "Booking flow", "Order tracking"],
    desc: "A convenient laundry service app for students and working professionals, with home pickup, delivery and real-time order tracking.",
    features: ["Pickup & delivery", "Multiple services", "Flexible booking", "Track orders"]
  },
  {
    id: "homigo", cat: "uiux", title: "homigo", subtitle: "Smart household shifting & storage app",
    tags: ["Mobile app", "Multi-step booking", "Live tracking"],
    desc: "A platform to book home shifting and temporary storage, with pickup, real-time tracking and secure warehousing.",
    features: ["Home shifting", "Temporary storage", "Real-time tracking", "Safe & reliable"]
  },
  {
    id: "baise-gaba", cat: "uiux", title: "Baise Gaba", subtitle: "Contemporary ethnic wear, responsive e-commerce",
    tags: ["Web + mobile", "E-commerce", "Internship"],
    desc: "A responsive e-commerce website for a premium clothing brand, designed to offer a seamless and elegant shopping experience.",
    features: ["Browse collections", "Product details", "Wishlist", "Secure checkout"]
  },
  {
    id: "diet-coke", cat: "packaging", title: "Diet Coke × Durga Puja", subtitle: "Limited-edition packaging concept",
    tags: ["Can design", "Illustration", "Festive"],
    desc: "A festive packaging concept for Diet Coke that celebrates the spirit of Durga Puja by blending modern brand identity with Bengal's rich culture and traditions.",
    features: ["Concept design", "Packaging layout", "Illustration & motifs", "Final mockups"]
  },
  {
    id: "amul-kadhai-dudh", cat: "packaging", title: "Amul Kadhai Dudh", subtitle: "Slow-cooked milk bottle packaging",
    tags: ["Bottle label", "Mascot", "Concept"],
    desc: "A warm, all-natural packaging concept for slow-cooked kadhai milk: a playful mascot, creamy textures and benefit icons that read at a glance.",
    features: ["Character illustration", "Texture detail", "Cap detail", "Icon detail"]
  },
  {
    id: "business-card", cat: "print", title: "Mahalaxmi Enterprises", subtitle: "Business card design",
    tags: ["Print", "Brand identity", "Layout"],
    desc: "A business card for a utensils & serveware business, combining a traditional touch with a clean, professional layout.",
    features: ["Layout design", "Brand identity", "Print ready"]
  },
  {
    id: "hoodies", cat: "apparel", title: "Hoodie Design", subtitle: "A creative hoodie collection",
    tags: ["Streetwear", "Typography", "Print mockups"],
    desc: "Original hoodie designs blending anime culture, bold typography and modern streetwear aesthetics.",
    features: ["Concept ideation", "Graphic design", "Print mockups", "Apparel design"]
  },
  {
    id: "aranya", cat: "game", title: "The Last Light of Aranya", subtitle: "The Forest Remembers · story by Kunal",
    tags: ["Game story", "World-building", "Low-poly"],
    desc: "A low-poly forest adventure at dusk. Kunal wrote the story and shaped the world; the game is developed by Ovi. Play a forest run inspired by it right on this page.",
    features: ["Story by Kunal", "Developed by Ovi", "Low-poly world"],
    play: true
  }
];

const TOOLS = [
  { name: "Figma",               icon: "frame",  color: "#7c5cff" },
  { name: "Adobe Illustrator",   icon: "pen",    color: "#f08c00" },
  { name: "Adobe Photoshop",     icon: "image",  color: "#2f7bff" },
  { name: "Adobe InDesign",      icon: "layout", color: "#e0457b" },
  { name: "Adobe After Effects", icon: "film",   color: "#5b5bd6" },
  { name: "Blender",             icon: "cube",   color: "#e8660c" },
  { name: "Shopify",             icon: "bag",    color: "#3c9a3c" },
  { name: "Canva",               icon: "brush",  color: "#0fb5c4" },
  { name: "Antigravity",         icon: "rocket", color: "#0f1422" }
];

const ACHIEVEMENTS = [
  { icon: "briefcase", title: "Baise Gaba Internship", text: "Designed end-to-end e-commerce experiences for a contemporary ethnic-wear brand, Jun to Aug 2026." },
  { icon: "star",      title: "Guleasr Internship",     text: "Six months of UI/UX and product label design, working remotely with the brand team." },
  { icon: "grad",      title: "B.Des in UI/UX",          text: "Studying User Experience design at Lovely Professional University (2024 to 2028)." },
  { icon: "award",     title: "After Effects Bootcamp",  text: "Completed a 30-hour course on motion graphics, animation principles and visual effects." },
  { icon: "pen",       title: "Freelance Client Work",   text: "Delivered business cards, invitations, menus and apparel graphics for real clients." },
  { icon: "book",      title: "Game Story: Aranya",      text: "Wrote the story for The Last Light of Aranya, a low-poly forest game developed by Ovi." }
];

const EXPERIENCE = [
  { role: "UI/UX Design & Graphics Intern", org: "Baise Gaba", date: "Jun 2026 - Aug 2026", place: "Jaipur",
    details: ["UX research and competitor analysis to find user needs and design opportunities.", "Designed end-to-end e-commerce flows, wireframes and high-fidelity UI in Figma.", "Applied usability, visual hierarchy, responsive design and brand consistency."],
    skills: ["UX research", "Competitor analysis", "User flows", "Wireframing", "Hi-fi UI", "Responsive design"],
    output: ["E-commerce website UX", "Packaging designs", "Promotional banners"] },
  { role: "UI/UX Design Intern", org: "Guleasr", date: "Aug 2025 - Jan 2026", place: "Remote",
    details: ["Six months across digital and product design.", "Designed product labels focused on visual appeal, branding and clarity.", "Assisted in website UI design and supported product photography."],
    skills: ["Label design", "Branding", "Web UI", "Product photography"],
    output: ["Product labels", "Website UI improvements", "Product photos"] },
  { role: "Freelance Graphic Designer", org: "Self-employed", date: "2025 - Present", place: "Remote",
    details: ["Design work for startups and local businesses, from brief to print-ready files."],
    skills: ["Typography", "Layout", "Brand identity", "Print production"],
    output: ["Mahalaxmi Enterprises business card", "Wedding invitation", "Annapurna Garden menu", "Hoodie & tee graphics"] },
  { role: "Game Story Writer", org: "The Last Light of Aranya", date: "Collaboration with Ovi", place: "Remote",
    details: ["Wrote the story and shaped the world of a low-poly forest adventure: The Forest Remembers."],
    skills: ["Storytelling", "World-building", "Narrative design"],
    output: ["Game story", "World & lore"] },
  { role: "B.Des, UI/UX Design", org: "Lovely Professional University", date: "2024 - 2028", place: "Punjab, India",
    details: ["Bachelor of Design in User Experience: interaction design, research and prototyping."],
    skills: ["Interaction design", "Prototyping", "Visual design"],
    output: ["Coursework & portfolio projects"] },
  { role: "Adobe After Effects CC Bootcamp", org: "Udemy", date: "Apr 2024", place: "Virtual",
    details: ["A 30-hour course from beginner to advanced in motion graphics and VFX."],
    skills: ["Motion graphics", "Animation principles", "Visual effects", "Transitions"],
    output: ["Course certificate"] }
];

const INTERESTS = [
  { icon: "music",  title: "Music",           text: "Designing to songs like Fairytale, Snowman and Starboy." },
  { icon: "book",   title: "Game Storytelling", text: "Building worlds and stories, like The Last Light of Aranya." },
  { icon: "cube",   title: "3D in Blender",   text: "Modelling scenes and renders to explore form and light." },
  { icon: "camera", title: "Photography",     text: "Capturing products and details, sharpened during my internship." }
];

/* ---------- helpers ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const icon = (id) => `<svg><use href="#i-${id}"/></svg>`;
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
};
let toastT;
function toast(msg) {
  const t = $("#toast"); t.textContent = msg; t.classList.add("on");
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("on"), 2200);
}

/* =========================================================
   SOUND — tiny synthesized UI effects
   ========================================================= */
const Sound = {
  ctx: null,
  enabled: store.get("kj-sfx", true),
  scrubGain: null,
  ensure() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      this.ctx = new AC();
    }
    if (this.ctx.state === "suspended") this.ctx.resume();
    return this.ctx;
  },
  ready() { return this.enabled && this.ctx && this.ctx.state === "running"; },
  blip(freq = 880, dur = 0.07, vol = 0.025, type = "sine", slide = 1.5) {
    if (!this.ready()) return;
    const c = this.ctx, t = c.currentTime;
    const o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    o.frequency.exponentialRampToValueAtTime(freq * slide, t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(c.destination);
    o.start(t); o.stop(t + dur + 0.02);
  },
  chime() { [1046.5, 1318.5, 1568, 2093].forEach((f, i) => setTimeout(() => this.blip(f, 0.55, 0.045, "triangle", 1.01), i * 95)); },
  scrub(level) {
    if (!this.ready()) return;
    const c = this.ctx;
    if (!this.scrubGain) {
      const buf = c.createBuffer(1, c.sampleRate, c.sampleRate), d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      const src = c.createBufferSource(); src.buffer = buf; src.loop = true;
      const bp = c.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = 3200; bp.Q.value = 0.9;
      this.scrubGain = c.createGain(); this.scrubGain.gain.value = 0;
      src.connect(bp).connect(this.scrubGain).connect(c.destination); src.start();
    }
    const g = this.scrubGain.gain, t = c.currentTime;
    g.cancelScheduledValues(t);
    g.setTargetAtTime(Math.min(level, 1) * 0.035, t, 0.02);
    g.setTargetAtTime(0, t + 0.08, 0.08);
  }
};
["pointerdown", "keydown", "touchend"].forEach((ev) => window.addEventListener(ev, () => Sound.ensure(), { passive: true }));
let lastHover = null, lastHoverT = 0;
document.addEventListener("pointerover", (e) => {
  const el = e.target.closest("a, button, .step, .tool");
  if (!el || el === lastHover) return;
  lastHover = el;
  const now = performance.now();
  if (now - lastHoverT < 60) return;
  lastHoverT = now;
  Sound.blip(el.matches(".step, .tool") ? 520 : 1250, 0.05, 0.016);
});
document.addEventListener("pointerout", (e) => { if (lastHover && !lastHover.contains(e.relatedTarget)) lastHover = null; });
document.addEventListener("click", (e) => { if (e.target.closest("a, button")) Sound.blip(660, 0.09, 0.028, "triangle"); });

/* =========================================================
   SPARKLES — global particle layer
   ========================================================= */
const Sparkles = (() => {
  const cv = $(".sparkle-canvas"), ctx = cv.getContext("2d"), parts = [];
  const colors = ["#ffffff", "#ffd166", "#9fb4ff", "#ff8f6b", "#ffb08a"];
  let running = false, dpr = 1;
  function size() { dpr = Math.min(window.devicePixelRatio || 1, 2); cv.width = innerWidth * dpr; cv.height = innerHeight * dpr; }
  size(); addEventListener("resize", size);
  function star(x, y, r, rot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.beginPath();
    for (let i = 0; i < 4; i++) { ctx.lineTo(0, -r); ctx.quadraticCurveTo(0, 0, r, 0); ctx.rotate(Math.PI / 2); }
    ctx.fill(); ctx.restore();
  }
  function loop() {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = parts.length - 1; i >= 0; i--) {
      const p = parts[i];
      p.life--; p.x += p.vx; p.y += p.vy; p.vy += 0.04; p.rot += p.vr;
      if (p.life <= 0) { parts.splice(i, 1); continue; }
      const a = p.life / p.max;
      ctx.globalAlpha = a; ctx.fillStyle = p.c; ctx.shadowColor = p.c; ctx.shadowBlur = 8;
      star(p.x, p.y, p.r * (0.5 + a * 0.5), p.rot);
    }
    ctx.globalAlpha = 1;
    if (parts.length) requestAnimationFrame(loop); else running = false;
  }
  return {
    burst(x, y, n = 2, spread = 1.4) {
      if (reduceMotion) return;
      for (let i = 0; i < n; i++) {
        const max = 30 + Math.random() * 30;
        parts.push({ x: x + (Math.random() - 0.5) * 14, y: y + (Math.random() - 0.5) * 14, vx: (Math.random() - 0.5) * spread * 2, vy: (Math.random() - 0.8) * spread * 1.6,
          r: 2.5 + Math.random() * 4.5, rot: Math.random() * 6, vr: (Math.random() - 0.5) * 0.2, c: colors[(Math.random() * colors.length) | 0], life: max, max });
      }
      if (parts.length > 400) parts.splice(0, parts.length - 400);
      if (!running) { running = true; requestAnimationFrame(loop); }
    }
  };
})();

/* =========================================================
   GRAINY PHOTO + MAGIC ERASER (+ clarity meter)
   ========================================================= */
(function grainyPhoto() {
  const frame = $("#photoFrame"); if (!frame) return;
  const img = $("img", frame), canvas = $("canvas.grain", frame), cursor = $(".eraser-cursor", frame), regrainBtn = $(".regrain", frame);
  const bar = $("#clarityBar"), val = $("#clarityVal"), label = $("#clarityLabel"), noisyWord = $(".noisy");
  const labelDefault = label.innerHTML;
  const ctx = canvas.getContext("2d");
  const mk = (w, h) => { const c = document.createElement("canvas"); c.width = w; c.height = h; return c; };
  const THRESHOLD = 0.6;

  let W = 0, H = 0, base = null, noises = [], mask = null, mctx = null;
  let fi = 0, lastT = 0, dirty = true, visible = true, cleared = false, last = null, built = false;
  const probe = mk(48, 48), pctx = probe.getContext("2d", { willReadFrequently: true });

  function makeNoise(w, h) {
    const c = mk(w, h), x = c.getContext("2d"), d = x.createImageData(w, h), u = new Uint32Array(d.data.buffer);
    for (let i = 0; i < u.length; i++) {
      const r = Math.random();
      if (r < 0.005) { const a = 170 + ((Math.random() * 85) | 0); u[i] = ((a << 24) | 0xffffff) >>> 0; }
      else { const v = r < 0.5 ? 0 : 255, a = (Math.random() * Math.random() * 120) | 0; u[i] = ((a << 24) | (v << 16) | (v << 8) | v) >>> 0; }
    }
    x.putImageData(d, 0, 0); return c;
  }
  function build() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const nW = Math.min(900, Math.round(frame.offsetWidth * dpr));
    if (!nW || !img.naturalWidth) return;
    W = H = nW; canvas.width = W; canvas.height = H;
    base = mk(W, H);
    const b = base.getContext("2d"), s1 = mk(18, 18), s2 = mk(72, 72);
    s1.getContext("2d").drawImage(img, 0, 0, 18, 18);
    const c2 = s2.getContext("2d"); c2.imageSmoothingQuality = "high"; c2.drawImage(s1, 0, 0, 72, 72);
    b.imageSmoothingQuality = "high"; b.drawImage(s2, 0, 0, W, H);
    b.fillStyle = "rgba(14,18,30,.30)"; b.fillRect(0, 0, W, H);
    const vg = b.createRadialGradient(W / 2, H * 0.45, W * 0.1, W / 2, H / 2, W * 0.75);
    vg.addColorStop(0, "rgba(255,200,170,.10)"); vg.addColorStop(1, "rgba(0,0,0,.35)");
    b.fillStyle = vg; b.fillRect(0, 0, W, H);
    noises = [0, 1, 2, 3].map(() => makeNoise(W, H));
    const old = mask; mask = mk(W, H); mctx = mask.getContext("2d");
    if (old) mctx.drawImage(old, 0, 0, W, H);
    built = true; dirty = true;
  }
  function render() {
    if (!built) return;
    ctx.globalCompositeOperation = "source-over"; ctx.clearRect(0, 0, W, H);
    ctx.drawImage(base, 0, 0); ctx.drawImage(noises[fi], 0, 0);
    ctx.globalCompositeOperation = "destination-out"; ctx.drawImage(mask, 0, 0);
    ctx.globalCompositeOperation = "source-over";
  }
  function tick(t) {
    requestAnimationFrame(tick);
    if (!built || !visible || cleared) return;
    if (!reduceMotion && t - lastT > 85) { fi = (fi + 1) % noises.length; lastT = t; dirty = true; }
    if (dirty) { render(); dirty = false; }
  }
  function dab(x, y, R) {
    const g = mctx.createRadialGradient(x, y, 0, x, y, R);
    g.addColorStop(0, "rgba(0,0,0,1)"); g.addColorStop(0.5, "rgba(0,0,0,.9)"); g.addColorStop(1, "rgba(0,0,0,0)");
    mctx.fillStyle = g; mctx.beginPath(); mctx.arc(x, y, R, 0, Math.PI * 2); mctx.fill();
  }
  function coverage() {
    pctx.clearRect(0, 0, 48, 48); pctx.drawImage(mask, 0, 0, 48, 48);
    const d = pctx.getImageData(0, 0, 48, 48).data; let n = 0;
    for (let i = 3; i < d.length; i += 4) if (d[i] > 140) n++;
    return n / (48 * 48);
  }
  function setMeter(p) {
    const pct = Math.min(100, Math.round(p * 100));
    bar.style.width = pct + "%"; val.textContent = pct + "%";
  }
  function clearAll() {
    cleared = true; setMeter(1);
    frame.classList.add("is-clear");
    noisyWord && noisyWord.classList.add("clean");
    label.innerHTML = `${icon("spark")} Noise cleared — that's the job.`;
    Sound.chime();
    const r = frame.getBoundingClientRect();
    for (let i = 0; i < 6; i++) setTimeout(() => Sparkles.burst(r.left + Math.random() * r.width, r.top + Math.random() * r.height, 6, 2.4), i * 80);
  }
  function regrain() {
    if (!mctx) return;
    mctx.clearRect(0, 0, W, H); cleared = false; dirty = true;
    frame.classList.remove("is-clear"); noisyWord && noisyWord.classList.remove("clean");
    label.innerHTML = labelDefault; setMeter(0); render();
  }
  regrainBtn.addEventListener("click", (e) => { e.stopPropagation(); regrain(); });
  regrainBtn.addEventListener("pointermove", (e) => e.stopPropagation());

  let sparkT = 0, lastCheck = 0;
  function onMove(e) {
    const rect = frame.getBoundingClientRect();
    const lx = ((e.clientX - rect.left) / rect.width) * frame.offsetWidth;
    const ly = ((e.clientY - rect.top) / rect.height) * frame.offsetHeight;
    cursor.style.transform = `translate(${lx - 13}px, ${ly - 40}px)`;
    frame.classList.add("cursor-on");
    if (!built || cleared) return;
    const x = ((e.clientX - rect.left) / rect.width) * W, y = ((e.clientY - rect.top) / rect.height) * H, R = W * 0.085;
    if (last) {
      const dx = x - last.x, dy = y - last.y, dist = Math.hypot(dx, dy), steps = Math.max(1, Math.ceil(dist / (R * 0.35)));
      for (let i = 1; i <= steps; i++) dab(last.x + (dx * i) / steps, last.y + (dy * i) / steps, R);
      Sound.scrub(dist / (W * 0.05));
    } else dab(x, y, R);
    last = { x, y }; dirty = true;
    const now = performance.now();
    if (now - sparkT > 28) { sparkT = now; Sparkles.burst(e.clientX, e.clientY, 2); }
    if (now - lastCheck > 200) {
      lastCheck = now;
      const c = coverage();
      if (c > THRESHOLD) clearAll(); else setMeter(c / THRESHOLD);
    }
  }
  frame.addEventListener("pointermove", onMove);
  frame.addEventListener("pointerdown", (e) => { last = null; onMove(e); });
  frame.addEventListener("pointerleave", () => { last = null; frame.classList.remove("cursor-on"); });
  frame.addEventListener("pointerup", (e) => { if (e.pointerType !== "mouse") { last = null; frame.classList.remove("cursor-on"); } });
  new IntersectionObserver((en) => { visible = en[0].isIntersecting; }).observe(frame);
  let rt; new ResizeObserver(() => { clearTimeout(rt); rt = setTimeout(() => { build(); render(); }, 120); }).observe(frame);
  if (img.complete && img.naturalWidth) { build(); render(); } else img.addEventListener("load", () => { build(); render(); });
  requestAnimationFrame(tick);
})();

const imgOf = (w, size) => `assets/work/${w.id}${size === "thumb" ? "-thumb" : ""}.webp`;
const byId = (id) => WORKS.findIndex((w) => w.id === id);

/* =========================================================
   CONTENT: marquee, skills waves, projects, graphics, about, achievements, experience, interests
   ========================================================= */
(function content() {
  const chip = (t) => `<span class="m-chip"><span class="m-ico" style="background:${t.color}">${icon(t.icon)}</span>${t.name}</span>`;
  $("#marqueeTrack").innerHTML = TOOLS.map(chip).join("") + TOOLS.map(chip).join("");

  $$(".skill-card").forEach((card) => {
    const [h1, h2] = (card.dataset.waves || "220,280").split(",").map(Number);
    let out = "";
    for (let i = 0; i < 34; i++) {
      const hue = h1 + (h2 - h1) * (i / 33); let d = "";
      for (let x = 0; x <= 300; x += 8) {
        const y = 210 - x * 0.62 + Math.sin(x * 0.028 + i * 0.16) * (16 + i * 0.9) + i * 3.2;
        d += (x ? "L" : "M") + x + " " + y.toFixed(1);
      }
      out += `<path d="${d}" stroke="hsla(${hue},85%,60%,.75)"/>`;
    }
    $(".waves", card).innerHTML = out;
  });

  $("#features").innerHTML = WORKS.filter((w) => w.cat === "uiux").map((w, i) => `
    <article class="feature ${i % 2 ? "flip" : ""} reveal">
      <button type="button" class="f-media" data-open="${w.id}" aria-label="View ${w.title}"><img src="${imgOf(w)}" alt="${w.title}: ${w.subtitle}" loading="lazy" width="1600" height="900" /></button>
      <div class="f-info">
        <h3>${w.title}</h3>
        <p>${w.desc}</p>
        <ul class="tags">${w.features.map((f) => `<li>${f}</li>`).join("")}</ul>
        <div class="cta-row">
          <button type="button" class="btn btn-dark" data-open="${w.id}">${icon("file")} Case Study</button>
          <a class="btn btn-ghost" href="${CONFIG.behance}" target="_blank" rel="noopener"><span class="txt-ico">Bē</span> Behance</a>
        </div>
      </div>
    </article>`).join("");

  $("#gfxGrid").innerHTML = WORKS.filter((w) => ["packaging", "print", "apparel"].includes(w.cat)).map((w) => `
    <button type="button" class="gfx reveal" data-open="${w.id}" aria-label="View ${w.title}">
      <span class="gfx-img"><img src="${imgOf(w, "thumb")}" alt="" loading="lazy" width="720" height="405" /></span>
      <span class="gfx-body"><span><span class="gfx-cat">${CATS[w.cat]}</span><h3>${w.title}</h3><small>${w.subtitle}</small></span><span class="gfx-go">${icon("arrow")}</span></span>
    </button>`).join("");

  const strip = WORKS.map((w) => `<button type="button" data-open="${w.id}" aria-label="View ${w.title}"><img src="${imgOf(w, "thumb")}" alt="" loading="lazy" /></button>`).join("");
  $("#stripTrack").innerHTML = strip + strip;

  $("#achGrid").innerHTML = ACHIEVEMENTS.map((a) => `<article class="ach"><svg class="ico"><use href="#i-${a.icon}"/></svg><h3>${a.title}</h3><p>${a.text}</p></article>`).join("");
  $("#hobbyGrid").innerHTML = INTERESTS.map((a) => `<article class="ach"><svg class="ico"><use href="#i-${a.icon}"/></svg><h3>${a.title}</h3><p>${a.text}</p></article>`).join("");

  $("#expGrid").innerHTML = EXPERIENCE.map((e, i) => `
    <article class="exp reveal" data-i="${i}">
      <div class="exp-top"><span class="exp-ico">${icon("briefcase")}</span><div><h3>${e.role}</h3><div class="exp-org">${e.org}</div></div></div>
      <div class="exp-meta"><span>${icon("calendar")} ${e.date}</span><span>${icon("pin")} ${e.place}</span></div>
      <div class="exp-tabs" role="group" aria-label="Details for ${e.role}">
        <button type="button" data-tab="details" aria-pressed="false" title="Details">${icon("info")}</button>
        <button type="button" data-tab="skills" aria-pressed="false" title="Skills">${icon("award")}</button>
        <button type="button" data-tab="output" aria-pressed="false" title="Deliverables">${icon("wrench")}</button>
      </div>
      <div class="exp-hint">Tap an icon for details</div>
      <div class="exp-panel" hidden></div>
    </article>`).join("");
  $("#expGrid").addEventListener("click", (ev) => {
    const b = ev.target.closest("[data-tab]"); if (!b) return;
    const card = b.closest(".exp"), e = EXPERIENCE[+card.dataset.i], panel = $(".exp-panel", card), hint = $(".exp-hint", card);
    const on = b.getAttribute("aria-pressed") !== "true";
    $$("[data-tab]", card).forEach((x) => x.setAttribute("aria-pressed", x === b && on));
    panel.hidden = !on; hint.hidden = on;
    if (!on) return;
    const t = b.dataset.tab;
    panel.innerHTML = t === "details" ? `<ul>${e.details.map((d) => `<li>${d}</li>`).join("")}</ul>`
      : `<div class="chips">${e[t].map((s) => `<span>${s}</span>`).join("")}</div>`;
  });
})();

/* =========================================================
   ABOUT: featured case-study carousel
   ========================================================= */
(function featureCarousel() {
  const list = WORKS.filter((w) => w.cat === "uiux");
  const slides = $("#bfSlides"), dots = $("#bfDots");
  slides.innerHTML = list.map((w, i) => `<img src="${imgOf(w, "thumb")}" alt="" class="${i ? "" : "on"}" />`).join("");
  dots.innerHTML = list.map((_, i) => `<i class="${i ? "" : "on"}"></i>`).join("");
  let k = 0;
  const set = (n) => {
    k = (n + list.length) % list.length;
    $$("img", slides).forEach((im, i) => im.classList.toggle("on", i === k));
    $$("i", dots).forEach((d, i) => d.classList.toggle("on", i === k));
    $("#bfTitle").textContent = list[k].title;
    $("#bfDesc").textContent = list[k].subtitle;
  };
  set(0);
  let timer = setInterval(() => set(k + 1), 4200);
  const card = $("#featureCard");
  card.addEventListener("pointerenter", () => clearInterval(timer));
  card.addEventListener("pointerleave", () => { clearInterval(timer); timer = setInterval(() => set(k + 1), 4200); });
  $("#bfRead").addEventListener("click", () => window.Lightbox.open(byId(list[k].id)));
})();

/* =========================================================
   LIGHTBOX — view any work full size (data-open="<id>")
   ========================================================= */
window.Lightbox = (function lightbox() {
  const lb = $("#lightbox"), lbImg = $("#lbImg");
  let cur = 0, lastFocus = null;
  function show(i) {
    cur = (i + WORKS.length) % WORKS.length; const w = WORKS[cur];
    lbImg.src = imgOf(w); lbImg.alt = `${w.title}: ${w.subtitle}`;
    $("#lbCat").textContent = CATS[w.cat];
    $("#lbCount").textContent = `${String(cur + 1).padStart(2, "0")} / ${String(WORKS.length).padStart(2, "0")}`;
    $("#lbTitle").textContent = w.title;
    $("#lbDesc").textContent = w.desc;
    $("#lbFeats").innerHTML = w.features.map((f) => `<li>${f}</li>`).join("");
    $("#lbActions").innerHTML = w.play ? `<button type="button" class="btn btn-accent wide" data-play>${icon("play")} Play it on this page</button>` : "";
    const pre = new Image(); pre.src = imgOf(WORKS[(cur + 1) % WORKS.length]);
  }
  function open(i) { lastFocus = document.activeElement; show(i); lb.hidden = false; document.body.style.overflow = "hidden"; $(".lb-close", lb).focus({ preventScroll: true }); }
  function close() { lb.hidden = true; document.body.style.overflow = ""; if (lastFocus) lastFocus.focus({ preventScroll: true }); }
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-open]"); if (!t) return;
    const i = byId(t.dataset.open); if (i > -1) open(i);
  });
  lb.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) close();
    if (e.target.closest("[data-play]")) { close(); window.ArANYA && window.ArANYA.focusGame(); }
  });
  $("#lbPrev").addEventListener("click", () => show(cur - 1));
  $("#lbNext").addEventListener("click", () => show(cur + 1));
  addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowRight") show(cur + 1);
    else if (e.key === "ArrowLeft") show(cur - 1);
    else if (e.key === "Tab") {
      const f = $$("button, a[href]", lb).filter((x) => x.offsetParent !== null); if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
  });
  let tsx = 0;
  lb.addEventListener("touchstart", (e) => (tsx = e.touches[0].clientX), { passive: true });
  lb.addEventListener("touchend", (e) => { const dx = e.changedTouches[0].clientX - tsx; if (Math.abs(dx) > 60) show(cur + (dx < 0 ? 1 : -1)); });
  return { open };
})();

/* =========================================================
   NAV: top pill, left rail, up/down
   ========================================================= */
(function nav() {
  const sections = $$("[data-section]");
  const set = (id) => {
    const top = $$("[data-nav]"); if (top.some((a) => a.dataset.nav === id)) top.forEach((a) => a.classList.toggle("is-active", a.dataset.nav === id));
    $$("[data-rail]").forEach((a) => a.classList.toggle("is-active", a.dataset.rail.split(" ").includes(id)));
  };
  const io = new IntersectionObserver((en) => en.forEach((e) => { if (e.isIntersecting) set(e.target.id); }), { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => io.observe(s));
  $$(".updown button").forEach((b) => b.addEventListener("click", () => {
    const y = scrollY + 120; let cur = 0;
    sections.forEach((s, i) => { if (s.offsetTop <= y) cur = i; });
    sections[Math.min(sections.length - 1, Math.max(0, cur + +b.dataset.step))].scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  }));
})();

/* =========================================================
   ARANYA — "Carry the last light" forest run (playable)
   ========================================================= */
(function aranya() {
  const stage = $("#stage"), cv = $("#gameCanvas"), consoleEl = $("#console");
  const startOv = $("#overlayStart"), pauseOv = $("#overlayPause"), endOv = $("#overlayEnd");
  const hudDist = $("#hudDist"), hudBest = $("#hudBest"), hudLight = $("#hudLight");

  const focusGame = () => {
    $("#play").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    setTimeout(() => ($("#startBtn").offsetParent ? $("#startBtn") : cv).focus({ preventScroll: true }), 500);
  };
  window.ArANYA = { focusGame };

  // fullscreen
  const fsBtn = $("#fsBtn");
  const fsEnabled = document.fullscreenEnabled || document.webkitFullscreenEnabled;
  if (!fsEnabled) fsBtn.hidden = true;
  fsBtn.addEventListener("click", () => {
    const fsEl = document.fullscreenElement || document.webkitFullscreenElement;
    if (fsEl) (document.exitFullscreen || document.webkitExitFullscreen).call(document);
    else (consoleEl.requestFullscreen || consoleEl.webkitRequestFullscreen).call(consoleEl);
    cv.focus({ preventScroll: true });
  });

  // optional real build
  if (CONFIG.game.embedUrl) {
    stage.innerHTML = `<iframe src="${CONFIG.game.embedUrl}" title="The Last Light of Aranya" allow="fullscreen; gamepad; autoplay" allowfullscreen style="width:100%;height:100%;border:0;display:block"></iframe>`;
    $("#playNowBtn").addEventListener("click", focusGame);
    return;
  }

  const ctx = cv.getContext("2d");
  const W = 960, H = 540, GROUND = 452;
  const rnd = (a, b) => a + Math.random() * (b - a);
  let best = store.get("kj-aranya-best", 0); hudBest.textContent = best;

  // ---------- world generation (tileable layers) ----------
  function ridge(period, step, min, max) {
    const pts = []; for (let x = 0; x < period; x += step) pts.push([x, rnd(min, max)]);
    pts.push([period, pts[0][1]]); return { period, pts };
  }
  const mountainsFar = ridge(1920, 160, 190, 300);
  const mountainsNear = ridge(2240, 140, 260, 350);
  const pinesFar = Array.from({ length: 34 }, (_, i) => ({ x: i * 60 + rnd(-18, 18), h: rnd(70, 130) }));
  const pinesNear = Array.from({ length: 11 }, (_, i) => ({ x: i * 230 + rnd(-60, 60), h: rnd(170, 260) }));
  const groundEdge = ridge(1200, 40, -6, 6);
  const tufts = Array.from({ length: 40 }, (_, i) => ({ x: i * 30 + rnd(0, 20), h: rnd(6, 14) }));
  const stars = Array.from({ length: 70 }, () => ({ x: rnd(0, W), y: rnd(0, 230), s: Math.random() < 0.25 ? 2 : 1, tw: rnd(0, 6) }));

  // ---------- state ----------
  let state = "idle", visible = false, lastT = 0, t = 0;
  let p, obstacles, flies, parts, scroll, speed, light, elapsed, nextObs, nextFly, jumps, holding, caught, reason;
  function reset() {
    p = { x: 150, y: GROUND - 75, w: 44, h: 75, vy: 0, ground: true, run: 0 };
    obstacles = []; flies = []; parts = [];
    scroll = 0; speed = 7; light = 100; elapsed = 0; nextObs = 520; nextFly = 300; jumps = 0; holding = false; caught = 0;
  }
  reset();

  // ---------- drawing ----------
  function poly(pts, color, ox, period, base) {
    ctx.fillStyle = color; ctx.beginPath();
    const off = ((ox % period) + period) % period;
    for (let k = -1; k * period - off < W + period; k++) {
      ctx.moveTo(k * period - off, base);
      pts.forEach(([x, y]) => ctx.lineTo(k * period - off + x, y));
      ctx.lineTo(k * period - off + period, base);
    }
    ctx.fill();
  }
  function tree(x, base, h, color, tiers = 3) {
    ctx.fillStyle = color;
    const w = h * 0.42;
    for (let i = 0; i < tiers; i++) {
      const ty = base - h + (i * h) / (tiers + 0.6), tw = w * (0.55 + (i / tiers) * 0.6);
      ctx.beginPath(); ctx.moveTo(x, ty); ctx.lineTo(x - tw, ty + h * 0.42); ctx.lineTo(x + tw, ty + h * 0.42); ctx.closePath(); ctx.fill();
    }
    ctx.fillRect(x - h * 0.03, base - h * 0.12, h * 0.06, h * 0.12);
  }
  function deer(x, base, c) {
    ctx.fillStyle = c; ctx.strokeStyle = c; ctx.lineWidth = 3; ctx.lineCap = "round";
    ctx.beginPath(); ctx.ellipse(x, base - 30, 22, 10, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.moveTo(x + 14, base - 34); ctx.lineTo(x + 24, base - 54); ctx.lineTo(x + 30, base - 52); ctx.lineTo(x + 22, base - 32); ctx.fill();
    ctx.beginPath(); ctx.ellipse(x + 30, base - 55, 7, 4, -0.3, 0, Math.PI * 2); ctx.fill();
    [[-14, 0], [-8, 0], [10, 0], [16, 0]].forEach(([dx]) => { ctx.beginPath(); ctx.moveTo(x + dx, base - 26); ctx.lineTo(x + dx, base); ctx.stroke(); });
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(x + 27, base - 59); ctx.lineTo(x + 22, base - 72); ctx.moveTo(x + 24, base - 66); ctx.lineTo(x + 17, base - 70);
    ctx.moveTo(x + 31, base - 59); ctx.lineTo(x + 36, base - 72); ctx.moveTo(x + 34, base - 66); ctx.lineTo(x + 41, base - 69); ctx.stroke();
  }
  function ruin(x, base, c) {
    ctx.fillStyle = c;
    ctx.fillRect(x, base - 120, 22, 120); ctx.fillRect(x + 78, base - 140, 22, 140);
    ctx.fillRect(x - 6, base - 132, 112, 16);
    ctx.beginPath(); ctx.moveTo(x + 22, base - 116); ctx.quadraticCurveTo(x + 50, base - 70, x + 78, base - 116); ctx.lineTo(x + 78, base - 116); ctx.fill();
    ctx.fillRect(x + 100, base - 60, 30, 60);
  }
  function rock(o) {
    const { x, y, w, h } = o;
    ctx.fillStyle = "#5b6072"; ctx.beginPath();
    ctx.moveTo(x, y + h); ctx.lineTo(x + w * 0.1, y + h * 0.35); ctx.lineTo(x + w * 0.45, y); ctx.lineTo(x + w * 0.85, y + h * 0.2); ctx.lineTo(x + w, y + h); ctx.closePath(); ctx.fill();
    ctx.fillStyle = "#7a8094"; ctx.beginPath(); ctx.moveTo(x + w * 0.1, y + h * 0.35); ctx.lineTo(x + w * 0.45, y); ctx.lineTo(x + w * 0.5, y + h); ctx.lineTo(x, y + h); ctx.closePath(); ctx.fill();
    ctx.fillStyle = "#454a5b"; ctx.beginPath(); ctx.moveTo(x + w * 0.85, y + h * 0.2); ctx.lineTo(x + w, y + h); ctx.lineTo(x + w * 0.6, y + h); ctx.closePath(); ctx.fill();
  }
  function log(o) {
    const { x, y, w, h } = o;
    ctx.fillStyle = "#6b4528"; ctx.beginPath(); ctx.roundRect ? ctx.roundRect(x, y, w, h, h / 2) : ctx.rect(x, y, w, h); ctx.fill();
    ctx.fillStyle = "#8a5b34"; ctx.fillRect(x + h / 2, y + 4, w - h, 5);
    ctx.fillStyle = "#c79a63"; ctx.beginPath(); ctx.ellipse(x + w - h / 2, y + h / 2, h / 2 - 2, h / 2 - 2, 0, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = "#8a5b34"; ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(x + w - h / 2, y + h / 2, h / 4, h / 4, 0, 0, Math.PI * 2); ctx.stroke();
    ctx.fillStyle = "#3f7a3f"; ctx.fillRect(x + w * 0.3, y - 4, 10, 5);
  }
  function stump(o) {
    const { x, y, w, h } = o;
    ctx.fillStyle = "#5a3a22"; ctx.fillRect(x, y + 8, w, h - 8);
    ctx.fillStyle = "#c79a63"; ctx.beginPath(); ctx.ellipse(x + w / 2, y + 8, w / 2, 8, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#3f7a3f"; ctx.beginPath(); ctx.moveTo(x - 6, y + h); ctx.lineTo(x + 4, y + h - 16); ctx.lineTo(x + 10, y + h); ctx.fill();
  }
  function wanderer(x, y, runPhase, airborne) {
    const bob = airborne ? 0 : Math.sin(runPhase) * 2.5;
    // legs
    ctx.strokeStyle = "#2c2448"; ctx.lineWidth = 6; ctx.lineCap = "round";
    const l1 = airborne ? 6 : Math.sin(runPhase) * 10, l2 = airborne ? -4 : -Math.sin(runPhase) * 10;
    ctx.beginPath(); ctx.moveTo(x + 13, y + 44 + bob); ctx.lineTo(x + 13 + l1, y + 58); ctx.moveTo(x + 21, y + 44 + bob); ctx.lineTo(x + 21 + l2, y + 58); ctx.stroke();
    // cloak
    const g = ctx.createLinearGradient(x, y, x, y + 50); g.addColorStop(0, "#8a6fd1"); g.addColorStop(1, "#4f3d85");
    ctx.fillStyle = g; ctx.beginPath();
    ctx.moveTo(x + 17, y + 2 + bob); ctx.lineTo(x + 32, y + 46 + bob); ctx.lineTo(x + 2, y + 46 + bob); ctx.closePath(); ctx.fill();
    // hood + face
    ctx.fillStyle = "#6a54a8"; ctx.beginPath(); ctx.arc(x + 18, y + 12 + bob, 11, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = "rgba(255,214,140,.55)"; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(x + 18, y + 12 + bob, 11, -1.2, 0.6); ctx.stroke();
    ctx.fillStyle = "#e9b98d"; ctx.beginPath(); ctx.arc(x + 22, y + 14 + bob, 5.5, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#1c1630"; ctx.fillRect(x + 23, y + 12 + bob, 2, 2);
    // scarf
    ctx.fillStyle = "#c2412b"; ctx.fillRect(x + 9, y + 21 + bob, 18, 5);
    ctx.beginPath(); ctx.moveTo(x + 10, y + 22 + bob); ctx.lineTo(x - 6, y + 26 + bob + Math.sin(runPhase * 0.7) * 3); ctx.lineTo(x + 10, y + 27 + bob); ctx.fill();
    // arm + lantern
    const lx = x + 40, ly = y + 30 + bob + (airborne ? -3 : Math.sin(runPhase + 1) * 2);
    ctx.strokeStyle = "#2a2142"; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(x + 22, y + 24 + bob); ctx.lineTo(lx - 2, ly - 10); ctx.stroke();
    ctx.strokeStyle = "#1c1630"; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(lx - 2, ly - 10); ctx.lineTo(lx, ly - 4); ctx.stroke();
    const glowR = 26 + light * 0.22;
    const lg = ctx.createRadialGradient(lx, ly + 4, 0, lx, ly + 4, glowR);
    lg.addColorStop(0, `rgba(255,214,120,${0.55 + light / 300})`); lg.addColorStop(1, "rgba(255,170,60,0)");
    ctx.fillStyle = lg; ctx.beginPath(); ctx.arc(lx, ly + 4, glowR, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#3a2a1a"; ctx.fillRect(lx - 6, ly - 5, 12, 3); ctx.fillRect(lx - 6, ly + 12, 12, 3);
    ctx.fillStyle = light > 0 ? "#ffd166" : "#555"; ctx.fillRect(lx - 5, ly - 2, 10, 14);
    return [lx, ly + 4];
  }
  function firefly(f) {
    const fy = f.y + Math.sin(t / 300 + f.ph) * 8;
    const g = ctx.createRadialGradient(f.x, fy, 0, f.x, fy, 22);
    g.addColorStop(0, "rgba(255,240,150,.95)"); g.addColorStop(0.25, "rgba(255,210,90,.55)"); g.addColorStop(1, "rgba(255,200,80,0)");
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(f.x, fy, 22, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#fffbe0"; ctx.beginPath(); ctx.arc(f.x, fy, 3.2, 0, Math.PI * 2); ctx.fill();
    return fy;
  }

  function draw() {
    const dusk = Math.min(1, elapsed / 90000);
    // sky
    const sky = ctx.createLinearGradient(0, 0, 0, GROUND);
    sky.addColorStop(0, dusk > 0.5 ? "#191a3d" : "#262a5c"); sky.addColorStop(0.55, "#6d4f86"); sky.addColorStop(1, "#ff9a5c");
    ctx.fillStyle = sky; ctx.fillRect(0, 0, W, H);
    stars.forEach((s) => { ctx.globalAlpha = 0.35 + 0.35 * Math.sin(t / 600 + s.tw); ctx.fillStyle = "#fff"; ctx.fillRect(((s.x - scroll * 0.02) % W + W) % W, s.y, s.s, s.s); });
    ctx.globalAlpha = 1;
    // sun
    const sunY = 300 + dusk * 70;
    const sg = ctx.createRadialGradient(700, sunY, 10, 700, sunY, 150);
    sg.addColorStop(0, "rgba(255,214,140,.9)"); sg.addColorStop(1, "rgba(255,160,90,0)");
    ctx.fillStyle = sg; ctx.fillRect(500, sunY - 160, 400, 320);
    ctx.fillStyle = "#ffd48a"; ctx.beginPath(); ctx.arc(700, sunY, 54, 0, Math.PI * 2); ctx.fill();
    // mountains
    poly(mountainsFar.pts, "#4b4479", scroll * 0.08, mountainsFar.period, GROUND);
    poly(mountainsNear.pts, "#3a355f", scroll * 0.16, mountainsNear.period, GROUND);
    // ruin + deer (ambient)
    const ro = scroll * 0.28, rp = 2600; const rx = rp - (ro % rp) - 200; ruin(rx, 372, "#2f2a4d");
    const dO = scroll * 0.4, dp = 3100; const dx = dp - (dO % dp) - 150; deer(dx, 392, "#272443");
    // far pines
    ctx.fillStyle = "#2b3047";
    const fo = scroll * 0.35, fp = 34 * 60;
    pinesFar.forEach((tr) => { let x = tr.x - (fo % fp); if (x < -80) x += fp; if (x < W + 80) tree(x, 400, tr.h, "#283149"); });
    ctx.fillStyle = "#232a3f"; ctx.fillRect(0, 398, W, GROUND - 398);
    // near pines
    const no = scroll * 0.7, np = 11 * 230;
    pinesNear.forEach((tr) => { let x = tr.x - (no % np); if (x < -150) x += np; if (x < W + 150) tree(x, GROUND + 4, tr.h, "#1a2233", 4); });
    // ground
    ctx.fillStyle = "#1f3a2a"; ctx.fillRect(0, GROUND, W, H - GROUND);
    ctx.fillStyle = "#3d6b3f";
    const go = scroll % groundEdge.period;
    ctx.beginPath();
    for (let k = 0; k * groundEdge.period - go < W + groundEdge.period; k++) {
      ctx.moveTo(k * groundEdge.period - go, GROUND + 14);
      groundEdge.pts.forEach(([x, y]) => ctx.lineTo(k * groundEdge.period - go + x, GROUND + y));
      ctx.lineTo(k * groundEdge.period - go + groundEdge.period, GROUND + 14);
    }
    ctx.fill();
    ctx.fillStyle = "#3a2c22"; ctx.fillRect(0, GROUND + 26, W, 22);
    ctx.fillStyle = "#4a382b";
    for (let x = -(scroll % 70); x < W; x += 70) ctx.fillRect(x, GROUND + 34, 26, 4);
    ctx.fillStyle = "#4f8a4c";
    tufts.forEach((tf) => { let x = tf.x - (scroll % 1200); if (x < -20) x += 1200; if (x < W) { ctx.beginPath(); ctx.moveTo(x, GROUND + 4); ctx.lineTo(x + 3, GROUND - tf.h); ctx.lineTo(x + 6, GROUND + 4); ctx.fill(); } });
    // obstacles + fireflies
    obstacles.forEach((o) => (o.type === "rock" ? rock(o) : o.type === "log" ? log(o) : stump(o)));
    flies.forEach((f) => (f.dy = firefly(f)));
    // player
    const SC = 1.3;
    ctx.save(); ctx.translate(p.x, p.y + p.h); ctx.scale(SC, SC);
    const [llx, lly] = wanderer(0, -58, p.run, !p.ground);
    ctx.restore();
    const lx = p.x + llx * SC, ly = p.y + p.h + lly * SC;
    // particles
    parts.forEach((q) => { ctx.globalAlpha = Math.max(0, q.life / q.max); ctx.fillStyle = q.c; ctx.fillRect(q.x, q.y, q.s, q.s); });
    ctx.globalAlpha = 1;
    // darkness: the lantern's light is your vision
    const a = 0.18 + 0.7 * (1 - light / 100);
    const r = 160 + light * 4.4;
    const dg = ctx.createRadialGradient(lx, ly, r * 0.15, lx, ly, r);
    dg.addColorStop(0, "rgba(6,7,18,0)"); dg.addColorStop(0.55, `rgba(6,7,18,${a * 0.45})`); dg.addColorStop(1, `rgba(6,7,18,${a})`);
    ctx.fillStyle = dg; ctx.fillRect(0, 0, W, H);
  }

  // ---------- simulation ----------
  function spawnObstacle() {
    const roll = Math.random(), late = elapsed > 25000;
    let o;
    if (roll < 0.45) { const w = rnd(46, 70), h = rnd(32, 52); o = { type: "rock", w, h }; }
    else if (roll < 0.8 || !late) { const w = rnd(86, 118); o = { type: "log", w, h: 30 }; }
    else { o = { type: "stump", w: 40, h: rnd(62, 78) }; }
    o.x = W + 20; o.y = GROUND - o.h + 2; obstacles.push(o);
    nextObs = speed * rnd(48, 95) + o.w;
  }
  function burst(x, y, n, colors, spd = 4) {
    for (let i = 0; i < n; i++) { const m = rnd(18, 34); parts.push({ x, y, vx: rnd(-spd, spd), vy: rnd(-spd * 1.2, spd * 0.3), s: rnd(2, 5), c: colors[i % colors.length], life: m, max: m }); }
  }
  function jump() {
    if (state !== "play") return;
    if (p.ground) { p.vy = -16.8; p.ground = false; jumps = 1; Sound.blip(420, 0.1, 0.028, "triangle", 1.8); burst(p.x + 14, GROUND, 6, ["#6b5a48", "#8a7560"], 2); }
    else if (jumps < 2) { p.vy = -14.2; jumps = 2; Sound.blip(640, 0.1, 0.026, "triangle", 1.6); burst(p.x + 17, p.y + 50, 8, ["#ffd166", "#fff"], 2.5); }
  }
  function update(dt) {
    const k = dt / 16.67;
    elapsed += dt; t += dt;
    speed = Math.min(15, 7 + elapsed / 9000);
    scroll += speed * k;
    p.run += 0.32 * k * (speed / 7);
    // light drains faster as night falls
    light -= (5.2 + elapsed / 22000) * (dt / 1000);
    if (!holding && p.vy < -7) p.vy = -7;
    p.vy += 0.9 * k; p.y += p.vy * k;
    if (p.y >= GROUND - p.h) { if (!p.ground) burst(p.x + 17, GROUND, 4, ["#6b5a48"], 1.5); p.y = GROUND - p.h; p.vy = 0; p.ground = true; jumps = 0; }

    nextObs -= speed * k; if (nextObs <= 0) spawnObstacle();
    nextFly -= speed * k;
    if (nextFly <= 0) { flies.push({ x: W + 30, y: rnd(GROUND - 230, GROUND - 70), ph: rnd(0, 6) }); nextFly = rnd(260, 520) * (light < 35 ? 0.75 : 1); }

    obstacles.forEach((o) => (o.x -= speed * k)); obstacles = obstacles.filter((o) => o.x + o.w > -20);
    flies.forEach((f) => (f.x -= speed * k * 0.92)); flies = flies.filter((f) => f.x > -30);
    parts.forEach((q) => { q.x += q.vx * k; q.y += q.vy * k; q.vy += 0.18 * k; q.life -= k; }); parts = parts.filter((q) => q.life > 0);

    // collisions
    const hx = p.x + 10, hy = p.y + 10, hw = p.w - 18, hh = p.h - 12;
    for (const o of obstacles) {
      const ox = o.x + 6, oy = o.y + (o.type === "rock" ? o.h * 0.25 : 4), ow = o.w - 12, oh = o.h;
      if (hx < ox + ow && hx + hw > ox && hy < oy + oh && hy + hh > oy) { reason = "hit"; return end(); }
    }
    flies = flies.filter((f) => {
      const fy = f.dy ?? f.y;
      if (Math.hypot(f.x - (p.x + 50), fy - (p.y + 38)) < 50) {
        light = Math.min(100, light + 22); caught++;
        Sound.blip(1320, 0.14, 0.03, "sine", 1.25);
        burst(f.x, fy, 12, ["#ffd166", "#fffbe0", "#ffb347"], 3);
        return false;
      }
      return true;
    });
    if (light <= 0) { light = 0; reason = "dark"; return end(); }

    const dist = Math.floor(scroll / 40);
    hudDist.textContent = dist;
    hudLight.style.transform = `scaleX(${light / 100})`;
    hudLight.classList.toggle("low", light < 28);
  }

  function frame(now) {
    requestAnimationFrame(frame);
    const dt = Math.min(40, now - (lastT || now)); lastT = now;
    if (!visible) return;
    if (state === "play") update(dt);
    else { t += dt; parts.forEach((q) => { q.x += q.vx; q.y += q.vy; q.vy += 0.18; q.life--; }); parts = parts.filter((q) => q.life > 0); if (state === "idle") scroll += 1.2; }
    draw();
  }

  function setOverlay(el) { [startOv, pauseOv, endOv].forEach((o) => o.classList.toggle("is-on", o === el)); }
  function start() {
    reset(); state = "play"; setOverlay(null);
    hudDist.textContent = 0; hudLight.style.transform = "scaleX(1)"; hudLight.classList.remove("low");
    cv.focus({ preventScroll: true }); Sound.ensure(); Sound.blip(520, 0.14, 0.03, "triangle", 2);
  }
  function pause() { if (state !== "play") return; state = "paused"; setOverlay(pauseOv); }
  function resume() { if (state !== "paused") return; state = "play"; lastT = 0; setOverlay(null); cv.focus({ preventScroll: true }); }
  function end() {
    state = "over";
    const dist = Math.floor(scroll / 40);
    const isBest = dist > best;
    if (isBest) { best = dist; store.set("kj-aranya-best", best); hudBest.textContent = best; }
    if (reason === "hit") { burst(p.x + 17, p.y + 30, 22, ["#ffd166", "#c2412b", "#4a3a6b"], 5); Sound.blip(200, 0.32, 0.04, "sawtooth", 0.5); }
    else Sound.blip(330, 0.5, 0.03, "sine", 0.5);
    $("#endKicker").textContent = isBest ? "NEW BEST ✦" : "RUN OVER";
    $("#endTitle").textContent = reason === "hit" ? "You stumbled in the dark." : "The light went out.";
    $("#endText").innerHTML = `You travelled <b>${dist}m</b> and caught <b>${caught}</b> firefl${caught === 1 ? "y" : "ies"}. Best: <b>${best}m</b>.`;
    setTimeout(() => { setOverlay(endOv); $("#replayBtn").focus({ preventScroll: true }); }, reason === "hit" ? 600 : 300);
  }

  $("#startBtn").addEventListener("click", start);
  $("#replayBtn").addEventListener("click", start);
  $("#playNowBtn").addEventListener("click", () => { focusGame(); if (state !== "play") setTimeout(start, 600); });
  $("#resumeBtn").addEventListener("click", resume);
  const isJump = (e) => e.code === "Space" || e.code === "ArrowUp" || e.code === "KeyW";
  addEventListener("keydown", (e) => {
    if (!$("#lightbox").hidden) return;
    if (state === "play" && visible) {
      if (isJump(e)) { e.preventDefault(); if (!e.repeat) { holding = true; jump(); } }
      else if (e.code === "KeyP") pause();
    } else if (state === "paused" && (e.code === "KeyP" || (isJump(e) && document.activeElement === cv))) { e.preventDefault(); resume(); }
    else if (document.activeElement === cv && isJump(e) && state !== "play") { e.preventDefault(); start(); }
  });
  addEventListener("keyup", (e) => { if (isJump(e)) holding = false; });
  stage.addEventListener("pointerdown", (e) => {
    if (state === "play" && !e.target.closest("button")) { e.preventDefault(); holding = true; jump(); }
  });
  addEventListener("pointerup", () => (holding = false));
  addEventListener("blur", pause);
  document.addEventListener("visibilitychange", () => { if (document.hidden) pause(); });
  new IntersectionObserver((en) => { visible = en[0].isIntersecting; if (!visible) pause(); }, { threshold: 0.2 }).observe(stage);
  draw();
  requestAnimationFrame(frame);
})();

/* =========================================================
   MUSIC — compact player card in About (beat-reactive site)
   ========================================================= */
(function music() {
  const tracks = CONFIG.tracks, audio = $("#audio"), playBtn = $("#mPlay"), bar = $("#mBar"), notice = $("#mNotice"), like = $("#mLike"), sfx = $("#sfxToggle");
  let idx = 0, analyser = null, freq = null, srcNode = null, beat = 0, raf = 0;
  const spotify = (t) => `https://open.spotify.com/search/${encodeURIComponent(t.title + " " + t.artist)}`;
  const likes = store.get("kj-likes", {});
  function meta() { const t = tracks[idx]; $("#mTitle").textContent = t.title; $("#mArtist").textContent = t.artist; like.setAttribute("aria-pressed", !!likes[t.title]); }
  function load(i) { idx = (i + tracks.length) % tracks.length; notice.hidden = true; audio.src = tracks[idx].src; bar.style.width = "0%"; meta(); }
  function connect() {
    const c = Sound.ensure(); if (!c || srcNode) return;
    try { srcNode = c.createMediaElementSource(audio); analyser = c.createAnalyser(); analyser.fftSize = 64; analyser.smoothingTimeConstant = .75; freq = new Uint8Array(analyser.frequencyBinCount); srcNode.connect(analyser); analyser.connect(c.destination); } catch (e) { analyser = null; }
  }
  function play() { if (!audio.getAttribute("src")) load(idx); connect(); audio.play().catch(() => {}); }
  function viz() {
    const playing = !audio.paused;
    if (analyser && playing) { analyser.getByteFrequencyData(freq); const bass = (freq[1] + freq[2] + freq[3]) / 765; beat += (Math.max(0, bass - .45) * 1.8 - beat) * .35; } else beat *= .85;
    document.documentElement.style.setProperty("--beat", beat.toFixed(3));
    if (playing || beat > .01) raf = requestAnimationFrame(viz); else { raf = 0; document.documentElement.style.setProperty("--beat", 0); }
  }
  audio.volume = .6;
  audio.addEventListener("play", () => { document.body.classList.add("is-playing"); playBtn.innerHTML = icon("pause"); playBtn.setAttribute("aria-label", "Pause"); if (!raf) raf = requestAnimationFrame(viz); });
  audio.addEventListener("pause", () => { document.body.classList.remove("is-playing"); playBtn.innerHTML = icon("play"); playBtn.setAttribute("aria-label", "Play"); });
  audio.addEventListener("error", () => { if (!audio.getAttribute("src")) return; const t = tracks[idx]; notice.hidden = false; notice.innerHTML = `Add <b>${t.src}</b> to play, or <a href="${spotify(t)}" target="_blank" rel="noopener">open Spotify ↗</a>`; });
  audio.addEventListener("ended", () => { load(idx + 1); play(); });
  audio.addEventListener("timeupdate", () => { if (audio.duration) bar.style.width = (audio.currentTime / audio.duration) * 100 + "%"; });
  playBtn.addEventListener("click", () => (audio.paused ? play() : audio.pause()));
  $("#mNext").addEventListener("click", () => { load(idx + 1); play(); });
  $("#mPrev").addEventListener("click", () => { if (audio.currentTime > 3) audio.currentTime = 0; else { load(idx - 1); play(); } });
  like.addEventListener("click", () => { const t = tracks[idx].title; likes[t] = !likes[t]; store.set("kj-likes", likes); meta(); if (likes[t]) { const r = like.getBoundingClientRect(); Sparkles.burst(r.left + r.width / 2, r.top + r.height / 2, 8, 1.6); } });
  sfx.checked = Sound.enabled;
  sfx.addEventListener("change", () => { Sound.enabled = sfx.checked; store.set("kj-sfx", sfx.checked); toast(sfx.checked ? "UI sounds on" : "UI sounds off"); });
  meta();
})();

/* =========================================================
   CONTACT: copy email + REVEAL
   ========================================================= */
$("#copyEmail").addEventListener("click", async (e) => {
  const email = e.currentTarget.dataset.email;
  try { await navigator.clipboard.writeText(email); toast("Email copied. Talk soon ✦"); } catch (err) { toast(email); }
  const r = e.currentTarget.getBoundingClientRect(); Sparkles.burst(r.left + r.width / 2, r.top, 10, 2);
});
(function reveal() {
  const io = new IntersectionObserver((en) => en.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
  $$(".reveal").forEach((el) => io.observe(el));
  $("#year").textContent = new Date().getFullYear();
})();
