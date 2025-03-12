// Toggle mobile menu
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Contact form validation
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('input[type="email"]').value;
    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
    }
    alert('Message sent successfully!');
});

// Pricing toggle
document.getElementById('pricing-switch').addEventListener('change', (e) => {
    const monthlyPrices = document.querySelectorAll('.price.monthly');
    const annualPrices = document.querySelectorAll('.price.annual');
    if (e.target.checked) {
        monthlyPrices.forEach(price => price.classList.add('hidden'));
        annualPrices.forEach(price => price.classList.remove('hidden'));
    } else {
        monthlyPrices.forEach(price => price.classList.remove('hidden'));
        annualPrices.forEach(price => price.classList.add('hidden'));
    }
});
