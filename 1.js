/* Md. Ariful Islam portfolio — editable data + interactions. */
(() => {
  "use strict";
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  // Edit these arrays to update projects, profiles, or contest ranks.
  const projects = [
    { title:"Campus Service Hub", type:"Full-Stack Web App", description:"A student-focused platform for sharing campus services, announcements, and useful resources.", stack:["JavaScript","Node.js","MongoDB"], year:"2026" },
    { title:"Algorithm Visualizer", type:"Problem Solving Tool", description:"An interactive learning tool that visualizes sorting, searching, and graph algorithms step by step.", stack:["C++","JavaScript","DSA"], year:"2026" },
    { title:"Contest Tracker", type:"Competitive Programming Tool", description:"A clean dashboard concept for tracking online contests, ratings, solved problems, and personal progress.", stack:["HTML","CSS","JavaScript"], year:"2026" },
    { title:"Developer Notes", type:"Software Engineering Project", description:"A lightweight knowledge base for documenting technical notes, project decisions, and coding lessons.", stack:["Java","Express.js","MySQL"], year:"2026" },
  ];
  const skills = [
    ["React", "Frontend", "01"], ["Next.js", "Frontend", "01"], ["Node.js", "Backend", "02"], ["Express.js", "Backend", "02"],
    ["MongoDB", "Database", "03"], ["Tailwind CSS", "Frontend", "01"], ["JavaScript", "Language", "04"], ["TypeScript", "Language", "04"],
    ["C++", "Language", "04"], ["Java", "Language", "04"], ["MySQL", "Database", "03"], ["Data Structures", "Language", "04"],
  ];
  const skillCategories = ["All", "Frontend", "Backend", "Database", "Language"];
  const profiles = [
    ["GitHub", "MDARIFULISLAM13", "https://github.com/MDARIFULISLAM13"],
    ["Codeforces", "ARIF_NCS13", "https://codeforces.com/profile/ARIF_NCS13"],
    ["LeetCode", "Arif_NCS13", "https://leetcode.com/u/Arif_NCS13/"],
    ["CodeChef", "arif_ncs13", "https://www.codechef.com/users/arif_ncs13"],
    ["LinkedIn", "arif100", "https://www.linkedin.com/in/arif100/"],
    ["Facebook", "arif341a", "https://www.facebook.com/arif341a/"],
  ];
  const contests = [
    ["DUET Inter University Programming Contest", "2025", "To be updated"],
    ["Uttara University Inter-University Programming Contest", "2025", "To be updated"],
    ["NDUB Inter University Programming Contest", "2026", "To be updated"],
    ["DUET Inter University Programming Contest", "2026", "To be updated"],
    ["SUST Inter University Programming Contest", "2026", "To be updated"],
    ["UT 12th ICT Fest Inter University Programming Contest", "2026", "To be updated"],
  ];

  function renderProjects() {
    $("#project-grid").innerHTML = projects.map((project, index) => `<article class="project-card reveal" data-project="${index}"><span class="project-number">0${index + 1} / ${project.type}</span><h3>${project.title}</h3><p>${project.description}</p><div class="tag-list">${project.stack.map((item) => `<span>${item}</span>`).join("")}</div><div class="project-footer"><button class="project-link" type="button">View Details ↗</button><span>${project.year}</span></div></article>`).join("");
  }
  function renderSkills(category = "All") {
    const filters = $("#skill-filters"), grid = $("#skill-grid");
    filters.innerHTML = skillCategories.map((item) => `<button class="skill-filter ${item === category ? "active" : ""}" type="button" role="tab" aria-selected="${item === category}" data-category="${item}">${item}</button>`).join("");
    grid.innerHTML = skills.filter(([, type]) => category === "All" || type === category).map(([name, type, number]) => `<article class="skill-card reveal"><span class="skill-number">— ${number}</span><h3>${name}</h3><div class="skill-rule"></div><span class="skill-category">${type}</span></article>`).join("");
    $$(".skill-filter", filters).forEach((button) => button.addEventListener("click", () => renderSkills(button.dataset.category)));
    $$(".skill-card", grid).forEach((card, index) => { card.style.setProperty("--card-delay", `${index * 55}ms`); requestAnimationFrame(() => card.classList.add("revealed")); });
  }
  function renderProfiles() {
    $("#profile-links").innerHTML = profiles.map(([name, id, url]) => `<a class="profile-card" href="${url}" target="_blank" rel="noopener"><small>${name}</small>${id} ↗</a>`).join("");
  }
  function renderContests() {
    $("#contest-list").innerHTML = contests.map(([name, year, rank]) => `<div class="contest-item"><strong>${name} ${year}</strong><span class="contest-rank">${rank}</span></div>`).join("");
  }
  function initCounters() {
    const counters = $$('[data-count]');
    const running = new WeakMap();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target, target = Number(element.dataset.count), suffix = element.dataset.suffix || "";
        running.get(element)?.cancel();
        element.textContent = `0${suffix}`;
        const start = performance.now();
        let frame;
        const tick = (now) => { const progress = Math.min((now - start) / 1400, 1); element.textContent = `${Math.floor((1 - Math.pow(1 - progress, 3)) * target)}${suffix}`; if (progress < 1) frame = requestAnimationFrame(tick); };
        requestAnimationFrame(tick); running.set(element, { cancel: () => cancelAnimationFrame(frame) });
      });
    }, { threshold:.7 });
    counters.forEach((counter) => observer.observe(counter));
  }
  function initReveal() {
    const elements = $$(".reveal");
    $$(".content-section .section-heading, .copy-block, .feature-grid article, .skill-groups article, .cp-copy, .contest-list, .contact-copy, .contact-form, .site-footer > div, .site-footer > a").forEach((element) => {
      if (!element.classList.contains("reveal")) {
        element.classList.add("reveal");
        elements.push(element);
      }
    });
    const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => entry.target.classList.toggle("revealed", entry.isIntersecting)); }, { threshold:.12, rootMargin:"0px 0px -8%" });
    elements.forEach((element) => observer.observe(element));
  }
  function initNavigation() {
    const header = $("[data-header]"), button = $(".menu-button"), menu = $("#mobile-menu");
    window.addEventListener("scroll", () => header.classList.toggle("scrolled", scrollY > 50), { passive:true });
    button.addEventListener("click", () => { const open = menu.hidden; menu.hidden = !open; button.setAttribute("aria-expanded", open); });
    $$("a", menu).forEach((link) => link.addEventListener("click", () => { menu.hidden = true; button.setAttribute("aria-expanded", "false"); }));
    document.addEventListener("keydown", (event) => { if (event.key === "Escape") { menu.hidden = true; button.setAttribute("aria-expanded", "false"); closeModal(); } });
  }
  function initSmoothLinks() {
    $$('a[href^="#"]').forEach((link) => link.addEventListener("click", (event) => {
      const selector = link.getAttribute("href");
      const target = selector && selector !== "#" ? $(selector) : null;
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", selector);
    }));
  }
  function openModal(index) {
    const project = projects[index], modal = $("#project-modal");
    modal.innerHTML = `<div class="modal-window" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button class="modal-close" type="button" aria-label="Close project details">×</button><p class="eyebrow">${project.type}</p><h2 id="modal-title">${project.title}</h2><p>${project.description}</p><div class="modal-tags">${project.stack.map((item) => `<span>${item}</span>`).join("")}</div><a href="#contact" class="button button-dark">Discuss a similar project ↗</a></div>`;
    modal.hidden = false; $(".modal-close", modal).focus(); $(".modal-close", modal).addEventListener("click", closeModal); modal.addEventListener("click", (event) => { if (event.target === modal) closeModal(); }, { once:true });
  }
  function closeModal() { const modal = $("#project-modal"); if (modal) modal.hidden = true; }
  function initInteractions() {
    $$(".project-card").forEach((card) => { card.addEventListener("mouseenter", () => card.classList.add("hovered")); card.addEventListener("mouseleave", () => card.classList.remove("hovered")); $("button", card).addEventListener("click", () => openModal(Number(card.dataset.project))); });
    $("#contact-form").addEventListener("submit", async (event) => { event.preventDefault(); const form = event.currentTarget, status = $("#form-status"), button = $("button", form); if (!form.reportValidity()) return; button.disabled = true; button.textContent = "Sending…"; try { const response = await fetch("https://formspree.io/f/xpwzljwd", { method:"POST", headers:{Accept:"json"}, body:new FormData(form) }); if (!response.ok) throw new Error(); form.reset(); status.textContent = "Message sent successfully. I will get back to you soon."; } catch { status.textContent = "Something went wrong. Please email me directly."; } finally { setTimeout(() => { button.disabled = false; button.innerHTML = "Send Message <span>↗</span>"; }, 1800); } });
  }
  function init() { renderSkills(); renderProjects(); renderProfiles(); renderContests(); initNavigation(); initSmoothLinks(); initCounters(); initReveal(); initInteractions(); $("[data-year]").textContent = new Date().getFullYear(); }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", init, { once:true }) : init();
})();