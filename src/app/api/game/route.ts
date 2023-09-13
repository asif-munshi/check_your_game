import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Read
// export async function GET() {
//     try {
//         const allGames = await prisma.game.findMany()

//         return NextResponse.json(allTodos, { status: 200 })
//     } catch (error) {
//         return NextResponse.json(
//             { data: 'No Todos Found', error },
//             { status: 400 }
//         )
//     }
// }

export async function GET() {
  return NextResponse.json("Hello World!");
}
