import{a as w,S as P,i as q}from"./assets/vendor-64b55ca9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function f(o,t){const s="https://pixabay.com",a="/api/",e="?key=42408826-646f1c33dda85bc33c99aac2a",r=`&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${t}`,i=s+a+e+r;return(await w.get(i)).data}const d=document.querySelector(".gallery");function h(o){const t=o.hits.map(({webformatURL:a,largeImageURL:e,tags:r,likes:i,views:m,comments:S,downloads:v})=>`<li class="gallery-item">
  <a class="gallery-link" href="${e}">
    <img class="gallery-img" src="${a}" alt="${r}" />
  <div class="image-description">
    <p><b>Likes: </b>${i}</p>
    <p><b>Views: </b>${m}</p>
    <p><b>Comments: </b>${S}</p>
    <p><b>Downloads: </b>${v}</p>
  </div>
  </a>
</li>`).join("");d.insertAdjacentHTML("beforeend",t),new P(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt",captionPosition:"bottom"}).refresh()}const $=document.querySelector(".img-search-form"),p=document.querySelector(".loader"),u=document.querySelector(".load-more-btn");let c,n,g;$.addEventListener("submit",M);u.addEventListener("click",O);async function M(o){if(o.preventDefault(),y(),d.innerHTML="",c=o.target.elements.query.value.trim(),n=1,c===""){l("Sorry, there are no search terms entered. Please try again!");return}try{b();const t=await f(c,n);if(g=Math.ceil(t.totalHits/15),t.totalHits===0){l("Sorry, there are no images matching your search query. Please try again!");return}else h(t),L()}catch(t){l(t)}E(),o.target.reset()}async function O(){n+=1,b();try{const t=await f(c,n);h(t)}catch(t){l(t)}L(),E();const o=d.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:o*2})}function x(){u.classList.remove("hidden")}function y(){u.classList.add("hidden")}function b(){p.classList.remove("hidden")}function L(){p.classList.add("hidden")}function l(o){q.error({message:o,messageColor:"white",backgroundColor:"red",position:"topRight"})}function E(){n>=g?y():x()}
//# sourceMappingURL=commonHelpers.js.map
