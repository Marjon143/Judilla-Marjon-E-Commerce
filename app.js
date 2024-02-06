const apiUrl = 'data.json';

async function fetchAndDisplayProducts() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const data = await response.json();
        const productList = document.getElementById('product-list');
        productList.innerHTML = '';

        data.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            ['Product Name', 'price', 'description', 'date added'].forEach(property => {
                const element = document.createElement(property === 'name' ? 'h3' : 'p');
                element.textContent = property === 'price' ? `Price: $${product[property]}` : `${property.charAt(0).toUpperCase() + property.slice(1)}: ${product[property]}`;
                productCard.appendChild(element);
            });

            productList.appendChild(productCard);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchAndDisplayProducts();
