import Task from "@/models/task";
import { connectDB } from "@/utils/mongoose";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  connectDB();
  try {
    const taskFound = await Task.findById(params.id);
    if (!taskFound) {
      return NextResponse.json(
        {
          message: "No se encontro la tarea",
        },
        { status: 404 }
      );
    }
    return NextResponse.json(taskFound);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al buscar tarea con ese id" },
      { status: 400 }
    );
  }
}

export async function DELETE(request, { params }) {
  connectDB();
  try {
    const taskDeleted = await Task.findByIdAndDelete(params.id);
    if(!taskDeleted) {
			return NextResponse.json({ message: `No se encontro la tarea ${params.id}` }, { status: 404 });
		}
		return NextResponse.json(
      { taskDeleted },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json(); // objeto que recibo
    const taskUpdated = await Task.findByIdAndUpdate(params.id, data, {
      new: true, // Si no ponemos el new en true nos devuelve el objeto viejo
    });

    return NextResponse.json(taskUpdated);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
