/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `game`
--

DROP TABLE IF EXISTS `game`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `game` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantity` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` decimal(38,2) DEFAULT NULL,
  `imgUrl` varchar(200) DEFAULT NULL,
  `rating` decimal(38,2) DEFAULT NULL,
  `description` text NOT NULL,
  `tags` varchar(255) NOT NULL DEFAULT '',
  `img_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game`
--

LOCK TABLES `game` WRITE;
/*!40000 ALTER TABLE `game` DISABLE KEYS */;
INSERT INTO `game` VALUES (1,88,'Dragon Ball Xenoverse 2',35.66,'/imgs/xeno2.jpg',7.00,'The story continues from the first Xenoverse game. After the events of the original, the hero of that game is celebrated as a legend while continuing their time-protecting mission. However, in this installment, you play as a new character who is just starting their journey as a Time Patroller.','Fighting, RPG, Adventure',NULL),(2,50,'Call of Duty: Black Ops',35.99,'/imgs/bo.jpg',8.50,'A FPS bestseller developed by Treyarch. Spectacular set pieces, an engaging narrative, and impressive visual effects are integral parts of the Black Ops experience.','Action, Horror, Shooter',NULL),(3,90,'Dark Souls 3',66.85,'/imgs/ds3.jpg',8.00,'The Dark Souls series was created by the Japanese studio FromSoftware Inc. The game transports players to the dark world of Lothric. Choose from 12 character classes (including Knight, Mercenary, Herald, Warrior), each offering distinct attributes and equipment.','RPG, Adventure, Fantasy',NULL),(4,106,'Elden Ring',249.99,'/imgs/elden.jpg',8.50,'A dark fantasy action-RPG developed by FromSoftware. It is a challenging adventure created by the developers of Demon Souls in collaboration with George R.R. Martin, author of A Song of Ice and Fire. Uncover the secrets of the Lands Between and fulfill your destiny.','RPG, Adventure, Fantasy',NULL),(5,67,'FIFA 21',84.00,'/imgs/fifa21.jpg',6.50,'A football sports game developed by EA Vancouver and published by EA Sports. FIFA 21 is another installment in the iconic football series dating back to the late 1990s. Take control of your favorite team and compete against players online or vs CPU offline.','Sports',NULL),(6,94,'God of War',80.00,'/imgs/gow.jpg',9.00,'An action-RPG developed by Santa Monica Studio. After completing his vengeful quest in Greece, Kratos ventures to the Norse realm to face mythological beasts and gods once again. This time, however, he will not be traveling alone.','RPG, Adventure, Fantasy, Action',NULL),(7,73,'God of War Ragnarok',249.99,'/imgs/gowr.jpg',9.50,'An action game released in 2022 by Santa Monica Studio, serving as the sequel to God of War (2018). It follows Kratos and his son Atreus as they face the onset of Ragnarok, the apocalyptic end predicted in Norse mythology.','RPG, Adventure, Fantasy, Action',NULL),(8,48,'Call of Duty: Modern Warfare 2',77.00,'/imgs/mw2.jpg',8.50,'The sequel to the record-breaking FPS bestseller, Modern Warfare 2 features new gripping missions as a grave new threat brings the world to the brink of collapse.','Action, Shooter',NULL),(9,88,'Call of Duty: Modern Warfare 3',84.55,'/imgs/mw3.jpg',8.00,'A first-person shooter published by Activision and developed by Infinity Ward, Sledgehammer Games, and Raven Software. It serves as the third entry in the Modern Warfare series and a direct continuation of 2009\'s Call of Duty: Modern Warfare 2.','Action, Shooter',NULL),(10,156,'Red Dead Redemption 2',119.99,'/imgs/rdr2.jpg',10.00,'An action-adventure game released for Xbox One and PlayStation 4 in 2018, and PC in 2019. Serving as a prequel to 2010\'s Red Dead Redemption, it follows outlaw Arthur Morgan. Immerse yourself in a vast open world filled with incredible interactions, activities, and stunning visual fidelity.','Action, Shooter, Adventure',NULL),(11,204,'Dragon Ball Sparking Zero',339.00,'/imgs/spar.jpg',8.50,'An anime-style fighting game serving as a new entry in the Dragon Ball Z: Budokai Tenkaichi series. Developed by Spike Chunsoft Co., Ltd. and published by Bandai Namco Entertainment. Building on the success of the original trilogy, it lets players engage in high-octane 3D arena battles.','Action, Fighting',NULL),(12,110,'The Witcher 3: Wild Hunt',56.00,'/imgs/w3.jpg',10.00,'An open-world action-RPG where players control Geralt of Rivia from a third-person perspective, with certain story segments featuring Ciri. Traverse expansive lands or explore underwater through swimming and diving mechanics.','Fantasy, RPG, Action, Adventure',NULL),(13,36,'Hogwarts Legacy',80.00,'/imgs/hog.jpg',7.50,'An immersive open-world action-RPG set in the universe first introduced in the Harry Potter books. Embark on a journey through familiar and new locations, discover fantastic beasts, customize your character, and craft potions.','Fantasy, RPG, Action, Adventure',NULL),(14,27,'Dragon Ball Z: Kakarot',63.63,'/imgs/kakarot.jpg',8.50,'An action-RPG developed by CyberConnect2 and published in 2020 by Bandai Namco Entertainment. Follow the legendary story of Son Goku (Kakarot) across iconic sagas from the original manga, crafted to recreate Akira Toriyama\'s universe as faithfully as possible.','RPG, Action, Adventure',NULL),(16,140,'Crash Bandicoot 4',134.44,'/imgs/crash.jpg',8.50,'A 3D platformer developed by Toys for Bob that acts as the direct sequel to 2007\'s Crash Bandicoot 3: Warped. Explore colorful worlds, leap across obstacles, avoid traps, and defeat enemies.','Platformer, Action, Adventure',NULL),(25,66,'Ghost of Tsushima',339.00,'/imgs/ghost.jpg',9.00,'An open-world action game set in feudal Japan. Play as Jin Sakai, a samurai who must risk everything to defend Tsushima Island from a Mongol invasion.','Action, Adventure',NULL);
/*!40000 ALTER TABLE `game` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','haslo','admin'),(2,'user','haslo','user'),(3,'user2','haslo','user');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `order_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `total_price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,2,'2025-11-04 22:10:01',249.94),(7,3,'2025-11-05 12:50:01',205.35),(8,2,'2025-11-05 15:18:06',571.63);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `game_id` int NOT NULL,
  `quantity` int NOT NULL,
  `unit_price` decimal(38,2) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  KEY `game_id` (`game_id`),
  CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`game_id`) REFERENCES `game` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
INSERT INTO `order_items` VALUES (1,1,1,2,59.99,NULL),(2,1,3,1,39.99,NULL),(3,1,5,3,29.99,NULL),(4,7,1,1,35.66,NULL),(5,7,2,1,35.99,NULL),(6,7,3,2,66.85,NULL),(7,8,1,1,35.66,NULL),(8,8,2,1,35.99,NULL),(9,8,4,2,249.99,NULL);
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
