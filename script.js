const revealTargets = document.querySelectorAll(
  ".section, .hero-card, .quick-facts li, .skill-grid article, .timeline-item, .project-card, .credential-card"
);

revealTargets.forEach((element) => {
  element.setAttribute("data-reveal", "");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealTargets.forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index * 45, 360)}ms`;
  observer.observe(element);
});