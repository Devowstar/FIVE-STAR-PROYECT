const restaurants = [
    { name: "La Patarashca Restaurante", 
        address: "Jiron Lamas 261, Tarapoto 22200 Perú",
        imageUrl: "./img/patarashca.jpg" },
    { name: "Café d' Mundo", 
        address: "Jr. Alegría Arias de Morey 177-193, Tarapoto 22200 Perú",
        imageUrl: "./img/dmundo.jpg" },
    { name: "Doña Zully", 
        address: "Jr Antonio Raymondi cuadra 3 morales, Tarapoto 5142 Perú",
        imageUrl: "./img/zully.jpg" },
    { name: "La Collpa", 
        address: "Tarapoto Perú",
        imageUrl: "./img/collpa.jpg" },
    { name: "Suchiche Café & Bar", 
        address: "Jr. Lamas 245, Tarapoto 22200 Perú",
        imageUrl: "./img/Suchiche.jpg" },
    { name: "Liria Restaurant",
         address: "Av. circunvalación 1896, Tarapoto 22202 Perú",
         imageUrl: "./img/liria.jpg" },
    { name: "Chalet Venezia", 
        address: "Jr. Alegria Arias de Morey 298, Tarapoto 22202 Perú",
        imageUrl: "./img/chalet.jpg" },
    { name: "Almázygo",
         address: "JR. Ricardo Palma 489, Tarapoto 22202 Perú",
         imageUrl: "./img/almazygo.jpg" },
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