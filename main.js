/*--------------------------------------------------------------cargo las img y variables en el Array imagenes*/

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
//Por un lado, genero un n° random q' me servirá como subíndice del array imagenes p/elegir alguna img.
//Por otro lado, creo un contenedor div con un id, una clase y un estilo en línea c/la img de fondo q' le corresponda.

while (imagenes.length) {
//es .lenght pq el n° de img va a ir disminuyendo. Genero un index dinámico
    const index = Math.floor(Math.random() * imagenes.length);
//dibujo en la pantalla las piezas
    const div = document.createElement('div');
    div.className = 'pieza';
    div.id = imagenes[index]; //el id es p/poder identificarlo. En este caso va a ser el nombre de la img q' guardé en el Srray imagenes.
    div.draggable = true; //acá le pongo el efecto de arrastrar
    div.style.backgroundImage = `url("${imagenes[index]}.jpg")`;//asigno la img q' corresponda c/este estilo en línea.
//lo agrego a la variable piezas
    piezas.appendChild(div); //el div q' cree hay q' colocarlo en el contenedor/variable llamado 'piezas'.
    imagenes.splice(index, 1);
}


//p/agregar los espacios rectangulares dentro del puzzle al q' va a ir c/pieza.
for (let i = 0; i < terminado; i++) {
    const div = document.createElement('div');
    div.className = 'placeholder'; //clase definida en el CSS
    div.dataset.id = i;  //q'guarde internamente una referencia de qué img podría llegar a recibir
    puzzle.appendChild(div);//lo anterior se agrega en el contenedor/variable 'puzzle'.
}