/*
  Warnings:

  - Added the required column `health` to the `Server` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastMaintenance` to the `Server` table without a default value. This is not possible if the table is not empty.
  - Added the required column `storage` to the `Server` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Server` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uptime` to the `Server` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Server" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "cpu" INTEGER NOT NULL,
    "memory" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "health" INTEGER NOT NULL,
    "storage" INTEGER NOT NULL,
    "uptime" TEXT NOT NULL,
    "lastMaintenance" TEXT NOT NULL,
    "displayId" TEXT
);
INSERT INTO "new_Server" ("cpu", "id", "location", "memory", "name", "status") SELECT "cpu", "id", "location", "memory", "name", "status" FROM "Server";
DROP TABLE "Server";
ALTER TABLE "new_Server" RENAME TO "Server";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
