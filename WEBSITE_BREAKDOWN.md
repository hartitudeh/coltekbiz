# Coltekbiz Website – Developer Breakdown

## 1. Brand
| Item | Value |
|---|---|
| Name | Coltekbiz |
| Tagline | Your Trusted Hub for Exams, ICT & Business Services |
| Primary (Pen Blue) | `#0A2E8A` · light `#1E4FD8` · dark `#061B54` |
| Secondary (Orange) | `#F7931E` · deep `#FF6B00` |
| Neutrals | Ink `#0F172A`, Muted `#5B6478`, Soft BG `#F3F6FD` |
| Font | Poppins (400–800) |
| Style | Rounded (18px), soft shadows, gradients, glassmorphism hero card |

## 2. Sitemap (single-page, expandable to multi-page)
1. **Top bar** – address, phone, email
2. **Sticky header** – logo, nav, "Book a Service" CTA, mobile hamburger drawer
3. **Hero** – accreditation badge, animated typing headline, CTAs (Explore / WhatsApp), animated stats, quick callback form
4. **Accreditation strip** – JAMB, WAEC, NECO, NYSC, NERD (replace with official logos)
5. **About** – CBT hall highlight, rating badge, value checklist
6. **Services** (filterable: All / Exams / ICT / Business)
   - JAMB, WAEC, NECO Registration · NYSC Services · NERD Registration
   - ICT Setup & Networking · Education Consultation · Certificate Generation
   - Scratch Cards & Tokens · Printing & Documents
7. **How it works** – 4 steps
8. **Scratch Cards & Tokens pricing** – Buy Now opens WhatsApp with prefilled order
9. **Testimonials** – auto slider with dots
10. **FAQ** – accordion
11. **CTA banner** – WhatsApp
12. **Contact** – info + form (service dropdown auto-filled from service cards)
13. **Footer** – links, newsletter, copyright
14. Floating WhatsApp button + back-to-top + toast notifications

## 3. Files
- `index.html` – structure/content
- `styles.css` – design system (CSS variables at top), responsive at 992 / 820 / 560px
- `script.js` – services data array (edit to add services), filters, menu, typing, counters, reveal animations, slider, FAQ, forms

## 4. Things the developer must replace / add
- Real address, phone, WhatsApp number (`2348033243597`), email
- Logo files + official accreditation logos, real CBT-hall photos
- Confirm card/token prices
- **Backend:** connect forms (Formspree/EmailJS/PHP/Node), store leads
- **Payments (Phase 2):** Paystack/Flutterwave for instant scratch-card/token purchase with automated PIN delivery via SMS/email
- **Phase 2 pages:** individual service pages, blog/exam news, admin dashboard, certificate verification portal (enter certificate ID → verify), Google Maps embed
- SEO: meta/OG tags, sitemap.xml, Google Business Profile; Analytics
