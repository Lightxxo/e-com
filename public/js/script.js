// Function to fetch and display popular products dynamically
async function displayPopularProducts() {
  try {
    const response = await fetch('/api/popular-products');
    const popularProducts = await response.json();

    const popularProductsContainer = document.getElementById('popularProducts');
    popularProductsContainer.innerHTML = ''; // Clear previous content

    popularProducts.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}" onclick="showProductInfo('${product.name}', '${product.imageUrl}', '${product.description}', '${product.price}')">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
      `;
      popularProductsContainer.appendChild(productElement);
    });
  } catch (error) {
    console.error('Error fetching popular products:', error);
  }
}

// Function to handle search for products
function searchProducts() {
  const searchInput = document.getElementById('searchInput').value;
  // Redirect to search results page or handle search logic
  console.log('Searching for:', searchInput);
}

// Function to show product info modal
function showProductInfo(name, imageUrl, description, price) {
  const modal = document.getElementById('productInfoModal');
  const title = document.getElementById('productInfoTitle');
  const image = document.getElementById('productInfoImage');
  const desc = document.getElementById('productInfoDescription');
  const productPrice = document.getElementById('productInfoPrice');

  title.textContent = name;
  image.src = imageUrl;
  desc.textContent = description;
  productPrice.textContent = `$${price}`;

  modal.style.display = 'block';

  // Close the popup after 3 seconds
  setTimeout(closePopup, 3000);
}

// Function to close product info modal
function closePopup() {
  const modal = document.getElementById('productInfoModal');
  modal.style.display = 'none';
}


// Function to close product info modal
function closePopup() {
  const modal = document.getElementById('productInfoModal');
  modal.style.display = 'none';
}


// Call the function to display popular products when the page loads
window.onload = () => {
  displayPopularProducts();
};
