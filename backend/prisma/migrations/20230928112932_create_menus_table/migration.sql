-- CreateTable
CREATE TABLE `menus` (
    `menu_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `price` INTEGER NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `category_id` INTEGER NOT NULL,

    UNIQUE INDEX `menus_name_key`(`name`),
    PRIMARY KEY (`menu_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE InnoDB;

-- AddForeignKey
ALTER TABLE `menus` ADD CONSTRAINT `menus_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories`(`category_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
