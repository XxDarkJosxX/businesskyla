document.addEventListener('DOMContentLoaded', function () {

  // SLIDER
  var carouselslider = new Swiper('.carousel-slider', {
    spaceBetween: 0,
    slidesPerView: 3,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 1
      },
      320: {
        slidesPerView: 1
      }
    }
  });

  const renderCards = (cardsContainer, cards) => {
    cardsContainer.innerHTML = "";

    cards.forEach((card) => {
      const { title, description, cover, date, tags } = card;

      const cardElement = document.createElement("div");
      cardElement.classList.add("col", "colpers");

      cardElement.innerHTML = `
        <div class="card border-0 bg-transparent position-relative">
          <a href="#" class="${cover.length > 1 ? "has-multiple" : ""}">
            ${cover
          .map(
            (image) =>
              `<img src="${image}" class="shadow-sm rounded cover-image w-100" alt="${title}">`
          )
          .join("")}
          </a>
          <div class="bubble date rounded small">${date}</div>
          <i class="fas fa-images ${cover.length > 1 ? "has-multiple-icon" : "d-none"
        }"></i>
          <div class="card-body">
            <h2 class="h4"><a href="#" class="text-dark">${title}</a></h2>
            <p class="text-muted">${description}</p>
            <p class="m-0">
              ${tags
          .map(
            (tag) =>
              `<a href="#" class="small me-1 text-dark border p-1 rounded">${tag}</a>`
          )
          .join(" ")}
            </p>
          </div>
        </div>
      `;

      // Evitar el comportamiento por defecto de los <a href="#">
      cardElement.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener("click", e => e.preventDefault());
      });

      // Acción al hacer click en la tarjeta
      cardElement.addEventListener("click", () => {
        tuFuncionPersonalizada(card); // 👈 tu función personalizada
      });

      cardsContainer.appendChild(cardElement);
    });

    const carouselItems = document.querySelectorAll(".has-multiple");
    carouselItems.forEach(initializeCarousel);
  };


  const renderCategories = (cards) => {
    const categoriesContainer = document.getElementById("categories");
    const allCategories = new Set();

    cards.forEach((card) => {
      card.tags.forEach((tag) => allCategories.add(tag));
    });

    const sortedCategories = ["all", ...Array.from(allCategories).sort()];

    categoriesContainer.innerHTML = sortedCategories
      .map((category) => `<a href="" class="badge rounded-pill me-1 ${category === "all" ? "active" : ""}">${category.charAt(0).toUpperCase() + category.slice(1)}</a>`)
      .join("");
  };

  const initializeCarousel = (carouselItem) => {
    const images = carouselItem.querySelectorAll("img");
    let currentIndex = 0;

    const prevButton = document.createElement("button");
    prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevButton.addEventListener("click", (e) => {
      e.preventDefault();
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateCarousel(carouselItem, images, currentIndex);
    });

    const nextButton = document.createElement("button");
    nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextButton.classList.add("bubble", "end-0");
    nextButton.addEventListener("click", (e) => {
      e.preventDefault();
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel(carouselItem, images, currentIndex);
    });

    carouselItem.appendChild(prevButton);
    carouselItem.appendChild(nextButton);

    const updateCarousel = (carouselItem, images, currentIndex) => {
      images.forEach((image, index) => {
        image.style.transform = `translateX(${index - currentIndex}00%)`;
      });
    };
  };

  const searchCards = (cards, searchTerm) => {
    return cards.filter((card) => {
      return (
        card.title.toLowerCase().includes(searchTerm) ||
        card.description.toLowerCase().includes(searchTerm) ||
        card.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
      );
    });
  };

  const filterCardsByCategory = (cards, category) => cards.filter((card) => card.tags.includes(category));

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase().trim();
    const selectedCategory = document.querySelector(".categories .active")?.textContent.toLowerCase().trim();

    let filteredCards =
      selectedCategory && selectedCategory !== "all"
        ? filterCardsByCategory(data.cards, selectedCategory)
        : data.cards;

    filteredCards = searchCards(filteredCards, searchTerm);

    renderCards(cardsContainer, filteredCards);
  };

  const handleCategoryClick = (event) => {
    event.preventDefault();
    const category = event.target.textContent.toLowerCase();

    const categoryLinks = document.querySelectorAll(".categories a");
    categoryLinks.forEach((link) => link.classList.remove("active"));

    event.target.classList.add("active");

    let filteredCards =
      category === "all"
        ? data.cards
        : filterCardsByCategory(data.cards, category);

    const searchTerm = document.querySelector('input[type="search"]').value.toLowerCase().trim();
    filteredCards = searchCards(filteredCards, searchTerm);

    renderCards(cardsContainer, filteredCards);
  };



  const data = {
    cards: [
      {
        title: "MPN: FDC-3002R",
        description: "UPS en línea 3KVA/2700W, 6 slds, sinus, torre/bastidor- 220V Empresariales Capacidad: 3000VA/2700W-Topología: Doble conversión-Comunicación: RS-232, USB-Receptáculo: 8 x NEMA 5-20R",
        tags: ["forza", "ups"],
        cover: [
          "https://forza-ups-frontend.s3.amazonaws.com/media/img/FDC-3002R_1.jpg"
        ],
        date: "FORZA"
      },
      {
        title: "MPN: FDC-203K-I",
        description: "UPS en línea, 3000VA/3000W, 9 salidas IEC, LCD, torre-220V Empresariales Capacidad: 3000VA/3000W -Topología: Doble conversión en línea-Comunicación: USB / SNMP / RS-232-Receptáculo: 8 x IEC C13 & 1 x IEC C19",
        tags: ["forza", "ups"],
        cover: [
          "https://forza-ups-frontend.s3.amazonaws.com/media/img/FDC-203K-I_1.jpg",
        ],
        date: "FORZA"
      },
      {
        title: "MPN: FDC-206KMR",
        description: "UPS en línea 6KVA/6KW, escalable, bastidor-220V Empresariales Capacidad: 6000VA/6000W -Topología: Doble conversión en línea-Comunicación: USB / SNMP / RS-232-Factor de forma: Montaje en rack/Torre",
        tags: ["forza", "ups"],
        cover: [
          "https://forza-ups-frontend.s3.amazonaws.com/media/img/FDC-206KMR_01.jpg"
        ],
        date: "FORZA"
      }
    ]
  };

  const cardsContainer = document.getElementById("cards-container");
  const searchInput = document.querySelector('input[type="search"]');
  const categoryLinks = document.querySelectorAll(".categories");

  renderCards(cardsContainer, data.cards);
  renderCategories(data.cards);

  searchInput.addEventListener("input", handleSearch);

  document.querySelector(".categories").addEventListener("click", function (event) {
    const target = event.target;
  
    if (target.tagName.toLowerCase() === "a") {
      handleCategoryClick(event);
    }
  });




  const tuFuncionPersonalizada = (card) => {
    // 🔧 Aquí haces lo que necesites con la tarjeta clickeada
    console.log("Tarjeta clickeada:", card);
    alert(`Título: ${card.title}`);
    // También podrías abrir un modal, redirigir, etc.
  };

});
