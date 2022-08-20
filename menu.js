/*
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
# Laboratorio de Desarrollo de Aplicaciones Web
Módulo | `menu.js`

Funciones matemáticas básicas.

A01657103 | Daniel Bakas Amuchástegui

Agosto 19, 2022
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
*/

//* Imports
const prompt = require("prompt-sync")();

//* Main
const controller = require("./controller");

const menu = async () => {
    console.log("========================================================");
    console.log("Calculadora v1.0");
    while (true) {
        console.log("========================================================");
        console.log("Menu");
        console.log(" 1. Divide");
        console.log(" 2. Módulo");
        console.log(" 3. Multiplica");
        console.log(" 4. Resta");
        console.log(" 5. Suma");
        console.log(" 0. Salir");
        console.log("========================================================");
        let i = prompt("Ingrese la opción deseada, luego presione [Enter]: ");
        i = Number(i);
        if (i <= 0) break;
        console.log("========================================================");
        let a = Number(prompt("Ingrese el valor de A, luego presione [Enter]: "));
        let b = Number(prompt("Ingrese el valor de B, luego presione [Enter]: "));
        console.log("========================================================");
        const result = controller[i - 1](a, b);
        console.log(`Resultado: ${result}`);
    }
    console.log("========================================================");
    console.log("¡Hasta la vista, baby!");
    console.log("========================================================");
};


module.exports = { menu };
