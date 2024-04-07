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
-- Table structure for table `ball`
--

DROP TABLE IF EXISTS `ball`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ball` (
  `x` int NOT NULL,
  `y` int NOT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ball`
--

LOCK TABLES `ball` WRITE;
/*!40000 ALTER TABLE `ball` DISABLE KEYS */;
/*!40000 ALTER TABLE `ball` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `data`
--

DROP TABLE IF EXISTS `data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `data` (
  `frame_num` int NOT NULL,
  `ball_id` bigint DEFAULT NULL,
  `field_id` bigint DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `team_a_goal_post_id` bigint DEFAULT NULL,
  `team_b_goal_post_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_nekrdjhp7rwx5gwo4m9xjrqbi` (`ball_id`),
  UNIQUE KEY `UK_8f8i30636epc0ueglfe3ly7ji` (`field_id`),
  UNIQUE KEY `UK_3ysmh1kuj1fdgiwbl1fx0rx0u` (`team_a_goal_post_id`),
  UNIQUE KEY `UK_p9mx1fh0r89juidn5ys4ptyg2` (`team_b_goal_post_id`),
  CONSTRAINT `FKef8us8yarhgt7sio8grteh1sn` FOREIGN KEY (`field_id`) REFERENCES `field` (`id`),
  CONSTRAINT `FKhrrk483x3kfj96n2nolgvoen2` FOREIGN KEY (`ball_id`) REFERENCES `ball` (`id`),
  CONSTRAINT `FKmg2p0anv9gr16nhj5dsavwp2h` FOREIGN KEY (`team_a_goal_post_id`) REFERENCES `goal_post` (`id`),
  CONSTRAINT `FKoins4tbh93241748wb8s002vt` FOREIGN KEY (`team_b_goal_post_id`) REFERENCES `goal_post` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data`
--

LOCK TABLES `data` WRITE;
/*!40000 ALTER TABLE `data` DISABLE KEYS */;
/*!40000 ALTER TABLE `data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `data_team_a_players`
--

DROP TABLE IF EXISTS `data_team_a_players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `data_team_a_players` (
  `data_id` bigint NOT NULL,
  `team_a_players_id` bigint NOT NULL,
  UNIQUE KEY `UK_gaejctglvrudqygbvk92jaj93` (`team_a_players_id`),
  KEY `FK11bhxr8cwhtpgig3yo7duaeqa` (`data_id`),
  CONSTRAINT `FK11bhxr8cwhtpgig3yo7duaeqa` FOREIGN KEY (`data_id`) REFERENCES `data` (`id`),
  CONSTRAINT `FKt225oidt5r7y6hikdsh966qor` FOREIGN KEY (`team_a_players_id`) REFERENCES `player` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data_team_a_players`
--

LOCK TABLES `data_team_a_players` WRITE;
/*!40000 ALTER TABLE `data_team_a_players` DISABLE KEYS */;
/*!40000 ALTER TABLE `data_team_a_players` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `data_team_b_players`
--

DROP TABLE IF EXISTS `data_team_b_players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `data_team_b_players` (
  `data_id` bigint NOT NULL,
  `team_b_players_id` bigint NOT NULL,
  UNIQUE KEY `UK_8kvwakdhwv5s94crw659ashk6` (`team_b_players_id`),
  KEY `FKp4p1fe9uih4jkj8cvci3jfriw` (`data_id`),
  CONSTRAINT `FKp4p1fe9uih4jkj8cvci3jfriw` FOREIGN KEY (`data_id`) REFERENCES `data` (`id`),
  CONSTRAINT `FKpms96o5ca9058l02ljdpqtpl4` FOREIGN KEY (`team_b_players_id`) REFERENCES `player` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data_team_b_players`
--

LOCK TABLES `data_team_b_players` WRITE;
/*!40000 ALTER TABLE `data_team_b_players` DISABLE KEYS */;
/*!40000 ALTER TABLE `data_team_b_players` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `field`
--

DROP TABLE IF EXISTS `field`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `field` (
  `x1` int NOT NULL,
  `x2` int NOT NULL,
  `y1` int NOT NULL,
  `y2` int NOT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `field`
--

LOCK TABLES `field` WRITE;
/*!40000 ALTER TABLE `field` DISABLE KEYS */;
/*!40000 ALTER TABLE `field` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `frame_number`
--

DROP TABLE IF EXISTS `frame_number`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `frame_number` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `frame_number`
--

LOCK TABLES `frame_number` WRITE;
/*!40000 ALTER TABLE `frame_number` DISABLE KEYS */;
/*!40000 ALTER TABLE `frame_number` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `game_data`
--

DROP TABLE IF EXISTS `game_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `game_data` (
  `frame_number` int NOT NULL,
  `ball_id` bigint DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `teama_goal_post_id` bigint DEFAULT NULL,
  `teama_id` bigint DEFAULT NULL,
  `teamb_goal_post_id` bigint DEFAULT NULL,
  `teamb_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_4l9nxjud3w4uv850f3n10bv1q` (`ball_id`),
  UNIQUE KEY `UK_54hn4esx90imee1l0yacqa0sd` (`teama_goal_post_id`),
  UNIQUE KEY `UK_mo1ebsneckv5xs95ajoqfqyqy` (`teama_id`),
  UNIQUE KEY `UK_ae1y01fa5qbau7mdthngwvxm0` (`teamb_goal_post_id`),
  UNIQUE KEY `UK_1qyl6g7uwprq477vhmfsld6y0` (`teamb_id`),
  CONSTRAINT `FKa9b8qmow80cnu68uvgxlmwhyj` FOREIGN KEY (`teama_goal_post_id`) REFERENCES `goal_post` (`id`),
  CONSTRAINT `FKbw6q6237m94oulvyv98uaufpa` FOREIGN KEY (`ball_id`) REFERENCES `ball` (`id`),
  CONSTRAINT `FKe75q62vb8xrqosvr07vinoh1p` FOREIGN KEY (`teama_id`) REFERENCES `teama` (`id`),
  CONSTRAINT `FKeuh583qawlptjv1ljpt0731fe` FOREIGN KEY (`teamb_id`) REFERENCES `teamb` (`id`),
  CONSTRAINT `FKfsx6n8n3for98k0m0hjedve31` FOREIGN KEY (`teamb_goal_post_id`) REFERENCES `goal_post` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game_data`
--

LOCK TABLES `game_data` WRITE;
/*!40000 ALTER TABLE `game_data` DISABLE KEYS */;
/*!40000 ALTER TABLE `game_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `goal_post`
--

DROP TABLE IF EXISTS `goal_post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `goal_post` (
  `x` int NOT NULL,
  `y` int NOT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `goal_post`
--

LOCK TABLES `goal_post` WRITE;
/*!40000 ALTER TABLE `goal_post` DISABLE KEYS */;
/*!40000 ALTER TABLE `goal_post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player`
--

DROP TABLE IF EXISTS `player`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player` (
  `player_id` int NOT NULL,
  `x` int NOT NULL,
  `y` int NOT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player`
--

LOCK TABLES `player` WRITE;
/*!40000 ALTER TABLE `player` DISABLE KEYS */;
/*!40000 ALTER TABLE `player` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teama`
--

DROP TABLE IF EXISTS `teama`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teama` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teama`
--

LOCK TABLES `teama` WRITE;
/*!40000 ALTER TABLE `teama` DISABLE KEYS */;
/*!40000 ALTER TABLE `teama` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teama_players`
--

DROP TABLE IF EXISTS `teama_players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teama_players` (
  `players_id` bigint NOT NULL,
  `teama_id` bigint NOT NULL,
  UNIQUE KEY `UK_u8jxu304orlrgclch783j9tw` (`players_id`),
  KEY `FK6nakb7q8hwlm6330t4b1vh50v` (`teama_id`),
  CONSTRAINT `FK6nakb7q8hwlm6330t4b1vh50v` FOREIGN KEY (`teama_id`) REFERENCES `teama` (`id`),
  CONSTRAINT `FK7wv3ixwbrgmatditjpj0fi9l4` FOREIGN KEY (`players_id`) REFERENCES `player` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teama_players`
--

LOCK TABLES `teama_players` WRITE;
/*!40000 ALTER TABLE `teama_players` DISABLE KEYS */;
/*!40000 ALTER TABLE `teama_players` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teamb`
--

DROP TABLE IF EXISTS `teamb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teamb` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teamb`
--

LOCK TABLES `teamb` WRITE;
/*!40000 ALTER TABLE `teamb` DISABLE KEYS */;
/*!40000 ALTER TABLE `teamb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teamb_players`
--

DROP TABLE IF EXISTS `teamb_players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teamb_players` (
  `players_id` bigint NOT NULL,
  `teamb_id` bigint NOT NULL,
  UNIQUE KEY `UK_rxbr6qi0o2bp0lnvxntnxho51` (`players_id`),
  KEY `FK1v9mvmr2sydvg11vkmnhe4fbe` (`teamb_id`),
  CONSTRAINT `FK1v9mvmr2sydvg11vkmnhe4fbe` FOREIGN KEY (`teamb_id`) REFERENCES `teamb` (`id`),
  CONSTRAINT `FKh6vf0sr0u5fwtreno4tvttxnx` FOREIGN KEY (`players_id`) REFERENCES `player` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teamb_players`
--

LOCK TABLES `teamb_players` WRITE;
/*!40000 ALTER TABLE `teamb_players` DISABLE KEYS */;
/*!40000 ALTER TABLE `teamb_players` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-03 21:55:31
