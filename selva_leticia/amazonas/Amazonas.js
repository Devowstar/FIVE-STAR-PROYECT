const restaurants = [
    { name: "Cal Payés",
    address: "Jr. Amazonas, 429 A media cuadra de la Plazuela de Burgos, Chachapoyas Perú",
    imageUrl: "./img/payes.jpg"
},
    { name: "La Real Cecina",
    address: "Jr. Hermosura 676 Plazuela De Burgos, Chachapoyas Perú",
    imageUrl: "./img/realcecina.jpg"
    },
    { name: "La Tushpa",
    address: "Calle Ortiz Arrieta A 2 Cuadras De La Plaza De Armas, Chachapoyas Perú",
    imageUrl: "./img/tushpa.jpg"
},
    { name: "Los Guayachos Restaurant",
    address: "Jr. Higos Urco 169, Chachapoyas, Chachapoyas Perú",
    imageUrl: "./img/guaychos.jpg"
},
    { name: "Chacha",
    address: "Plaza de Armas, Chachapoyas, Chachapoyas Perú",
    imageUrl: "./img/chacha.jpg"
},
    { name: "Restaurante Fusion Criolla L'labrador",
    address: "Av Aeropuerto Derecha De La Y Media cuadra de la Y, frente a la farmacia - FARMALU, Chachapoyas 01001 Perú",
    imageUrl: "./img/labrador.jpg"
},
    { name: "AYMAR pescados y parrillas",
    address: "Avenida chachapoyas 1811 Al costado de la UGEL, Bagua Grande 01621 Perú",
    imageUrl: "./img/Aymar.jpg"
}, 
    { name: "Shunto",
    address: "Jr. Bolivar 841, Leymebamba Perú",
    imageUrl: "./img/shunto.jpg"
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