/*--------------------------------------------------------------cargo las img y variables*/

let imagenes = [
    'imagen-0', 'imagen-1', 'imagen-2',
            'imagen-3', 'imagen-4', 'imagen-5',
            'imagen-6', 'imagen-7', 'imagen-8'
];

let puzzle = document.getElementById('puzzleJS');
let piezas = document.getElementById('piezasJS');
let mensaje = document.getElementById('mensajeJS');

let terminado = imagenes.length;

/*------------------------------------------------------------itero mientras tenga imágenes--*/
//Por un lado, genero un n° random q' me servirá como subíndice del array imagenes p/elegir alguna img
//Por otro lado, creo un contenedor div con un id, una clase y un estilo en línea c/la img de fondo q' le corresponda.


while (imagenes.length) {
//es .lenght pq el n° de img va a ir disminuyendo.
    const index = Math.floor(Math.random() * imagenes.length);
//dibujo en la pantalla las piezas
    const div = document.createElement('div');
    div.className = 'pieza';
    div.id = imagenes[index];
    div.draggable = true;
    div.style.backgroundImage = `url("${imagenes[index]}.jpg")`;
//lo agrego a la variable piezas
    piezas.appendChild(div);
    imagenes.splice(index, 1);
}