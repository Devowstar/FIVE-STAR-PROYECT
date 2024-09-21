
const restaurants = [
    { name: "Las Pirkas", address: "Carretera Panamericana Norte antes del estadio de Jayanca, Lambayeque 14150 Perú",
        imageUrl:"./img/lambayeque1.jpg"
             },
            { name: "El Pacifico Lambayeque", address: "Av Huamachuco 970, Lambayeque Perú",
        imageUrl:"./img/lambayeque2.jpg"
             },
            { name: "El Rincón del Pato", address: "Av. Leguia 264, Lambayeque Perú",
        imageUrl:"./img/lambayeque3.jpg"
             },
            { name: "El Cántaro Restaurante Turístico", address: "2 De Mayo 180 Libertad, Lambayeque 140301 Perú",
        imageUrl:"./img/lambayeque4.jpg"
             },
            { name: "El Cerezo - Cocina Lambayecana", address: "Urbanización Alameda Real Mz X lote 1, Lambayeque 14013 Perú",
        imageUrl:"./img/lambayeque5.jpg"
             },
            { name: "Di Limón Restaurant Turístico", address: "Calle Francisco Casos Mz. M Lote 4 y 5- Urb Castilla de Oro Near Museo Tumbes Reales de Sipan, Lambayeque 074 Perú",
        imageUrl:"./img/lambayeque6.jpg"
             },
            { name: "La Casa Descalzi", address: "Calle 8 de Octubre, 345, Lambayeque 176 Perú",
        imageUrl:"./img/lambayeque7.jpg"
             },
            { name: "King Kong San Roque", address: "Avenida Panamericana Norte 780, Lambayeque 14013 Perú",
        imageUrl:"./img/lambayeque8.jpg"
             },
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