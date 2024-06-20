-- CreateTable
CREATE TABLE `Dinas_pariwisata` (
    `dinas_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `jabatan` VARCHAR(191) NOT NULL,
    `divisi` VARCHAR(191) NOT NULL,
    `no_tlp` INTEGER NOT NULL,

    PRIMARY KEY (`dinas_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Wisatawan` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_wisatawan` VARCHAR(255) NOT NULL,
    `jenis_kelamin` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Destinasi` (
    `destination_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_destinasi` VARCHAR(255) NOT NULL,
    `deskripsi` VARCHAR(255) NOT NULL,
    `jenis_wisata` VARCHAR(191) NOT NULL,
    `fasilitas` VARCHAR(191) NOT NULL,
    `harga` VARCHAR(255) NOT NULL,
    `lokasi` VARCHAR(255) NOT NULL,
    `daerah` VARCHAR(191) NOT NULL,
    `rating_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`destination_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rating` (
    `rating_id` INTEGER NOT NULL AUTO_INCREMENT,
    `rating` INTEGER NOT NULL,
    `review` VARCHAR(191) NOT NULL,
    `destination_id` INTEGER NOT NULL,

    PRIMARY KEY (`rating_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transportasi` (
    `transportasi_id` INTEGER NOT NULL AUTO_INCREMENT,
    `transportasi_tipe` VARCHAR(255) NOT NULL,
    `estimasi` VARCHAR(255) NOT NULL,
    `destination_id` INTEGER NOT NULL,

    PRIMARY KEY (`transportasi_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StatusReg` (
    `statusreg_id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` VARCHAR(255) NOT NULL,
    `dinas_id` INTEGER NOT NULL,
    `destinasi_id` INTEGER NOT NULL,

    PRIMARY KEY (`statusreg_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pelaku_wisata` (
    `pelaku_id` INTEGER NOT NULL AUTO_INCREMENT,
    `destinasi_id` INTEGER NOT NULL,
    `nama_pelaku` VARCHAR(255) NOT NULL,
    `statusreg_id` INTEGER NOT NULL,

    PRIMARY KEY (`pelaku_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Content` (
    `content_id` INTEGER NOT NULL AUTO_INCREMENT,
    `content_tipe` VARCHAR(255) NOT NULL,
    `content_deskripsi` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`content_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
