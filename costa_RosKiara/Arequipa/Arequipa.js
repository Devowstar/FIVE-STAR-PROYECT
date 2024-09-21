const restaurants = [
    { name: "Páprika", address: "C. Bolivar s/n Urb. Selva Alegre, Arequipa 04001 Perú",
     imageUrl:"./img/arequipa.jpg"   
     },
    { name: "Roqoto", address: "Calle General Móran 118 Local 28-c. Segundo nivel en los Claustros de la compañía, Arequipa 04001 Perú",
     imageUrl:"./img/arequipa2.jpg"    
     },
    { name: "Huerta Del Loncco", address: "Calle La Recoleta Calle La Recoleta 220, Arequipa 04001 Perú", 
    imageUrl:"./img/arequipa3.jpg"
    },
    { name: "Mumis", address: "Calle Sucre 202, Arequipa 04001 Perú",
     imageUrl:"./img/arequipa4.jpg"   
     },
    { name: "Zig Zag Restaurant", address: "Calle Zela 210, Arequipa 04001 Perú",
    imageUrl:"./img/arequipa5.jpg"
     },
    { name: "Chicha por Gaston Acurio", address: "calle Santa Catalina 210, int 105 Frente a la puerta del Monasterio de Santa Catalina, Arequipa 04001 Perú",
     imageUrl: "./img/arequipa6.jpg"   
     },
    { name: "La Plaza Bar & Grill", address: "Portal De Flores 116, Arequipa 04001 Perú",
     imageUrl: "./img/arequipa7.jpg"   
     },
    { name: "Pasta Canteen", address: "Calle Puente Grau 300, Arequipa 04000 Perú",
     imageUrl:"./img/arequipa8.jpg"   
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