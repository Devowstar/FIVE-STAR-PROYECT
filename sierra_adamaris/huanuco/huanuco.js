
const restaurants = [
    { name: "Botanika Food Park", address: "Jiron Pedro Puelles 671, Huánuco 10001 Perú",
        imageUrl: "../img/huanuco/huanuco.rest1.jpg"
     },
    { name: "Trapiche House", address: "Jirón San Martín 1242, Huánuco Perú",
        imageUrl: "../img/huanuco/huanuco.rest2.jpg"
     },
    { name: "Centro Campestre Jacarandá", address: "Jr. Huayallco 2300 Camino al Aeropuerto, Huánuco 10001 Perú",
        imageUrl: "../img/huanuco/huanuco.rest3.jpg"
     },
    { name: "Rinconcito Huanuqueno", address: "Jiron 2 de Mayo, Huánuco 10000 Perú",
        imageUrl: "../img/huanuco/huanuco.rest4.jpg"
     },
    { name: "Café Cabrera", address: "Jiron Abtao No 748 A cuadra y media de la Plaza de Armas de Huánuco, Huánuco 10001 Perú",
        imageUrl: "../img/huanuco/huanuco.rest5.jpg"
     },
    { name: "Tradiciones Huanuquenas", address: "Carretera Al Aeropuerto, Huánuco Perú",
        imageUrl: "../img/huanuco/huanuco.rest6.jpg"
     },
    { name: "EMMA Restaurant Coffee Bar", address: "Jr. Huanuco 616, Jr. Abtao 660, Huánuco 10001 Perú",
        imageUrl: "../img/huanuco/huanuco.rest7.jpg"
     },
    { name: "Piqueso Bistro Regional", address: "Calle Huallaga 175 La Quinta, Huánuco 10003 Perú",
        imageUrl: "../img/huanuco/huanuco.rest8.jpg"
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