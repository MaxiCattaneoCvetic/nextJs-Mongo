import { NextResponse } from "next/server";

// request es la info que viene del client
export function POST(request, { params }) {
	console.log(params);
  return NextResponse.json({ message: `Hola ${params.id}` });
}

export function DELETE(request,{params}){
	return NextResponse.json({ message: `Borrando ${params.id}` });
	
}