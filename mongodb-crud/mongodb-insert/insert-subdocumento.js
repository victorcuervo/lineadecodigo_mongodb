/**
 * @file insert-subdocumento.js
 * @version 1.0
 * @author Linea de Codigo (http://lineadecodigo.com)
 * @date   18/enero/2016
 * @url  http://lineadecodigo.com/mongodb/insertar-subdocumento-en-mongodb/
 * @description Inserta un subdocumento en una colección
 */

conn = new Mongo();
db = conn.getDB("demografia");

var ciudad = new Object();
ciudad.nombre = "Avila";
ciudad.habitantes = 58358 ;

// Subdocumento con la ubicación
var geo = new Object();
geo.altitud = 1131;
geo.latitud = 40.654347222222;
geo.longitud = -4.6962222222222;

ciudad.geo = geo; 

x = db.ciudades.insert(ciudad);

print ('El número de documentos insertado es de '+ x['nInserted']);