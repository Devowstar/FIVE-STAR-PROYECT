const restaurants = [
    { name: "Anaconda",
    address: "Malecon Puerto Callao, Yarinacocha, Pucallpa Peru",
    imageUrl: "./img/Anaconda.jpg" },
    { name: "Tirol Haus Bier", 
    address: "Av. Miraflores N° 3126 Urb Miraflores Ucayali - Co, Pucallpa 25001 Perú",
    imageUrl: "./img/House Bier.jpg"  },
    { name: "Paprika Restaurante Pucallpa", 
    address: "Av. San Martin 200 Wyndham Costa del Sol Pucallpa Hotel, Pucallpa 25000 Perú",
    imageUrl: "./img/Paprika.jpg"  },
    { name: "Nella Café", 
    address: " Jr Tarapaca 679, Pucallpa 25001 Perú",
    imageUrl: "./img/Nella Café.jpg"  },
    { name: "La Plaza Bar & Grill", 
    address: "Jiron Sucre 198 Jiron Sucre 198, Calleria, Coronel Portillo, Pucallpa Perú",
    imageUrl: "./img/Bar y Grill.jpg"  },
    { name: "Al Palo y a la Parrilla", 
    address: "Jr. Aguaytia De la plaza de yarina a 1 cuadra como quien va a electro ucayali, Pucallpa Perú",
    imageUrl: "./img/Palo y parrilla.jpg"  },
    { name: "Parrilladas Orlando's", 
    address: "Calle Putumayo, 174 Putumayo 172, Iquitos 16002 Perú",
    imageUrl: "./img/Orlando_s.jpg"  },
    { name: "Trapiche Restobar Pucallpa", 
    address: "Jr Inmaculada 566, Pucallpa 25001 Perú",
    imageUrl: "./img/Restobar.jpg"  }
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