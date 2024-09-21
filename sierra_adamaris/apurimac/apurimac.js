
const restaurants = [
    { name: "Puma de Piedra", address: "Jr. Los Sauces 327, Andahuaylas Perú",
        imageUrl:"../img/apurimac/apurimac.rest1.jpg"
     },
    { name: "Cachora Bar Restaurant", 
        address: "Jr. Julio Velarde Valenza Plaza San Pedro. Al lado de La Iglesia, frente a La Comisaría de Cachora, Cachora Perú",
        imageUrl: "../img/apurimac/apurimac.rest2.jpg"
    },
    { name: "MATIAS RESTOBAR", address: "Avenida Arenas #140, Abancay 083 Perú",
        imageUrl: "../img/apurimac/apurimac.rest3.jpg"
    },
    { name: "Pizza matteos", address: "Av panamericana s/n Pista panamercana salida a abancay, Curahuasi 03100 Perú",
        imageUrl: "../img/apurimac/apurimac.rest4.jpg"
     },
    { name: "Scencias Restaurant", address: "Jr. Lima 401 Plaza De Armas, Abancay Perú",
        imageUrl: "../img/apurimac/apurimac.rest5.jpg"
     },
    { name: "D'marce", address: "Andahuaylas, Apurimac, Andahuaylas 03701 Perú",
        imageUrl: "../img/apurimac/apurimac.rest6.jpg"
     },
    { name: "La Casona Presidencial", address: "Jiron Arequipa nª100, Abancay 083 Perú",
        imageUrl: "../img/apurimac/apurimac.rest7.jpg"
     },
    { name: "Recreo El Perolito", address: "Pasaje Zenobio Tello # 168, Andahuaylas Perú",
        imageUrl: "../img/apurimac/apurimac.rest8.jpg"
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