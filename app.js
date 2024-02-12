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
            productCard.classList.add('card');

            const img = document.createElement('img');
            img.src = product.imageURL || 'placeholder.jpg'; // If imageURL is not provided, use a default placeholder image
            img.classList.add('card-img-top');

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const title = document.createElement('h5');
            title.classList.add('card-title');
            title.textContent = product['Product Name'];

            const price = document.createElement('p');
            price.classList.add('card-text');
            price.textContent = `Price: ₱${product['price']}`;

            const description = document.createElement('p');
            description.classList.add('card-text');
            description.textContent = product['description'];

            const lastUpdated = document.createElement('small');
            lastUpdated.classList.add('text-muted');
            lastUpdated.textContent = `Added on: ${product['date added']}`;

            cardBody.appendChild(title);
            cardBody.appendChild(price);
            cardBody.appendChild(description);
            cardBody.appendChild(lastUpdated);

            // Add "Add to Cart" button
            const addToCartButton = document.createElement('button');
            addToCartButton.textContent = 'Add to Cart';
            addToCartButton.classList.add('btn', 'btn-primary', 'mt-3'); // Adding a margin-top for spacing
            addToCartButton.addEventListener('click', () => {
                // Here you can implement functionality to add the product to the cart
                console.log(`Product ${product['Product Name']} added to cart.`);
            });

            cardBody.appendChild(addToCartButton); // Appending the button after the lastUpdated element

            productCard.appendChild(img);
            productCard.appendChild(cardBody);

            productList.appendChild(productCard);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchAndDisplayProducts();
