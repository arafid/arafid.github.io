const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');

function closeMenu(){
  if(!menuButton || !mobileNav) return;
  menuButton.setAttribute('aria-expanded','false');
  mobileNav.hidden = true;
}

menuButton?.addEventListener('click',()=>{
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded',String(open));
  mobileNav.hidden = !open;
});

mobileNav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape') closeMenu();});
window.matchMedia('(min-width: 761px)').addEventListener('change',event=>{if(event.matches) closeMenu();});

const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12}) : null;

document.querySelectorAll('.reveal').forEach(el=>{
  if(observer) observer.observe(el);
  else el.classList.add('is-visible');
});

const year = document.querySelector('[data-year]');
if(year) year.textContent = new Date().getFullYear();