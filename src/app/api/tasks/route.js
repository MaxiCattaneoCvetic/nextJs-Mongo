import { NextResponse } from "next/server";
import {connectDB} from "@/utils/mongoose";
import Task from "@/models/task";


export async function GET() {
  connectDB();
  const tasks = await Task.find()
  return NextResponse.json(tasks);
}



// request es la info que viene del client
export async function POST(request) {
    //recibo el body
  try{
    const data = await request.json();
    const newTask = new Task(data)
    const savedTask = await newTask.save()
    console.log(savedTask);
    return NextResponse.json(
      { savedTask },
    );
    
  }catch(error){
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
	

}


