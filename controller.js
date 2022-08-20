/*
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
# Laboratorio de Desarrollo de Aplicaciones Web
Módulo | `controller.js`

Funciones matemáticas básicas.

A01657103 | Daniel Bakas Amuchástegui

Agosto 12, 2022
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
*/

//* Imports
const divide = (a, b) => { return a / b; };
const modulo = (a, b) => { return a % b; };
const multiplica = (a, b) => { return a * b; };
const resta = (a, b) => { return a - b; };
const suma = (a, b) => { return a + b; };

module.exports = [divide, modulo, multiplica, resta, suma];
