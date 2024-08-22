// Se inicializa la lista de compras y las categorías correspondientes
let listaDeCompras = {
    "Frutas": [],
    "Lácteos": [],
    "Congelados": [],
    "Dulces": [],
    "Otros": []
};

// Crear Función para agregar un alimento a la lista

function agregarAlimento() {
    let alimento = document.getElementById("alimento").value;
    let categoria = document.getElementById("categoria").value;

    // Validar que se ha ingresado un alimento
    if (alimento.trim() === "") {
        alert("Se debe ingresar un alimento a listar, no se registra elemento!");
        return;
    }

    // Agregar el alimento a la categoría seleccionada
    listaDeCompras[categoria].push(alimento);

    // Limpiar el campo de entrada
    document.getElementById("alimento").value = "";
    alert(`${alimento} ha sido agregado a la categoría ${categoria}.`);
}

// Función para mostrar la lista de compras
function mostrarLista() {
    let listaHTML = "<h2>Lista de Compras:</h2>";

    for (let categoria in listaDeCompras) {
        if (listaDeCompras[categoria].length > 0) {
            listaHTML += `<strong>${categoria}:</strong> ${listaDeCompras[categoria].join(", ")}<br>`;
        }
    }

    document.getElementById("listaDeCompras").innerHTML = listaHTML;
}

function eliminarAlimento() {
    let alimento = document.getElementById("alimento").value;
    let categoria = document.getElementById("categoria").value;

    // Validar que se ha ingresado un alimento
    if (alimento.trim() === "") {
        alert("Por favor, ingresa un alimento.");
        return;
    }

    // Verificar si la categoría existe y contiene alimentos
    if (listaDeCompras[categoria]) {
        // Encontrar el índice del alimento en la categoría
        let indice = listaDeCompras[categoria].indexOf(alimento);

        // Verificar si el alimento existe en la categoría
        if (indice > -1) {
            // Eliminar el alimento de la lista
            listaDeCompras[categoria].splice(indice, 1);
            alert(`${alimento} ha sido eliminado de la categoría ${categoria}.`);
        } else {
            alert(`El alimento ${alimento} no se encontró en la categoría ${categoria}.`);
        }
    } else {
        alert(`La categoría ${categoria} no existe.`);
    }

    // Limpiar el campo de entrada
    document.getElementById("alimento").value = "";

    // Actualizar la lista de compras en la pantalla
    mostrarLista();
}