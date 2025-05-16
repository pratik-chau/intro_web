
  feather.replace();
  lucide.createIcons();

  const mybutton = document.getElementById("scrollToTopBtn");

  if (mybutton) {
    mybutton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  window.onscroll = scrollFunction;
  scrollFunction(); // Run initially in case page is already scrolled

  AOS.init({
    once: true,
    offset: 120,
    easing: 'ease-out-cubic',
  });

function scrollFunction() {
  const navbar = document.querySelector('.navbar');
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.classList.add('on_scroll');
    navbar.classList.remove('on_top');
    scrollToTopBtn.classList.add("show");
    scrollToTopBtn.classList.remove("hide");
  } else {
    navbar.classList.add('on_top');
    navbar.classList.remove('on_scroll');
    scrollToTopBtn.classList.add("hide");
    scrollToTopBtn.classList.remove("show");
  }
}
