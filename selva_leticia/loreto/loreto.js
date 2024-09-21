const restaurants = [
    { name: "El Meson", 
    address: "Malecon Maldonado N 153, Iquitos 16002 Peru",
    imageUrl: "./img/meson.jpg" },
    { name: "Dawn On The Amazon Café",
    address: "Malecon Maldonado 185 Ref. esquina c/ calle nauta 1era.cdra. Boulevard, Iquitos 16000 Peru",
    imageUrl: "./img/dawn.jpg" },
    { name: "Al Frio y Al Fuego", 
    address: "La Marina 138 Ave., Iquitos 16003 Perú",
    imageUrl: "./img/friofueg.jpg" },
    { name: "Restaurante Fitzcarraldo",
    address: "Calle Napo 100 Malecón Maldonado Boulevard, Iquitos 16000 Perú",
    imageUrl: "./img/fitz.jpg" },
    { name: "Restaurante Blanquita", 
    address: "Calle Bolognesi 1181 Iquitos - Maynas, Iquitos 16000 Perú",
    imageUrl: "./img/blanquita.jpg" },
    { name: "Amazon Bistro", 
    address: "Malecon Tarapaca 268, Iquitos 16000 Perú",
    imageUrl: "./img/bistro.jpg" },
    { name: "Huasai Restaurant", 
    address: "Calle Fitzcarrald 131, Iquitos 16000 Perú",
    imageUrl: "./img/huasai.jpg" },
    { name: "Ari's Burguer", 
    address: "Jirón Próspero 127 Plaza de Armas, Iquitos 16000 Perú",
    imageUrl: "./img/Aris.jpg" },
];

function renderRestaurants() {
    const container = document.getElementById('restaurants-container');
    
    restaurants.forEach(restaurant => {
        const restaurantDiv = document.createElement('div');
        restaurantDiv.classList.add('restaurant');
        

        let content = `
            <h2>${restaurant.name}</h2>
            <p>Dirección: ${restaurant.address}</p>
        `;
        
        if (restaurant.imageUrl) {
            content += `<img src="${restaurant.imageUrl}" alt="${restaurant.name}">`;
        }

        restaurantDiv.innerHTML = content;
        
        container.appendChild(restaurantDiv);
    });
}

document.addEventListener('DOMContentLoaded', renderRestaurants);