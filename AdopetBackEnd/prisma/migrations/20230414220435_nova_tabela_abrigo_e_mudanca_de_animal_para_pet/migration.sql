/*
  Warnings:

  - You are about to drop the `Animal` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Animal";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Pets" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "idade" TEXT NOT NULL,
    "porte" TEXT NOT NULL,
    "descricao" TEXT,
    "foto" TEXT,
    "tutorId" TEXT,
    "abrigoId" TEXT NOT NULL,
    "adotado" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Pets_tutorId_fkey" FOREIGN KEY ("tutorId") REFERENCES "Tutor" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Pets_abrigoId_fkey" FOREIGN KEY ("abrigoId") REFERENCES "Abrigo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Abrigo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "numero" TEXT NOT NULL
);
