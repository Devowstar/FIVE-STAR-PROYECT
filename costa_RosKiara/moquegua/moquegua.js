const restaurants = [
    { name: "El Punto del Paisa", 
    address: "Urb. Primavera H-1, Moquegua 607 Perú",
    imageUrl: "./img/punto.jpg" },
    { name: "Pinta", 
    address: "Andres Avelino Caceres 110 - Moquegua, Moquegua 18001 Perú",
    imageUrl:"./img/pinta.jpg" },
    { name: "Nautica Restobar", 
      address: "Calle Arequipa 485 Intersection with Junin street, Moquegua 053 Perú", 
      imageUrl:"./img/nautica.jpg"},
    { name: "La chosita", 
     address: "Av. 25 de noviembre N 110 C.P.Los Ángeles, Moquegua Perú",
    imageUrl: "./img/chosita.jpg"},
    { name: "El Potito De Doña Barbara", 
      address: "Omo S/n, Moquegua 18001 Perú",
    imageUrl: "./img/potito.jpg" },
    { name: "MESA ENJOY", 
      address: "Avenida Balta 517 Intersección de la calle Tacna y la Av. Balta, Moquegua 607 Perú",
    imageUrl: "./img/enjoy.jpg" },
    
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
            content += `<img src="${restaurant.imageUrl}" alt="${restaurant.name}"width="210px" height="170px">`;
        }

        restaurantDiv.innerHTML = content;
        
        container.appendChild(restaurantDiv);
    });
}

document.addEventListener('DOMContentLoaded', renderRestaurants);