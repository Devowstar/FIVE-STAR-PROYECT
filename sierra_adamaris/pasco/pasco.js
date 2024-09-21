
const restaurants = [
    { name: "El Colono Coffe Shop", address: "Avenida San Martin 495, Oxapampa 19231 Perú",
        imageUrl: "../img/pasco/pasco.rest1.jpg"
     },
    { name: "Italo's Parrilladas", address: "San Marín s/n, Oxapampa Perú",
        imageUrl: "../img/pasco/pasco.rest2.jpg"
     },
    { name: "Restaurante Tipico La Casa de Baco", address: "Avenida Miraflores Km 2.5, 71, Oxapampa Perú",
        imageUrl: "../img/pasco/pasco.rest3.jpg"
     },
    { name: "Restaurante Típico Prusia", address: "Avenida Cristobal Johann 100 Prusia Prusia, Pozuzo 19250 Perú",
        imageUrl: "../img/pasco/pasco.rest4.jpg"
     },
    { name: "El Tipico Pozucino", address: "Av. Los Colonos 571 la Colonia Half a block from the Pozuzo Nation Bank, Pozuzo Perú",
        imageUrl: "../img/pasco/pasco.rest5.jpg"
     },
    { name: "Restaurante La Casa de Yeral", address: "Av. Leandro Andaluz Mza 96 A dos cuadras de la plaza principal, Villa Rica 19300 Perú",
        imageUrl: "../img/pasco/pasco.rest6.jpg"
     },
    { name: "Restaurante Típico Oxapampino", address: "Jr.Mariscal Castilla 149, Oxapampa 19230 Perú",
        imageUrl: "../img/pasco/pasco.rest7.jpg"
     },
    { name: "Recreo Turistico la Casa de Baco", address: "Carretera Central Km. 2.5, Oxapampa Perú",
        imageUrl: "../img/pasco/pasco.rest8.jpg"
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