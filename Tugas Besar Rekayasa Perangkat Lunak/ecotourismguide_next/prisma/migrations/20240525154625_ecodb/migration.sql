/*
  Warnings:

  - You are about to alter the column `tarif` on the `Pelaku_wisata` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE `Pelaku_wisata` MODIFY `tarif` VARCHAR(255) NOT NULL DEFAULT '';
