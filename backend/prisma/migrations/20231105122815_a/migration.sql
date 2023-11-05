/*
  Warnings:

  - You are about to drop the column `description` on the `Route` table. All the data in the column will be lost.
  - Added the required column `name` to the `Coordinate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Route` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Coordinate" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "routeId" INTEGER NOT NULL,
    CONSTRAINT "Coordinate_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "Route" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Coordinate" ("description", "id", "latitude", "longitude", "routeId") SELECT "description", "id", "latitude", "longitude", "routeId" FROM "Coordinate";
DROP TABLE "Coordinate";
ALTER TABLE "new_Coordinate" RENAME TO "Coordinate";
CREATE TABLE "new_Route" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Route" ("id") SELECT "id" FROM "Route";
DROP TABLE "Route";
ALTER TABLE "new_Route" RENAME TO "Route";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
