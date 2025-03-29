/*
  Warnings:

  - Added the required column `location` to the `Location` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
CREATE EXTENSION postgis;
ALTER TABLE "Location" ADD COLUMN     "location" geometry(Point, 4326) NOT NULL;

-- CreateIndex
CREATE INDEX "location_idx" ON "Location" USING GIST ("location");