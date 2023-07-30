/* Start Scroller */

let scroll = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", ()=>{
  let scrollTop = document.documentElement.scrollTop;
	scroll.style.width = `${((scrollTop / height) * 100)}%`;
})

/* End Scroller */

/* Start Other Links OnClick */
const otherLinks = document.querySelector("#other-links");
const megaMenu = document.querySelector("#mega-menu");

otherLinks.addEventListener("click", () => {
  megaMenu.classList.toggle("active")
})
/* End Other Links OnClick */