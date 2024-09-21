
const restaurants = [
    { name: "ViaVia Cafe Ayacucho", address: "Portal Costitucion 4 Plaza de Armas, Ayacucho Perú",
        imageUrl: "../img/ayacucho/ayacucho.rest1.jpg"
     },
    { name: "Sukre Cocina Peruana", address: "Portal Constitucion Numero 9 Plaza Mayor - Huamanga - Ayacucho, Ayacucho Perú",
        imageUrl: "../img/ayacucho/ayacucho.rest2.jpg"
     },
    { name: "El Nino", address: "Jirón 9 de Diciembre 205, Ayacucho 05003 Perú",
        imageUrl: "../img/ayacucho/ayacucho.rest3.jpg"
     },
    { name: "Restaurante la Huamanguina", address: "Jr. Asamblea No 138 2do Piso A Media Cuadra Del Parque Sucre, Ayacucho Perú",
        imageUrl: "../img/ayacucho/ayacucho.rest4.jpg"
     },
    { name: "Restaurante Las Flores", address: "Jr. Jose Olaya, 106, Ayacucho 05001 Perú",
        imageUrl: "../img/ayacucho/ayacucho.rest5.jpg"
     },
    { name: "Koi - Cocina Nikkei", address: "Jr. Mariano Melgar 519 - Jesus Nazarenas -Ayacucho Referencia: a una cuadra de la escuela de Bellas Artes o el Banco de la Nacion de Jesus Nazareno, Ayacucho 05001 Perú",
        imageUrl: "../img/ayacucho/ayacucho.rest6.jpg"
     },
    { name: "Mestizo Café Restaurante", address: "Jr. Cusco 241 Close to the Plaza Mayor, Ayacucho 05000 Perú",
        imageUrl: "../img/ayacucho/ayacucho.rest7.jpg"
     },
    { name: "Fuziones Restaurante", address: "Jirón londres 220 A Una Cuadra De La Iglesia Santa Teresa, Ayacucho Perú",
        imageUrl: "../img/ayacucho/ayacucho.rest8.jpg"
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
