/*
  Warnings:

  - You are about to drop the column `Content` on the `Content` table. All the data in the column will be lost.
  - Added the required column `url` to the `Content` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Content` DROP COLUMN `Content`,
    ADD COLUMN `url` VARCHAR(191) NOT NULL;
