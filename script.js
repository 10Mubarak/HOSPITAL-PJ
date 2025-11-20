// script.js - shared across pages
document.addEventListener('DOMContentLoaded', () => {
  // set years in footers
  const year = new Date().getFullYear();
  ['year','year2','year3','year4','year5','year6'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.textContent = year;
  });

  // mobile nav toggle
  document.querySelectorAll('.mobile-nav-toggle').forEach(btn=>{
    btn.addEventListener('click', () => {
      const nav = document.querySelector('.nav');
      if(!nav) return;
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
    });
  });

  // smooth scroll for same-page anchors (if any)
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      const tgt = document.querySelector(a.getAttribute('href'));
      if(tgt) tgt.scrollIntoView({behavior:'smooth'});
    });
  });

  // testimonials carousel simple
  (function testimonials(){
    const el = document.getElementById('testimonials');
    if(!el) return;
    const items = el.querySelectorAll('.testimonial');
    let idx = 0;
    setInterval(()=>{
      items[idx].classList.remove('active');
      idx = (idx + 1) % items.length;
      items[idx].classList.add('active');
    }, 5000);
  })();

  // reveal on scroll for .fade-up
  const io = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add('in-view');
    });
  }, {threshold: 0.12});
  document.querySelectorAll('.fade-up').forEach(el => io.observe(el));

}); 
