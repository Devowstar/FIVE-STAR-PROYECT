
const restaurants = [
    { name: "Joy Campestre", address: "Avenida Los Incas, 968, Huancavelica Perú",
        imageUrl: "../img/huancavelica/huancavelica.rest1.jpg"
     },
    { name: "Inti Killa Restorant Bar", address: "LJr. Virrey Toledo 344, Huancavelica 09001 Perú",
        imageUrl: "../img/huancavelica/huancavelica.rest2.jpg"
     },
    { name: "Pez Rojo Cevicheria", address: "Jr. Demetrio Molloy 245 Frente al Parque San Juan de Dios, Huancavelica 09001 Perú",
        imageUrl: "../img/huancavelica/huancavelica.rest3.jpg"
     },
    { name: "Club 67", address: "Jiron Manco Capac 225, Huancavelica 09001 Perú",
        imageUrl: "../img/huancavelica/huancavelica.rest4.jpg"
     },
    { name: "Nesul Coffee", address: "Jr. Virrey Toledo 210, Huancavelica 067 Perú",
        imageUrl: "../img/huancavelica/huancavelica.rest5.jpg"
     },
    { name: "Pizzas Roma", address: "Jr. Manco Capac 568, Huancavelica 09001 Perú",
        imageUrl: "../img/huancavelica/huancavelica.rest6.jpg"
     },
    { name: "Ron y Pasas - Fat Fit", address: "Jr. Virrey Toledo 111 Esquina de la Plaza de Armas, Huancavelica 09001 Perú",
        imageUrl: "../img/huancavelica/huancavelica.rest7.jpg"
     },
    { name: "Restaurant Chifa Centro", address: "Jr, Manuel Ascencio Segura 186 Centro Plaza de Armas de Huancavelica, Huancavelica Perú",
        imageUrl: "../img/huancavelica/huancavelica.rest8.jpg"
     }
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
            content += `<img src="${restaurant.imageUrl}" alt="${restaurant.name}"  width="210px" height="170px">`;
        }

        restaurantDiv.innerHTML = content;
        
        container.appendChild(restaurantDiv);
    });
}

document.addEventListener('DOMContentLoaded', renderRestaurants);