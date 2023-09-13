import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Read
export async function GET(request: Request) {
  const { pathname } = new URL(request.url);
  const id = pathname.split("/")[3];

  try {
    const gameById = await prisma.game.findUnique({
      where: { id: Number(id) },
    });

    return NextResponse.json(gameById, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: "No Game Found", error }, { status: 400 });
  }
}

// Update
export async function PUT(request: Request) {
  const { pathname } = new URL(request.url);
  const id = pathname.split("/")[3];
  const { title } = await request.json();

  try {
    const updatedUser = await prisma.game.update({
      where: { id: Number(id) },
      data: { title },
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: "No Game Found", error }, { status: 400 });
  }
}

// Delete
export async function DELETE(request: NextResponse) {
  const { pathname } = new URL(request.url);
  const id = pathname.split("/")[3];

  try {
    const deleteGame = await prisma.game.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(
      { msg: `${deleteGame.title} has been successfully deleted` },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ data: "No Game Found", error }, { status: 400 });
  }
}
