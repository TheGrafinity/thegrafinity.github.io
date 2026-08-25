// ==========================================================================
// EASY EDIT AREA
// ==========================================================================
const siteData = {
    brandName: "The Grafinity",
    name: "Sajidul Islam Mahad",
    tagline: "Giving Ideas, Visual Identity",
    phone: "+8801781513640",
    email: "mdmahadorg@gmail.com",
    social: {
        linkedin: "https://www.linkedin.com/in/mdmahad/",
        facebook: "https://www.facebook.com/sajiduislammahad/",
        instagram: "https://www.instagram.com/sajidul.islam.mahad/"
    },

    services: [
        { title: "Logo Design", desc: "Custom, memorable logo marks that define your core brand essence.", icon: "fa-solid fa-pen-nib" },
        { title: "Brand Identity", desc: "Cohesive visual guidelines, typography, and color systems for your business.", icon: "fa-solid fa-fingerprint" },
        { title: "Social Media Post Design", desc: "Engaging, high-conversion graphics tailored for feeds and stories.", icon: "fa-solid fa-share-nodes" },
        { title: "Flyer Design", desc: "Eye-catching promotional flyers engineered for high audience impact.", icon: "fa-solid fa-bullhorn" },
        { title: "Ad Poster Design", desc: "High-impact advertising posters built to grab attention instantly.", icon: "fa-solid fa-rectangle-ad" },
        { title: "Business Card Design", desc: "Sleek, professional business cards that leave lasting first impressions.", icon: "fa-solid fa-address-card" },
        { title: "Poster Design", desc: "Creative artistic posters crafted for events, brands, and displays.", icon: "fa-solid fa-image" },
        { title: "Banner Design", desc: "Striking digital and print banners designed for maximum visibility.", icon: "fa-solid fa-flag" },
        { title: "Print Media Design", desc: "Professional layouts for brochures, packaging, and tangible media.", icon: "fa-solid fa-print" },
        { title: "Digital Media Design", desc: "Dynamic assets optimized for web, campaigns, and digital platforms.", icon: "fa-solid fa-laptop-code" }
    ],

    portfolio: [
        {
            title: "Social Media Campaign Poster 1",
            category: "social",
            categoryName: "Social Media Designs",
            image: "images/social-poster-1.png",
            description: "High-energy social media promotional poster designed to maximize engagement and brand visibility across digital channels."
        },
        {
            title: "Social Media Campaign Poster 2",
            category: "social",
            categoryName: "Social Media Designs",
            image: "images/social-poster-2.png",
            description: "Dynamic layout featuring bold typography and neon accents tailored for high-performing digital marketing campaigns."
        },
        {
            title: "Social Media Campaign Poster 3",
            category: "social",
            categoryName: "Social Media Designs",
            image: "images/social-poster-3.png",
            description: "Striking visual composition optimized for maximum retention and audience interaction on social media."
        },
        {
            title: "The Grafinity Brand Identity & Logo",
            category: "branding",
            categoryName: "Branding Work",
            image: "images/profile.jpg",
            description: "Core visual identity and professional portrait branding representing precision, modern aesthetics, and creative excellence."
        },
        {
            title: "Brand Cover & Visual Direction",
            category: "branding",
            categoryName: "Branding Work",
            image: "images/brand-cover.png",
            description: "Comprehensive brand cover showcasing the futuristic dark luxury design standard of The Grafinity."
        }
    ],

    testimonials: [
        {
            clientName: "Coming Soon",
            clientPosition: "Future Client",
            review: "Real client testimonials will be displayed here as we continue delivering exceptional branding and graphic design projects."
        },
        {
            clientName: "Coming Soon",
            clientPosition: "Future Partner",
            review: "We prioritize genuine results. Client feedback and reviews will be added here upon project completion."
        }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    renderServices();
    renderPortfolio('all');
    renderTestimonials();
    setupMobileMenu();
    setupHeaderScroll();
});

function renderServices() {
    const grid = document.getElementById("services-grid");
    if (!grid) return;
    
    grid.innerHTML = siteData.services.map(service => `
        <div class="p-8 rounded-2xl bg-zinc-900/50 border border-white/10 backdrop-blur-xl hover:border-neon/50 transition-all duration-300 group">
            <div class="w-14 h-14 rounded-xl bg-neon/10 flex items-center justify-center text-neon text-2xl mb-6 group-hover:scale-110 group-hover:bg-neon group-hover:text-black transition-all duration-300">
                <i class="${service.icon}"></i>
            </div>
            <h3 class="text-xl font-bold font-heading mb-3 text-white">${service.title}</h3>
            <p class="text-gray-400 text-sm leading-relaxed">${service.desc}</p>
        </div>
    `).join("");
}

function renderPortfolio(filter) {
    const grid = document.getElementById("portfolio-grid");
    if (!grid) return;

    const filtered = filter === 'all' 
        ? siteData.portfolio 
        : siteData.portfolio.filter(item => item.category === filter);

    grid.innerHTML = filtered.map((item, index) => `
        <div onclick="openModal(${index})" class="group relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 aspect-[4/3] cursor-pointer shadow-xl">
            <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span class="text-xs font-bold uppercase tracking-widest text-neon mb-1">${item.categoryName}</span>
                <h3 class="text-xl font-bold font-heading text-white">${item.title}</h3>
                <p class="text-gray-300 text-xs mt-1 line-clamp-2">${item.description}</p>
            </div>
        </div>
    `).join("");
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-btn")) {
        document.querySelectorAll(".filter-btn").forEach(btn => {
            btn.classList.remove("bg-neon", "text-black");
            btn.classList.add("bg-white/5", "text-gray-300");
        });
        e.target.classList.remove("bg-white/5", "text-gray-300");
        e.target.classList.add("bg-neon", "text-black");
        
        const filter = e.target.getAttribute("data-filter");
        renderPortfolio(filter);
    }
});

function renderTestimonials() {
    const grid = document.getElementById("testimonials-grid");
    if (!grid) return;

    grid.innerHTML = siteData.testimonials.map(t => `
        <div class="p-8 rounded-2xl bg-zinc-900/50 border border-white/10 backdrop-blur-xl relative flex flex-col justify-between">
            <div class="absolute top-6 right-6 text-neon/20 text-4xl font-serif">“</div>
            <p class="text-gray-300 text-sm leading-relaxed mb-6 relative z-10">"${t.review}"</p>
            <div class="pt-4 border-t border-white/10">
                <h4 class="font-bold font-heading text-white">${t.clientName}</h4>
                <p class="text-xs text-neon">${t.clientPosition}</p>
            </div>
        </div>
    `).join("");
}

function openModal(index) {
    const item = siteData.portfolio[index];
    if (!item) return;

    document.getElementById("modal-img").src = item.image;
    document.getElementById("modal-category").innerText = item.categoryName;
    document.getElementById("modal-title").innerText = item.title;
    document.getElementById("modal-desc").innerText = item.description;

    const modal = document.getElementById("project-modal");
    modal.classList.remove("opacity-0", "pointer-events-none");
}

function closeModal() {
    const modal = document.getElementById("project-modal");
    modal.classList.add("opacity-0", "pointer-events-none");
}

window.addEventListener("click", (e) => {
    const modal = document.getElementById("project-modal");
    if (e.target === modal) {
        closeModal();
    }
});

function setupMobileMenu() {
    const btn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const menu = document.getElementById("mobile-menu");

    if (!btn || !menu) return;

    btn.addEventListener("click", () => {
        menu.classList.remove("opacity-0", "pointer-events-none");
    });

    closeBtn.addEventListener("click", () => {
        menu.classList.add("opacity-0", "pointer-events-none");
    });

    document.querySelectorAll(".mobile-link").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.add("opacity-0", "pointer-events-none");
        });
    });
}

function setupHeaderScroll() {
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("bg-black/80", "backdrop-blur-md", "border-b", "border-white/10");
        } else {
            header.classList.remove("bg-black/80", "backdrop-blur-md", "border-b", "border-white/10");
        }
    });
}

function handleContact(e) {
    e.preventDefault();
    alert("Thank you for reaching out! Your message has been received. We will get back to you shortly.");
    e.target.reset();
}
