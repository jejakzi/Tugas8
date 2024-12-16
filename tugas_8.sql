-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.32-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for tugas_8
CREATE DATABASE IF NOT EXISTS `tugas_8` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `tugas_8`;

-- Dumping structure for table tugas_8.reservations
CREATE TABLE IF NOT EXISTS `reservations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `restaurant_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table tugas_8.reservations: ~6 rows (approximately)
INSERT INTO `reservations` (`id`, `restaurant_id`, `user_id`, `date`, `createdAt`, `updatedAt`) VALUES
	(1, 2, 1, '2024-12-01 00:00:00', '2024-12-16 12:40:12', '2024-12-16 12:40:12'),
	(2, 2, 1, '2024-12-01 00:00:00', '2024-12-16 12:40:56', '2024-12-16 12:40:56'),
	(19, 2, 1, '2024-12-01 00:00:00', '2024-12-16 12:53:56', '2024-12-16 12:53:56'),
	(20, 2, 1, '2024-11-01 00:00:00', '2024-12-16 12:57:35', '2024-12-16 12:57:35'),
	(21, 2, 1, '2025-01-01 00:00:00', '2024-12-16 12:57:44', '2024-12-16 12:57:44'),
	(22, 3, 1, '2025-01-01 00:00:00', '2024-12-16 13:02:18', '2024-12-16 13:02:18');

-- Dumping structure for table tugas_8.restaurants
CREATE TABLE IF NOT EXISTS `restaurants` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `slot` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table tugas_8.restaurants: ~2 rows (approximately)
INSERT INTO `restaurants` (`id`, `name`, `slot`, `createdAt`, `updatedAt`) VALUES
	(2, 'gyukaku', 3, '2024-12-16 12:26:38', '2024-12-16 12:42:12'),
	(3, 'Bebek Kaleyo', 5, '2024-12-16 13:01:54', '2024-12-16 13:01:54');

-- Dumping structure for table tugas_8.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table tugas_8.users: ~1 rows (approximately)
INSERT INTO `users` (`id`, `username`, `password`, `createdAt`, `updatedAt`) VALUES
	(1, 'budi', '$2b$10$yXyr19XbFO8yYzp6XzctXOY4N42hsYnSsAiFzuCwxfTJQTplCLbEy', '2024-12-16 12:19:31', '2024-12-16 12:19:31');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
