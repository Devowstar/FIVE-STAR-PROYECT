const restaurants = [
    { name: "El Tambo de Tacama", address: "Camino Real 390 La Tinguina, Ica 11004 Perú",
        imageUrl: "./img/ica.rest1.jpg"
     },
    { name: "8 Cepas", address: "Ica 11004 Perú",
        imageUrl: "./img/ica.rest2.jpg" },
    { name: "Yan Pallek", address: "Pasaje Los Rosales s/n Camino a la Huega, Ica Perú",
        imageUrl: "./img/ica.rest3.jpg" },
    { name: "La Choza Nautica Ica", address: "Cutervo 2 Urb. Puente Blanco Mz. B Lt. 4 - etapa 4, Ica 11001 Perú",
        imageUrl: "./img/ica.rest4.jpg" },
    { name: "La Olla de Juanita", address: "Fundo Tres Esquinas 121, Subtanjalla Boulevard Tres Esquinas, Ica Perú",
        imageUrl: "./img/ica.rest5.jpg" },
    { name: "El Fundo Restaurante", address: "Os Girasoles S/n Residencial La Angostura - Ica Ingresa Por El Cruce De San Joaquín Más Rápido, Ica 11004 Perú",
        imageUrl: "./img/ica.rest6.jpg" },
    { name: "El Cordon y la Rosa", address: "Avenue Los Maestros D-14 Urb San Jose Hotel Real Ica, Ica 11000 Perú",
        imageUrl: "./img/ica.rest7.jpg" },
    { name: "Harvest Coffeehouse", address: "Urb. San José Los laureles D32, Ica 11008 Perú",
        imageUrl: "./img/ica.rest8.jpg" },
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
            content += `<img src="${restaurant.imageUrl}" alt="${restaurant.name}" width="210px" height="170px">`;
        }

        restaurantDiv.innerHTML = content;
        
        container.appendChild(restaurantDiv);
    });
}

document.addEventListener('DOMContentLoaded', renderRestaurants);