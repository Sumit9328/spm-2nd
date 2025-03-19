// document.addEventListener("DOMContentLoaded", function () {
//     // Hamburger Icon
//     var hamburger = document.querySelector(".HMBG-icon");

//     // Menu that will open
//     var mobileMenu = document.querySelector(".head-flex");

//     // Click Event on Hamburger
//     hamburger.addEventListener("click", function () {
//         mobileMenu.classList.toggle("active"); // Add/Remove "active" class
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const suffix = counter.getAttribute("data-suffix") || "";
    let count = 0;
    const increment = target / 100;

    const updateCounter = () => {
      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count) + suffix;
        setTimeout(updateCounter, 30);
      } else {
        counter.innerText = target + suffix;
      }
    };

    updateCounter();
  });
});

document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", function () {
    const parent = this.parentElement;
    const content = parent.querySelector(".accordion-content");
    const icon = this.querySelector(".icon");

    // Close all other open accordions
    document.querySelectorAll(".accordion-item").forEach((item) => {
      if (item !== parent) {
        item.classList.remove("active");
        item.querySelector(".accordion-content").style.maxHeight = "0";
        item.querySelector(".accordion-content").style.opacity = "0";
        item.querySelector(".icon").textContent = "+";
      }
    });

    // Toggle current accordion
    if (parent.classList.contains("active")) {
      parent.classList.remove("active");
      // content.style.maxHeight = '0';
      content.style.opacity = "0";
      icon.textContent = "+";
    } else {
      parent.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.opacity = "1";
      icon.textContent = "−";
    }
  });
});

///////////////////slider js///////////////////////////
var splide = new Splide(".splide", {
  type: "loop",
  perPage: 3,
  focus: "center",
  pagination: false,
  breakpoints: {
    1024: { perPage: 2 },
    768: { perPage: 1 },
  },
});

splide.mount();

var splidetwo = new Splide("#slider-2", {
  perPage: 1,
  pagination: false,
  type: "loop",
  perPage: 3,
  focus: "center",
  breakpoints: {
    1024: { perPage: 2 },
    768: { perPage: 1 },
  },
});

splidetwo.mount();

////////////////////end////////////////////////
