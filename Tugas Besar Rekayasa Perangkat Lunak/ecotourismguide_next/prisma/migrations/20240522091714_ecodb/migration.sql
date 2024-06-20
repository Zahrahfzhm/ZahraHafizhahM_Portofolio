-- CreateTable
CREATE TABLE `_ContentToDinas_pariwisata` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ContentToDinas_pariwisata_AB_unique`(`A`, `B`),
    INDEX `_ContentToDinas_pariwisata_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ContentToDinas_pariwisata` ADD CONSTRAINT `_ContentToDinas_pariwisata_A_fkey` FOREIGN KEY (`A`) REFERENCES `Content`(`content_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ContentToDinas_pariwisata` ADD CONSTRAINT `_ContentToDinas_pariwisata_B_fkey` FOREIGN KEY (`B`) REFERENCES `Dinas_pariwisata`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
