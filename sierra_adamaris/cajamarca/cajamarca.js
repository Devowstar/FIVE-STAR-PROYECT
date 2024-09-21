
const restaurants = [
    { name: "Restaurante Paprika Cajamarca", 
        address: "Jr Del Batán 123 Hotel Costa del Sol Cajamarca, Cajamarca 06001 Perú",
        imageUrl: "../img/cajamarca/cajamarca.rest1.jpg" },
    { name: "Restaurant Salas", 
        address: "Jr. Amalia Puga 637 Cajamarca, Cajamarca 06002 Perú",
        imageUrl: "../img/cajamarca/cajamarca.rest2.jpg" },
    { name: "Tuna Cafe Restaurant", 
        address: "Jiron San Martín 333 A media cuadra de la Plaza de Armas, Cajamarca 06002 Perú",
        imageUrl: "../img/cajamarca/cajamarca.rest3.jpg" },
    { name: "Castope Restaurante", 
        address: "Alameda la Chonta, 237 - Esquina Con Lloque Yupanqui, Barrios Del Inca Vía de Evitamiento Norte - Fonavi 2, Cajamarca Perú",
        imageUrl: "../img/cajamarca/cajamarca.rest4.jpg" },
    { name: "Fri.to Restaurant", 
        address: "Jr. Del Comercio 948, Cajamarca 06001 Perú",
        imageUrl: "../img/cajamarca/cajamarca.rest5.jpg" },
    { name: "Deli Café", 
        address: "Junín 1150 Centro Comercial Open Plaza y Centro comercial El Quinde, Cajamarca Perú",
        imageUrl: "../img/cajamarca/cajamarca.rest6.jpg" },
    { name: "Pez Loco", 
        address: "Jr. Cruz de piedra 631 A media cuadra de la plaza de armas, Cajamarca Perú",
        imageUrl: "../img/cajamarca/cajamarca.rest7.jpg" },
    { name: "El Zarco", 
        address: "Jr Del Batan 170, Cajamarca Perú",
        imageUrl: "../img/cajamarca/cajamarca.rest8.jpg" },
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

