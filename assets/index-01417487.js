(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function d(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(t){if(t.ep)return;t.ep=!0;const l=d(t);fetch(t.href,l)}})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-open-buynow]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal-buynow]")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("overflow")}})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-open-leave-a-review]"),closeModalBtn:document.querySelector("[data-modal-close-leave-a-review]"),modal:document.querySelector("[data-modal-leave-a-review]")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("overflow")}})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-open-feedback]"),closeModalBtn:document.querySelector("[data-modal-close-feedback]"),modal:document.querySelector("[data-modal-feedback]")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("overflow")}})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-open-explore-our-new]"),closeModalBtn:document.querySelector("[data-modal-close-explore-our-new]"),modal:document.querySelector("[data-modal-explore-our-new]")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("overflow")}})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-open-thank-you]"),closeModalBtn:document.querySelector("[data-modal-close-thank-you]"),modal:document.querySelector("[data-modal-thank-you]")};e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("overflow")}})();(()=>{const e=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),d=document.querySelector(".js-close-menu"),n=()=>{const t=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!t),e.classList.toggle("is-open");const l=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[l](document.body)};o.addEventListener("click",n),d.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();
