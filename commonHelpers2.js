import{i as b,b as k,d as S,a as $,c as v,r as L,e as i}from"./assets/header-17cd1eb3.js";import{P}from"./assets/vendor-94a85c0e.js";function N({_id:e,list_name:t,author:a,title:s,book_image:o,description:n,buy_links:r}){return`<li class="shopping-item" data-id="${e}">
            <img
              class="shopping-img"
              src="${o}"
              alt="${s}"
            />
            <div class="shopping-wrap">
              <div class="heading-info">
                <div class="title-container">
                  <h2 class="title-book">
                    ${s}
                  </h2>
                  <p class="category-book">${t}</p>
                </div>
                <button
                  class="delete-shopping-item-btn"
                  
                >
                  <svg class="trash-btn-icon" height="16" width="16">
                    <use href="${b}#icon-trash"></use>
                  </svg>
                </button>
              </div>
              <p class="descr-shopping">${n}</p>
              <div class="author-info-container">
                <p class="author-info">${a}</p>
                ${E(r)}
              </div>
            </div>
          </li>`}function E(e){const t=e.find(s=>s.name==="Amazon").url,a=e.find(s=>s.name==="Apple Books").url;return`<ul class="shop-link-list">
              <li class=""shop-link-item>
                <a class="shop-link-amazon" href="${t}" target="_blank">
                   <img src="${k}" srcset="${S} 2x" alt="Amazon" class="amazon-image">
                </a>
              </li>
              <li class=""shop-link-item>
                <a class="shop-link-amazon" href="${a}" target="_blank">
                    <img src="${$}" srcset="${v} 2x" alt="Apple-books" class="apple-books-image">
                </a>
              </li>
          </ul>`}const m={isSupported(){return typeof Storage<"u"},has(e){return localStorage.hasOwnProperty(e)},get(e){let t=localStorage.getItem(e);if(typeof t!="string")return t;if(t!=="undefined")return t==="null"?null:/^'-?\d{1,}?\.?\d{1,}'$/.test(t)||/^'-?\d{1}\.\d+e\+\d{2}'$/.test(t)?Number(t):t[0]==="{"||t[0]==="["?JSON.parse(t):t},set(e,t){if(typeof e!="string")throw new TypeError(`localStorage: Ключ повинен бути рядком. (зчитування '${e}')`);(typeof t=="object"||Array.isArray(t))&&(t=JSON.stringify(t)),localStorage.setItem(e,t)},remove(e){localStorage.removeItem(e)}};function d(e,t,a=1){const s=document.querySelector("#tui-pagination-container");let o=2,n=4;window.innerWidth>=768&&(o=3,n=3);const r={totalItems:t.length,itemsPerPage:n,visiblePages:o,centerAlign:!0};t.length/n<=1&&(s.style.display="none");const l=new P(s,r);return l.on("beforeMove",f=>{const g=f.page,u=t.slice((g-1)*n,g*n),y=L(N,u);e.innerHTML=y}),l.movePageTo(a),l}const p=document.querySelector(".js-shopping-main"),c="cart";let h;function w(){i.shoppingListMain.innerHTML="";const e=m.get(c);!e||!e.length?(i.shoppingEmpty.classList.remove("hidden"),p.style.display="none"):(i.shoppingText.style.marginBottom="40px",i.shoppingEmpty.classList.add("hidden"),h=d(i.shoppingListMain,e),p.addEventListener("click",z))}function z(e){if(e.target.tagName==="BUTTON"||e.target.tagName==="svg"||e.target.tagName==="use"){const t=m.get(c),a=e.target.closest(".shopping-item"),s=t.filter(({_id:r})=>r!==a.dataset.id);localStorage.setItem(c,JSON.stringify(s)),a.remove(),(!s||!s.length)&&(i.shoppingEmpty.classList.remove("hidden"),p.style.display="none");let n=h.getCurrentPage();d(i.shoppingListMain,s,n)}}w();
//# sourceMappingURL=commonHelpers2.js.map
