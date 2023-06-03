-- MySQL dump 10.13  Distrib 8.0.33, for Linux (x86_64)
--
-- Host: localhost    Database: benin_controle_users
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.20.04.2

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
-- Table structure for table `faire_rapport`
--

DROP TABLE IF EXISTS `faire_rapport`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faire_rapport` (
  `id_employee` int NOT NULL,
  `titre` varchar(200) NOT NULL,
  `date_enregistrement` varchar(200) NOT NULL,
  `nom_fichier_rapport` varchar(200) NOT NULL,
  KEY `foreign` (`id_employee`),
  CONSTRAINT `FK` FOREIGN KEY (`id_employee`) REFERENCES `utilisateur` (`num_matricul`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faire_rapport`
--

LOCK TABLES `faire_rapport` WRITE;
/*!40000 ALTER TABLE `faire_rapport` DISABLE KEYS */;
INSERT INTO `faire_rapport` VALUES (1,'xnsnxl:',',s;nx; ','sn, x;sn x'),(1,'none','none','none'),(1,'none','none','none'),(1,'none','none','none'),(1,'za,,;d','2023-05-10 02:07:40','Capture d’écran de 2023-05-05 21-01-51.png'),(1,'za,,;d','2023-05-10 02:08:03','Capture d’écran de 2023-05-05 21-01-51.png'),(1,'kll,,l,','2023-05-10 15:23:55','logo1.png'),(1,'hh(-','2023-05-12 09:37:53','Capture d’écran de 2023-05-05 21-02-14.png'),(1,'hh(-','2023-05-12 09:37:57','Capture d’écran de 2023-05-05 21-02-14.png');
/*!40000 ALTER TABLE `faire_rapport` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `note_client`
--

DROP TABLE IF EXISTS `note_client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `note_client` (
  `email_client` varchar(200) NOT NULL,
  `note` varchar(200) NOT NULL,
  `critique` varchar(300) NOT NULL,
  `id_employee` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `note_client`
--

LOCK TABLES `note_client` WRITE;
/*!40000 ALTER TABLE `note_client` DISABLE KEYS */;
INSERT INTO `note_client` VALUES ('user1@gmail.com','5','bnbz',1),('User2@gmail.com','6','None',2);
/*!40000 ALTER TABLE `note_client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notes`
--

DROP TABLE IF EXISTS `notes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notes` (
  `id_employee` int NOT NULL,
  `id_note` varchar(200) NOT NULL,
  `statut_ponc` varchar(200) NOT NULL,
  `statut_assiduite` varchar(200) NOT NULL,
  `statut_creat` varchar(200) NOT NULL,
  `statut_conduite` varchar(200) NOT NULL,
  PRIMARY KEY (`id_note`),
  KEY `id_employee` (`id_employee`),
  CONSTRAINT `fk2` FOREIGN KEY (`id_employee`) REFERENCES `utilisateur` (`num_matricul`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notes`
--

LOCK TABLES `notes` WRITE;
/*!40000 ALTER TABLE `notes` DISABLE KEYS */;
INSERT INTO `notes` VALUES (1,'note_1','10','10','10','10'),(1,'note_1662326','4','4','4','4'),(1,'note_2','15','15','15','15'),(1,'note_8603832','4','4','4','4');
/*!40000 ALTER TABLE `notes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `performences`
--

DROP TABLE IF EXISTS `performences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `performences` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_note_ref` varchar(200) NOT NULL,
  `note` varchar(200) NOT NULL,
  `date` varchar(200) NOT NULL,
  `commentaire` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `foreign` (`id_note_ref`),
  CONSTRAINT `fk3` FOREIGN KEY (`id_note_ref`) REFERENCES `notes` (`id_note`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `performences`
--

LOCK TABLES `performences` WRITE;
/*!40000 ALTER TABLE `performences` DISABLE KEYS */;
INSERT INTO `performences` VALUES (1,'note_1','10','none','good'),(2,'note_2','15','none','none'),(3,'note_8603832','16','2023-05-17 10:39:33','Good');
/*!40000 ALTER TABLE `performences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `presence`
--

DROP TABLE IF EXISTS `presence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `presence` (
  `id_employee` int NOT NULL,
  `date` varchar(300) NOT NULL,
  KEY `foreign` (`id_employee`),
  CONSTRAINT `fk4` FOREIGN KEY (`id_employee`) REFERENCES `utilisateur` (`num_matricul`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `presence`
--

LOCK TABLES `presence` WRITE;
/*!40000 ALTER TABLE `presence` DISABLE KEYS */;
INSERT INTO `presence` VALUES (1,'2023-05-06 19:12:11'),(1,'2023-05-09 10:48:04'),(1,'2023-05-09 10:48:12'),(1,'2023-05-09 10:49:23'),(1,'2023-05-08 23:39:02'),(1,'2023-05-10 10:08:51'),(1,'2023-05-10 10:09:02'),(1,'2023-05-12 09:32:25'),(1,'2023-05-12 09:32:47'),(1,'2023-05-12 09:36:57');
/*!40000 ALTER TABLE `presence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utilisateur` (
  `num_matricul` int NOT NULL,
  `nom` varchar(200) NOT NULL,
  `prenom` varchar(200) NOT NULL,
  `date_naissance` varchar(200) NOT NULL,
  `lieu_naissance` varchar(200) NOT NULL,
  `nombre_enfant` varchar(200) NOT NULL,
  `reference_contrat` varchar(200) NOT NULL,
  `date_recrutement` varchar(200) NOT NULL,
  `piece_join_name` varchar(200) NOT NULL,
  `numero_compte` varchar(200) NOT NULL,
  `reference_banque` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `telephone` varchar(200) NOT NULL,
  `type_utilisateur` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `situation_matri` varchar(200) NOT NULL,
  PRIMARY KEY (`num_matricul`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utilisateur`
--

LOCK TABLES `utilisateur` WRITE;
/*!40000 ALTER TABLE `utilisateur` DISABLE KEYS */;
INSERT INTO `utilisateur` VALUES (1,'User1','User1','01/02/22','cotonou','0','02','02/03/09','1.pdf','1283898368T835653877638','none','user1@gmail.com','97979797','employe','user1','celibataire'),(2,'User2','User2','02/07/90','Parakou','2','2','2020','User2.pdf','567574635356587576567','none','User2@gmail.com','+22997979797','client','User2','celibataire'),(3,'empty','empty','empty','empty','0','empty','empty','empty','empty','empty','empty','empty','employe','user3','empty'),(4,'empty','empty','empty','empty','0','empty','empty','empty','empty','empty','empty','empty','employe','user3','empty'),(5,'empty','empty','empty','empty','0','empty','empty','empty','empty','empty','empty','empty','admin','admin','empty');
/*!40000 ALTER TABLE `utilisateur` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-17 16:27:49
