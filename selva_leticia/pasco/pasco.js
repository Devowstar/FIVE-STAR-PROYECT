const restaurants = [
    { name: "El Colono Coffe Shop",
    address: "Avenida San Martin 495, Oxapampa 19231 Perú",
    imageUrl: "./img/coffep.jpg"
},
    { name: "El Tipico Pozucino",
    address: "Av. Los Colonos 571 la Colonia Half a block from the Pozuzo Nation Bank, Pozuzo Perú",
    imageUrl: "./img/pozucino.jpg"
},
    { name: "Restaurante Típico Prusia",
    address: "Avenida Cristobal Johann 100 Prusia Prusia, Pozuzo 19250 Perú",
    imageUrl: "./img/prusia.jpg"
},
    { name: "Recreo Turitico la Casa de Baco",
    address: "Carretera Central Km. 2.5, Oxapampa Perú",
    imageUrl: "./img/baco.jpg"
},
    { name: "Restaurante La Casa de Yeral",
    address: "Av. Leandro Andaluz Mza 96 A dos cuadras de la plaza principal, Villa Rica 19300 Perú",
    imageUrl: "./img/yeral.jpg"
},
    { name: "Baert Bier Garten",
    address: "Jr. Mullembruck 548, Oxapampa Peru",
    imageUrl: "./img/baert.jpg"
},
    { name: "Mayer Restobar",
    address: "Miraflores SN, KM 2.5 Al costado de la Casa de Baco, Oxapampa Perú",
    imageUrl: "./img/mayer.jpg"
},
    { name: "Plaza Gourmet",
    address: "Jr. Leoncio Prado 118 Plaza Carrion Chaupimarca - Cerro de Pasco, Cerro de Pasco Perú",
    imageUrl: "./img/gourmet.jpg"
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