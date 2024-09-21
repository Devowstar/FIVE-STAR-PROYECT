const restaurants = [
    { name: "Panchita", 
    address: "Calle Dos De Mayo 298, Lima 15074 Perú",
     imageUrl:"./img/panchita.jpg"},
    { name: "El Parrillon de Pablo Profumo", 
    address: "Avenida 28 De Julio 795, Lima 15074 Perú",
    imageUrl:"./img/parrillon.jpg" },
    { name: "Vincenzo Ristorante Italiano", 
        address: "Av. 2 de Mayo 785 San Isidro, Lima 15073 Perú",
        imageUrl:"./img/vicenso.jpg"},
    { name: "La Rosa Náutica", 
     address: "Espigon Miraflores, Lima Perú",
     imageUrl:"./img/rosa.jpg" },
    { name: "Costanera 700", 
      address: "Jr. Manuel Tovar 179, Lima 15074 Perú",
      imageUrl:"./img/costanera.jpg" },
    { name: "Cala Restaurante", 
      address: "Circuito De Playas, Lima 15063 Perú",
      imageUrl:"./img/cala.jpg"},
    { name: "Apus Festines y Fieras", 
    address: "Jr. Saenz Peña 215 Barranco Atención Solo Previa Reserva., Lima 15047 Perú",
    imageUrl:"./img/apus.jpg"},
    { name: "Nanka San Isidro", 
    address: "Calle Manuel Bañón 260, Lima 15073 Perú",
    imageUrl:"./img/limaa.jpg" }
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