fetch('http://localhost:3000/products')
  .then(response => response.json())
  .then(data => {
    const productGrid = document.querySelector('.product-grid');
    data.forEach(product => {
      const productCard = `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}">
          <h2>${product.name}</h2>
          <p>$${product.price.toFixed(2)}</p>
        </div>
      `;
      productGrid.innerHTML += productCard;
    });
  })
  .catch(error => console.error('Error al cargar los productos:', error));
