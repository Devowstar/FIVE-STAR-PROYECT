
const restaurants = [
    { 
        name: "Restaurante Turístico Huancahuasi - Huancayo",
        address: "Av Mariscal Castilla 2222 El Tambo Huancayo, Frente Al Estadio Castilla, Huancayo 12000 Perú", 
        imageUrl: "./img/huancahuasi.jpg" 
    },
    { 
        name: "The Steakhouse", 
        address: "Jr. Santos Chocano S/n Frente Al Baldeón, A La Espalda De La Upla, La Merced 051 Perú",
        imageUrl: "./img/Steakhouse.jpg"
    },
    { 
        name: "Restaurante Detrás de la Catedral", 
        address: "Jr Ancash Nr. 335, Huancayo 12001 Perú",
        imageUrl: "./img/Catedral.jpg"
    },
    { 
        name: "Café Colonial", 
        address: "Jirón Puno N° 482 Costado de La Plaza Constitución, Huancayo 12001 Perú",
        imageUrl: "./img/colonial.jpg"
    },
    { 
        name: "Daylo", 
        address: "Jr Huancayo 448, Tarma Perú",
        imageUrl: "./img/Daylo.jpg"
    },
    { 
        name: "Restaurante Olimpico", 
        address: "Giraldez 199 Giraldez 199, Huancayo 12000 Perú",
        imageUrl: "./img/olimpico.jpg" 
    },
    { 
        name: "Shambari Campa Restaurante", 
        address: "Jr. Tarma 389, La Merced 12856 Perú",
        imageUrl: "./img/shambri.jpg"
    },
    { 
        name: "Don Pietro Pizzería", 
        address: "Mcal. Gamarra 195, Huancayo 12007 Perú",
        imageUrl: "./img/pietro.jpg"
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
            content += `<img src="${restaurant.imageUrl}" alt="${restaurant.name}">`;
        }

        restaurantDiv.innerHTML = content;
        
        container.appendChild(restaurantDiv);
    });
}

document.addEventListener('DOMContentLoaded', renderRestaurants);