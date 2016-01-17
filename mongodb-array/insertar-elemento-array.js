/**
 * @file insertar-elementos-array.js
 * @version 1.0
 * @author Linea de Codigo (http://lineadecodigo.com)
 * @date   18/enero/2016
 * @url  http://lineadecodigo.com/mongodb/anadir-un-valor-a-un-array-en-mongodb/
 * @description Inserta un elemento en un campo array de un documento MongoDB
 */

conn = new Mongo();
db = conn.getDB("demografia");

// Actualizamos insertando un dato de prueba
update = db.ciudades.update({ciudad:"Zaragoza"},{$push:{monumentos:"Basílica del Pilar"}})
print('Documentos actualizados ' + update["nMatched"]);

// Mostramos el contenido
documento = db.ciudades.findOne({ciudad:"Zaragoza"});
printjson(documento);