/**
 * @file orderby.js
 * @version 1.0
 * @author Linea de Codigo (http://lineadecodigo.com)
 * @date   2-febrero-2014
 * @url  http://lineadecodigo.com/mongodb/ordenaciones-en-mongodb/
 * @description Realizar ordenaciones en MongoDB
 */

conn = new Mongo();
db = conn.getDB("demografia");


function mostrarDatos(cursor) {
	while (cursor.hasNext()){
		printjson(cursor.next());
	}
}

// Consulta ordenando elementos
cursor = db.ciudades.find().sort({ciudad:1});
print("Ordenación Ascendente");
mostrarDatos(cursor);

// Ordenar descendentemente 
cursor = db.ciudades.find().sort({ciudad:-1});
print("Ordenación Descendente");
mostrarDatos(cursor);

// concatenado con el sort
print("Ordenación Ascendente y Limite de Datos");
cursor = db.ciudades.find().sort({ciudad:1}).limit(4);
mostrarDatos(cursor);