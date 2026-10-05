// --------------------------------------------------------
// 1. TÍNH NĂNG PHÓNG TO ẢNH (JavaScript cơ bản)
// --------------------------------------------------------
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openLightbox(imageSrc) {
    lightboxImg.src = imageSrc;
    lightbox.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    lightbox.style.display = "none";
    document.body.style.overflow = "auto";
}

// --------------------------------------------------------
// 2. HIỆU ỨNG CHUYỂN ĐỘNG VỚI GSAP
// --------------------------------------------------------
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-content", {
    y: 50, 
    opacity: 0, 
    duration: 1, 
    delay: 0.2
});

gsap.from(".hero-image", {
    scale: 0.8, 
    opacity: 0, 
    duration: 1, 
    delay: 0.4 
});

const cards = document.querySelectorAll(".gsap-card");
cards.forEach((card) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
    });
});

// --------------------------------------------------------
// 3. CHỨC NĂNG CHUYỂN ĐỔI NGÔN NGỮ (VI / EN)
// --------------------------------------------------------
const langBtn = document.getElementById("lang-btn");
const langElements = document.querySelectorAll(".lang"); 
let currentLang = "vi";

langBtn.addEventListener("click", function() {
    currentLang = currentLang === "vi" ? "en" : "vi";
    langBtn.textContent = currentLang === "vi" ? "EN" : "VI"; 

    langElements.forEach(el => {
        // Dùng innerHTML thay vì textContent để giữ lại các thẻ HTML bên trong như <br>
        el.innerHTML = el.getAttribute(`data-${currentLang}`);
    });
});

// --------------------------------------------------------
// 4. CHỨC NĂNG POPUP CHI TIẾT (Thay ruột tự động)
// --------------------------------------------------------
const detailModal = document.getElementById("detail-modal");
const dmImg = document.getElementById("detail-modal-img");
const dmTitle = document.getElementById("detail-modal-title");
const dmDesc = document.getElementById("detail-modal-desc");
const popupTriggers = document.querySelectorAll(".popup-trigger");

// Duyệt qua tất cả các thẻ có class 'popup-trigger'
popupTriggers.forEach(card => {
    card.addEventListener("click", function() {
        // Lấy dữ liệu từ các thuộc tính data- của cái thẻ vừa bị click
        const imgSrc = this.getAttribute("data-img");
        
        // Dùng biến currentLang (từ phần dịch thuật) để biết đang ở ngôn ngữ nào
        const title = this.getAttribute(`data-title-${currentLang}`);
        const desc = this.getAttribute(`data-desc-${currentLang}`);

        // Bơm dữ liệu vào Khung Modal
        dmImg.src = imgSrc;
        dmTitle.innerHTML = title;
        dmDesc.innerHTML = desc;

        // Hiển thị Modal
        detailModal.style.display = "flex";
        document.body.style.overflow = "hidden"; // Khóa cuộn trang nền
    });
});

// Hàm đóng Modal khi click ra khoảng đen bên ngoài
function closeDetailModal(event) {
    // Chỉ đóng khi bấm đúng vào lớp nền đen (không đóng nếu bấm vào thẻ trắng bên trong)
    if (event.target === detailModal) {
        forceCloseDetailModal();
    }
}

// Hàm đóng Modal khi bấm nút X
function forceCloseDetailModal() {
    detailModal.style.display = "none";
    document.body.style.overflow = "auto";
}