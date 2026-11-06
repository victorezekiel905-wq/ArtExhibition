/* Christarman Art Syndicate — site script */
(function () {
  "use strict";

  /* ── Contact address used by the enquiry form. Change this to the studio's real email. ── */
  var CONTACT_EMAIL = "studio@example.com";

  /* id, title, medium, categories, original width, height */
  var WORKS = [
    ["022", "The Seer", "Painting on canvas, 2022", ["painting"], 2000, 1500],
    ["018", "Crown of Light", "Painting on canvas, 2020", ["painting", "portrait"], 2000, 1500],
    ["085", "Breath", "Painting on canvas, 2025", ["painting"], 2000, 2201],
    ["015", "Unbridled", "Charcoal on paper", ["drawing"], 2000, 2667],
    ["028", "Dreamer", "Painting on canvas", ["painting"], 2000, 2667],
    ["004", "Matriarch in Rose", "Painting on canvas", ["portrait", "painting"], 2000, 2667],
    ["052", "Jazz Monument", "Sculpture", ["sculpture"], 2000, 2667],
    ["013", "Floating Village", "Painting on canvas", ["painting"], 2000, 2667],
    ["036", "Gele", "Charcoal on paper", ["drawing", "portrait"], 2000, 2638],
    ["045", "Sentinel", "Sculpture, bronze finish", ["sculpture"], 2000, 2667],
    ["029", "Song of the Strings", "Painting on canvas", ["painting"], 2000, 2667],
    ["009", "Mother & Child", "Charcoal on paper", ["drawing"], 2000, 2667],
    ["038", "Kente Crown", "Painting on paper", ["painting", "portrait"], 2000, 2667],
    ["046", "Ancestral Mask", "Clay relief", ["sculpture"], 2000, 2667],
    ["016", "Paddlers at Dusk", "Charcoal on paper", ["drawing"], 2000, 2667],
    ["011", "The Chief", "Painting on canvas", ["portrait", "painting"], 2000, 2667],
    ["030", "Metamorphosis", "Painting on canvas", ["painting"], 2000, 2667],
    ["031", "Adorned", "Charcoal on paper", ["drawing", "portrait"], 2000, 2667],
    ["083", "Ancestral Profile", "Mixed media on board", ["painting"], 2000, 2279],
    ["056", "Serenade", "Clay relief", ["sculpture"], 2000, 2667],
    ["017", "Market Morning", "Painting on canvas", ["painting"], 2000, 2667],
    ["041", "The Talking Drum", "Charcoal on paper", ["drawing"], 2000, 2000],
    ["003", "Sisters", "Painting on canvas", ["portrait", "painting"], 2000, 1500],
    ["032", "Dance of Colour", "Watercolour on paper", ["painting"], 2000, 2667],
    ["027", "Gallop", "Charcoal on paper", ["drawing"], 2000, 2667],
    ["047", "The Elder", "Clay", ["sculpture"], 2000, 2667],
    ["055", "The Patriarch", "Painting on canvas", ["portrait", "painting"], 2000, 2667],
    ["088", "Duality", "Painting on canvas", ["painting"], 2000, 1500],
    ["026", "Embrace", "Charcoal on paper", ["drawing"], 2000, 2667],
    ["084", "Stilt Village", "Monochrome painting on board", ["painting"], 2000, 1830],
    ["010", "Little One", "Charcoal on paper", ["drawing", "portrait"], 2000, 2667],
    ["025", "Resting Lion", "Sculpture", ["sculpture"], 2000, 2667],
    ["023", "Dove & Flame", "Painting on canvas, diptych", ["painting"], 2000, 1500],
    ["040", "The Horn Blower", "Charcoal on paper", ["drawing"], 2000, 2136],
    ["012", "Elder Statesman", "Painting on canvas", ["portrait", "painting"], 2000, 2667],
    ["042", "Rhythm in Bloom", "Painting on canvas", ["painting"], 2000, 2309],
    ["034", "Water Bearer I", "Charcoal on paper", ["drawing"], 1814, 4032],
    ["060", "Nocturne", "Relief sculpture", ["sculpture"], 2000, 2667],
    ["051", "Portrait of Grace", "Charcoal on paper", ["drawing", "portrait"], 2000, 2522],
    ["019", "Chromatic Field I", "Painting on canvas", ["painting"], 2000, 2667],
    ["044", "Whisper", "Charcoal on paper", ["drawing"], 2000, 1500],
    ["007", "Union", "Painting on canvas", ["portrait", "painting"], 2000, 2667],
    ["020", "Lion Mask", "Sculpture", ["sculpture"], 2000, 2667],
    ["035", "Water Bearer II", "Charcoal on paper", ["drawing"], 1730, 4032],
    ["043", "Crossing", "Painting on canvas", ["painting"], 2000, 1922],
    ["057", "Two Hearts", "Charcoal on paper", ["drawing", "portrait"], 2000, 2667],
    ["014", "Vessel", "Charcoal on paper", ["drawing"], 2000, 2667],
    ["054", "In Uniform", "Painting on canvas", ["portrait", "painting"], 2000, 2667],
    ["021", "Chromatic Field II", "Painting on canvas", ["painting"], 2000, 2667],
    ["037", "Repose", "Charcoal on paper", ["drawing"], 2000, 2667],
    ["053", "Jazz Monument, study", "Sculpture", ["sculpture"], 2000, 2667],
    ["075", "The Graduate", "Painting on canvas", ["portrait", "painting"], 2000, 2667],
    ["039", "Moored", "Charcoal on paper", ["drawing"], 2000, 1877],
    ["087", "Gesture I & II", "Painting on board", ["painting"], 2000, 2740],
    ["008", "Together", "Charcoal on paper", ["drawing", "portrait"], 2000, 2667],
    ["001", "The Gentleman", "Painting on canvas", ["portrait", "painting"], 2000, 2667],
    ["061", "Stallion", "Sculpture", ["sculpture"], 2000, 2667],
    ["005", "Study of a Young Man", "Charcoal on paper", ["drawing", "portrait"], 2000, 1500],
    ["067", "Laughter", "Charcoal on paper", ["drawing", "portrait"], 2000, 1500],
    ["006", "Quiet Strength", "Charcoal on paper", ["drawing", "portrait"], 2000, 1500]
  ].map(function (w) {
    return { id: w[0], title: w[1], medium: w[2], cats: w[3], w: w[4], h: w[5] };
  });

  var byId = {};
  WORKS.forEach(function (w) { byId[w.id] = w; });

  document.documentElement.classList.remove("no-js");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── Year ── */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ── Header state ── */
  var header = document.querySelector(".site-header");
  function onScroll() { header.classList.toggle("is-solid", window.scrollY > 40); }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ── Mobile menu ── */
  var toggle = document.querySelector(".menu-toggle");
  var menu = document.getElementById("mobile-menu");
  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      menu.hidden = false;
      requestAnimationFrame(function () { menu.classList.add("is-open"); });
    } else {
      menu.classList.remove("is-open");
      setTimeout(function () { if (toggle.getAttribute("aria-expanded") === "false") menu.hidden = true; }, 400);
    }
  }
  toggle.addEventListener("click", function () { setMenu(toggle.getAttribute("aria-expanded") !== "true"); });
  menu.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") setMenu(false); });
  window.addEventListener("resize", function () { if (window.innerWidth > 900 && toggle.getAttribute("aria-expanded") === "true") setMenu(false); });

  /* ── Reveal on scroll ── */
  var io = ("IntersectionObserver" in window && !reduceMotion)
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 })
    : null;
  function observe(el) { if (io) io.observe(el); else el.classList.add("is-in"); }
  document.querySelectorAll(".reveal").forEach(observe);

  /* ── Gallery ── */
  function srcs(w) {
    var portrait = w.h > w.w;
    var tw = portrait ? Math.round(900 * w.w / w.h) : 900;
    var fw = portrait ? Math.round(1800 * w.w / w.h) : 1800;
    return {
      thumb: "assets/img/thumb/" + w.id + ".jpg",
      full: "assets/img/full/" + w.id + ".jpg",
      srcset: "assets/img/thumb/" + w.id + ".jpg " + tw + "w, assets/img/full/" + w.id + ".jpg " + fw + "w"
    };
  }
  function catLabel(w) {
    var map = { painting: "Painting", drawing: "Drawing", portrait: "Portrait", sculpture: "Sculpture" };
    return map[w.cats[0]];
  }

  var gallery = document.getElementById("gallery");
  var frag = document.createDocumentFragment();
  WORKS.forEach(function (w) {
    var s = srcs(w);
    var li = document.createElement("li");
    li.className = "work";
    li.dataset.id = w.id;
    li.innerHTML =
      '<button type="button" aria-label="View ' + w.title + ', ' + w.medium + '">' +
        '<div class="work-frame" style="aspect-ratio:' + w.w + "/" + w.h + '">' +
          '<img src="' + s.thumb + '" srcset="' + s.srcset + '" sizes="(max-width:600px) 50vw, (max-width:1100px) 33vw, 25vw" ' +
          'width="' + w.w + '" height="' + w.h + '" alt="' + w.title + '" loading="lazy" decoding="async">' +
        "</div>" +
        '<div class="work-cap"><h3>' + w.title + "</h3><span>" + catLabel(w) + "</span></div>" +
      "</button>";
    frag.appendChild(li);
  });
  gallery.appendChild(frag);
  var items = Array.prototype.slice.call(gallery.children);
  items.forEach(observe);

  /* counts */
  var counts = { all: WORKS.length, painting: 0, drawing: 0, portrait: 0, sculpture: 0 };
  WORKS.forEach(function (w) { w.cats.forEach(function (c) { counts[c]++; }); });
  document.querySelectorAll(".filter").forEach(function (b) {
    b.querySelector("sup").textContent = counts[b.dataset.filter];
  });
  var statAll = document.querySelector('[data-stat="all"]');
  if (statAll) statAll.textContent = counts.all;

  /* filtering */
  var currentFilter = "all";
  function applyFilter(f) {
    currentFilter = f;
    document.querySelectorAll(".filter").forEach(function (b) {
      var on = b.dataset.filter === f;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", String(on));
    });
    items.forEach(function (li) {
      var w = byId[li.dataset.id];
      var show = f === "all" || w.cats.indexOf(f) !== -1;
      li.hidden = !show;
      if (show) li.classList.add("is-in");
    });
  }
  document.querySelectorAll(".filter").forEach(function (b) {
    b.addEventListener("click", function () { applyFilter(b.dataset.filter); });
  });
  document.querySelectorAll("[data-goto]").forEach(function (a) {
    a.addEventListener("click", function () { applyFilter(a.dataset.goto); });
  });

  /* ── Lightbox ── */
  var lb = document.getElementById("lightbox");
  var lbImg = document.getElementById("lb-img");
  var lbTitle = document.getElementById("lb-title");
  var lbMeta = document.getElementById("lb-meta");
  var lbCount = document.getElementById("lb-count");
  var lbEnquire = document.getElementById("lb-enquire");
  var list = WORKS, idx = 0, lastFocus = null;

  function visibleList() {
    return WORKS.filter(function (w) { return currentFilter === "all" || w.cats.indexOf(currentFilter) !== -1; });
  }
  function show(i) {
    idx = (i + list.length) % list.length;
    var w = list[idx];
    lbImg.classList.add("is-loading");
    var img = new Image();
    img.onload = img.onerror = function () {
      lbImg.src = img.src;
      lbImg.alt = w.title + ", " + w.medium;
      lbImg.classList.remove("is-loading");
    };
    img.src = srcs(w).full;
    lbTitle.textContent = w.title;
    lbMeta.textContent = w.medium;
    lbCount.textContent = String(idx + 1).padStart(2, "0") + " / " + String(list.length).padStart(2, "0");
    lbEnquire.dataset.work = w.title;
    // preload neighbours
    [idx + 1, idx - 1].forEach(function (n) {
      var nw = list[(n + list.length) % list.length];
      (new Image()).src = srcs(nw).full;
    });
  }
  function openLb(id, fromGallery) {
    list = fromGallery ? visibleList() : WORKS;
    var i = list.findIndex(function (w) { return w.id === id; });
    if (i < 0) { list = WORKS; i = list.findIndex(function (w) { return w.id === id; }); }
    lastFocus = document.activeElement;
    show(i);
    if (typeof lb.showModal === "function") lb.showModal(); else lb.setAttribute("open", "");
    document.body.style.overflow = "hidden";
  }
  function closeLb() {
    if (lb.open) { if (typeof lb.close === "function") lb.close(); else lb.removeAttribute("open"); }
  }
  lb.addEventListener("close", function () {
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  });

  gallery.addEventListener("click", function (e) {
    var li = e.target.closest(".work");
    if (li) openLb(li.dataset.id, true);
  });
  document.querySelectorAll("[data-open]").forEach(function (b) {
    b.addEventListener("click", function () { openLb(b.dataset.open, false); });
  });
  lb.querySelector(".lb-close").addEventListener("click", closeLb);
  lb.querySelector(".lb-prev").addEventListener("click", function () { show(idx - 1); });
  lb.querySelector(".lb-next").addEventListener("click", function () { show(idx + 1); });
  lb.addEventListener("click", function (e) { if (e.target === lb || e.target.classList.contains("lb-figure")) closeLb(); });
  lb.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") { e.preventDefault(); show(idx + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); show(idx - 1); }
  });
  var touchX = null;
  lb.addEventListener("touchstart", function (e) { touchX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", function (e) {
    if (touchX === null) return;
    var dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1));
    touchX = null;
  });
  lbEnquire.addEventListener("click", function () {
    closeLb();
    var msg = document.getElementById("f-msg");
    document.getElementById("f-interest").value = "Acquiring an original work";
    if (!msg.value) msg.value = "I would like to enquire about “" + lbEnquire.dataset.work + "”.";
  });

  /* ── Enquiry form (opens the visitor's email app) ── */
  var emailLink = document.querySelector(".js-email");
  if (emailLink) { emailLink.textContent = CONTACT_EMAIL; emailLink.href = "mailto:" + CONTACT_EMAIL; }

  document.querySelectorAll("[data-interest]").forEach(function (a) {
    a.addEventListener("click", function () { document.getElementById("f-interest").value = a.dataset.interest; });
  });

  var form = document.getElementById("enquiry-form");
  var status = form.querySelector(".form-status");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var ok = true;
    ["f-name", "f-email"].forEach(function (id) {
      var el = document.getElementById(id);
      var valid = el.value.trim() !== "" && (el.type !== "email" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim()));
      el.parentElement.classList.toggle("has-error", !valid);
      el.setAttribute("aria-invalid", String(!valid));
      if (!valid) ok = false;
    });
    if (!ok) { status.textContent = "Please add your name and a valid email address."; return; }
    var d = new FormData(form);
    var subject = "Enquiry: " + d.get("interest") + " — " + d.get("name");
    var body =
      "Name: " + d.get("name") + "\n" +
      "Email: " + d.get("email") + "\n" +
      "Country: " + (d.get("country") || "—") + "\n" +
      "Interest: " + d.get("interest") + "\n\n" +
      (d.get("message") || "");
    window.location.href = "mailto:" + CONTACT_EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    status.textContent = "Thank you — your email app will open to send the enquiry.";
  });
})();
