
const restaurants = [
    { name: "Sushi Ten Bento", address: "Jr. Ancash 239, Puno 21001 Perú",
        imageUrl: "../img/puno/puno.rest1.jpg"
     },
    { name: "Mojsa Restaurante", address: "Jr. Lima 635 2nd Floor, Puno 21001 Perú",
        imageUrl: "../img/puno/puno.rest2.jpg"
    },
    { name: "La Casa del Corregidor Café Bar", address: "Jr Deustua 576 side of Puno principal church, Puno 21001 Perú",
        imageUrl: "../img/puno/puno.rest3.jpg"
     },
    { name: "Balcones de Puno", address: "Jr. Libertad 354 between la Plaza de Armas and el Parque Pino, Puno Perú",
        imageUrl: "../img/puno/puno.rest4.jpg"
     },
    { name: "Alma Bar Restaurante", address: "Avenida Sesquicentenario 1970, Puno 21001 Perú",
        imageUrl: "../img/puno/puno.rest5.jpg"
     },
    { name: "La Casona Restaurant", address: "alle Lima 423 2do Piso, Puno Perú",
        imageUrl: "../img/puno/puno.rest6.jpg"
     },
    { name: "La Receta", address: "Jiron Lima 633 Piso 1, Puno 21001 Perú",
        imageUrl: "../img/puno/puno.rest7.jpg"
     },
    { name: "Positive Rock Reggae Bar", address: "Jiron Lima 382, Puno 051 Perú",
        imageUrl: "../img/puno/puno.rest8.jpg"
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