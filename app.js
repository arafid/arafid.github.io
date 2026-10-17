import { projects } from './project-data.mjs';

const filters = [...document.querySelectorAll('.filter')];
const cards = [...document.querySelectorAll('.project-card')];
function filterProjects(category) {
  if (!filters.some(button => button.dataset.filter === category)) return;
  filters.forEach(button => {
    const selected = button.dataset.filter === category;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  let visible = 0;
  cards.forEach(card => {
    const show = category === 'all' || card.dataset.category === category;
    card.classList.toggle('is-filtered', !show);
    card.hidden = !show;
    if (show) visible++;
  });
  document.querySelector('#work-count').textContent = `${String(visible).padStart(2, '0')} PROJECT${visible === 1 ? '' : 'S'} / OPEN TO EXPLORE`;
}
filters.forEach(button => button.addEventListener('click', () => filterProjects(button.dataset.filter)));
document.querySelectorAll('[data-focus-filter]').forEach(link => link.addEventListener('click', () => filterProjects(link.dataset.focusFilter)));

const tabs = [...document.querySelectorAll('[role="tab"]')];
function activateTab(tab) {
  tabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
  });
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateTab(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    activateTab(tabs[next]);
    tabs[next].focus();
  });
});

const dialog = document.querySelector('#project-dialog');
const dialogBody = document.querySelector('#dialog-body');
let projectTrigger;
function openProject(id, trigger) {
  const project = projects[id];
  if (!project) return;
  projectTrigger = trigger;
  dialogBody.innerHTML = `
    <p class="dialog-kicker">${project.category}</p>
    <h2 id="dialog-title">${project.title}</h2>
    <p class="dialog-intro">${project.intro}</p>
    <div class="tags dialog-tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
    <div class="dialog-results">${project.stats.map(([value, label]) => `<div class="dialog-stat"><strong>${value}</strong><span>${label}</span></div>`).join('')}</div>
    <div class="dialog-sections">${project.sections.map(([heading, content]) => `<section class="dialog-section"><h3>${heading}</h3>${content}</section>`).join('')}</div>
    <p class="dialog-note">${project.note}</p>
    <div class="dialog-links"><a class="text-link" href="${project.path}">Full case study <span aria-hidden="true">↗</span></a><a class="button button-dark" href="${project.repo}" target="_blank" rel="noopener noreferrer">Explore on GitHub <span aria-hidden="true">↗</span></a>${project.supporting ? `<a class="text-link" href="${project.supporting[1]}" target="_blank" rel="noopener noreferrer">${project.supporting[0]} <span aria-hidden="true">↗</span></a>` : ''}</div>`;
  dialog.showModal();
  document.body.classList.add('dialog-open');
  dialog.scrollTop = 0;
  dialog.querySelector('.dialog-close').focus({preventScroll: true});
}
document.querySelectorAll('[data-project]').forEach(link => link.addEventListener('click', event => {
  if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  openProject(link.dataset.project, link);
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
let pointerStartedOutside = false;
dialog.addEventListener('pointerdown', event => {
  const box = dialog.getBoundingClientRect();
  pointerStartedOutside = event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom;
});
dialog.addEventListener('click', event => {
  const box = dialog.getBoundingClientRect();
  const outside = event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom;
  if (pointerStartedOutside && outside) dialog.close();
  pointerStartedOutside = false;
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  projectTrigger?.focus({preventScroll: true});
});

const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  mobileNav.hidden = true;
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  mobileNav.hidden = !open;
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!mobileNav.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
});
window.matchMedia('(min-width: 621px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

let copyTimer;
document.querySelector('.copy-email').addEventListener('click', async () => {
  const feedback = document.querySelector('#copy-feedback');
  clearTimeout(copyTimer);
  try {
    await navigator.clipboard.writeText('arafid@ou.edu');
    feedback.textContent = 'Email copied!';
  } catch {
    feedback.textContent = 'Select the email to copy it.';
  }
  copyTimer = setTimeout(() => { feedback.textContent = ''; }, 3500);
});
