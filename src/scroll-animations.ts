// This script adds scroll-in animation to feature cards
export function setupScrollAnimations() {
  const observer = new window.IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('.scroll-animate').forEach((el) => {
    observer.observe(el);
  });
}
