// Accordion functionality
document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.nextElementSibling;
      const isOpen = panel.style.maxHeight;
      // close all panels
      document.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = null);
      if (!isOpen) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
  
  // (Optional) Simple form submit handler
  document.querySelector('.contact-form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Thanks for your message! (In a real site, this would send an email.)');
  });
  