const datos = {
    personal : {
        "coordinadores": [
            "Jafet Silguero",
            "Emiro Vergara",
            "Alvaro Charris",
            "Carlos Ventura",
            "Oriana Doria",
            "Katherin Chamorro",
            "Geraldin Royert"
        ],     
        "op_pastero": [
            "R. BOSSA",
            "V. RODRIGUEZ",
            "N. BELTRÁN",
            "E. FRONTADO",
            "E. ARDILA",
            "B. GUTIERREZ",
            "O. CAMPO",
            "E. CASTILLO",
            "J. ORTIZ",
            "A. RODRIGUEZ"
        ],    
        "tec_empaque": [
            "J. ROBLES",
            "J. SARMIENTO",
            "L. FONTALVO",
            "R. CASTILLO",
            "J. SERGE",
            "D. BELTRÁN",
            "J. FREILE",
            "E. LÓPEZ",
            "A. CABARCAS",
            "A.OLIVERA",
            "R. SOSA",
            "J. JUNCO"
        ]
    },

    maquinas: {
        "AP1-AP2": [
            "Macarron Largo Doria x 250g",
            "Rigatoni Doria x 500g",
            "Spaghetti Comarrico x 1000g",
            "Spaghetti Comarrico x 120g",
            "Spaghetti Comarrico x 250g",
            "Spaghetti Comarrico x 454g",
            "Spaghetti Comarrico x 500g",
            "Spaghetti Comarrico x 120g 1/4 SM",
            "Spaghetti con proteina arveja KIBO x 220g",
            "Spaghetti Doria x 1000g",
            "Spaghetti Doria x 125g",
            "Spaghetti Doria x 200g",
            "Spaghetti Doria x 250g",
            "Spaghetti Doria x 500g",
            "Pqt Capellini Monticello x 454g",
            "Spaghetti Doria x 800g"
        ],
        "EM": [
            "4 Capellini Monticello x 454g",
            "Canelloni Monticello x 250g",
            "Canelones Doria x 250g",
            "Canelones Lucchetti x 250g",
            "Nidos Doria x 400g",
            "Pasta Comarrico surtida 50und120gr"
        ],
        "R1-R2": [
            'Guarguerones Doria x 250g'
        ],
        "SCHIB": [
            "Lasagna Pan pa Ya! x 16 kg",
            "Lasagna Doria Precocida x 15 kg",
            "Lasagna Doria precocida x 2.5kg x 6und",
            "Lasagna Doria Precocida x 200g",
            "Lasagna Doria Precocida x 380g mas Molde",
            "Lasagna Doria Precocida x 400g",
            "Lasagna Doria precocida x 5000g",
            "Lasagna Doria Precocida x 500g",
            "Lasagna Doria Tentacion Chocolate x 250g",
            "Lasagna Doria x 454g UP",
            "Lasagna No510 Monticello Prec x 750g NOV"
        ],
        "M1-M2-M3": [
            'Cabello de Ángel Doria x 125g',
            'Cabello de Ángel Doria x 250g',
            'Cabello de Ángel Doria x 500g',
            'Canelloni Monticello EdicEspecial x 250g',
            'Caracol Comarrico x 120g',
            'Caracol Comarrico x 250g',
            'Caracol Comarrico x 500g',
            'Caracol Comarrico x 1000g',
            'Caracol Comarrico x 454g',
            'Coditos Comarrico x 250g',
            'Codo Doria x 250g',
            'Concha Doria x 1000g',
            'Concha Doria x 125g',
            'Concha Doria x 250g',
            'Concha Doria x 500g',
            'Fideo Comarrico x 120g',
            'Fideo Comarrico x 120g 1/4 SM',
            'Fideo Comarrico x 120g Plan Bquilla',
            'Fideo Comarrico x 250g',
            'Fideo Comarrico x 454g',
            'Fideo Comarrico x 500g',
            'Fideo Comarrico x 85g',
            'Fideo Comarrico x 1000g',
            'Fideo Doria x 125g',
            'Fideo Doria x 200g',
            'Fideo Doria x 250g',
            'Fideo Doria x 500g',
            'Granel Macarron Instantaneo',
            'Mac. Corto Comarrico x 120g',
            'Mac. Corto Comarrico x 250g',
            'Macarron corto Comarrico x 500g',
            'Macarron Doria x 1000g',
            'Macarron Doria x 125g',
            'Macarron Doria x 250g',
            'Macarron Doria x 500g',
            'Mac. Grueso Comarrico x 250g',
            'Mac. Grueso Comarrico x1000g',
            'Rigatoni Doria x 125g',
            'Rigatoni Doria x 250g',
            'Surtida DORIA Clasica x 250gx24und',
            'Tagliatelle Nidi Monticello x 250g',
            'Tornillo Comarrico x 250g',
            'Tornillo Comarrico x 1000g',
            'Tornillo Doria x 250g',
            'Fideo Comarrico x 190g',
            'Caracol Comarrico x 190g',
            'Concha Doria x 200g',
            'Spaghetti Comarrico x 400g',
            'Fideo Comarrico x 400g',
            'Macarron corto Comarrico x 454g',
            'Surtida Doria x 250g',
            'Tagliatelle Nidi Monticello x 250g',
            'Tornillo Comarrico x 250g',
            'Tornillo Comarrico x 1000g',
            'Canelloni Monticello x 250g Ed. Especial',
            'Spaghetti Comarrico x 400g',
            'Fideo Comarrico x 400g',
            'Caracol Comarrico x 190g',
            'Mac. Corto Comarrico x 454g',
            'Rigattoni Doria x 454g U',
            'Tornillo Kibo x 220g',
            'Lasagna Monticello x 400g'
        ]
    }
}

/* FUNCIONES AL INICIAR PAGINA */
window.onload = () => {
    document.getElementById('fecha').value = fecha_hoy();
    cargar_coordinadores(datos);
    cargar_tecnico_empaque(datos);
}

/* FUNCION PARA OBTENER LA FECHA DE HOY */
function fecha_hoy () {
    let fecha_hoy = new Date().toLocaleDateString();
    fecha_hoy = fecha_hoy.split('/').reverse();

    let fecha_con_ceros = fecha_hoy.map((data) => {
        if (data.length == 1) {
            return data = 0 + data;
        }
        return data;
    });

    let formato_fecha = "";
    for (let i in fecha_con_ceros) {
        i != fecha_con_ceros.length-1
        ? formato_fecha = formato_fecha + fecha_con_ceros[i] + "-"
        : formato_fecha = formato_fecha + fecha_con_ceros[i];
    }

    return formato_fecha;
}

/* CARGA DE COORDINADORES */
function cargar_coordinadores (datos) {
    let $select_coordinadores = document.getElementById('coordinadores');
    datos.personal.coordinadores.forEach(coordinador => {
        let html_option = document.createElement('option');
        html_option.value = coordinador;
        html_option.text = coordinador;
        $select_coordinadores.appendChild(html_option);
    });
}

/* CARGAR TECNICOS DE EMPAQUE */
function cargar_tecnico_empaque (datos) {
    let $select_coordinadores = document.getElementById('tecnicos_emp');
    datos.personal.tec_empaque.forEach(tecnico => {
        let html_option = document.createElement('option');
        html_option.value = tecnico;
        html_option.text = tecnico;
        $select_coordinadores.appendChild(html_option);
    });
}

console.log(datos.maquinas.SCHIB);