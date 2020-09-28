const carrito = [{
        id: 198752,
        name: "Tinta DJ27 Color",
        price: 52.95,
        count: 3,
        premium: true
    },
    {
        id: 75621,
        name: "Impresora ticketera PRO-201",
        price: 32.75,
        count: 2,
        premium: true
    },
    {
        id: 54657,
        name: "Caja de rollos de papel para ticketera",
        price: 5.95,
        count: 3,
        premium: false
    },
    {
        id: 3143,
        name: "Caja de folios DIN-A4 80gr",
        price: 9.95,
        count: 2,
        premium: false
    }
];


// Aquí LISTAMOS TODOS LOS PRODUCTOS

console.log('//--------------------//');
console.log('CARRITO COMPLETO');
console.log('//--------------------//');
console.log('');

for (producto of carrito) {
    imprimir(imprimir);
}

console.log('');
console.log('//--------------------//');
console.log('FINAL CARRITO COMPLETO');
console.log('//--------------------//');
console.log('');

function imprimir(productos) {
    for (attr in producto) {
        console.log(attr.toUpperCase() + ': ' + producto[attr]);
    }
    console.log('-------------------------');
}

console.log('//--------------------//');
console.log('NOMBRES PRODUCTOS');
console.log('//--------------------//');
console.log('');

for (i = 0; i < carrito.length; i++) {
    console.log('Nombre de producto: ', carrito[i].name);
}

console.log('');
console.log('//--------------------//');
console.log('FINAL NOMBRES PRODUCTOS');
console.log('//--------------------//');


console.log('');
console.log('//--------------------//');
console.log('ELIMINAR ITEM DEL CARRITO');
console.log('//--------------------//');
console.log('');

for (i = 0; i < carrito.length; i++) {
    var carritoID = carrito[i].id;
    if (carritoID == 54657) {
        carrito.splice(i, 1);
        console.log('El producto con id: ' + carritoID + ' ha sido eliminado');
    }
}

console.log('');
console.log('//--------------------//');
console.log('FIN DE ELIMINAR ITEM DEL CARRITO');
console.log('//--------------------//');


console.log('');
console.log('//--------------------//');
console.log('TOTAL PRECIO DEL CARRITO');
console.log('//--------------------//');
console.log('');


var total = 0;
for (producto of carrito) {
    total += producto.price * producto.count;
}
console.log('Total del carrito: ' + total + '€');




console.log('');
console.log('//--------------------//');
console.log('FIN TOTAL PRECIO DEL CARRITO');
console.log('//--------------------//');
console.log('');

console.log('//--------------------//');
console.log('PRODUCTOS PREMIUM');
console.log('//--------------------//');
console.log('');

for (producto of carrito) {
    if (producto.premium) {
        console.log('Este producto es premium: ', producto.name);
    }
}

console.log('');
console.log('//--------------------//');
console.log('FIN PRODUCTOS PREMIUM');
console.log('//--------------------//');
console.log('');


// EXTRAS

console.log('//--------------------//');
console.log('EXTRA---PEDIDO SIN GASTOS DE ENVÍO');
console.log('//--------------------//');
console.log('');

function envioGratis() {
    let premium = true;
    for (producto of carrito) {
        premium = premium && producto.premium;
    }
    return !premium;
}

if (envioGratis()) {
    console.log("Este pedido tiene gastos de envío");
} else {
    console.log("Este pedido no tiene gastos de envío");
}

console.log('');
console.log('//--------------------//');
console.log('FIN EXTRA---PEDIDO SIN GASTOS DE ENVÍO');
console.log('//--------------------//');
console.log('');



console.log('//--------------------//');
console.log('EXTRA---Total con descuento');
console.log('//--------------------//');
console.log('');

if (total > 100) {
    total += -(total * 0.05);
    console.log('Precio total con descuento: ' + total + '€');
} else {
    console.log('Tu compra es menor que 100, por tanto, no hay descuento: ' + total + '€');
}

console.log('');
console.log('//--------------------//');
console.log('FIN EXTRA---Total con descuento');
console.log('//--------------------//');
console.log('');


console.log('//--------------------//');
console.log('EXTRA---Mostrar carrito en html básico');
console.log('//--------------------//');
console.log('');


document.body.onload = mostrarHTML(producto);

function mostrarHTML(producto) {

    var mainContainer = document.getElementById('main-container'); 

    for (producto of carrito) {
        var ul = document.createElement('ul');
        mainContainer.appendChild(ul);
        for (attr in producto) {
            var li = document.createElement('li');
            ul.appendChild(li);
            li.innerHTML = '<h2>' + attr + '</h2>' + producto[attr];
        }
    }
}


console.log('');
console.log('//--------------------//');
console.log('FIN EXTRA---Mostrar carrito en html básico');
console.log('//--------------------//');
console.log('');