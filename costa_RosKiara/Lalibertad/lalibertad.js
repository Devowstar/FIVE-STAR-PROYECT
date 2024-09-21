const restaurants = [
    { name: "Cadejo Brewing Company", address: "Calle La Reforma #222, La Libertad El Salvador",
        imageUrl:"./img/libertad1.jpg"    
        },
        { name: "Restaurants Acajutla", address: "Malecon Turistico, La Libertad El Salvador",
        imageUrl:"./img/libertad2.jpg" 
         },
        { name: "La Curva De Don Gere", address: "Carrt Litoral Col El Jute Loc 5 Tepeagua, La Libertad El Salvador",
        imageUrl:"./img/libertad3.jpg" 
         },
        { name: "Tsunami Seafood Grill & Bar", address: "4ta calle Poniente Malecón Turístico #2-7, Puerto de La Libertad, La Libertad 00000 El Salvador",
        imageUrl:"./img/libertad4.jpg" 
         },
        { name: "Rocas Sunzal", address: "Km. 42 Carretera Al Litoral Playa El Tunco la Libertad, La Libertad 503 El Salvador",
        imageUrl:"./img/libertad5.jpg"  },
        { name: "Blu", address: "Calle Litora Playa El Tunco Km 42, La Libertad 001001 El Salvador",
        imageUrl:"./img/libertad6.jpg" 
         },
        { name: "Donkeys Mexicano Fusión", address: "Boulevard Santa Elena Calle Alegría, La Libertad 3422 El Salvador",
        imageUrl:"./img/libertad7.jpg"    
         },
        { name: "La Fisheria", address: "Plaza Malta, La Libertad El Salvador",
        imageUrl:"./img/libertad8.jpg" 
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
            content += `<img src="${restaurant.imageUrl}" alt="${restaurant.name}" width="210px" height="170px">`;
        }

        restaurantDiv.innerHTML = content;
        
        container.appendChild(restaurantDiv);
    });
}

document.addEventListener('DOMContentLoaded', renderRestaurants);