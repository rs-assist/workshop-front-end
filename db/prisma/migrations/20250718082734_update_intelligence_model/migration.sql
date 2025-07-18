/*
  Warnings:

  - Added the required column `date` to the `Intelligence` table without a default value. This is not possible if the table is not empty.
  - Added the required column `source` to the `Intelligence` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Intelligence` table without a default value. This is not possible if the table is not empty.
  - Added the required column `summary` to the `Intelligence` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tags` to the `Intelligence` table without a default value. This is not possible if the table is not empty.
  - Added the required column `threat` to the `Intelligence` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Intelligence" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "priority" TEXT NOT NULL,
    "classification" TEXT NOT NULL,
    "sources" INTEGER NOT NULL,
    "source" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "threat" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "displayId" TEXT
);
INSERT INTO "new_Intelligence" ("classification", "id", "location", "priority", "sources", "title") SELECT "classification", "id", "location", "priority", "sources", "title" FROM "Intelligence";
DROP TABLE "Intelligence";
ALTER TABLE "new_Intelligence" RENAME TO "Intelligence";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
