import{i as g,S as x,a as L}from"./assets/vendor-2618a76b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();const S="/goit-js-hw-12/assets/dang-75a3a476.svg",k="/goit-js-hw-12/assets/err-d9947029.svg",p="/goit-js-hw-12/assets/x-a193917d.svg";function d(e){g.warning({title:"Sorry,",titleColor:"#FFFFFF",message:e,messageColor:"#FFFFFF",messageSize:"16px",backgroundColor:"#FFA000",iconUrl:S,position:"center",close:!1,buttons:[[`<button type="button" style="
          background-color: #FFA000; 
          width: 20px; 
          height: 20px; 
          padding: 5px">
            <img style="
              width: 10px; 
              height: 10px" 
              src=${p}>
        </button>`,function(o,s){o.hide({transitionOut:"fadeOut"},s)}]]})}function y(e){g.show({title:"Error",titleColor:"#FFFFFF",message:e.message,messageColor:"#FFFFFF",messageSize:"16px",backgroundColor:"#EF4040",iconUrl:k,position:"topRight",close:!1,buttons:[[`<button type="button" style="
          background-color: #EF4040; 
          width: 20px; 
          height: 20px; 
          padding: 5px">
            <img style="
              width: 10px; 
              height: 10px" 
                src=${p}>
        </button>`,function(o,s){o.hide({transitionOut:"fadeOut"},s)}]]})}const $=new x(".gallery a",{captionDelay:250,captionsData:"alt"}),m=document.querySelector(".gallery");function h({totalHits:e,hits:o}){if(parseInt(e)>0){const s=o.map(q).join("");m.insertAdjacentHTML("beforeend",s),$.refresh()}else m.innerHTML="",d("there are no images matching your search query. Please try again!")}function q({webformatURL:e,largeImageURL:o,tags:s,likes:i,views:t,comments:n,downloads:r}){return`
  <li class="gallery-item">
    <a class="gallery-link" href="${o}">
      <img class="gallery-image" src="${e}" alt="${s}">
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
  `}async function f(e,o){const s="https://pixabay.com/",i="api/",t=new URLSearchParams({key:"42208232-118910d8102453b47e924ae6c",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}),n=`${s}${i}?${t}`,{data:r}=await L(n);return r}const F=document.querySelector(".gallery"),b=document.querySelector("#searchForm"),l=document.querySelector(".loader"),c=document.querySelector("#load");let a=1,u="";b.addEventListener("submit",v);c.addEventListener("click",C);async function v(e){e.preventDefault();const o=e.target.keyword.value.trim();if(o){F.innerHTML="",l.style.display="block",u=o,a=1;try{const s=await f(u,a);s.hits.length===0?(c.style.display="none",d("There are no images matching your search query. Please try again!")):(h(s),w(),c.style.display="block"),b.reset()}catch(s){y(s)}finally{l.style.display="none"}}}async function C(){a+=1,l.style.display="block";try{const e=await f(u,a);h(e),w(),a>=Math.ceil(e.totalHits/15)&&(d("We're sorry, but you've reached the end of search results."),c.style.display="none")}catch(e){y(e)}finally{l.style.display="none"}}function w(){const{height:e}=F.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
