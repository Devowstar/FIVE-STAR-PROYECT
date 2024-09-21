const restaurants = [
    { name: "La Plaza Bar & Grill", 
      address: "Av. Ramon Mujica S/N Urb. San Eduardo, Piura 20001 Perú",
      imageUrl: "./img/piura.rest1.png"},

    { name: "Alba Roofop",
     address: "Av. Ramón Mujica 108 Piso 7, Piura 20009 Perú",
    imageUrl: "./img/piura.rest2.png" },

    { name: "Tayanti",
     address: "Los Ejidos km 1.1 a 300 metros de la Universidad UPAO, Piura 20000 Perú",
    imageUrl: "./img/piura.rest3.png" },

    { name: "Tao Restobar ",
     address: "Av. San Ramón s/n Interior 9 y 10 El Molino, Frente Al colegio Santa María, Piura 51 Perú",
    imageUrl: "./img/piura.rest4.png" },

    { name: "Restaurant La Tomasita",
     address: "Calle Tacna 853, Piura 853-857 Perú",
    imageUrl: "./img/piura.rest5.png" },

    { name: "Restaurante Paprika Piura", 
    address: "Av. Loreto 649, Piura 20001 Perú",
    imageUrl:"./img/piura.rest6.png"},

    { name: "L'Ancora Grill & Lounge",
     address: "Av San Ramon s/n, Piura Perú",
    imageUrl: "./img/piura.rest7.png" },

    { name: "El Nuevo Ajicito", 
    address: "Mz. B LT05 La Providencia, Piura Perú",
    imageUrl: "./img/piura.rest8.png"
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
            content += `<img src="${restaurant.imageUrl}" alt="${restaurant.name}" width="210px" height="170px">`;
        }

        restaurantDiv.innerHTML = content;
        
        container.appendChild(restaurantDiv);
    });
}

document.addEventListener('DOMContentLoaded', renderRestaurants);