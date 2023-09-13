import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Create
export async function POST(request: Request) {
  const { title } = await request.json();

  try {
    const createGame = await prisma.game.create({
      data: { title },
    });

    return NextResponse.json(createGame, { status: 201 });
  } catch (error) {
    return NextResponse.json({ data: "No Game Found", error }, { status: 400 });
  }
}

// Read
export async function GET() {
  try {
    const allGames = await prisma.game.findMany();

    return NextResponse.json(allGames, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { data: "No Games Found", error },
      { status: 400 },
    );
  }
}
