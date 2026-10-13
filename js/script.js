window.currentLang = "vi";

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const detailModal = document.getElementById("detail-modal");
const modalImage = document.getElementById("detail-modal-img");
const modalTitle = document.getElementById("detail-modal-title");
const modalDescription = document.getElementById("detail-modal-desc");
const langButton = document.getElementById("lang-btn");
let previousBodyOverflow = "";

function openLightbox(imageSrc, altText = "Ảnh phóng to") {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = imageSrc;
    lightboxImg.alt = altText;
    lightbox.style.display = "flex";
    previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    if (!lightbox) return;
    lightbox.style.display = "none";
    document.body.style.overflow = previousBodyOverflow;
}

function closeDetailModal(event) {
    if (event && event.target !== detailModal) return;
    forceCloseDetailModal();
}

function forceCloseDetailModal() {
    if (!detailModal) return;
    detailModal.style.display = "none";
    document.body.style.overflow = previousBodyOverflow;
}

window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.closeDetailModal = closeDetailModal;
window.forceCloseDetailModal = forceCloseDetailModal;

if (langButton) {
    langButton.addEventListener("click", () => {
        window.currentLang = window.currentLang === "vi" ? "en" : "vi";
        const language = window.currentLang;
        langButton.textContent = language === "vi" ? "EN" : "VI";
        document.documentElement.lang = language;

        document.querySelectorAll(".lang").forEach((element) => {
            const translation = element.getAttribute(`data-${language}`);
            if (translation !== null) element.innerHTML = translation;
        });

        document.querySelectorAll("[data-placeholder-vi][data-placeholder-en]").forEach((element) => {
            element.placeholder = element.getAttribute(`data-placeholder-${language}`);
        });

        window.dispatchEvent(new CustomEvent("languagechange", { detail: { language } }));
    });
}

document.querySelectorAll(".hero-image img").forEach((image) => {
    image.addEventListener("click", () => openLightbox(image.currentSrc || image.src, image.alt));
});

document.querySelectorAll(".popup-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
        if (!detailModal || !modalImage || !modalTitle || !modalDescription) return;

        const imageSource = trigger.getAttribute("data-img");
        if (!imageSource) return;

        modalImage.src = imageSource;
        modalImage.alt = trigger.querySelector("h3")?.textContent.trim() || "Project preview";
        modalTitle.textContent = trigger.getAttribute(`data-title-${window.currentLang}`) || "";
        modalDescription.textContent = trigger.getAttribute(`data-desc-${window.currentLang}`) || "";
        detailModal.style.display = "flex";
        previousBodyOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeLightbox();
    forceCloseDetailModal();
});

const filterButtons = document.querySelectorAll(".filter-btn");
const projectItems = document.querySelectorAll(".project-item");

filterButtons.forEach((button) => {
    button.setAttribute("aria-pressed", button.classList.contains("active") ? "true" : "false");
    button.addEventListener("click", () => {
        filterButtons.forEach((item) => {
            const active = item === button;
            item.classList.toggle("active", active);
            item.setAttribute("aria-pressed", String(active));
        });

        const selectedStatus = button.getAttribute("data-filter");
        projectItems.forEach((project) => {
            project.hidden = selectedStatus !== "all" && project.getAttribute("data-status") !== selectedStatus;
        });
    });
});

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (window.gsap && !reduceMotion) {
    if (window.ScrollTrigger) window.gsap.registerPlugin(window.ScrollTrigger);

    const heroContent = document.querySelector(".hero-content");
    const heroImage = document.querySelector(".hero-image");
    if (heroContent) {
        window.gsap.from(heroContent, {
            y: 28,
            opacity: 0,
            duration: 0.85,
            delay: 0.08,
            ease: "power3.out"
        });
    }
    if (heroImage) {
        window.gsap.from(heroImage, {
            y: 18,
            opacity: 0,
            duration: 1,
            delay: 0.18,
            ease: "power3.out"
        });
    }

    document.querySelectorAll(".gsap-card, .project-item, .timeline-row").forEach((item) => {
        const animation = {
            y: 24,
            opacity: 0,
            duration: 0.72,
            ease: "power3.out"
        };
        if (window.ScrollTrigger) {
            animation.scrollTrigger = {
                trigger: item,
                start: "top 88%",
                once: true
            };
        }
        window.gsap.from(item, animation);
    });
}
