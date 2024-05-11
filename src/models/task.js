import { timeStamp } from "console";
import { Schema, model, models } from "mongoose";
import { type } from "os";

//Se crea un model y un schema, el model me permite crear instancias de la base de datos y el schema es el esquema de la base de datos 


const taskSchema = new Schema({
	title:{
		type: String,
		required: [true,"El titulo es obligatorio"],
		unique: true,
		trim: true,
	},
	description:{
		type: String,
		required: [true,"El description es obligatorio"],
		trim: true,
	},

},
{
	timestamps: true // esto es para que cada vez que se crea un dato en la base de datos se agregue automaticamente la fecha
})

// Si entre todos los modelos existe uno que se llame "Task" usalo, sino crealo 
export default models.Task || model("Task", taskSchema)
