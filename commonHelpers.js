import{i as M,r as p,a as q,b as B,c as x,d as I,e as i}from"./assets/header-17cd1eb3.js";import{a as N}from"./assets/vendor-94a85c0e.js";const A="https://books-backend.p.goit.global/books/";async function m(e,t){try{return(await N.get(A+e,{params:t})).data}catch(o){console.error(o)}}function H(e){e.forEach(t=>{t.classList.add("animation-items")}),setTimeout(()=>{e.forEach(t=>{t.classList.remove("animation-items")})},500)}function O({_id:e,book_image:t,title:o,author:n,description:s,buy_links:a}){return`
  <section class="modalmenu">
      <button type="button" id="modal-close-id" class="close-button modal-close-button" width="28" height="28">
      <svg class="close-icon" width="12" height="12">
        <use href="${M}#icon-x-close"></use>
      </svg>
    </button>
  <div class="modal-container">
  <img src="${t}" class="modal-image">
    <div class="modal-wrap">
      <h2 class="modal-title">${o}</h2>
      <p class="modal-author">${n}</p>
      <p class="description">${s}</p>
        <ul class="buy-links-list">
      ${p(U,a.slice(0,2).reverse())}
        </ul>       
    </div>
  </div>
   <button class="modal-list-button" type="button" id="modal-list-button-id" data-role="add" data-id="${e}">
      add to shopping list
    </button>
    <p class="cart-info visually-hidden"></p>
    </section>
`}function U({name:e,url:t}){return`
    <li class="buy-links-item">
    <a target="_blank" rel="noopener noreferrer" aria-label="${e}" href=${t}>
      <img src="${e.split(" ")[0].toLowerCase()==="amazon"?q:B}"  srcset="${e.split(" ")[0].toLowerCase()==="amazon"?x:I} 2x" alt="${e}" class="platform-image">
</a>
</li>
`}const b=document.querySelector("body"),r=document.querySelector(".backdrop"),d="cart";async function _(e){const t=await m(e);z(t),document.addEventListener("keydown",k),r.addEventListener("click",R)}function z(e){r.style.display="flex",b.style.overflow="hidden",r.innerHTML="",r.insertAdjacentHTML("afterbegin",O(e));const t=document.querySelector(".modal-list-button"),o=document.querySelector(".cart-info");t.addEventListener("click",()=>{const s=JSON.parse(localStorage.getItem(d))||[];if(s.find(({_id:a})=>a===e._id)){const a=s.filter(({_id:l})=>l!==e._id);localStorage.setItem(d,JSON.stringify(a)),t.textContent="Add to shopping list",o.classList.add("visually-hidden"),o.textContent=""}else s.push(e),localStorage.setItem(d,JSON.stringify(s)),t.textContent="Remove from the shopping list",o.classList.remove("visually-hidden"),o.textContent='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".'}),(JSON.parse(localStorage.getItem(d))||[]).find(({_id:s})=>s===e._id)?t.textContent="Remove from the shopping list":t.textContent="Add to shopping list"}function R(e){(e.target.tagName==="svg"||e.target.tagName==="use")&&u(),e.target.id==="mBackdrop"&&u(),e.target.nodeName}function k(e){e.key==="Escape"&&(u(),document.removeEventListener("keydown",k))}function u(){r.style.display="none",b.style.overflow="auto"}console.log("category-card");i.mainContainer.addEventListener("click",j);const L=async e=>{i.mainContainer.innerHTML="";const t='<div class="loader"></div>';i.mainContainer.insertAdjacentHTML("afterbegin",t);try{const o=await m("category",e),n=document.querySelector(".loader");n&&n.remove();const s=o[0].list_name;i.mainContainer.insertAdjacentHTML("afterbegin",D(s,o));const a=document.querySelectorAll(".sellers-item");H(a)}catch(o){console.error("Помилка при отриманні книг категорій:",o)}};function j(e){const t=e.target.closest(".sellers-item").dataset.id;_(t)}function D(e,t){const o=e.split(" "),n=o.pop();return o.push(`<span class="accent">${n}</span>`),`
    <section class="seller-section">
      <h1 class="section-title category-card-title">${o.join(" ")}</h1>
      <ul class="sellers-exclude flex-wrap">${p(F,t)}</ul>
    </section>
  `}function F({book_image:e,title:t,author:o,_id:n}){return`
    <li class="sellers-item" data-id="${n}">
      <div class="book-image-wrapper">
        <img class="book-image"
        src="${e}"
        alt="${t}"
        >
      </div>
      <h3 class="book-title">${t}</h3>
      <p class="book-author">${o}</p>
    </li>
  `}function J(e="show"){const t=document.querySelector(".loader");e==="show"?t.style.display="inline-block":t.style.display="none"}const v=async()=>{i.mainContainer.innerHTML=`
    <section class="seller-section">
      <h1 class="section-title">
        Best Sellers <span class="accent">Books</span>
      </h1>
    </section>`;const e=document.createElement("ul");e.classList.add("sellers-list"),e.innerHTML='<span class="loader"></span>',i.mainContainer.querySelector(".seller-section").appendChild(e),i.mainContainer.querySelector(".loader"),J();try{const o=await m("top-books"),n=Y(o,4);W(e,n);const s=document.querySelectorAll(".sellers-item");s.forEach(l=>{l.classList.add("animation-items")});const a=setTimeout(()=>{s.forEach(l=>{l.classList.remove("animation-items")})},500);e.addEventListener("click",G)}catch(o){console.error(o)}};function W(e,t){const o=K(t);e.innerHTML="",e.appendChild(o)}v();async function G(e){if(e.preventDefault(),e.target.nodeName!=="BUTTON")return;const t=e.target,{name:o}=t.dataset;await L({category:o})}function Y(e,t){const o=[];for(;o.length<t;){const n=Math.floor(Math.random()*e.length);o.includes(n)||o.push(n)}return o.map(n=>e[n])}function K(e){const t=document.createDocumentFragment();return e.forEach(({list_name:o,books:n})=>{const s=document.createElement("li");s.className="sellers-category",s.innerHTML=`
      <h2 class="sellers-category-title">${o}</h2>
      <ul class="sellers-category-list">
        ${P(n)}
      </ul>
      <button class="sellers-button" type="button" data-name="${o}">See more</button>
    `,t.appendChild(s)}),t}function P(e){let t="";const o=Q(),n=o==="desktop"?5:o==="tablet"?3:1;for(let s=0;s<n&&s<e.length;s++){const{book_image:a,title:l,author:w,_id:E}=e[s];t+=`
      <li class="sellers-item" data-id="${E}">
        <div class="book-image-wrapper">
          <img class="book-image"
          src="${a}"
          alt="${l}"
          >
        </div>
        <h3 class="book-title">${l}</h3>
        <p class="book-author">${w}</p>
      </li>
    `}return t}function Q(){const e=window.innerWidth;return e<768?"mobile":e<1440?"tablet":"desktop"}i.categoryListElem.addEventListener("click",V);function V(e){if(e.target.nodeName!=="BUTTON"||e.target.classList.contains("active"))return;i.categoryListElem.querySelector(".active").classList.remove("active");const t=e.target;t.classList.add("active"),t.textContent==="ALL CATEGORIES"?v():L({category:t.textContent})}function X({list_name:e,classButton:t=""}){return`<li class="category-list">
      <button class="category-button ${t}" type="button">${e}</button>
    </li>`}const Z=async()=>{try{const e=await m("category-list");e.unshift({list_name:"ALL CATEGORIES",classButton:"active"}),i.categoryListElem.insertAdjacentHTML("beforeend",p(X,e))}catch(e){console.error(e)}};Z();const S=document.querySelector(".modal-login-form"),g=document.querySelector(".overlayLoginForm"),ee=document.querySelector(".user-btn"),te=document.querySelector(".mobile-menu-authorisation-btn"),oe=document.querySelector(".modal-login-form-close-btn"),y=document.querySelector(".signUp"),f=document.querySelector(".signIn"),C=document.querySelector(".modal-login-in"),$=document.querySelector(".modal-login-up");function T(){S.style.display="block",g.style.display="block"}function h(){S.style.display="none",g.style.display="none"}function c(e,t){e&&e.addEventListener("click",t)}c(ee,T);c(te,T);c(oe,h);c(g,h);c(y,ne);c(f,se);window.addEventListener("keydown",function(e){e.key==="Escape"&&h()});function se(){f.classList.add("underline"),y.classList.remove("underline"),C.classList.remove("is-hidden"),$.classList.add("is-hidden")}function ne(){y.classList.add("underline"),f.classList.remove("underline"),C.classList.add("is-hidden"),$.classList.remove("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
