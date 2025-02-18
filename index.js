var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 2000, // Change every 2 seconds
    disableOnInteraction: false,
  },
  effect: "slide",
  speed: 800,
});

function openMenu() {
  const menuOverlay = document.getElementById("menuOverlay");
  menuOverlay.classList.add("active");

  const menuItems = document.querySelectorAll(".menu-items li");
  menuItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("show");
    }, index * 200); // Adds delay to each item
  });

  document
    .querySelectorAll(".menu-items2 li, .menu-items2 p")
    .forEach((item) => {
      item.style.opacity = "1";
    });
}

function closeMenu() {
  const menuOverlay = document.getElementById("menuOverlay");
  menuOverlay.classList.remove("active");

  const menuItems = document.querySelectorAll(".menu-items li");
  menuItems.forEach((item) => {
    item.classList.remove("show");
  });

  document
    .querySelectorAll(".menu-items2 li, .menu-items2 p")
    .forEach((item) => {
      item.style.opacity = "0";
    });
}

// Second section
function animateCounters() {
  const counters = document.querySelectorAll(".counter");
  const speed = 100;

  counters.forEach((counter) => {
    counter.innerText = "0"; // Reset counter to 0 when re-entering
    const target = +counter.getAttribute("data-target");
    let count = 0;

    const updateCount = () => {
      const increment = target / speed;
      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
}

//  IntersectionObserver to detect when the section is in view
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters();
      }
    });
  },
  { threshold: 0.5 }
);

const statsSection = document.querySelector(".stats-section");
observer.observe(statsSection);

//lastSection
const images = [
  {
    img: "/images/Mask Group 20.png",
    heading: "Revolutionizing Air Travel",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: "/images/Mask Group 21.png",
    heading: "Flying Beyond Borders",
    content:
      " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    img: "/images/Mask Group 22.png",
    heading: "From Takeoff to Touchdown",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    img: "/images/Mask Group 20.png",
    heading: "Skies Without Limits",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    img: "/images/Mask Group 21.png",
    heading: "Engineering Marvels",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    img: "/images/Mask Group 22.png",
    heading: "Speed, Safety & Comfort",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

let currentIndex = 0;
const sliderImages = document.querySelectorAll(".slider-image");
const leftImage = document.getElementById("left-image");
const leftHeading = document.getElementById("left-heading");
const leftContent = document.getElementById("left-content");

function updateSlider() {
  sliderImages.forEach((img, index) => {
    const position = index - currentIndex;
    img.style.transform = `translateX(${position * 60}px)`;
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
}

function changeLeftContent(index) {
  leftImage.src = images[index].img;
  leftHeading.innerText = images[index].heading;
  leftContent.innerText = images[index].content;
}

updateSlider();



document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu-items li");

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      let targetId;

      switch (item.innerText.trim().toLowerCase()) {
        case "home":
          targetId = "hero";
          break;
        case "who we are":
          targetId = "stats";
          break;
        case "services":
          targetId = "services";
          break;
        default:
          return;
      }

      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });

        closeMenu();
      }
    });
  });
});
