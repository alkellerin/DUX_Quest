// FAQ Animation
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    faqQuestions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("active");
        item.nextElementSibling.style.maxHeight = null;
      }
    });

    question.classList.toggle("active");

    const answer = question.nextElementSibling;

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

// CAROUSEL ANIMATION
document.addEventListener("DOMContentLoaded", function () {
  const scrollCards = document.querySelector(".scroll-cards");
  const scrollLength = scrollCards.scrollWidth - scrollCards.clientWidth;
  const leftButton = document.querySelector(".left-carousel");
  const rightButton = document.querySelector(".right-carousel");

  function checkScroll() {
    const currentScroll = scrollCards.scrollLeft;
    if (currentScroll === 0) {
      leftButton.setAttribute("disabled", "true");
      rightButton.removeAttribute("disabled");
    } else if (currentScroll === scrollLength) {
      rightButton.setAttribute("disabled", "true");
      leftButton.removeAttribute("disabled");
    } else {
      leftButton.removeAttribute("disabled");
      rightButton.removeAttribute("disabled");
    }
  }

  scrollCards.addEventListener("scroll", checkScroll);
  window.addEventListener("resize", checkScroll);
  checkScroll();

  function leftScroll() {
    document.querySelector(".scroll-cards").scrollBy({
      left: -200,
      behavior: "smooth"
    });
  }

  function rightScroll() {
    document.querySelector(".scroll-cards").scrollBy({
      left: 200,
      behavior: "smooth"
    });
  }

  leftButton.addEventListener("click", leftScroll);
  rightButton.addEventListener("click", rightScroll);
});