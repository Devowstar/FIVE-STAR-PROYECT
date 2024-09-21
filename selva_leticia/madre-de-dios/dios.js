const restaurants = [
    { name: "Burgos's Restaurant", 
        address: "Avenida 26 de Diciembre 195 Una Cuadra De La Plaza De Armas, Al Costado De La Sunat, Puerto Maldonado 17001 Perú",
        imageUrl: "./img/burgos.jpg"
    },
    { name: "Cacao Center", 
        address: "Jr, Billinghurst 504, Puerto Maldonado 17001 Perú",
        imageUrl: "./img/cacao.jpg"
    },
    { name: "La Semilla Cafe-Restaurant-Pasteleria", 
        address: "Av. 26 de Diciembre Cerca de Burgos, Puerto Maldonado 17001 Perú",
        imageUrl: "./img/semillacafe.jpg"
    },
    { name: "Shaman's Bar", 
        address: "Jr. Billinghurst, s/n, Puerto Maldonado 17001 Perú",
        imageUrl: "./img/shamas.jpg"
    },
    { name: "Restaurante Amazona",
        address: "Carretera bajo madre de Dios, Km 3, Puerto Maldonado 17100 Perú, Puerto Maldonado 17100 Perú",
        imageUrl: "./img/amazona.jpg"
    },
    { name: "El Horcon",
         address: "Avenida Leon Velarde, 361 - Tambopata -, Puerto Maldonado Perú",
         imageUrl: "./img/horcon.jpg"
    },
    { name: "Cabana Quinta", 
        address: "Jr. Moquegua 422 Tambopata Madre De Dios, Puerto Maldonado Perú",
        imageUrl: "./img/quinta.jpg"
    },
    { name: "El Turril De Los Gosalvez",
         address: "Av. Dos De Mayo Esquina con Avenida Arequipa, Puerto Maldonado Perú",
         imageUrl: "./img/gosalvez.jpg"
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
            content += `<img src="${restaurant.imageUrl}" alt="${restaurant.name}">`;
        }

        restaurantDiv.innerHTML = content;
        
        container.appendChild(restaurantDiv);
    });
}

document.addEventListener('DOMContentLoaded', renderRestaurants);