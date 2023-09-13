-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(32) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);
