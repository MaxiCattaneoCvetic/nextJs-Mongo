import {connect,connection} from 'mongoose';


const conn = {
	isConnected: false
}

export async  function connectDB(){

	// consultamos si tenemos una conexion activa, si la tenemos retornamos y no hacemos la conexion nuevamente, de lo contrario nos conectamos
	if(conn.isConnected){return}
	// cuando la conexión se conecta devuelve un objeto
	const db = await connect('mongodb://localhost:27017/nextjs-mongodb');
	console.log(db.connection.db.databaseName);
	conn.isConnected = db.connections[0].readyState
} 

connection.on('connect',()=> console.log('conectado'))
connection.on('error',()=> console.log('error al conectarse a la base de datos'))