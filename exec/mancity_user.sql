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
-- Table structure for table `alarm`
--

DROP TABLE IF EXISTS `alarm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alarm` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL,
  `create_date` date DEFAULT NULL,
  `domain` tinyint DEFAULT NULL,
  `domain_id` bigint DEFAULT NULL,
  `receiver_id` bigint NOT NULL,
  `sender_id` bigint NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `alarm_chk_1` CHECK ((`domain` between 0 and 7))
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alarm`
--

LOCK TABLES `alarm` WRITE;
/*!40000 ALTER TABLE `alarm` DISABLE KEYS */;
INSERT INTO `alarm` VALUES (1,'회원님도 팔로우를 해주시면 좋을 것 같아요 !','2024-04-03',4,0,2,4,'민우님이 회원님을 팔로잉을 하셨어요 !'),(2,'정말 재밌는 클럽이 될 거에요 !','2024-04-03',5,1,2,4,'민우님이 클럽에 가입 요청을 보냈어요 !'),(3,'클럽 멤버들과 즐거운 한 게임 어떠세요 ?','2024-04-03',6,0,4,2,'성호호님의 클럽 참여 요청이 수락되었어요 !'),(4,'정말 재밌는 매치가 될 거에요 !','2024-04-03',0,1,5,3,'예준성님이 매치에 참여 요청을 보냈어요 !'),(5,'재밌고 즐거운 매치 하고 오세요 !','2024-04-03',1,0,3,5,'최창용님의 매치 참여 요청이 수락되었어요 !'),(6,'회원님도 팔로우를 해주시면 좋을 것 같아요 !','2024-04-03',4,0,3,5,'최창용님이 회원님을 팔로잉을 하셨어요 !'),(7,'회원님도 팔로우를 해주시면 좋을 것 같아요 !','2024-04-03',4,0,4,6,'김민수님이 회원님을 팔로잉을 하셨어요 !'),(9,'회원님도 팔로우를 해주시면 좋을 것 같아요 !','2024-04-03',4,0,4,7,'김싸피님이 회원님을 팔로잉을 하셨어요 !'),(10,'회원님도 팔로우를 해주시면 좋을 것 같아요 !','2024-04-03',4,0,2,7,'김싸피님이 회원님을 팔로잉을 하셨어요 !'),(11,'회원님도 팔로우를 해주시면 좋을 것 같아요 !','2024-04-03',4,0,7,2,'성호호님이 회원님을 팔로잉을 하셨어요 !'),(12,'회원님도 팔로우를 해주시면 좋을 것 같아요 !','2024-04-03',4,0,7,4,'민우님이 회원님을 팔로잉을 하셨어요 !'),(13,'회원님도 팔로우를 해주시면 좋을 것 같아요 !','2024-04-03',4,0,5,4,'민우님이 회원님을 팔로잉을 하셨어요 !'),(14,'회원님도 팔로우를 해주시면 좋을 것 같아요 !','2024-04-03',4,0,3,4,'민우님이 회원님을 팔로잉을 하셨어요 !'),(15,'회원님도 팔로우를 해주시면 좋을 것 같아요 !','2024-04-03',4,0,3,5,'최창용님이 회원님을 팔로잉을 하셨어요 !'),(16,'정말 재밌는 매치가 될 거에요 !','2024-04-03',0,2,7,41,'null님이 매치에 참여 요청을 보냈어요 !'),(17,'정말 재밌는 매치가 될 거에요 !','2024-04-03',0,3,5,4,'민우님이 매치에 참여 요청을 보냈어요 !'),(18,'재밌고 즐거운 매치 하고 오세요 !','2024-04-03',1,0,3,5,'최창용님의 매치 참여 요청이 수락되었어요 !'),(19,'재밌고 즐거운 매치 하고 오세요 !','2024-04-03',1,0,4,5,'최창용님의 매치 참여 요청이 수락되었어요 !'),(20,'회원님도 팔로우를 해주시면 좋을 것 같아요 !','2024-04-03',4,0,7,6,'김민수님이 회원님을 팔로잉을 하셨어요 !'),(21,'정말 재밌는 매치가 될 거에요 !','2024-04-03',0,4,5,41,'null님이 매치에 참여 요청을 보냈어요 !'),(22,'회원님도 팔로우를 해주시면 좋을 것 같아요 !','2024-04-03',4,0,5,6,'김민수님이 회원님을 팔로잉을 하셨어요 !'),(23,'저희와 함께 즐거운 한 게임 어떠세요 ?','2024-04-03',2,1,8,6,'김민수용병 참여 요청이 도착했어요 !'),(24,'덕분에 우리 팀의 약점이 줄어들었어요 !','2024-04-03',3,0,6,8,'님이 용병 제안을 수락하셨어요 !'),(25,'덕분에 우리 팀의 약점이 줄어들었어요 !','2024-04-03',3,0,6,8,'님이 용병 제안을 수락하셨어요 !'),(26,'덕분에 우리 팀의 약점이 줄어들었어요 !','2024-04-03',3,0,6,8,'님이 용병 제안을 수락하셨어요 !'),(27,'덕분에 우리 팀의 약점이 줄어들었어요 !','2024-04-03',3,0,6,8,'님이 용병 제안을 수락하셨어요 !'),(28,'덕분에 우리 팀의 약점이 줄어들었어요 !','2024-04-03',3,0,6,8,'님이 용병 제안을 수락하셨어요 !'),(29,'저희와 함께 즐거운 한 게임 어떠세요 ?','2024-04-03',2,2,6,8,'지용이용병 참여 요청이 도착했어요 !'),(30,'덕분에 우리 팀의 약점이 줄어들었어요 !','2024-04-03',3,0,8,6,'님이 용병 제안을 수락하셨어요 !'),(31,'덕분에 우리 팀의 약점이 줄어들었어요 !','2024-04-03',3,0,8,6,'님이 용병 제안을 수락하셨어요 !'),(32,'회원님도 팔로우를 해주시면 좋을 것 같아요 !','2024-04-03',4,0,7,9,'권지용님이 회원님을 팔로잉을 하셨어요 !'),(33,'회원님도 팔로우를 해주시면 좋을 것 같아요 !','2024-04-03',4,0,3,9,'권지용님이 회원님을 팔로잉을 하셨어요 !'),(34,'회원님도 팔로우를 해주시면 좋을 것 같아요 !','2024-04-03',4,0,8,9,'권지용님이 회원님을 팔로잉을 하셨어요 !'),(35,'정말 재밌는 클럽이 될 거에요 !','2024-04-03',5,2,7,9,'권지용님이 클럽에 가입 요청을 보냈어요 !'),(36,'클럽 멤버들과 즐거운 한 게임 어떠세요 ?','2024-04-03',6,0,9,7,'김싸피님의 클럽 참여 요청이 수락되었어요 !'),(37,'정말 재밌는 매치가 될 거에요 !','2024-04-03',0,5,8,7,'김싸피님이 매치에 참여 요청을 보냈어요 !'),(38,'저희와 함께 즐거운 한 게임 어떠세요 ?','2024-04-03',2,3,9,8,'지용이용병 참여 요청이 도착했어요 !'),(39,'저희와 함께 즐거운 한 게임 어떠세요 ?','2024-04-03',2,4,7,3,'예준성용병 참여 요청이 도착했어요 !'),(41,'회원님도 팔로우를 해주시면 좋을 것 같아요 !','2024-04-03',4,0,3,2,'성호호님이 회원님을 팔로잉을 하셨어요 !'),(42,'회원님도 팔로우를 해주시면 좋을 것 같아요 !','2024-04-03',4,0,2,3,'예준성님이 회원님을 팔로잉을 하셨어요 !'),(43,'저희와 함께 즐거운 한 게임 어떠세요 ?','2024-04-03',2,5,9,3,'예준성용병 참여 요청이 도착했어요 !'),(44,'저희와 함께 즐거운 한 게임 어떠세요 ?','2024-04-03',2,6,5,3,'예준성용병 참여 요청이 도착했어요 !'),(46,'회원님도 팔로우를 해주시면 좋을 것 같아요 !','2024-04-04',4,0,3,13,'아카시아님이 회원님을 팔로잉을 하셨어요 !'),(47,'회원님도 팔로우를 해주시면 좋을 것 같아요 !','2024-04-04',4,0,7,13,'아카시아님이 회원님을 팔로잉을 하셨어요 !'),(48,'회원님도 팔로우를 해주시면 좋을 것 같아요 !','2024-04-04',4,0,2,13,'아카시아님이 회원님을 팔로잉을 하셨어요 !'),(49,'회원님도 팔로우를 해주시면 좋을 것 같아요 !','2024-04-04',4,0,11,12,'최싸피님이 회원님을 팔로잉을 하셨어요 !');
/*!40000 ALTER TABLE `alarm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `club`
--

DROP TABLE IF EXISTS `club`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `club` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `club_court_id` bigint DEFAULT NULL,
  `emblem` varchar(255) DEFAULT NULL,
  `master_id` bigint DEFAULT NULL,
  `member_cnt` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `region` varchar(255) DEFAULT NULL,
  `score` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `club`
--

LOCK TABLES `club` WRITE;
/*!40000 ALTER TABLE `club` DISABLE KEYS */;
INSERT INTO `club` VALUES (1,29,'https://iandwe.s3.ap-northeast-2.amazonaws.com/emblem/aPx3WIlk',2,2,'성호네','광주',0),(2,16,'https://iandwe.s3.ap-northeast-2.amazonaws.com/emblem/DApR42bu',2,1,'공구리','대전',0),(3,34,'https://iandwe.s3.ap-northeast-2.amazonaws.com/emblem/VTXyNHLy',7,2,'싸피클럽','광주',0),(4,22,'https://iandwe.s3.ap-northeast-2.amazonaws.com/emblem/NL8NWoX2',9,1,'스틸러스','부산',0),(5,33,NULL,10,1,'고고FC','서울',0);
/*!40000 ALTER TABLE `club` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `club_member`
--

DROP TABLE IF EXISTS `club_member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `club_member` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `club_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKf6tl19ih8acrmheidn4xos2tx` (`club_id`),
  KEY `FKdsyvp62acbfu2dkc2ad23gsro` (`user_id`),
  CONSTRAINT `FKdsyvp62acbfu2dkc2ad23gsro` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKf6tl19ih8acrmheidn4xos2tx` FOREIGN KEY (`club_id`) REFERENCES `club` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `club_member`
--

LOCK TABLES `club_member` WRITE;
/*!40000 ALTER TABLE `club_member` DISABLE KEYS */;
INSERT INTO `club_member` VALUES (1,1,2),(2,1,4),(3,2,2),(4,3,7),(5,4,9),(6,3,9),(7,5,10);
/*!40000 ALTER TABLE `club_member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `follow`
--

DROP TABLE IF EXISTS `follow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `follow` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `receiver_id` bigint DEFAULT NULL,
  `sender_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `follow`
--

LOCK TABLES `follow` WRITE;
/*!40000 ALTER TABLE `follow` DISABLE KEYS */;
INSERT INTO `follow` VALUES (1,2,4),(2,3,5),(3,4,6),(5,4,7),(6,2,7),(7,7,2),(8,7,4),(9,5,4),(10,3,4),(11,3,5),(12,7,6),(13,5,6),(14,7,9),(15,3,9),(16,8,9),(17,3,2),(18,2,3),(19,3,13),(20,7,13),(21,2,13),(22,11,12);
/*!40000 ALTER TABLE `follow` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `join_request`
--

DROP TABLE IF EXISTS `join_request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `join_request` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `club_id` bigint DEFAULT NULL,
  `request_user_id` bigint DEFAULT NULL,
  `status` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `join_request_chk_1` CHECK ((`status` between 0 and 2))
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `join_request`
--

LOCK TABLES `join_request` WRITE;
/*!40000 ALTER TABLE `join_request` DISABLE KEYS */;
INSERT INTO `join_request` VALUES (1,1,4,0),(2,3,9,0);
/*!40000 ALTER TABLE `join_request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `last_stat`
--

DROP TABLE IF EXISTS `last_stat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `last_stat` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `defense` double NOT NULL,
  `distance_covered` double NOT NULL,
  `goal_decision` double NOT NULL,
  `pass` double NOT NULL,
  `speed` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `last_stat`
--

LOCK TABLES `last_stat` WRITE;
/*!40000 ALTER TABLE `last_stat` DISABLE KEYS */;
INSERT INTO `last_stat` VALUES (1,0,0,0,0,0),(2,0,465,1,180,35),(3,0,465,1,18,35),(4,0,529,0,130,30),(5,0,0,0,0,0),(6,1,547,0,194,35),(7,0,465,1,18,35),(8,0,0,0,0,0),(9,0,498,0,22,35),(10,0,0,0,0,0),(11,0,529,0,25,30),(12,1,439,0,22,33),(13,0,0,0,0,0);
/*!40000 ALTER TABLE `last_stat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `main_stat`
--

DROP TABLE IF EXISTS `main_stat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `main_stat` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `defense` double NOT NULL,
  `distance_covered` double NOT NULL,
  `goal_decision` double NOT NULL,
  `pass` double NOT NULL,
  `speed` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main_stat`
--

LOCK TABLES `main_stat` WRITE;
/*!40000 ALTER TABLE `main_stat` DISABLE KEYS */;
INSERT INTO `main_stat` VALUES (1,0,0,0,0,0),(2,0,465,1,180,35),(3,0.5,488,1,114.5,35),(4,1,526,0,165.5,32.5),(5,0,0,0,0,0),(6,1,547,0,194,35),(7,0.5,492.5,0.67,97.5,32),(8,0,0,0,0,0),(9,0.5,509,0.5,19.5,32),(10,0,0,0,0,0),(11,0,529,0,25,30),(12,1,439,0,22,33),(13,0,0,0,0,0);
/*!40000 ALTER TABLE `main_stat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stat`
--

DROP TABLE IF EXISTS `stat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stat` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `assist` int NOT NULL,
  `distance_covered` int NOT NULL,
  `goal` int NOT NULL,
  `pass` int NOT NULL,
  `played_times` int NOT NULL,
  `shot` int NOT NULL,
  `shots_on_target` int NOT NULL,
  `speed` int NOT NULL,
  `turn_over_in_defense` int NOT NULL,
  `turn_over_in_offense` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stat`
--

LOCK TABLES `stat` WRITE;
/*!40000 ALTER TABLE `stat` DISABLE KEYS */;
INSERT INTO `stat` VALUES (1,0,0,0,0,0,0,0,0,0,0),(2,0,465,1,180,1,1,0,35,0,2),(3,0,976,1,229,2,1,0,70,1,2),(4,0,1052,0,331,2,1,0,65,2,0),(5,0,0,0,0,0,0,0,0,0,0),(6,0,547,0,194,1,0,0,35,1,0),(7,1,985,2,195,2,3,0,64,1,2),(8,0,0,0,0,0,0,0,0,0,0),(9,1,1018,1,39,2,2,0,64,1,0),(10,0,0,0,0,0,0,0,0,0,0),(11,0,529,0,25,1,0,0,30,0,0),(12,0,439,0,22,1,1,0,33,1,0),(13,0,0,0,0,0,0,0,0,0,0);
/*!40000 ALTER TABLE `stat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `fcm_token` varchar(255) DEFAULT NULL,
  `foot` int NOT NULL,
  `height` int NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `is_player` bit(1) NOT NULL,
  `nick_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `salt` varchar(255) DEFAULT NULL,
  `weight` int NOT NULL,
  `last_stat_id` bigint DEFAULT NULL,
  `main_stat_id` bigint DEFAULT NULL,
  `stat_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_ndrdb3ujgovdwfdvxoxbkcrgn` (`last_stat_id`),
  UNIQUE KEY `UK_8cahtrt86mv796air6q0v58eo` (`main_stat_id`),
  UNIQUE KEY `UK_pmrqv7k3swmmfnif7xvkk3fko` (`stat_id`),
  CONSTRAINT `FKad809rfkogisoiohgsyg7rkx` FOREIGN KEY (`stat_id`) REFERENCES `stat` (`id`),
  CONSTRAINT `FKjp7uo7ax17iqqdiklknj2gctk` FOREIGN KEY (`last_stat_id`) REFERENCES `last_stat` (`id`),
  CONSTRAINT `FKot1p6bhno5dne2bpa53odnoxh` FOREIGN KEY (`main_stat_id`) REFERENCES `main_stat` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'joonseong@naver.com','cpU-40I3ZaValYwa1AGu8m:APA91bFxIKqIv2bxTlLC5SpbKQ2_dOadxAbCJAZZ0G6M59BL9yoQ0elE6Wbg0VgJO5Y03tyhcGDCHA7Nfr5ELSqJ4eDk4xNRCyzfThJtDUh1pgBrIGF2JVVxFPnMC3d4anb-pEUFIK_w',0,183,NULL,_binary '\0','준성','22741f04a12a69a6c21f63d2b7aeb1a1b3833649d15b68da1b0b21a05398fbb6','b8bc88e6685d0db59adb022a7d2487ba',85,1,1,1),(2,'chltjdgh3@naver.com','f01mybaJl9Xykwc9YeUoji:APA91bHEPhd__Vy-jSgVeQNYW35Ma2dZZdB7lQjgkxqvK8FfJp2_5zN13JBMBNv3-6xxEcrrN8LNS7M_VmwCjmRiUru29fylthK8SvS_eKEFenLRXF8aiBL-q4y12OQg3fJ-pL6bVcyG',0,171,'https://iandwe.s3.ap-northeast-2.amazonaws.com/image/QEydB3E4',_binary '','성호호','06c885bd290eaf2d020021c68ea4832e8bb3f581619fc52ea6f3807285625624','190797e1eae363fa6364c6e9a2a626b3',71,2,2,2),(3,'306yyy@naver.com','c_c2wmkflOsqoww9yF3E4T:APA91bGEMvKxRNCPpCjZiAmQYeT70k773pC5eUUYGO0ibuC0GXfaQaB26pcFee5ozRSYxHR-SsXFW7wfFxqBOdPzUpHxGiqiuyxyKY_igVtwazhK-I1E8FpHTDX8xCbW_UsQx_DTybNY',0,188,'https://iandwe.s3.ap-northeast-2.amazonaws.com/image/3xbgsplR',_binary '\0','예준성','a5ec8865662e3c7f244b030d95a1543e64c53750246b5fecaaaf9d71c9c2a645','f482079b39892e8db5be009dbdcf6f16',90,3,3,3),(4,'ssafy@ssafy.com','f01mybaJl9Xykwc9YeUoji:APA91bHEPhd__Vy-jSgVeQNYW35Ma2dZZdB7lQjgkxqvK8FfJp2_5zN13JBMBNv3-6xxEcrrN8LNS7M_VmwCjmRiUru29fylthK8SvS_eKEFenLRXF8aiBL-q4y12OQg3fJ-pL6bVcyG',0,170,'https://iandwe.s3.ap-northeast-2.amazonaws.com/image/7YXRkkhJ',_binary '','민우','86d124e86c849769afc63f14a8048047487f6743a3bdac280e5d7e3d8201884f','cbb69deed5668a1413e94af199d45269',70,4,4,4),(5,'hello@naver.com','d1skyKwTPBDoLedLEmlN__:APA91bHjoR36Inh_Zu-KgBikdMYml0uxVeab_l5KRdQq0ZLDiJg5UDW9JbgVXoJS6ijN1r4bqftj4GGqn8ttcvN1CxVh3bKCQPmtH9LKVhHnbEMn5TDxRjmTdqjyNRiQI2Xa2XqKkpvj',0,174,NULL,_binary '','최창용','d7c1b2c9052ac6cfaf944dc1aa6fdb039483c298ce4cd3de8186d0b727f4bb96','3aaaabed850ff8e837f1d79d990cc6d0',68,5,5,5),(6,'ssafy1@ssafy.com','f01mybaJl9Xykwc9YeUoji:APA91bHEPhd__Vy-jSgVeQNYW35Ma2dZZdB7lQjgkxqvK8FfJp2_5zN13JBMBNv3-6xxEcrrN8LNS7M_VmwCjmRiUru29fylthK8SvS_eKEFenLRXF8aiBL-q4y12OQg3fJ-pL6bVcyG',0,170,'https://iandwe.s3.ap-northeast-2.amazonaws.com/image/VpvGcDmu',_binary '','김민수','c63c1be1ad2cc953b44f96d897d0b82b5fe61abd0422ae69456bb5e98440e3e9','62bafea6df6425027070b3382ffaa374',75,6,6,6),(7,'ssafymancity@gmail.com','f01mybaJl9Xykwc9YeUoji:APA91bHEPhd__Vy-jSgVeQNYW35Ma2dZZdB7lQjgkxqvK8FfJp2_5zN13JBMBNv3-6xxEcrrN8LNS7M_VmwCjmRiUru29fylthK8SvS_eKEFenLRXF8aiBL-q4y12OQg3fJ-pL6bVcyG',0,185,'https://iandwe.s3.ap-northeast-2.amazonaws.com/image/fXN9lFak',_binary '','김싸피','2133799fcc88d33f9c9146c3e9b38c1c870eaad71e2bd714a00dbaad4275f41b','4020c94990494ca417db11d7944db7e5',110,7,7,7),(8,'aop8021@gmail.com','cCQAzvmrzZWvCbBZqJqaiy:APA91bHLcCQuSgKHhep0szCpydLCEdVHG_JT_SkKosjcf7bsfPLRzpQoG1FBCIEwe9XL7Hvyv7wv9xdsu9teGIb1VYAIihJDrJFvPmND3xAEOWRKjlbHHFSsbgdxnSvd18SRI9e9X0iZ',0,190,'https://iandwe.s3.ap-northeast-2.amazonaws.com/image/oo1Fix3G',_binary '\0','지용이','ac2732c1a31d601a65d2cdaad6115060ea5c52e20b0e3f553ad482e9552107d1','f290640d88d6de03c01dbe385ebf33a3',130,8,8,8),(9,'ssafy2@ssafy.com','f01mybaJl9Xykwc9YeUoji:APA91bHEPhd__Vy-jSgVeQNYW35Ma2dZZdB7lQjgkxqvK8FfJp2_5zN13JBMBNv3-6xxEcrrN8LNS7M_VmwCjmRiUru29fylthK8SvS_eKEFenLRXF8aiBL-q4y12OQg3fJ-pL6bVcyG',0,175,'https://iandwe.s3.ap-northeast-2.amazonaws.com/image/mLtPwVy5',_binary '','권지용','05d4001caf3a7f1f37da7d62e895ae51768eeeff62d117bfa7cb03c95097aa43','f5cca0ea21fa0a56e19037bee095b5cf',80,9,9,9),(10,'ss@ssafy.com','dpWiamph8nSV8SBzZxEIqI:APA91bGh_Y3UTBaGuPzJiJUrnJW4rXwEV6vh_PbkMHOZKfkXAblaF3lJicCaLvbDLL9BDmr3j6rDvGZjUqTfwoXqfdcE57s-Fp4k3a8bxkf9i0ChkfEPs63vPRZGxAV0w_jaQH-i2BpN',0,200,NULL,_binary '\0','ss','6dd1952aef9af3040d385e4b241acface90ea82431e1ba914e8b9583821d9afe','050cac87deceda7db03b8c2b0dacde8a',100,10,10,10),(11,'dltkvl@naver.com','d1skyKwTPBDoLedLEmlN__:APA91bHjoR36Inh_Zu-KgBikdMYml0uxVeab_l5KRdQq0ZLDiJg5UDW9JbgVXoJS6ijN1r4bqftj4GGqn8ttcvN1CxVh3bKCQPmtH9LKVhHnbEMn5TDxRjmTdqjyNRiQI2Xa2XqKkpvj',0,166,NULL,_binary '\0','이싸피','bb2ed361aa8ecb5224ce42500bf8fe244f7739d12454b08cb95875d5effc8e18','d18968a1a8554f4abf3d3f2464733186',66,11,11,11),(12,'chltkvl@naver.com','eG0BEnbhuBW4Y2EXr-q715:APA91bEeIc96AZFRLK-WoMbYI6ZP8FkimrmV4kiml590MGB56zX6hy3weSMzO19ATE10mzlV51q9fxfUCmO1_Xikxwa7aW_NkJYTYYkTbJFbCxWykopW0LT6llwMj0NqHZEoY6mh5-Iu',0,177,NULL,_binary '','최싸피','fe390e3b7a4de9854f9e101f2c520a2dfad69aaade656ee517de25fac518087f','841c57d6b14a2da1fb706d14db97f5cc',66,12,12,12),(13,'ssafy3@ssafy.com','f01mybaJl9Xykwc9YeUoji:APA91bHEPhd__Vy-jSgVeQNYW35Ma2dZZdB7lQjgkxqvK8FfJp2_5zN13JBMBNv3-6xxEcrrN8LNS7M_VmwCjmRiUru29fylthK8SvS_eKEFenLRXF8aiBL-q4y12OQg3fJ-pL6bVcyG',0,168,NULL,_binary '\0','아카시아','1181e6d5e64b2baccea7cbe879f9efdfbdcfb246c985d9a73de70ca8aa0586ab','9bcc34675e53dd742feabb5bffad0401',55,13,13,13);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-04  0:26:26
