/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 80036 (8.0.36)
 Source Host           : localhost:3306
 Source Schema         : ocp

 Target Server Type    : MySQL
 Target Server Version : 80036 (8.0.36)
 File Encoding         : 65001

 Date: 07/05/2024 17:47:04
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article_tag
-- ----------------------------
DROP TABLE IF EXISTS `article_tag`;
CREATE TABLE `article_tag`  (
  `aid` int NOT NULL,
  `tid` int NOT NULL,
  INDEX `FKfh833kah5dgdn7n21unoc7mq6`(`tid` ASC) USING BTREE,
  INDEX `FKt75q5ig3ov66onmfl26upqtkv`(`aid` ASC) USING BTREE,
  CONSTRAINT `FKfh833kah5dgdn7n21unoc7mq6` FOREIGN KEY (`tid`) REFERENCES `tags` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKt75q5ig3ov66onmfl26upqtkv` FOREIGN KEY (`aid`) REFERENCES `articles` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article_tag
-- ----------------------------

-- ----------------------------
-- Table structure for articles
-- ----------------------------
DROP TABLE IF EXISTS `articles`;
CREATE TABLE `articles`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `cover` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `eid` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKj2qnw5lhuen82dh7rbg77v2fq`(`eid` ASC) USING BTREE,
  CONSTRAINT `FKj2qnw5lhuen82dh7rbg77v2fq` FOREIGN KEY (`eid`) REFERENCES `experts` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of articles
-- ----------------------------
INSERT INTO `articles` VALUES (1, '### 又 </br> \\n yiyi', '/1.jpg', 'Modern Advances in Economics', 1);

-- ----------------------------
-- Table structure for articleComments
-- ----------------------------
DROP TABLE IF EXISTS `articleComments`;
CREATE TABLE `articleComments`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `time` datetime(6) NULL DEFAULT NULL,
  `uid` int NULL DEFAULT NULL,
  `aid` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKquluhan0rqmtk5x8v3178ypd6`(`uid` ASC) USING BTREE,
  INDEX `FKo9dhrhg0ray7ck63pdxfbuo39`(`aid` ASC) USING BTREE,
  CONSTRAINT `FKo9dhrhg0ray7ck63pdxfbuo39` FOREIGN KEY (`aid`) REFERENCES `articles` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKquluhan0rqmtk5x8v3178ypd6` FOREIGN KEY (`uid`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of articleComments
-- ----------------------------

-- ----------------------------
-- Table structure for experts
-- ----------------------------
DROP TABLE IF EXISTS `experts`;
CREATE TABLE `experts`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `uid` int NULL DEFAULT NULL,
  `introduction` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `price` decimal(5, 2) NULL DEFAULT NULL,
  `rating` decimal(3, 1) NULL DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `UK_sibbswq0bpg6yy463kldqjvhi`(`uid` ASC) USING BTREE,
  CONSTRAINT `FKhjs294rjx9s8jek5mb41g4ewg` FOREIGN KEY (`uid`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of experts
-- ----------------------------
INSERT INTO `experts` VALUES (1, 1, 'Professor Zhang San, Ph.D. in Economics, with 20 years of experience in the finance industry.', 'Zhang San', 100.00, 5.0, '/1.jpg');

-- ----------------------------
-- Table structure for messages
-- ----------------------------
DROP TABLE IF EXISTS `messages`;
CREATE TABLE `messages`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `is_read` bit(1) NOT NULL,
  `send_time` datetime(6) NULL DEFAULT NULL,
  `rid` int NOT NULL,
  `sid` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKkhn411bjhq2gmroo37haksfn9`(`rid` ASC) USING BTREE,
  INDEX `FK8u7qcajotrmyek2o3al96pc69`(`sid` ASC) USING BTREE,
  CONSTRAINT `FK8u7qcajotrmyek2o3al96pc69` FOREIGN KEY (`sid`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKkhn411bjhq2gmroo37haksfn9` FOREIGN KEY (`rid`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 198 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of messages
-- ----------------------------
INSERT INTO `messages` VALUES (171, '55\n', b'1', '2024-05-06 22:15:35.000000', 1, 2);
INSERT INTO `messages` VALUES (172, '12', b'0', '2024-05-06 22:16:50.000000', 2, 1);
INSERT INTO `messages` VALUES (173, '？', b'0', '2024-05-06 22:23:30.000000', 1, 1);
INSERT INTO `messages` VALUES (174, '？\n', b'0', '2024-05-06 22:23:34.000000', 3, 1);
INSERT INTO `messages` VALUES (175, '哈哈', b'0', '2024-05-06 22:27:48.800508', 1, 1);
INSERT INTO `messages` VALUES (176, '123', b'0', '2024-05-06 22:30:37.870984', 3, 1);
INSERT INTO `messages` VALUES (177, '？', b'0', '2024-05-06 22:31:05.451667', 2, 2);
INSERT INTO `messages` VALUES (178, '\n👩🏼‍💻', b'0', '2024-05-06 22:31:07.972807', 2, 2);
INSERT INTO `messages` VALUES (179, '🥂', b'0', '2024-05-06 22:31:32.731269', 1, 1);
INSERT INTO `messages` VALUES (180, '\n👩🏼‍💻👩🏼‍💻👩🏼‍💻👩🏼‍💻', b'0', '2024-05-06 22:31:42.264172', 3, 2);
INSERT INTO `messages` VALUES (181, '😭😭😭😭', b'0', '2024-05-06 22:31:44.630950', 3, 2);
INSERT INTO `messages` VALUES (182, '？', b'0', '2024-05-06 22:32:00.414086', 3, 1);
INSERT INTO `messages` VALUES (183, '？', b'0', '2024-05-06 22:34:07.432987', 3, 1);
INSERT INTO `messages` VALUES (184, '？\n', b'0', '2024-05-06 22:35:05.609644', 3, 1);
INSERT INTO `messages` VALUES (185, '\n😭😭😭', b'0', '2024-05-06 22:35:16.210137', 1, 1);
INSERT INTO `messages` VALUES (186, '😭😭', b'0', '2024-05-06 22:35:24.885723', 3, 2);
INSERT INTO `messages` VALUES (187, '😭🥂🥂🥂🥂', b'0', '2024-05-06 22:35:29.438429', 2, 2);
INSERT INTO `messages` VALUES (188, '😭', b'0', '2024-05-06 22:37:26.685177', 3, 1);
INSERT INTO `messages` VALUES (189, 'sad', b'0', '2024-05-06 22:37:29.968868', 3, 1);
INSERT INTO `messages` VALUES (190, '哈哈', b'0', '2024-05-06 22:37:49.901494', 3, 3);
INSERT INTO `messages` VALUES (191, '\n自嗨', b'0', '2024-05-06 22:37:51.221765', 3, 3);
INSERT INTO `messages` VALUES (192, '\n💖💖💖', b'0', '2024-05-06 22:37:55.757856', 3, 3);
INSERT INTO `messages` VALUES (193, '您好', b'0', '2024-05-06 22:38:04.886679', 2, 3);
INSERT INTO `messages` VALUES (194, '👩🏼‍💻', b'0', '2024-05-07 08:40:40.892591', 1, 1);
INSERT INTO `messages` VALUES (195, 'crazy', b'0', '2024-05-07 11:03:33.138111', 1, 1);
INSERT INTO `messages` VALUES (196, '👩🏼‍💻👩🏼‍💻', b'0', '2024-05-07 11:03:41.656295', 1, 1);
INSERT INTO `messages` VALUES (197, '👩🏼‍💻', b'0', '2024-05-07 11:04:10.520830', 1, 1);

-- ----------------------------
-- Table structure for replies
-- ----------------------------
DROP TABLE IF EXISTS `replies`;
CREATE TABLE `replies`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `time` datetime(6) NULL DEFAULT NULL,
  `cid` int NULL DEFAULT NULL,
  `uid` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKbq9kgpy1ldyjko15n0r7bf157`(`cid` ASC) USING BTREE,
  INDEX `FKt202gd81iqyu8dkc3jteqa2q8`(`uid` ASC) USING BTREE,
  CONSTRAINT `FKbq9kgpy1ldyjko15n0r7bf157` FOREIGN KEY (`cid`) REFERENCES `articleComments` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKt202gd81iqyu8dkc3jteqa2q8` FOREIGN KEY (`uid`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of replies
-- ----------------------------

-- ----------------------------
-- Table structure for tags
-- ----------------------------
DROP TABLE IF EXISTS `tags`;
CREATE TABLE `tags`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tags
-- ----------------------------

-- ----------------------------
-- Table structure for tweets
-- ----------------------------
DROP TABLE IF EXISTS `tweets`;
CREATE TABLE `tweets`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `uid` int NULL DEFAULT NULL,
  `time` datetime(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKrwcopc611je5ychhqvbnhnkk6`(`uid` ASC) USING BTREE,
  CONSTRAINT `FKrwcopc611je5ychhqvbnhnkk6` FOREIGN KEY (`uid`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of tweets
-- ----------------------------
INSERT INTO `tweets` VALUES (1, 'Tom is in a big hurry.', 'q', 1, '2024-05-07 10:49:49.000000');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `about_me` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `enabled` int NOT NULL,
  `level` int NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `role` enum('expert','user') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `tel` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `uid` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `UK_efqukogbk7i0poucwoy2qie74`(`uid` ASC) USING BTREE,
  CONSTRAINT `FKcsfakukbkvv07whce3vl5eiy8` FOREIGN KEY (`uid`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, NULL, '/1.jpg', NULL, 1, 1, '123', 'expert', NULL, 'admin', NULL);
INSERT INTO `users` VALUES (2, NULL, '/2.jpg', NULL, 1, 1, '123', 'user', NULL, 'zh', NULL);
INSERT INTO `users` VALUES (3, NULL, '/3.jpg', NULL, 1, 1, '123', 'user', NULL, 'nwdnysl', NULL);

SET FOREIGN_KEY_CHECKS = 1;
