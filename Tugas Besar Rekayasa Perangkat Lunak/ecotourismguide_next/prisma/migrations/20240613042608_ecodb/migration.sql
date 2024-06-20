/*
  Warnings:

  - You are about to drop the column `Deskripsi_wisata` on the `pelaku_wisata` table. All the data in the column will be lost.
  - You are about to drop the column `alamat` on the `pelaku_wisata` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `pelaku_wisata` table. All the data in the column will be lost.
  - You are about to drop the column `fasilitas` on the `pelaku_wisata` table. All the data in the column will be lost.
  - You are about to drop the column `nama_wisata` on the `pelaku_wisata` table. All the data in the column will be lost.
  - You are about to drop the column `no_telpon` on the `pelaku_wisata` table. All the data in the column will be lost.
  - You are about to drop the column `tarif` on the `pelaku_wisata` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `pelaku_wisata` DROP COLUMN `Deskripsi_wisata`,
    DROP COLUMN `alamat`,
    DROP COLUMN `email`,
    DROP COLUMN `fasilitas`,
    DROP COLUMN `nama_wisata`,
    DROP COLUMN `no_telpon`,
    DROP COLUMN `tarif`;
