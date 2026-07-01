/* KREATIVE SAVAGES — shared site behaviour */
(function () {
  "use strict";

  /* nav scroll state */
  const nav = document.querySelector(".nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* mobile menu */
  const burger = document.querySelector(".burger");
  const links = document.querySelector(".nav-links");
  if (burger && links) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("open");
      links.classList.toggle("open");
    });
    links.querySelectorAll("a").forEach(a =>
      a.addEventListener("click", () => {
        burger.classList.remove("open");
        links.classList.remove("open");
      })
    );
  }

  /* reveal on scroll */
  const revealer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        revealer.unobserve(e.target);
      }
    }),
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".reveal").forEach(el => revealer.observe(el));

  /* animated counters */
  const counter = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (!e.isIntersecting) return;
      counter.unobserve(e.target);
      const el = e.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || "";
      const dur = 1600;
      const t0 = performance.now();
      const tick = now => {
        const p = Math.min((now - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }),
    { threshold: 0.4 }
  );
  document.querySelectorAll("[data-count]").forEach(el => counter.observe(el));

  /* hero glow follows the pointer */
  const glow = document.querySelector(".hero-glow");
  const hero = document.querySelector(".hero");
  if (glow && hero && matchMedia("(pointer:fine)").matches) {
    hero.addEventListener("mousemove", e => {
      const r = hero.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 220;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 220;
      glow.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    });
  }

  /* click-to-play YouTube facades */
  document.querySelectorAll(".vid .frame[data-id]").forEach(frame => {
    frame.addEventListener("click", () => {
      const id = frame.dataset.id;
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
      iframe.title = frame.dataset.title || "Kreative Savages video";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      frame.innerHTML = "";
      frame.appendChild(iframe);
    }, { once: true });
  });

  /* footer year */
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
