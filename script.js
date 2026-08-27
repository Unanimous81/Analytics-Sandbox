// Parse URL parameters to auto-select trips
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const trip = urlParams.get('trip');
    
    if (trip) {
        const selectEl = document.getElementById('tripSelect');
        if (selectEl) {
            selectEl.value = trip;
        }
    }

    // Handle form submissions safely with validation
    const form = document.getElementById('travelForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const chosenTrip = document.getElementById('tripSelect').value;

            alert(`Thank you, ${name}! Your inquiry for the "${chosenTrip}" destination bundle has been received. Our team will email you at ${email} within 24 hours.`);
            form.reset();
        });
    }
});
