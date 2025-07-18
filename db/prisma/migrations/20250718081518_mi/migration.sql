/*
  Warnings:

  - Added the required column `agents` to the `Operation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estimatedCompletion` to the `Operation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Operation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `objectives` to the `Operation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Operation` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Operation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "priority" TEXT NOT NULL,
    "progress" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "agents" INTEGER NOT NULL,
    "startDate" TEXT NOT NULL,
    "estimatedCompletion" TEXT NOT NULL,
    "objectives" TEXT NOT NULL,
    "displayId" TEXT
);
INSERT INTO "new_Operation" ("description", "id", "name", "priority", "progress", "status") SELECT "description", "id", "name", "priority", "progress", "status" FROM "Operation";
DROP TABLE "Operation";
ALTER TABLE "new_Operation" RENAME TO "Operation";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
