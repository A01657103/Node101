/**
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 * # Laboratorio de Desarrollo de Aplicaciones Web
 * Sistema | `app.js`
 *
 * A01657103 | Daniel Bakas Amuchástegui
 *
 * Agosto 12, 2022
 * –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

//* Imports
// Package Imports
const http = require("http");
// Project Imports
const { menu } = require("./menu");

//* Main
const server = http.createServer();
server.listen(3000, () => menu());
