
const restaurants = [
    { name: "Ofrenda Peruvian Healthy Food", address: "Calle Plateros 359 Centro Historico, Cuzco 08001 Perú",
        imageUrl: "../img/cuzco/cuzco.rest1.jpg"
     },
    { name: "Kusykay Peruvian Craft Food", address: "Calle Triunfo 338A Unos Metros De La Plaza de Armas, Cuzco 08002 Perú",
        imageUrl: "../img/cuzco/cuzco.rest2.jpg"
     },
    { name: "Mistura Grill", address: "Calle Portal de Panes 137 Plaza de Armas, Cuzco 08002 Perú",
        imageUrl: "../img/cuzco/cuzco.rest3.jpg"
     },
    { name: "Rucula Cusco", address: "Calle triunfo 393 pasos arriba de la plaza de armas casa de Las Arpias, Cuzco 08002 Perú",
        imageUrl: "../img/cuzco/cuzco.rest4.jpg"
     },
    { name: "Organika", address: "Calle Ataud N° 154 Centro Historico, Cuzco 084 Perú",
        imageUrl: "../img/cuzco/cuzco.rest5.jpg"
     },
    { name: "Local", address: "Calle Cuesta San Blas 525 Two Blocks From The Plaza De Armas, Cuzco 08003 Perú",
        imageUrl: "../img/cuzco/cuzco.rest6.jpg"
     },
    { name: "El Jardin - Healthy Food And Coffee", address: "Portal de Panes #151 Plaza De Armas, Cuzco 08002 Perú",
        imageUrl: "../img/cuzco/cuzco.rest7.jpg"
     },
    { name: "Chicha Por Gaston Acurio", address: "Calle Plaza Regocijo 261 - 2 Piso Centro de Cusco, Cuzco 05184 Perú",
        imageUrl: "../img/cuzco/cuzco.rest8.jpg"
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
            content += `<img src="${restaurant.imageUrl}" alt="${restaurant.name}" width="210px" height="170px">`;
        }

        restaurantDiv.innerHTML = content;
        
        container.appendChild(restaurantDiv);
    });
}

document.addEventListener('DOMContentLoaded', renderRestaurants);