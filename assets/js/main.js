/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== COPY TEXT ===============*/
document.getElementById("copyTextBtn").onclick = function() {
  copyTextToClipboard("NON DISPONIBLE");
}
async function copyTextToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    alert('IP du serveur copié dans le presse-papiers');
  } catch(err) {
    alert('Error in copying text: ', err);
  }
}

/*=============== SWIPER JS ===============*/
// let swiperSItems = new Swiper(".SItems__container", {
//   spaceBetween: 30,
//   loop: true,
//   grabCursor: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
            var swiper = new Swiper(".SItems__container", {
              spaceBetween: 30,
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
            });