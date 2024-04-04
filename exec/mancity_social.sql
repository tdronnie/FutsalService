-- MySQL dump 10.13  Distrib 8.3.0, for Linux (x86_64)
--
-- Host: localhost    Database: mancity
-- ------------------------------------------------------
-- Server version	8.3.0

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
  `id` bigint NOT NULL AUTO_INCREMENT,
  `box_image_url` varchar(255) DEFAULT NULL,
  `court_id` bigint NOT NULL,
  `gender` int NOT NULL,
  `is_calc_over` bit(1) NOT NULL,
  `is_over` bit(1) NOT NULL,
  `level` tinyint DEFAULT NULL,
  `manager` bigint DEFAULT NULL,
  `player_number` int NOT NULL,
  `replay_url` varchar(255) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `time` int NOT NULL,
  `teama_id` bigint DEFAULT NULL,
  `teamb_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_26i0lqil8y533lapc16752dmx` (`teama_id`),
  UNIQUE KEY `UK_go8nfo4hw2h15w2ftv09c33eb` (`teamb_id`),
  CONSTRAINT `FK3lfigat0g1qqdml6oe9recy8h` FOREIGN KEY (`teamb_id`) REFERENCES `team` (`id`),
  CONSTRAINT `FK5w1m6rs7hv9hty298vfe3vsp9` FOREIGN KEY (`teama_id`) REFERENCES `team` (`id`),
  CONSTRAINT `game_chk_1` CHECK ((`level` between 0 and 2))
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game`
--

LOCK TABLES `game` WRITE;
/*!40000 ALTER TABLE `game` DISABLE KEYS */;
INSERT INTO `game` VALUES (1,NULL,2,1,_binary '',_binary '',2,2,12,'https://iandwe.s3.ap-northeast-2.amazonaws.com/match/V3YtHWFn','2024-03-31',20,3,4),(2,NULL,8,1,_binary '',_binary '',2,2,12,'https://iandwe.s3.ap-northeast-2.amazonaws.com/match/V3YtHWFn','2024-04-01',18,1,2),(3,NULL,12,2,_binary '\0',_binary '\0',0,2,12,'','2024-04-02',12,5,6),(4,NULL,16,2,_binary '\0',_binary '\0',2,2,12,'','2024-04-03',17,7,8),(5,NULL,21,3,_binary '\0',_binary '\0',2,2,12,'','2024-04-04',21,9,10),(6,NULL,4,2,_binary '\0',_binary '\0',2,2,12,'','2024-03-31',12,NULL,NULL),(7,NULL,17,3,_binary '\0',_binary '\0',2,4,12,'','2024-04-01',14,NULL,NULL),(8,NULL,3,3,_binary '\0',_binary '\0',2,4,12,'','2024-04-02',5,NULL,NULL),(9,NULL,3,1,_binary '\0',_binary '\0',0,3,12,'','2024-04-03',16,NULL,NULL),(10,NULL,30,3,_binary '\0',_binary '\0',1,3,12,'','2024-04-02',15,NULL,NULL),(11,NULL,34,3,_binary '\0',_binary '\0',1,4,12,'','2024-04-04',14,NULL,NULL),(12,NULL,2,1,_binary '\0',_binary '\0',1,5,12,'','2024-04-04',15,NULL,NULL),(13,NULL,8,1,_binary '',_binary '',2,5,12,'https://iandwe.s3.ap-northeast-2.amazonaws.com/match/V3YtHWFn','2024-04-03',22,11,12),(14,NULL,20,3,_binary '\0',_binary '\0',2,6,12,'','2024-04-03',17,NULL,NULL),(19,NULL,9,1,_binary '\0',_binary '\0',0,7,12,'','2024-04-04',2,NULL,NULL),(20,NULL,7,3,_binary '\0',_binary '\0',2,8,12,'','2024-04-04',6,NULL,NULL),(21,NULL,21,2,_binary '\0',_binary '\0',2,9,12,'','2024-04-02',17,NULL,NULL),(22,NULL,11,3,_binary '\0',_binary '\0',2,3,12,'','2024-04-04',19,NULL,NULL);
/*!40000 ALTER TABLE `game` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `highlight`
--

DROP TABLE IF EXISTS `highlight`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `highlight` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `time` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `game_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK6e5ham5uo61lefr3x7tqono48` (`game_id`),
  CONSTRAINT `FK6e5ham5uo61lefr3x7tqono48` FOREIGN KEY (`game_id`) REFERENCES `game` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `highlight`
--

LOCK TABLES `highlight` WRITE;
/*!40000 ALTER TABLE `highlight` DISABLE KEYS */;
/*!40000 ALTER TABLE `highlight` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `myhighlight`
--

DROP TABLE IF EXISTS `myhighlight`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `myhighlight` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint DEFAULT NULL,
  `highlight_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKr377c5kr8vhsu57eqxrkqlmpt` (`highlight_id`),
  CONSTRAINT `FKr377c5kr8vhsu57eqxrkqlmpt` FOREIGN KEY (`highlight_id`) REFERENCES `highlight` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `myhighlight`
--

LOCK TABLES `myhighlight` WRITE;
/*!40000 ALTER TABLE `myhighlight` DISABLE KEYS */;
/*!40000 ALTER TABLE `myhighlight` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `participant`
--

DROP TABLE IF EXISTS `participant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `participant` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image` varchar(255) DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `game_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKjaqwq9ieo3gwfut392jk5l4fg` (`game_id`),
  CONSTRAINT `FKjaqwq9ieo3gwfut392jk5l4fg` FOREIGN KEY (`game_id`) REFERENCES `game` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `participant`
--

LOCK TABLES `participant` WRITE;
/*!40000 ALTER TABLE `participant` DISABLE KEYS */;
INSERT INTO `participant` VALUES (1,'https://iandwe.s3.ap-northeast-2.amazonaws.com/image/QEydB3E4',2,1),(2,'https://iandwe.s3.ap-northeast-2.amazonaws.com/image/QEydB3E4',2,2),(3,'https://iandwe.s3.ap-northeast-2.amazonaws.com/image/QEydB3E4',2,3),(4,'https://iandwe.s3.ap-northeast-2.amazonaws.com/image/QEydB3E4',2,4),(5,'https://iandwe.s3.ap-northeast-2.amazonaws.com/image/QEydB3E4',2,5),(6,'https://iandwe.s3.ap-northeast-2.amazonaws.com/image/QEydB3E4',2,6),(7,NULL,4,7),(8,NULL,4,8),(9,NULL,3,9),(10,NULL,3,10),(11,'https://iandwe.s3.ap-northeast-2.amazonaws.com/image/7YXRkkhJ',4,11),(12,NULL,5,12),(13,NULL,5,13),(14,NULL,3,13),(15,NULL,6,14),(16,'https://iandwe.s3.ap-northeast-2.amazonaws.com/image/fXN9lFak',7,19),(17,NULL,3,13),(18,'https://iandwe.s3.ap-northeast-2.amazonaws.com/image/7YXRkkhJ',4,13),(19,'https://iandwe.s3.ap-northeast-2.amazonaws.com/image/VpvGcDmu',6,14),(20,'https://iandwe.s3.ap-northeast-2.amazonaws.com/image/VpvGcDmu',6,14),(21,'https://iandwe.s3.ap-northeast-2.amazonaws.com/image/VpvGcDmu',6,14),(22,'https://iandwe.s3.ap-northeast-2.amazonaws.com/image/VpvGcDmu',6,14),(23,'https://iandwe.s3.ap-northeast-2.amazonaws.com/image/VpvGcDmu',6,14),(24,'https://iandwe.s3.ap-northeast-2.amazonaws.com/image/oo1Fix3G',8,20),(25,'https://iandwe.s3.ap-northeast-2.amazonaws.com/image/oo1Fix3G',8,20),(26,'https://iandwe.s3.ap-northeast-2.amazonaws.com/image/oo1Fix3G',8,20),(27,NULL,9,21),(28,'https://iandwe.s3.ap-northeast-2.amazonaws.com/image/3xbgsplR',3,22),(29,'https://iandwe.s3.ap-northeast-2.amazonaws.com/image/3xbgsplR',3,22),(30,'https://iandwe.s3.ap-northeast-2.amazonaws.com/image/3xbgsplR',3,22);
/*!40000 ALTER TABLE `participant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `participate_request`
--

DROP TABLE IF EXISTS `participate_request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `participate_request` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `game_id` bigint NOT NULL,
  `sender` bigint NOT NULL,
  `status` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `participate_request_chk_1` CHECK ((`status` between 0 and 2))
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `participate_request`
--

LOCK TABLES `participate_request` WRITE;
/*!40000 ALTER TABLE `participate_request` DISABLE KEYS */;
INSERT INTO `participate_request` VALUES (1,13,3,1),(2,19,41,0),(3,13,4,1),(4,12,41,0),(5,20,7,0);
/*!40000 ALTER TABLE `participate_request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `participate_suggest`
--

DROP TABLE IF EXISTS `participate_suggest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `participate_suggest` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `game_id` bigint NOT NULL,
  `receiver_id` bigint NOT NULL,
  `sender_id` bigint NOT NULL,
  `status` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `participate_suggest_chk_1` CHECK ((`status` between 0 and 2))
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `participate_suggest`
--

LOCK TABLES `participate_suggest` WRITE;
/*!40000 ALTER TABLE `participate_suggest` DISABLE KEYS */;
INSERT INTO `participate_suggest` VALUES (1,14,8,6,1),(2,20,6,8,1),(3,20,9,8,0),(4,22,7,3,1),(5,22,9,3,0),(6,22,5,3,1);
/*!40000 ALTER TABLE `participate_suggest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player`
--

DROP TABLE IF EXISTS `player`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `assist` int NOT NULL,
  `distance_covered` int NOT NULL,
  `goal` int NOT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `pass` int NOT NULL,
  `shot` int NOT NULL,
  `shot_on_target` int NOT NULL,
  `speed` int NOT NULL,
  `turn_over_in_defense` int NOT NULL,
  `turn_over_in_offense` int NOT NULL,
  `playersb_id` bigint DEFAULT NULL,
  `playersa_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKocpx5q9qi23vs9ctp2w3brrxf` (`playersb_id`),
  KEY `FK4yxo1carj2xvrhvf5rm9wj5pb` (`playersa_id`),
  CONSTRAINT `FK4yxo1carj2xvrhvf5rm9wj5pb` FOREIGN KEY (`playersa_id`) REFERENCES `game` (`id`),
  CONSTRAINT `FKocpx5q9qi23vs9ctp2w3brrxf` FOREIGN KEY (`playersb_id`) REFERENCES `game` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player`
--

LOCK TABLES `player` WRITE;
/*!40000 ALTER TABLE `player` DISABLE KEYS */;
INSERT INTO `player` VALUES (1,0,511,0,'guest',21,0,0,35,1,0,NULL,2),(2,0,498,0,'guest',22,0,0,35,0,0,NULL,2),(3,0,465,1,'guest',18,1,0,35,0,2,NULL,2),(4,0,523,0,'guest',20,1,0,35,2,0,NULL,2),(5,0,547,0,'guest',19,0,0,35,1,0,NULL,2),(6,1,520,1,'guest',17,2,0,29,1,0,NULL,2),(7,0,455,0,'guest',16,2,0,28,4,5,2,NULL),(8,0,437,0,'guest',18,0,0,30,4,5,2,NULL),(9,0,447,0,'guest',18,0,0,27,1,1,2,NULL),(10,0,439,0,'guest',22,1,0,33,1,0,2,NULL),(11,0,529,0,'guest',25,0,0,30,0,0,2,NULL),(12,0,448,0,'guest',27,0,0,30,0,1,2,NULL),(13,0,511,0,'guest',21,0,0,35,1,0,NULL,1),(14,0,498,0,'guest',22,0,0,35,0,0,NULL,1),(15,0,465,1,'guest',18,1,0,35,0,2,NULL,1),(16,0,523,0,'guest',20,1,0,35,2,0,NULL,1),(17,0,547,0,'guest',19,0,0,35,1,0,NULL,1),(18,1,520,1,'guest',17,2,0,29,1,0,NULL,1),(19,0,455,0,'guest',16,2,0,28,4,5,1,NULL),(20,0,437,0,'guest',18,0,0,30,4,5,1,NULL),(21,0,447,0,'guest',18,0,0,27,1,1,1,NULL),(22,0,439,0,'guest',22,1,0,33,1,0,1,NULL),(23,0,529,0,'이싸피',25,0,0,30,0,0,1,NULL),(24,0,448,0,'guest',27,0,0,30,0,1,1,NULL),(25,0,511,0,'guest',21,0,0,35,1,0,NULL,3),(26,0,498,0,'guest',22,0,0,35,0,0,NULL,3),(27,0,465,1,'guest',18,1,0,35,0,2,NULL,3),(28,0,523,0,'guest',20,1,0,35,2,0,NULL,3),(29,0,547,0,'guest',19,0,0,35,1,0,NULL,3),(30,1,520,1,'guest',17,2,0,29,1,0,NULL,3),(31,0,455,0,'guest',16,2,0,28,4,5,3,NULL),(32,0,437,0,'guest',18,0,0,30,4,5,3,NULL),(33,0,447,0,'guest',18,0,0,27,1,1,3,NULL),(34,0,439,0,'guest',22,1,0,33,1,0,3,NULL),(35,0,529,0,'guest',25,0,0,30,0,0,3,NULL),(36,0,448,0,'guest',27,0,0,30,0,1,3,NULL),(37,0,511,0,'guest',21,0,0,35,1,0,NULL,4),(38,0,498,0,'guest',22,0,0,35,0,0,NULL,4),(39,0,465,1,'guest',18,1,0,35,0,2,NULL,4),(40,0,523,0,'guest',20,1,0,35,2,0,NULL,4),(41,0,547,0,'guest',19,0,0,35,1,0,NULL,4),(42,1,520,1,'guest',17,2,0,29,1,0,NULL,4),(43,0,455,0,'guest',16,2,0,28,4,5,4,NULL),(44,0,437,0,'guest',18,0,0,30,4,5,4,NULL),(45,0,447,0,'guest',18,0,0,27,1,1,4,NULL),(46,0,439,0,'최싸피',22,1,0,33,1,0,4,NULL),(47,0,529,0,'guest',25,0,0,30,0,0,4,NULL),(48,0,448,0,'guest',27,0,0,30,0,1,4,NULL),(49,0,511,0,'guest',21,0,0,35,1,0,NULL,5),(50,0,498,0,'guest',22,0,0,35,0,0,NULL,5),(51,0,465,1,'guest',18,1,0,35,0,2,NULL,5),(52,0,523,0,'guest',20,1,0,35,2,0,NULL,5),(53,0,547,0,'guest',19,0,0,35,1,0,NULL,5),(54,1,520,1,'권지용',17,2,0,29,1,0,NULL,5),(55,0,455,0,'guest',16,2,0,28,4,5,5,NULL),(56,0,437,0,'guest',18,0,0,30,4,5,5,NULL),(57,0,447,0,'guest',18,0,0,27,1,1,5,NULL),(58,0,439,0,'guest',22,1,0,33,1,0,5,NULL),(59,0,529,0,'guest',25,0,0,30,0,0,5,NULL),(60,0,448,0,'guest',27,0,0,30,0,1,5,NULL),(61,0,511,0,'guest',21,0,0,35,1,0,NULL,13),(62,0,498,0,'권지용',22,0,0,35,0,0,NULL,13),(63,0,465,1,'guest',18,1,0,35,0,2,NULL,13),(64,0,523,0,'guest',20,1,0,35,2,0,NULL,13),(65,0,547,0,'guest',19,0,0,35,1,0,NULL,13),(66,1,520,1,'guest',17,2,0,29,1,0,NULL,13),(67,0,455,0,'guest',16,2,0,28,4,5,13,NULL),(68,0,437,0,'guest',18,0,0,30,4,5,13,NULL),(69,0,447,0,'guest',18,0,0,27,1,1,13,NULL),(70,0,439,0,'guest',22,1,0,33,1,0,13,NULL),(71,0,529,0,'guest',25,0,0,30,0,0,13,NULL),(72,0,448,0,'guest',27,0,0,30,0,1,13,NULL);
/*!40000 ALTER TABLE `player` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team`
--

DROP TABLE IF EXISTS `team`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `goal` int NOT NULL,
  `pass` int NOT NULL,
  `shot` int NOT NULL,
  `shot_on_target` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team`
--

LOCK TABLES `team` WRITE;
/*!40000 ALTER TABLE `team` DISABLE KEYS */;
INSERT INTO `team` VALUES (1,2,279,6,4),(2,0,247,3,1),(3,2,279,6,4),(4,0,247,3,1),(5,2,279,6,4),(6,0,247,3,1),(7,2,279,6,4),(8,0,247,3,1),(9,2,279,6,4),(10,0,247,3,1),(11,0,279,6,4),(12,0,247,3,1);
/*!40000 ALTER TABLE `team` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-04  0:24:07
