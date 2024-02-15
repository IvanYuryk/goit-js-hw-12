import{i as g,S as x,a as L}from"./assets/vendor-2618a76b.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();const S="/goit-js-hw-12/assets/dang-75a3a476.svg",k="/goit-js-hw-12/assets/err-d9947029.svg",p="/goit-js-hw-12/assets/x-a193917d.svg";function c(e){g.warning({title:"Sorry,",titleColor:"#FFFFFF",message:e,messageColor:"#FFFFFF",messageSize:"16px",backgroundColor:"#FFA000",iconUrl:S,position:"center",close:!1,buttons:[[`<button type="button" style="
          background-color: #FFA000; 
          width: 20px; 
          height: 20px; 
          padding: 5px">
            <img style="
              width: 10px; 
              height: 10px" 
              src=${p}>
        </button>`,function(s,o){s.hide({transitionOut:"fadeOut"},o)}]]})}function y(e){g.show({title:"Error",titleColor:"#FFFFFF",message:e.message,messageColor:"#FFFFFF",messageSize:"16px",backgroundColor:"#EF4040",iconUrl:k,position:"topRight",close:!1,buttons:[[`<button type="button" style="
          background-color: #EF4040; 
          width: 20px; 
          height: 20px; 
          padding: 5px">
            <img style="
              width: 10px; 
              height: 10px" 
                src=${p}>
        </button>`,function(s,o){s.hide({transitionOut:"fadeOut"},o)}]]})}const $=new x(".gallery a",{captionDelay:250,captionsData:"alt"}),m=document.querySelector(".gallery");function h({totalHits:e,hits:s}){if(parseInt(e)>0){const o=s.map(v).join("");m.insertAdjacentHTML("beforeend",o),$.refresh()}else m.innerHTML="",c("there are no images matching your search query. Please try again!")}function v({webformatURL:e,largeImageURL:s,tags:o,likes:i,views:t,comments:n,downloads:r}){return`
  <li class="gallery-item">
    <a class="gallery-link" href="${s}">
      <img class="gallery-image" src="${e}" alt="${o}">
    </a>
    <ul class="item-img">
      <li class="elem-img">
        <p class="elem-name">Likes</p>
        <p>${i}</p>
      </li>
      <li class="elem-img">
        <p class="elem-name">Views</p>
        <p>${t}</p>
      </li>
      <li class="elem-img">
        <p class="elem-name">Comments</p>
        <p>${n}</p>
      </li>
      <li class="elem-img">
        <p class="elem-name">Downloads</p>
        <p>${r}</p>
      </li>
    </ul>
  </li>
  `}async function f(e,s){const o="https://pixabay.com/",i="api/",t=new URLSearchParams({key:"42208232-118910d8102453b47e924ae6c",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s}),n=`${o}${i}?${t}`,{data:r}=await L(n);return r}const F=document.querySelector(".gallery"),b=document.querySelector("#searchForm"),u=document.querySelector(".loader"),a=document.querySelector("#load");let l=1,d="";b.addEventListener("submit",q);a.addEventListener("click",C);async function q(e){e.preventDefault();const s=e.target.keyword.value.trim();if(s){F.innerHTML="",u.style.display="block",d=s,l=1;try{const o=await f(d,l);o.hits.length===0?(a.style.display="none",c("There are no images matching your search query. Please try again!")):(h(o),w(),o.hits.length<15?(a.style.display="none",c("We're sorry, but you've reached the end of search results.")):a.style.display="block"),b.reset()}catch(o){y(o)}finally{u.style.display="none"}}}async function C(){l+=1,u.style.display="block";try{const e=await f(d,l);h(e),w(),l>=Math.ceil(e.totalHits/15)&&(c("We're sorry, but you've reached the end of search results."),a.style.display="none")}catch(e){y(e)}finally{u.style.display="none"}}function w(){const{height:e}=F.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
