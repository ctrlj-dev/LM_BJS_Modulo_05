const bookings = [{
        id: 1,
        price: 45.30,
        count: 3,
        room: "standard",
        prepaid: false,
        succeeded: true
    },
    {
        id: 2,
        price: 92.45,
        count: 4,
        room: "superior",
        prepaid: false,
        succeeded: true
    },
    {
        id: 3,
        price: 63.50,
        count: 7,
        room: "standard",
        prepaid: true,
        succeeded: false
    },
    {
        id: 3,
        price: 37.50,
        count: 2,
        room: "standard",
        prepaid: true,
        succeeded: true
    },
    {
        id: 5,
        price: 87.90,
        count: 5,
        room: "superior",
        prepaid: true,
        succeeded: false
    }
];


// Listamos las reservas del hotel

/*
for(i = 0; i < bookings.length; i++) {
    //console.log(bookings[i].id);
    imprimir(bookings[i])
}
*/

for (booking of bookings) {
    imprimir(booking);
}

function imprimir(booking) {
    for (attr in booking) {
        console.log(attr.toUpperCase() + ': ' + booking[attr]);
    }
    console.log('-------------');
    /*
    console.log("----- Reserva " + reserva.id + ' -----');
    console.log("Precio: " + reserva.price);
    console.log("Noches: " + reserva.count);
    console.log("Tipo de habitación: " + reserva.room);
    console.log("Tarifa pagada: " + reserva.prepaid);
    console.log("Reserva completada: " + reserva.succeeded);
    */
}

// Funcion que indique que una reserva ha fallado

console.log("Error: " + existeError(bookings))

function existeError(bookings) {

    // Declaramos una variable "exito" que sea true
    let succeeded = true;

    for (booking of bookings) {
        // Aqui definimos que exito tiene que ser su valor actual true
        // mas el valor que tenga la reserva actual en dicho campo, si 
        // la reserva actual es diferente de true, se parará el bucle
        succeeded = succeeded && booking.succeeded;
    }

    // si exito no es true apramos y mostramos el error
    return !succeeded;
}

// Lista de reservas ya pagadas

for (booking of bookings) {
    if (booking.prepaid) {
        imprimir(booking);
    }
}

// Sumar total de los precios

let total = 0;
for (booking of bookings) {
    // Recordamos que poner += es igual que ponter "total +"
    total += booking.price * booking.count
}

console.log("Total", total);

// Aplicamos un 10% de descuento a todas las reservas

for (booking of bookings) {
    rebaja = booking.price = booking.price * 0.9;
    console.log("Rebaja por precio " + booking.id + ': ' + rebaja);
}

console.log('--------------------');
console.log('Reservas falladas y pagadas');
for (booking of bookings) {
    if (!booking.succeeded && booking.prepaid) {
        imprimir(booking);
    }

}
console.log('--------------------');


// Buscar bucles anidados
/* Esto sirve para comprar si existen datos iguales en bucles anidados,
en este caso comprobamos si hay algún ID repetido,  para ello compara mediante
dos bucles que guardan el valor de index en dos variables i y x.
*/

let repeated = false;

for (i = 0; i < bookings.length; i++) {
    for (x = i + 1; x < bookings.length; x++) {
        repeated = repeated || bookings[i].id === bookings[x].id;
    }
}
console.log("Identificadores repetidos: ", repeated);