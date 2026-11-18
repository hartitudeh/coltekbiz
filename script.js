// ===== Services data (edit here to update the site) =====
const services = [
  { cat: "exam", ico: "🎓", title: "JAMB Registration", text: "UTME & Direct Entry registration, profile code, e-PIN, reprinting and change of course/institution." },
  { cat: "exam", ico: "📝", title: "WAEC Registration", text: "WASSCE private (GCE) registration, result checking and certificate verification support." },
  { cat: "exam", ico: "📘", title: "NECO Registration", text: "SSCE external registration, token purchase, result checking and correction guidance." },
  { cat: "exam", ico: "🇳🇬", title: "NYSC Services", text: "Online registration, green card printing, call-up letter, biometrics and relocation guidance." },
  { cat: "exam", ico: "🧾", title: "NERD Registration", text: "Fast and accurate NERD registration and documentation handled by experienced staff." },
  { cat: "tech", ico: "🌐", title: "ICT Setup & Networking", text: "LAN/WAN, CBT lab installation, Wi‑Fi, CCTV, server setup and maintenance for schools & offices." },
  { cat: "biz", ico: "💡", title: "Education Consultation", text: "Admission guidance, course selection, school placement and study-abroad advisory." },
  { cat: "biz", ico: "🏅", title: "Certificate Generation", text: "Professionally designed, verifiable certificates for schools, trainings and events." },
  { cat: "biz", ico: "💳", title: "Scratch Cards & Tokens", text: "Genuine WAEC, NECO, NABTEB checkers and JAMB e-PINs delivered instantly." },
  { cat: "biz", ico: "🖨️", title: "Printing & Documents", text: "Printing, photocopy, scanning, lamination, typing, binding and passport photographs." },
];

const grid = document.getElementById("servicesGrid");
grid.innerHTML = services.map(s => `
  <div class="service reveal" data-cat="${s.cat}">
    <div class="ico">${s.ico}</div>
    <h4>${s.title}</h4>
    <p>${s.text}</p>
    <a href="#contact" data-service="${s.title}">Request service →</a>
  </div>`).join("");

// Populate contact select
const contactSelect = document.getElementById("contactService");
services.forEach(s => contactSelect.insertAdjacentHTML("beforeend", `<option>${s.title}</option>`));

// Pre-select service when "Request service" clicked
grid.addEventListener("click", e => {
  const link = e.target.closest("[data-service]");
  if (link) contactSelect.value = link.dataset.service;
});

// Filters
document.querySelectorAll(".chip").forEach(chip => chip.addEventListener("click", () => {
  document.querySelector(".chip.active").classList.remove("active");
  chip.classList.add("active");
  const f = chip.dataset.filter;
  document.querySelectorAll(".service").forEach(card =>
    card.classList.toggle("hide", f !== "all" && card.dataset.cat !== f));
}));

// Mobile menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => { hamburger.classList.toggle("open"); navLinks.classList.toggle("open"); });
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => { hamburger.classList.remove("open"); navLinks.classList.remove("open"); }));

// Header shadow, back-to-top, active link
const header = document.getElementById("header");
const toTop = document.getElementById("toTop");
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  header.classList.toggle("scrolled", y > 20);
  toTop.classList.toggle("show", y > 600);
  sections.forEach(sec => {
    const link = navLinks.querySelector(`a[href="#${sec.id}"]:not(.btn)`);
    if (link) link.classList.toggle("active", y >= sec.offsetTop - 120 && y < sec.offsetTop + sec.offsetHeight - 120);
  });
});
toTop.addEventListener("click", () => window.scrollTo({ top: 0 }));

// Typing effect
const words = ["Exam Registration", "JAMB · WAEC · NECO", "NYSC Services", "ICT & Networking", "Scratch Cards", "Printing"];
const typed = document.getElementById("typed");
let wi = 0, ci = 0, del = false;
(function type() {
  const w = words[wi];
  typed.textContent = w.slice(0, ci);
  if (!del && ci < w.length) ci++;
  else if (del && ci > 0) ci--;
  else { del = !del; if (!del) wi = (wi + 1) % words.length; return setTimeout(type, del ? 1600 : 300); }
  setTimeout(type, del ? 45 : 90);
})();

// Reveal on scroll + counters
const io = new IntersectionObserver(entries => entries.forEach(en => {
  if (!en.isIntersecting) return;
  en.target.classList.add("visible");
  en.target.querySelectorAll("[data-count]").forEach(countUp);
  io.unobserve(en.target);
}), { threshold: .15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

function countUp(el) {
  const end = +el.dataset.count, start = performance.now();
  (function step(t) {
    const p = Math.min((t - start) / 1800, 1);
    el.textContent = Math.floor(end * p).toLocaleString();
    if (p < 1) requestAnimationFrame(step);
  })(start);
}

// Testimonials slider
const slides = document.querySelectorAll(".slide");
const dots = document.getElementById("dots");
let cur = 0;
slides.forEach((_, i) => {
  const b = document.createElement("button");
  b.addEventListener("click", () => show(i));
  dots.appendChild(b);
});
function show(i) {
  slides[cur].classList.remove("active"); dots.children[cur].classList.remove("active");
  cur = i;
  slides[cur].classList.add("active"); dots.children[cur].classList.add("active");
}
show(0);
setInterval(() => show((cur + 1) % slides.length), 5000);

// FAQ accordion
document.querySelectorAll(".faq-item button").forEach(btn => btn.addEventListener("click", () => {
  const item = btn.parentElement, ans = item.querySelector(".ans");
  const open = item.classList.toggle("open");
  ans.style.maxHeight = open ? ans.scrollHeight + "px" : 0;
}));

// Toast + forms (replace with real backend / WhatsApp / payment integration)
const toast = document.getElementById("toast");
function notify(msg) {
  toast.textContent = msg; toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3200);
}
[["quickForm", "✅ Thanks! We'll call you shortly."],
 ["contactForm", "✅ Message sent! We'll respond within minutes."],
 ["newsForm", "🎉 Subscribed to Coltekbiz updates!"]].forEach(([id, msg]) =>
  document.getElementById(id).addEventListener("submit", e => { e.preventDefault(); e.target.reset(); notify(msg); }));

document.querySelectorAll(".buy").forEach(b => b.addEventListener("click", () => {
  const text = encodeURIComponent(`Hello Coltekbiz, I want to buy: ${b.dataset.item}`);
  window.open(`https://wa.me/2348033243597?text=${text}`, "_blank");
}));

document.getElementById("year").textContent = new Date().getFullYear();
