/**
 * @file insert.js
 * @version 1.0
 * @author Linea de Codigo (http://lineadecodigo.com)
 * @date   18/enero/2016
 * @url  http://lineadecodigo.com/mongodb/insertar-documento-en-mongodb/
 * @description Inserta un documento en una colección
 */

conn = new Mongo();
db = conn.getDB("demografia");

var documento = new Object();
documento.ciudad = "Salamanca";
documento.habitantes = 154462;
x = db.ciudades.insert(documento);

print ('El número de documentos insertado es de '+ x['nInserted']);