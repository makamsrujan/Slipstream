document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll("[data-count]");

  counters.forEach((counter) => {
    const target = Number(counter.dataset.count || 0);
    let current = 0;

    const tick = () => {
      current += Math.max(1, Math.ceil(target / 24));
      if (current >= target) {
        counter.textContent = target;
        return;
      }
      counter.textContent = current;
      requestAnimationFrame(tick);
    };

    tick();
  });

  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
