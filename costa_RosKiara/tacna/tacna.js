const restaurants = [
    { name: "La Plaza Bar & Grill", 
      address: "Av. Billinghurst 170 Casa Andina, Tacna 23003 Perú",
      imageUrl: "./img/la-plaza-bar-grill.jpg"},
    { name: "La Negra Peña Restaurante",
     address: "Avenida Augusto B. Leguia 1757, Tacna 23001 Perú",
    imageUrl: "./img/negrapeña.jpg" },
    { name: "Urus Restaurante",
     address: "Avenida Augusto B Leguia 1105, Tacna 23001 Perú",
    imageUrl: "./img/urus.jpg" },
    { name: "Mar Adentro",
     address: "Avenida Pinto, 28, Tacna Perú",
    imageUrl: "./img/mar-adentro.jpg" },
    { name: "El Cebillano Tacna",
     address: "Calle Gil de Herrera 923 A Media Cuadra Del Mercado Central, Tacna 23000 Perú",
    imageUrl: "./img/ce.jpg" },
    { name: "Mulato Restomar Criollo", 
    address: "Av. Ejercito 1045 Para Chico, Tacna 23000 Perú",
    imageUrl:"./img/mulato.jpg"},
    { name: "La glorieta",
     address: "Circunvalacion Sur-905, Tacna Perú",
    imageUrl: "./img/laglorieta.jpg" },
    { name: "Qasta Restaurante", 
    address: "Calle San Martin 705, Tacna 23001 Perú",
    imageUrl: "./img/qaSTA.jpg"
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