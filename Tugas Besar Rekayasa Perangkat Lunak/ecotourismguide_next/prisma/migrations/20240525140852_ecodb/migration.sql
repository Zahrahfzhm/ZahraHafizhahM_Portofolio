/*
  Warnings:

  - You are about to drop the column `destinasi_id` on the `Pelaku_wisata` table. All the data in the column will be lost.
  - Added the required column `password` to the `Pelaku_wisata` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Pelaku_wisata` DROP COLUMN `destinasi_id`,
    ADD COLUMN `password` VARCHAR(255) NOT NULL;
