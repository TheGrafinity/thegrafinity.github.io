/* =========================================================
   THE GRAFINITY - EASY EDIT AREA
   Change your personal information, links, services and
   portfolio projects here. No need to edit the HTML.
   ========================================================= */

const siteConfig = {
  brandName: "The Grafinity",
  name: "Sajidul Islam Mahad",
  phone: "+8801781513640",
  email: "mdmahadorg@gmail.com",
  tagline: "Giving Ideas, Visual Identity",

  social: {
    linkedin: "https://www.linkedin.com/in/sajiduislammahad/",
    facebook: "https://www.facebook.com/sajiduislammahad/",
    instagram: "https://www.instagram.com/sajiduislammahad/"
  },

  services: [
    ["✦", "Logo Design", "Distinctive marks that give your brand a memorable first impression."],
    ["◈", "Brand Identity", "Cohesive visual systems built for consistent brand communication."],
    ["◎", "Social Media Design", "Scroll-stopping social creatives made for digital audiences."],
    ["▣", "Flyer Design", "Clean promotional layouts that communicate offers quickly."],
    ["✹", "Ad Poster Design", "Bold campaign visuals designed to attract attention."],
    ["▤", "Business Card Design", "Professional, print-ready cards that keep your identity consistent."],
    ["✧", "Poster Design", "Creative compositions for events, promotions and campaigns."],
    ["▥", "Banner Design", "High-impact banners for online and offline visibility."],
    ["▦", "Print Media Design", "Polished layouts prepared for real-world print production."],
    ["⌁", "Digital Media Design", "Flexible visuals for websites, ads and digital campaigns."]
  ],

  whyChooseMe: [
    ["01", "Modern Approach", "Fresh visual direction with a clean and contemporary design language."],
    ["02", "Fast Delivery", "Clear workflow and focused execution to keep projects moving."],
    ["03", "Client Focus", "Design decisions are aligned with your goals, audience and brand."],
    ["04", "Fair Pricing", "Professional creative work with practical, transparent pricing."],
    ["05", "Communication", "Easy, direct communication from first idea to final delivery."]
  ],

  /* Add future projects here. To remove one, delete its object. */
  portfolio: [
    {
      title: "Burger Social Campaign",
      category: "Social Media",
      image: "images/social-poster-1.png",
      description: "Food promotion social media creative"
    },
    {
      title: "Pizza Promotion",
      category: "Social Media",
      image: "images/social-poster-2.png",
      description: "Promotional food campaign poster"
    },
    {
      title: "Biryani Campaign",
      category: "Social Media",
      image: "images/social-poster-3.png",
      description: "Restaurant promotional creative"
    }
  ],

  /* Add real client testimonials here later.
     Example:
     {
       quote: "Amazing work and fast delivery.",
       client: "Client Name",
       role: "Business Owner"
     }
  */
  testimonials: []
};

/* ---------- Automatic setup ---------- */
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

document.title = `${siteConfig.brandName} | Graphic Design Portfolio`;
$$("[data-brand]").forEach(el => el.textContent = siteConfig.brandName.toUpperCase());
$$("[data-name]").forEach(el => el.textContent = siteConfig.name);
$$("[data-tagline]").forEach(el => el.textContent = siteConfig.tagline);
$$("[data-phone]").forEach(el => el.textContent = siteConfig.phone);
$$("[data-email]").forEach(el => el.textContent = siteConfig.email);

const phoneDigits = siteConfig.phone.replace(/\D/g, "");
$$("[data-phone-link]").forEach(el => el.href = `tel:+${phoneDigits}`);
$$("[data-email-link]").forEach(el => el.href = `mailto:${siteConfig.email}`);
$$("[data-whatsapp]").forEach(el => el.href = `https://wa.me/${phoneDigits}`);

function renderServices() {
  $("#servicesGrid").innerHTML = siteConfig.services.map(service => `
    <article class="service-card reveal">
      <div class="service-icon">${service[0]}</div>
      <h3>${service[1]}</h3>
      <p>${service[2]}</p>
    </article>
  `).join("");
}

function renderWhy() {
  $("#whyGrid").innerHTML = siteConfig.whyChooseMe.map(item => `
    <article class="why-card reveal">
      <div class="why-number">${item[0]}</div>
      <h3>${item[1]}</h3>
      <p>${item[2]}</p>
    </article>
  `).join("");
}

function renderTestimonials() {
  const section = $(".testimonials-section");
  if (!siteConfig.testimonials.length) {
    section.style.display = "none";
    return;
  }
  section.style.display = "block";
  $("#testimonialsGrid").innerHTML = siteConfig.testimonials.map(item => `
    <article class="testimonial reveal">
      <p>“${item.quote}”</p>
      <strong>${item.client}</strong>
      <span>${item.role || ""}</span>
    </article>
  `).join("");
}

function renderPortfolio(filter = "All") {
  const items = filter === "All"
    ? siteConfig.portfolio
    : siteConfig.portfolio.filter(item => item.category === filter);

  $("#portfolioGrid").innerHTML = items.map((item, index) => `
    <article class="portfolio-item reveal" data-image="${item.image}" data-title="${item.title}">
      <div class="project-image">
        <img src="${item.image}" alt="${item.title}" loading="${index > 1 ? "lazy" : "eager"}">
        <div class="project-overlay">
          <span>${item.category}</span>
          <h3>${item.title}</h3>
        </div>
      </div>
      <div class="project-info">
        <div>
          <small>${item.category}</small>
          <strong>${item.title}</strong>
        </div>
        <span>↗</span>
      </div>
    </article>
  `).join("");

  $$(".portfolio-item").forEach(card => {
    card.addEventListener("click", () => openLightbox(card.dataset.image, card.dataset.title));
  });
  observeReveals();
}

function renderFilters() {
  const categories = ["All", ...new Set(siteConfig.portfolio.map(item => item.category))];
  $("#filters").innerHTML = categories.map((category, index) => `
    <button class="filter-btn ${index === 0 ? "active" : ""}" data-filter="${category}">${category}</button>
  `).join("");

  $$(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
      $$(".filter-btn").forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      renderPortfolio(button.dataset.filter);
    });
  });
}

function renderSocials() {
  const items = [
    ["in", "LinkedIn", siteConfig.social.linkedin],
    ["f", "Facebook", siteConfig.social.facebook],
    ["ig", "Instagram", siteConfig.social.instagram]
  ];
  $("#socials").innerHTML = items.map(item => `
    <a class="social-link" href="${item[2]}" target="_blank" rel="noopener noreferrer" aria-label="${item[1]}">${item[0]}</a>
  `).join("");
}

function observeReveals() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .08 });
  $$(".reveal:not(.visible)").forEach(el => observer.observe(el));
}

function openLightbox(image, title) {
  $("#lightboxImage").src = image;
  $("#lightboxImage").alt = title;
  $("#lightboxCaption").textContent = title;
  $("#lightbox").classList.add("open");
  $("#lightbox").setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeLightbox() {
  $("#lightbox").classList.remove("open");
  $("#lightbox").setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

$(".lightbox-close").addEventListener("click", closeLightbox);
$("#lightbox").addEventListener("click", e => {
  if (e.target === $("#lightbox")) closeLightbox();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeLightbox();
});

const menuToggle = $(".menu-toggle");
const navLinks = $(".nav-links");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});
$$(".nav-links a").forEach(link => link.addEventListener("click", () => navLinks.classList.remove("open")));

window.addEventListener("scroll", () => {
  $(".site-header").classList.toggle("scrolled", window.scrollY > 20);
});

const cursorGlow = $(".cursor-glow");
window.addEventListener("pointermove", e => {
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
});

$("#year").textContent = new Date().getFullYear();

renderServices();
renderWhy();
renderTestimonials();
renderFilters();
renderPortfolio();
renderSocials();
observeReveals();
