import{S as i,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const c="48566659-7e3fac132ae4a1e98b5249d53",u="https://pixabay.com/api/";function d(o,s=1,l=9){const r=`${u}?key=${c}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&page=${s}&per_page=${l}`;return fetch(r).then(e=>{if(!e.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return e.json()}).then(e=>e).catch(e=>{throw console.log(e),e})}function p(o){const s=document.querySelector(".gallery"),l=o.map(r=>`  <li class="gallery-item">
            <a href="${r.largeImageURL}">
              <img src="${r.webformatURL}" alt="${r.tags}" height="152" width="360"/>
            </a>
            <ul class="info">
             <li>
               <p class="headers">Likes</p>
               <p class="details">${r.likes}</p>
             </li>
             <li>
               <p class="headers">Views</p>
               <p class="details">${r.views}</p>
             </li>
             <li>
               <p class="headers">Comments</p>
               <p class="details">${r.comments}</p>
             </li>
             <li>
               <p class="headers">Downloads</p>
               <p class="details">${r.downloads}</p>
             </li>
            </ul>
          </li>`).join("");s.insertAdjacentHTML("beforeend",l)}function f(){const o=document.querySelector(".gallery");o.innerHTML=""}const y=document.querySelector(".search-form");document.querySelector(".gallery");let m=new i(".gallery a"),h=1;y.addEventListener("submit",o=>{o.preventDefault();const s=o.target.elements.query.value.trim();if(s===""){n.error({message:"Please enter a search term",position:"topRight"});return}f(),o.target.elements.query.value="";const l=document.querySelector(".loader");l.style.display="block",d(s,h).then(({hits:r})=>{setTimeout(()=>{l.style.display="none",!r||r.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(p(r),m.refresh())},1e3)}).catch(r=>{l.style.display="none",n.error({title:"Error",message:"Failed to fetch images"})})});
//# sourceMappingURL=index.js.map
