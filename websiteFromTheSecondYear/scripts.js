document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const tour = urlParams.get('tour');
    const priceElement = document.getElementById('total-price');
    
    let price = 1000000; // Default price for Moon

    if (tour === 'mars') {
        price = 2000000;
    } else if (tour === 'saturn') {
        price = 3000000;
    }

    priceElement.textContent = `${price.toLocaleString()}$`;

    document.querySelectorAll('.payment-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
});
