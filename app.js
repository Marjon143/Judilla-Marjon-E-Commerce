const apiUrl = 'data.json';

async function fetchAndDisplayProducts() {
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const productList = document.getElementById('product-list');

        productList.innerHTML = '';

        data.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            const productName = document.createElement('h3');
            productName.textContent = product.name;

            const productPrice = document.createElement('p');
            productPrice.textContent = `Price: $${product.price}`;

            // Access "description" property
            const productDescription = document.createElement('p');
            productDescription.textContent = `Description: ${product.description}`;

            // Access "date added" property using square bracket notation
            const productDate = document.createElement('p');
            productDate.textContent = `Date Added: ${product['date added']}`;

            productCard.appendChild(productName);
            productCard.appendChild(productPrice);
            productCard.appendChild(productDescription); // Include product description
            productCard.appendChild(productDate);

            productList.appendChild(productCard);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchAndDisplayProducts();
