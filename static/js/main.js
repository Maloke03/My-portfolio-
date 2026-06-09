// ── Mobile nav toggle ──────────────────────────────────────────
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close nav when a link is clicked on mobile
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});


// ── Contact form ───────────────────────────────────────────────
const form       = document.getElementById('contactForm');
const sendBtn    = document.getElementById('sendBtn');
const formStatus = document.getElementById('formStatus');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name    = document.getElementById('fname').value.trim();
  const email   = document.getElementById('femail').value.trim();
  const message = document.getElementById('fmessage').value.trim();

  sendBtn.disabled = true;
  sendBtn.textContent = 'Sending…';
  formStatus.textContent = '';
  formStatus.className = 'form-status';

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });
    const data = await res.json();

    if (data.ok) {
      formStatus.textContent = data.message;
      form.reset();
    } else {
      formStatus.textContent = data.error || 'Something went wrong.';
      formStatus.classList.add('error');
    }
  } catch {
    formStatus.textContent = 'Network error — try again.';
    formStatus.classList.add('error');
  } finally {
    sendBtn.disabled = false;
    sendBtn.textContent = 'Send Message';
  }
});


// ── Scroll-aware nav highlight ─────────────────────────────────
const sections = document.querySelectorAll('section[id], header[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${entry.target.id}`
          ? 'var(--accent)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));
