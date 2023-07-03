const users = [
    {
        name: "brayan",
        age: 23,
        ocupation: "dev",
        motivation: "lorem lorem lorem dolares",
        hobbies: ["running", "coding", "eat", "soccer", "video games", "rodar"],
    },
    {
        name: "Edwar León",
        age: 33,
        ocupation: "dev in progress",
        motivation: "ella",
        hobbies: ["ella", "ella", "ella", "ella"],
    },
    {
        name: "Alessandra Bracamonte",
        age: 23,
        ocupation: "Asistente Comercial",
        motivation: "Mis gatos",
        hobbies: ["Musica", "Peliculas", "Leer", "Pokemon Unite"],
    },
    {
        name: "Juan",
        age: 26,
        ocupation: "Dj",
        motivation: "Mi mama xd",
        hobbies: ["Mezclar", "Ir a raves", "futbol", "read"],
    },
    {
        name: "Danilo_Florez",
        age: 25,
        ocupation: "Estudiante y Depotista de alto rendimiento",
        motivation: "El dinero y el exito",
        hobbies: ["programar", "jugar futbol", "dormir", "ir a caminar"],
    },
    {
        name: "Daniel",
        age: 20,
        ocupation: "model",
        motivation: "la fiesta",
        hobbies: ["futbol", "musica", "pasión de gavilanes", "las mujeres"],
    },
    {
        name: "Juan Carcamo",
        age: 23,
        ocupation: "Estudiante",
        motivation: "Los dolares",
        hobbies: ["futbol", "gym", "paliculas", "programar"],
    },
    {
        name: "Yonkleiverson",
        age: 20,
        ocupation: "comerciante",
        motivation: "el tusi",
        hobbies: [
            "jugar free fire",
            "ir a misa",
            "estudiar arduamente",
            "comer perros de 0.5$",
        ],
    },
    {
        name: "Cistian Fabra Lar",
        age: 25,
        ocupation: "Diseño grafico",
        motivation: "Dolares",
        hobbies: ["fut", "box", "bike", "tenis"],
    },
    {
        name: "Sergio",
        age: 24,
        ocupation: "Studing",
        motivation: "$$$",
        hobbies: ["Calistenics", "Guitar", "comer", "pelear"],
    },
    {
        name: "Gustavo Alberto Molano Ruiz",
        age: 54,
        ocupation: "Licenciado en Informática",
        motivation: "motorbikes",
        hobbies: ["programming", "bikes", "databases", "cooking"],
    },
    {
        name: "Polo",
        age: 19,
        ocupation: "aprender a programar",
        motivation: "Euros",
        hobbies: ["ejercicio", "cocinar", "peliculas", "anime"],
    },
    {
        name: "Ariel",
        age: 25,
        ocupation: "joseador",
        motivation: "la plata",
        hobbies: ["fútbol", "River", "Lol", "tarde de plaza con los vagos"],
    },
    {
        name: "Angel Nieto",
        age: 29,
        ocupation: "Maestro de matematicas",
        motivation: "Estudiar",
        hobbies: ["Comer", "Bañarme", "dormir", "jugar parkes"],
    },
    {
        name: "Cristian Agudelo",
        age: 26,
        ocupation: "Papa de un hermoso hijo",
        motivation: "Mi Hijo",
        hobbies: ["Atlético Nacional", "Baloncesto", "Correr", "Billar Pool"],
    },
];

const indexHTML = document.querySelector(".container")

function foundhobbies(hobies) {
    let newhobb = ""
    for (let i = 0; i < hobies.length; i++) {
        newhobb += `<li> ${hobies[i]} </li>`
    }
    return newhobb
}


function giveHTML(userss) {
    let newuss = ""
    for (let i = 0; i <= userss.length - 1; i++) {
        newuss += `<div class= "firstdiv"> <h2 class= "firsth2"> ${userss[i].name} </h2>
      <p class= firstp> ${userss[i].age} </p> 
      <p class="ocupation"> ${userss[i].ocupation} </p> 
      <p class="motivation"> ${userss[i].motivation} </p> 
     <ul class ="hobbies"> ${foundhobbies(userss[i].hobbies)}</ul> 
     </div>`

    }
    indexHTML.innerHTML += newuss
    return newuss
}

giveHTML(users)

