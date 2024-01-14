// Add this in a new JavaScript file (scripts.js)
function subscribe() {
    var emailInput = document.getElementById('email');
    var emailValue = emailInput.value;

    // Check if the email is provided
    if (emailValue.trim() !== '') {
        // Clear the email input
        emailInput.value = '';

        // Show an alert
        alert('Thank you for subscribing!');

        // You can add additional logic here, such as sending the data to a server
    } else {
        // Show an alert if the email is empty
        alert('Please enter your email address.');
    }
}

// Tambahkan script ini di dalam file scripts.js

document.addEventListener('DOMContentLoaded', function () {
    // Temukan elemen tombol "More Products"
    var moreProductsButton = document.getElementById('moreProductsBtn');
  
    // Temukan elemen produk tambahan
    var additionalProducts = document.querySelectorAll('.additional-product');
  
    // Sembunyikan produk tambahan awalnya
    additionalProducts.forEach(function (product) {
      product.style.display = 'none';
    });
  
    // Jika tombol ditemukan, tambahkan event listener
    if (moreProductsButton) {
      moreProductsButton.addEventListener('click', function () {
        // Toggle visibility produk tambahan
        additionalProducts.forEach(function (product) {
          if (product.style.display === 'none') {
            product.style.display = 'block';
            moreProductsButton.innerHTML = 'Less Products';
          } else {
            product.style.display = 'none';
            moreProductsButton.innerHTML = 'More Products';
          }
        });
      });
    }
  });
  
