const lightbox = document.getElementById("map-lightbox");
const zoomableImages = Array.from(document.querySelectorAll(".zoomable-map"));

if (lightbox && zoomableImages.length > 0) {
const lightboxImage = lightbox.querySelector(".lightbox-image");
const lightboxLabel = lightbox.querySelector(".lightbox-label");
const closeButton = lightbox.querySelector(".lightbox-close");
const prevButton = lightbox.querySelector(".lightbox-prev");
const nextButton = lightbox.querySelector(".lightbox-next");
let currentImageIndex = 0;

const showImage = (index) => {
    currentImageIndex = (index + zoomableImages.length) % zoomableImages.length;
    const image = zoomableImages[currentImageIndex];
    const caption = image.closest("figure").querySelector("figcaption");
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightboxLabel.textContent = caption.textContent;
};

const openLightbox = (index) => {
    showImage(index);
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
};

const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.src = "";
    lightboxImage.alt = "";
    lightboxLabel.textContent = "";
};

zoomableImages.forEach((image, index) => {
    image.addEventListener("click", () => {
        openLightbox(index);
    });
});

prevButton.addEventListener("click", (event) => {
    event.stopPropagation();
    showImage(currentImageIndex - 1);
});

nextButton.addEventListener("click", (event) => {
    event.stopPropagation();
    showImage(currentImageIndex + 1);
});

closeButton.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("is-open")) {
        return;
    }

    if (event.key === "Escape") {
        closeLightbox();
    } else if (event.key === "ArrowLeft") {
        showImage(currentImageIndex - 1);
    } else if (event.key === "ArrowRight") {
        showImage(currentImageIndex + 1);
    }
});
}
