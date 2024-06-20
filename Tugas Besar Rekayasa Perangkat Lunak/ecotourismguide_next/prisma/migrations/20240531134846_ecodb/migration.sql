/*
  Warnings:

  - You are about to drop the column `content_deskripsi` on the `Content` table. All the data in the column will be lost.
  - You are about to drop the column `content_tipe` on the `Content` table. All the data in the column will be lost.
  - Added the required column `Caption` to the `Content` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Content` to the `Content` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Judul` to the `Content` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Content` DROP COLUMN `content_deskripsi`,
    DROP COLUMN `content_tipe`,
    ADD COLUMN `Caption` VARCHAR(255) NOT NULL,
    ADD COLUMN `Content` VARCHAR(255) NOT NULL,
    ADD COLUMN `Judul` VARCHAR(255) NOT NULL;
