/**
 * ========================================
 * BASE DE DATOS INICIAL - OBRAS DE ARTE
 * ========================================
 * Este archivo inicializa el localStorage con las obras originales
 * Solo se ejecuta la primera vez o cuando hay menos de 12 obras
 */

// Array con las 12 obras originales del museo
const obrasIniciales = [
    {
        id: 1,
        titulo: "Manifestación",
        artista: "Antonio Berni",
        anio: 1934,
        tecnica: "Temple sobre arpillera",
        dimensiones: "180 x 249,5 cm",
        descripcion: "Obra icónica del maestro del realismo social argentino, representa la pasión y el drama humano.",
        imagen: "../img/Manifestación.jpg"
    },
    {
        id: 2,
        titulo: "Composition (Composición)",
        artista: "Tomás Maldonado",
        anio: 1950,
        tecnica: "Óleo sobre tela",
        dimensiones: "100 x 73 cm",
        descripcion: "Ejemplo temprano de abstracción geométrica en el arte argentino moderno.",
        imagen: "../img/Composition.jpg"
    },
    {
        id: 3,
        titulo: "Riachuelo",
        artista: "Benito Quinquela Martín",
        anio: 1930,
        tecnica: "Óleo sobre tela",
        dimensiones: "59 x 69 cm",
        descripcion: "Representación vibrante del puerto de Buenos Aires, capturando la esencia del trabajo portuario.",
        imagen: "../img/Riachuelo.jpg"
    },
    {
        id: 4,
        titulo: "Figura",
        artista: "Lino Enea Spilimbergo",
        anio: 1945,
        tecnica: "Témpera sobre tela",
        dimensiones: "95 x 69 cm",
        descripcion: "Intimo retrato que captura la psicología del modelo con maestría técnica.",
        imagen: "../img/Figura.jpg"
    },
    {
        id: 5,
        titulo: "El drama",
        artista: "Raquel Forner",
        anio: 1942,
        tecnica: "Óleo sobre tela",
        dimensiones: "126 x 174 cm",
        descripcion: "Composición surrealista que explora temas oníricos y simbólicos.",
        imagen: "../img/El drama.jpg"
    },
    {
        id: 6,
        titulo: "Piai",
        artista: "Xul Solar",
        anio: 1940,
        tecnica: "Acuarela sobre papel",
        dimensiones: "15 x 21 cm",
        descripcion: "Obra mística que representa la identidad cultural argentina con elementos esotéricos.",
        imagen: "../img/Piai.jpg"
    },
    {
        id: 7,
        titulo: "Costa del Río de la Plata",
        artista: "Prilidiano Pueyrredón",
        anio: 1870,
        tecnica: "Óleo sobre chapa",
        dimensiones: "18 x 30 cm",
        descripcion: "Representación romántica del paisaje de la Buenos Aires argentina del siglo XIX.",
        imagen: "../img/Costa del Río de la Plata.jpg"
    },
    {
        id: 8,
        titulo: "Sin título",
        artista: "Antonio Seguí",
        anio: 1987,
        tecnica: "Óleo sobre tela",
        dimensiones: "200 x 247 cm",
        descripcion: "Interpretación pop-art de temas políticos y sociales en Argentina.",
        imagen: "../img/Sin título.jpg"
    },
    {
        id: 9,
        titulo: "Adolescente",
        artista: "María Carmen Portela",
        anio: 1958,
        tecnica: "Grabado sobre papel",
        dimensiones: "29,5 x 23 cm",
        descripcion: "Intenso autorretrato que refleja la expresividad del arte femenino argentino.",
        imagen: "../img/Adolescente.jpg"
    },
    {
        id: 10,
        titulo: "Pintura Madi A-3",
        artista: "Gyula Kosice",
        anio: 1946,
        tecnica: "Técnica mixta",
        dimensiones: "64 x 39 cm",
        descripcion: "Exploración del arte cinético y la abstracción geométrica en Argentina.",
        imagen: "../img/Pintura Madi A-3.jpg"
    },
    {
        id: 11,
        titulo: "La cesta de verduras",
        artista: "Horacio Butler",
        anio: 1935,
        tecnica: "Óleo sobre tela",
        dimensiones: "81 x 100 cm",
        descripcion: "Escena costumbrista que captura la vida cotidiana del Buenos Aires de entreguerras.",
        imagen: "../img/La cesta de verduras.jpg"
    },
    {
        id: 12,
        titulo: "Pintura",
        artista: "Sarah Grilo",
        anio: 1960,
        tecnica: "Óleo sobre tela",
        dimensiones: "65 x 81 cm",
        descripcion: "Abstracción lírica que representa la evolución del arte informalista en Argentina.",
        imagen: "../img/Pintura.jpg"
    }
];

/**
 * Función que inicializa la base de datos en localStorage
 * Se ejecuta automáticamente al cargar el script
 */
function inicializarDB() {
    // Intentar obtener las obras guardadas en localStorage
    const obrasGuardadas = localStorage.getItem('obras');

    // Si NO hay nada guardado, inicializar con las obras originales
    if (!obrasGuardadas) {
        console.log('📦 Inicializando base de datos de obras...');
        localStorage.setItem('obras', JSON.stringify(obrasIniciales));
    } else {
        // Si YA hay obras guardadas, verificar que estén las originales
        const obras = JSON.parse(obrasGuardadas);

        // Si hay menos de 12 obras, restaurar las originales
        if (obras.length < 12) {
            console.log('🔄 Restaurando obras originales...');

            // Crear array con las obras originales
            const obrasRestauradas = [...obrasIniciales];

            // Agregar las obras nuevas que el usuario haya agregado
            obras.forEach(obra => {
                // Verificar si la obra NO es una de las originales (comparar por ID)
                const esOriginal = obrasIniciales.some(original => original.id === obra.id);

                // Si NO es original, agregarla al array restaurado
                if (!esOriginal) {
                    obrasRestauradas.push(obra);
                }
            });

            // Guardar el array restaurado en localStorage
            localStorage.setItem('obras', JSON.stringify(obrasRestauradas));
        } else {
            console.log('✅ Base de datos ya inicializada.');
        }
    }
}

// Ejecutar la inicialización al cargar el script
inicializarDB();
