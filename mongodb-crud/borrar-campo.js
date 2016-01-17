/**
 * @file borrar-campo.js
 * @version 1.0
 * @author Linea de Codigo (http://lineadecodigo.com)
 * @date   17/enero/2016
 * @url  http://lineadecodigo.com/mongodb/xxx/
 * @description Borra un campo en concreto de un documento
 */

conn = new Mongo();
db = conn.getDB("demografia");

// Actualizamos insertando un dato de prueba
update = db.ciudades.update({"ciudad":"Zaragoza"},{$set:{"catedrales":2}})
print('Documentos actualizados ' + update["nMatched"]);

// Mostramos el contenido
documento = db.ciudades.findOne({ciudad:"Zaragoza"});
printjson(documento);

// Eliminamos el campo
update = db.ciudades.update({"ciudad":"Zaragoza"},{$unset:{"catedrales":""}})
print('Documentos actualizados ' + update["nMatched"]);

// Mostramos el contenido
documento = db.ciudades.findOne({ciudad:"Zaragoza"});
printjson(documento);