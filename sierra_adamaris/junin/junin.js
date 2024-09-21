
const restaurants = [
    { name: "La Tullpa", address: "Jr. Atahualpa No 145 - El Tambo, Huancayo. El Tambo, Huancayo 12000 Perú",
        imageUrl: "../img/junin/junin.rest1.jpg"
     },
    { name: "Ponoa Satipo", address: "Av. Antonio Raymondi frente a la subprefectura Satipo., Satipo 12261 Perú",
        imageUrl: "../img/junin/junin.rest2.jpg"
     },
    { name: "Tinkuy Eco Lodge", address: "carretera central ,villa progreso km 11 , Chanchamayo 5 Minutos de Puente Reither, La Merced Perú",
        imageUrl: "../img/junin/junin.rest3.jpg"
     },
    { name: "Restaurante Sabores Peruanos", address: "Prolongacion Julio Sumar 175, Huancayo 12000 Perú",
        imageUrl: "../img/junin/junin.rest4.jpg"
     },
    { name: "Caramba Restaurant", address: "Jr. Guido 459 San Carlos, Huancayo San Carlos Perú",
        imageUrl: "../img/junin/junin.rest5.jpg"
     },
    { name: "Chifa Felipe Siu", address: "Jr. Progreso 434, San ramón Chanchamayo Jr. Junin 151 , La Merced Chanchamayo, San Ramón 12856 Perú",
        imageUrl: "../img/junin/junin.rest6.jpg"
     },
    { name: "Restaurante Turístico POSHINI", address: "Jr. Julio C. Tello 455, Satipo 12261 Perú",
        imageUrl: "../img/junin/junin.rest7.jpg"
     },
    { name: "El Paraiso", address: "Junior Ayacucho 917, Jauja 12601 Perú",
        imageUrl: "../img/junin/junin.rest8.jpg"
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
