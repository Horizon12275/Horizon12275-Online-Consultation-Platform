/*
 Navicat MySQL Data Transfer

 Source Server         : MySQL
 Source Server Type    : MySQL
 Source Server Version : 80037
 Source Host           : localhost:3306
 Source Schema         : ocp

 Target Server Type    : MySQL
 Target Server Version : 80037
 File Encoding         : 65001

 Date: 19/06/2024 15:20:25
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article_comments
-- ----------------------------
DROP TABLE IF EXISTS `article_comments`;
CREATE TABLE `article_comments`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `time` datetime(6) NULL DEFAULT NULL,
  `aid` int NULL DEFAULT NULL,
  `cid` int NULL DEFAULT NULL,
  `uid` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `UK_b3ictjw4p8ml22bici0ee8uem`(`cid`) USING BTREE,
  INDEX `FKngossfgv8yv6sm8gnl5f4rwg8`(`aid`) USING BTREE,
  INDEX `FKpraxg70kj24nb2w8g9c8ntmp1`(`uid`) USING BTREE,
  CONSTRAINT `FKh2ot9elu1i7ao5qautbh5pnnm` FOREIGN KEY (`cid`) REFERENCES `comments` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKngossfgv8yv6sm8gnl5f4rwg8` FOREIGN KEY (`aid`) REFERENCES `articles` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKpraxg70kj24nb2w8g9c8ntmp1` FOREIGN KEY (`uid`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article_comments
-- ----------------------------

-- ----------------------------
-- Table structure for article_tag
-- ----------------------------
DROP TABLE IF EXISTS `article_tag`;
CREATE TABLE `article_tag`  (
  `aid` int NOT NULL,
  `tid` int NOT NULL,
  INDEX `FKfh833kah5dgdn7n21unoc7mq6`(`tid`) USING BTREE,
  INDEX `FKt75q5ig3ov66onmfl26upqtkv`(`aid`) USING BTREE,
  CONSTRAINT `FKfh833kah5dgdn7n21unoc7mq6` FOREIGN KEY (`tid`) REFERENCES `tags` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKt75q5ig3ov66onmfl26upqtkv` FOREIGN KEY (`aid`) REFERENCES `articles` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article_tag
-- ----------------------------
INSERT INTO `article_tag` VALUES (1, 3);
INSERT INTO `article_tag` VALUES (2, 1);
INSERT INTO `article_tag` VALUES (3, 2);
INSERT INTO `article_tag` VALUES (4, 3);
INSERT INTO `article_tag` VALUES (5, 4);
INSERT INTO `article_tag` VALUES (6, 5);
INSERT INTO `article_tag` VALUES (7, 6);
INSERT INTO `article_tag` VALUES (8, 7);
INSERT INTO `article_tag` VALUES (9, 8);
INSERT INTO `article_tag` VALUES (10, 9);
INSERT INTO `article_tag` VALUES (11, 10);
INSERT INTO `article_tag` VALUES (12, 11);

-- ----------------------------
-- Table structure for articles
-- ----------------------------
DROP TABLE IF EXISTS `articles`;
CREATE TABLE `articles`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `cover` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `time` datetime(6) NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `eid` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKj2qnw5lhuen82dh7rbg77v2fq`(`eid`) USING BTREE,
  CONSTRAINT `FKj2qnw5lhuen82dh7rbg77v2fq` FOREIGN KEY (`eid`) REFERENCES `experts` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of articles
-- ----------------------------
INSERT INTO `articles` VALUES (1, 'The impact of artificial intelligence on modern society is undeniable and far-reaching. From self-driving cars to personalized recommendations on streaming platforms, AI has revolutionized the way we live and interact with technology. One of the most significant impacts of AI is in the realm of healthcare, where AI-powered tools are being used for early disease detection, personalized treatment plans, and even robot-assisted surgeries. This has significantly improved patient outcomes and reduced healthcare costs. In the field of finance, AI algorithms are used to detect fraud, predict market trends, and optimize investment portfolios. This has made financial transactions more secure and efficient. AI has also transformed the way we shop, with chatbots and recommendation engines providing personalized shopping experiences. In the workplace, AI is automating repetitive tasks, increasing productivity, and enabling employees to focus on more strategic work. However, the rise of AI also raises ethical concerns, such as job displacement, bias in algorithms, and privacy issues. It is crucial for society to address these challenges and ensure that AI technologies are developed and deployed responsibly. Overall, the impact of artificial intelligence on modern society is transformative, presenting both opportunities and challenges that must be carefully navigated for the benefit of all.', 'http://localhost:8080/image/article1.jpg', 'Explore the societal impact of artificial intelligence.', '2024-04-27 15:48:17.000000', 'The Impact of Artificial Intelligence on Modern Society', 1);
INSERT INTO `articles` VALUES (2, 'Transforming medicine through AI innovations is revolutionizing how healthcare is delivered and improving patient outcomes. AI technologies are being integrated into various aspects of the medical field, from diagnosis and treatment to research and patient care. One of the key ways AI is transforming medicine is through the use of machine learning algorithms to analyze large datasets and identify patterns that can help in the early detection of diseases. By analyzing medical imaging data, AI can assist radiologists in detecting abnormalities earlier and more accurately. This early detection can lead to timely interventions and better treatment outcomes. AI is also being used to personalize treatment plans for patients based on their genetic makeup, medical history, and lifestyle factors. This personalized approach can lead to more effective and targeted treatments, reducing the likelihood of adverse reactions and improving patient satisfaction. In addition, AI is streamlining administrative processes in healthcare facilities, such as scheduling appointments, managing medical records, and optimizing workflows. This efficiency is freeing up healthcare professionals to focus more on patient care and reducing the burden of administrative tasks. However, the adoption of AI in medicine also raises ethical and regulatory concerns, such as data privacy, algorithm bias, and the need for transparency in decision-making processes. It is crucial for healthcare providers and policymakers to address these issues and ensure that AI technologies are implemented ethically and responsibly. Overall, the transformation of medicine through AI innovations holds great promise for improving healthcare delivery, advancing medical research, and ultimately enhancing the well-being of patients.', 'http://localhost:8080/image/article2.jpg', 'Revolutionize healthcare with intelligent technological advancements.', '2024-05-17 15:48:07.000000', 'Transforming Medicine Through AI Innovations', 2);
INSERT INTO `articles` VALUES (3, 'The philosophical inquiry into AI ethics delves into the complex moral and ethical dilemmas surrounding the development and deployment of artificial intelligence technologies. As AI continues to advance and become increasingly integrated into various aspects of society, questions about the impact of AI on human values, rights, and responsibilities have become more pressing. One of the key ethical considerations in AI development is the issue of autonomy and agency. As AI systems become more sophisticated and autonomous, there is a growing concern about the potential loss of control and decision-making power over these systems. This raises questions about accountability and responsibility when AI systems make decisions that have ethical implications. Another ethical concern is the issue of bias and fairness in AI algorithms. Many AI systems are trained on biased or incomplete datasets, leading to discriminatory outcomes in areas such as hiring, lending, and criminal justice. Addressing these biases and ensuring fairness in AI decision-making is crucial for promoting social justice and equality. Additionally, the impact of AI on privacy and data security is a significant ethical consideration. AI systems often collect and analyze vast amounts of personal data, raising concerns about surveillance, data breaches, and the potential for misuse of sensitive information. Protecting individual privacy and ensuring data security are essential for maintaining trust and ethical standards in AI development. Overall, the philosophical inquiry into AI ethics highlights the importance of addressing the ethical implications of AI technologies and ensuring that they are developed and deployed in ways that align with fundamental human values and principles.', 'http://localhost:8080/image/article3.jpg', 'Delve into ethical complexities surrounding AI development.', '2024-01-19 15:48:25.000000', 'The Philosophical Inquiry into AI Ethics', 3);
INSERT INTO `articles` VALUES (4, 'The ever-evolving landscape of technology is a vast and dynamic realm that continuously shapes and transforms the world we live in. From the invention of the wheel thousands of years ago to the modern era of artificial intelligence and blockchain technology, the progress of technology has been a key driver of human civilization. The rapid pace of change in the technological landscape is evident in the constant emergence of new innovations and disruptions that redefine industries and revolutionize societies. Advances in fields such as biotechnology, nanotechnology, and robotics are pushing the boundaries of what is possible, opening up new frontiers in medicine, energy, and communication. The interconnected nature of technology in today\'s digital age has created a global network where ideas, information, and resources flow seamlessly across borders and cultures. However, as technology continues to advance, so do the challenges and ethical considerations that come with it. Issues such as data privacy, cybersecurity, and the impact of automation on jobs require careful thought and regulation to ensure a balance between progress and responsibility. The evolving technology landscape also presents opportunities for collaboration and competition on a global scale. Countries and companies race to lead in fields like artificial intelligence, quantum computing, and renewable energy, driving innovation and economic growth. In navigating the ever-evolving landscape of technology, it is essential for all stakeholders to prioritize ethical considerations, sustainability, and inclusivity. By fostering a culture of responsible innovation and digital literacy, we can harness the power of technology to create a better world for future generations.', 'http://localhost:8080/image/article4.jpg', 'Navigate the ever-changing landscape of technological evolution.', '2023-12-08 15:48:34.000000', 'The Ever-Evolving Landscape of Technology', 4);
INSERT INTO `articles` VALUES (5, 'Empowering health and wellness through AI has the potential to revolutionize the way we approach healthcare and personal well-being. Artificial intelligence (AI) technologies offer a range of opportunities to improve patient care, enhance public health initiatives, and enable individuals to take control of their own health. AI-powered applications can analyze vast amounts of medical data to identify patterns, predict outcomes, and provide personalized treatment recommendations. This can help healthcare providers make more informed decisions, leading to better diagnoses and treatment plans. Additionally, AI can support preventive care efforts by monitoring health indicators in real-time and alerting individuals to potential risks or changes in their condition. By leveraging AI in areas such as telemedicine, wearable devices, and health monitoring apps, individuals can access healthcare services remotely and proactively manage their health. AI technologies also play a crucial role in supporting mental health and wellness initiatives. Virtual assistants and chatbots powered by AI can offer support, guidance, and resources to individuals dealing with stress, anxiety, or other mental health challenges. These tools provide a confidential and accessible way for users to seek help and practice self-care techniques. Furthermore, AI can aid in early intervention and detection of mental health issues by analyzing language patterns and social media posts for signs of distress or potential risk. As AI continues to advance, it is important for healthcare providers, policymakers, and technology developers to prioritize data privacy, security, and ethical considerations in the use of AI-powered solutions. By promoting transparency, accountability, and inclusivity, we can ensure that AI empowers individuals to lead healthier and more fulfilling lives.', 'http://localhost:8080/image/article5.jpg', 'Harness AI to promote health and wellness initiatives.', '2023-12-21 15:48:37.000000', 'Empowering Health & Wellness Through AI', 5);
INSERT INTO `articles` VALUES (6, 'AI innovations are playing a critical role in environmental conservation efforts, offering new tools and capabilities to protect and preserve the planet\'s natural resources. Artificial intelligence technologies are being deployed across various sectors to track, monitor, and manage environmental data, enabling more effective conservation strategies. AI-powered systems can analyze large datasets from satellite imagery, remote sensors, and environmental sensors to monitor changes in land use, detect deforestation, track wildlife populations, and predict natural disasters. This real-time monitoring and analysis help conservationists and environmental agencies make data-driven decisions and implement targeted interventions to mitigate environmental threats. Additionally, AI is being used to enhance resource management practices, such as optimizing energy consumption, water usage, and waste reduction in industries and infrastructure. Machine learning algorithms can optimize processes, reduce resource waste, and minimize environmental impact, promoting sustainable practices and conservation of natural resources. AI is also revolutionizing biodiversity research and conservation efforts by assisting in species identification, habitat mapping, and conservation planning. Deep learning algorithms can analyze image and sound data to identify species, track animal movements, and assess ecosystem health, providing valuable insights for conservation decision-making. Furthermore, AI-powered solutions are increasingly being integrated into conservation education and outreach programs to raise awareness about environmental issues, engage communities in conservation initiatives, and foster a culture of sustainability. By harnessing the power of AI technologies, conservationists and environmental organizations can scale their efforts, optimize resources, and achieve greater impact in protecting the planet\'s biodiversity and ecosystems.', 'http://localhost:8080/image/article6.jpg', 'Utilize AI for innovative environmental conservation efforts.', '2024-10-12 15:48:42.000000', 'AI Innovations for Environmental Conservation', 6);
INSERT INTO `articles` VALUES (7, 'AI technology has emerged as a powerful tool for revolutionizing design practices and driving innovation in various industries. When it comes to sustainable design for environmental conservation, AI offers a wealth of opportunities to create more efficient, data-driven solutions. One key area where AI can make a significant impact is generative design. By leveraging AI algorithms, architects and designers can generate a multitude of design options that prioritize sustainability, energy efficiency, and minimal environmental impact. This not only speeds up the design process but also ensures that the final product is optimized for sustainability. Another critical aspect where AI can contribute to innovative design is in material selection. AI tools can analyze the environmental impact and lifecycle of different materials, helping designers make informed decisions that minimize harm to the planet. Additionally, AI can play a crucial role in optimizing building performance. Through real-time data analysis and machine learning algorithms, AI can monitor energy consumption, occupancy patterns, and environmental conditions to make intelligent adjustments that improve energy efficiency and reduce waste. Furthermore, AI can aid in natural resource management by utilizing sensors and remote sensing technologies to monitor and preserve resources like water, soil, and biodiversity. By analyzing data trends and recommending sustainable practices, AI can help protect and conserve our precious natural resources. In the realm of transportation, AI technology can enable the design of eco-friendly transportation solutions such as autonomous vehicles and efficient public transit systems. By optimizing routes, reducing emissions, and improving traffic flow, AI can contribute to a more sustainable and efficient transportation landscape. In conclusion, AI technology is poised to transform the way we approach design for environmental conservation. By harnessing the power of AI, designers can create innovative, sustainable solutions that prioritize the well-being of our planet.', 'http://localhost:8080/image/article7.jpg', 'Redefine design methodologies through AI-driven technology.', '2024-02-21 15:48:47.000000', 'Innovating Design Through AI Technology', 7);
INSERT INTO `articles` VALUES (8, 'AI solutions are revolutionizing the finance industry by offering advanced tools and capabilities that enhance decision-making, risk management, and customer experience. One major area where AI is making a significant impact is in automated trading systems. AI algorithms can analyze market trends, predict price movements, and execute trades at high speeds, leading to more efficient and profitable trading strategies. Furthermore, AI-powered chatbots and virtual assistants are transforming the way customers interact with financial institutions. These intelligent tools can provide personalized recommendations, answer queries, and assist with transactions, improving customer satisfaction and loyalty. AI is also revolutionizing fraud detection and prevention in finance. Machine learning algorithms can analyze massive amounts of data to detect suspicious patterns and anomalies, helping financial institutions combat fraud more effectively. Moreover, AI is reshaping credit scoring and underwriting processes by incorporating alternative data sources and predictive analytics. This enables lenders to make more accurate and inclusive credit decisions, ultimately expanding access to financial services for underserved populations. In addition, AI-driven predictive analytics is revolutionizing risk management in finance. By analyzing vast amounts of historical and real-time data, AI models can identify potential risks, assess their impact, and recommend proactive mitigation strategies. This proactive approach helps financial institutions anticipate and manage risks more effectively. Furthermore, AI solutions are enhancing financial planning and portfolio management for individual investors. Robo-advisors powered by AI can analyze financial goals, risk tolerance, and market conditions to offer personalized investment recommendations and optimize portfolio performance. Overall, AI solutions are revolutionizing the finance industry by providing advanced capabilities that improve decision-making, risk management, and customer engagement.', 'http://localhost:8080/image/article8.jpg', 'Disrupt financial systems with revolutionary AI solutions.', '2023-10-18 15:48:50.000000', 'Revolutionizing Finance Through AI Solutions', 8);
INSERT INTO `articles` VALUES (9, 'The integration of AI technology in the field of psychology has brought about significant advancements in research, diagnosis, and treatment methods. One key area where AI is making a difference is in mental health care. AI-powered tools are being used to analyze large datasets of psychological information to identify patterns, predict outcomes, and personalize treatment plans for individuals with mental health issues. These tools can assist clinicians in making more accurate diagnoses and developing tailored interventions that are more effective. AI is also being used in therapy settings, with virtual therapists and chatbots providing support and guidance to individuals in need of mental health services. These AI-driven platforms offer accessibility, convenience, and anonymity, making mental health care more accessible to a wider range of people. Additionally, AI is being integrated into psychological research to analyze and interpret complex data sets, identify correlations, and generate insights that can help researchers better understand human behavior and cognition. Machine learning algorithms can also assist in uncovering underlying patterns and mechanisms in mental disorders, leading to advancements in our understanding and treatment of psychological conditions. Furthermore, AI technology is being used to develop innovative assessment tools for cognitive testing, personality assessment, and emotional recognition. These tools can provide more objective and standardized measures, reducing biases and improving the accuracy of psychological assessments. Overall, the integration of AI technology in psychology is revolutionizing the field by enhancing research capabilities, improving diagnosis and treatment methods, and increasing accessibility to mental health care services.', 'http://localhost:8080/image/article9.jpg', 'Discover AI\'s contributions to understanding human psychology.', '2022-10-13 15:48:54.000000', 'Advancements in Psychology Through AI Integration', 9);
INSERT INTO `articles` VALUES (10, 'The integration of AI technology in marketing has revolutionized the way businesses understand and connect with their target audiences. AI-powered tools and insights enable marketers to analyze vast amounts of data, identify trends and patterns, and make data-driven decisions to optimize their marketing strategies. One key area where AI is transforming marketing practices is in customer segmentation and targeting. AI algorithms can analyze customer behavior and preferences to create more personalized and targeted marketing campaigns. By leveraging AI insights, marketers can tailor their messaging and offerings to individual customer needs, increasing engagement and conversion rates. AI is also being used in predictive analytics to forecast customer behavior and trends, helping marketers anticipate market changes and adjust their strategies accordingly. Additionally, AI tools can automate various marketing tasks, such as email marketing, social media scheduling, and ad optimization, saving time and resources for marketers. By integrating AI technology into marketing practices, businesses can enhance their marketing efforts, increase ROI, and deliver more relevant and personalized experiences to their customers. Overall, AI insights are empowering marketers to make more informed decisions, improve customer engagement, and drive business growth in today\'s competitive digital landscape.', 'http://localhost:8080/image/article10.jpg', 'Enhance marketng strategies with AI-driven insights.', '2023-08-17 15:48:59.000000', 'Elevating Marketing Practices Through AI Insights', 10);
INSERT INTO `articles` VALUES (11, 'Artificial intelligence (AI) is revolutionizing the legal industry by streamlining processes, improving efficiency, and enhancing compliance efforts. AI-powered tools are being increasingly used in legal practice to automate routine tasks such as contract review, legal research, and case analysis. These tools can sift through large volumes of data much faster and with higher accuracy than human lawyers, saving time and reducing the likelihood of errors. AI algorithms can also assist in predicting case outcomes, helping lawyers make more informed decisions and develop better strategies for their clients. In the realm of compliance, AI technology is utilized to monitor and analyze regulatory changes, flag potential risks, and ensure that organizations adhere to legal requirements. This proactive approach helps to mitigate legal risks and prevent compliance violations. Moreover, AI-powered software can provide real-time updates on changing laws and regulations, enabling legal departments to stay up-to-date and adapt their practices accordingly. Overall, the integration of AI in legal practice and compliance is transforming the industry by improving efficiency, accuracy, and risk management, ultimately benefiting both legal professionals and their clients.', 'http://localhost:8080/image/article11.jpg', 'Streamline legal practices through AI applications.', '2023-07-12 15:49:04.000000', 'AI Applications in Legal Practice and Compliance', 11);
INSERT INTO `articles` VALUES (12, 'Artificial intelligence (AI) is reshaping the field of business consulting by offering powerful tools and strategies to enhance decision-making and drive business performance. AI technologies such as machine learning, natural language processing, and predictive analytics are being leveraged to provide valuable insights, automate tasks, and optimize processes in the consulting industry. AI-driven data analytics tools can process large volumes of data to identify patterns, trends, and opportunities that can help businesses make informed decisions and develop effective strategies. Additionally, AI algorithms can analyze market trends, customer behavior, and competitor data to generate valuable recommendations for clients. These insights can drive business growth, improve efficiency, and enhance competitiveness. AI-powered chatbots and virtual assistants are also being used in consulting to provide personalized recommendations, offer 24/7 support, and streamline communication with clients. By integrating AI into their consulting practices, businesses can unlock new opportunities, drive innovation, and deliver better outcomes for their clients. The adoption of AI strategies in business consulting is transforming the industry by empowering consultants to deliver more value, make smarter decisions, and stay ahead of the competition.', 'http://localhost:8080/image/article12.jpg', 'Optimize business consulting using AI-driven strategies.', '2023-07-06 15:49:08.000000', 'Transforming Business Consulting Through AI Strategies', 12);

-- ----------------------------
-- Table structure for clients
-- ----------------------------
DROP TABLE IF EXISTS `clients`;
CREATE TABLE `clients`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `about_me` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `balance` decimal(5, 2) NULL DEFAULT NULL,
  `first_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `last_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `region` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `uid` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `UK_fxfj4bhpwrsb9a7jljj5vcgn1`(`uid`) USING BTREE,
  CONSTRAINT `FKd9pfrc1rkibxn39b3pv96coga` FOREIGN KEY (`uid`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of clients
-- ----------------------------
INSERT INTO `clients` VALUES (1, 'Hi, I\'m Horizon.', 'http://localhost:8080/image/user1.jpg', 0.00, 'Horizon', 'Zhao', 'Shanghai, China', 'user1', 1);
INSERT INTO `clients` VALUES (2, 'Hi, I\'m user1.', 'http://localhost:8080/image/user1.jpg', 0.00, 'Emily', 'Smith', 'Shanghai, China', 'user1', 2);
INSERT INTO `clients` VALUES (3, 'I\'m user2, nice to meet you.', 'http://localhost:8080/image/user2.jpg', 0.00, 'Liam', 'Johnson', 'Tokyo, Japan', 'user2', 3);
INSERT INTO `clients` VALUES (4, 'User3 here, exploring the digital realm.', 'http://localhost:8080/image/user3.jpg', 0.00, 'Sophia', 'Williams', 'New York City, USA', 'user3', 4);
INSERT INTO `clients` VALUES (5, 'User4, passionate about tech and creativity.', 'http://localhost:8080/image/user4.jpg', 0.00, 'Noah', 'Brown', 'London, United Kingdom', 'user4', 5);
INSERT INTO `clients` VALUES (6, 'Hey, I\'m user5, always up for a chat.', 'http://localhost:8080/image/user5.jpg', 0.00, 'Olivia', 'Jones', 'Paris, France', 'user5', 6);
INSERT INTO `clients` VALUES (7, 'User6, curious mind and a penchant for learning.', 'http://localhost:8080/image/user6.jpg', 0.00, 'Ethan', 'Garcia', 'Berlin, Germany', 'user6', 7);
INSERT INTO `clients` VALUES (8, 'I\'m user7, lover of all things innovative.', 'http://localhost:8080/image/user7.jpg', 0.00, 'Ava', 'Miller', 'Sydney, Australia', 'user7', 8);
INSERT INTO `clients` VALUES (9, 'User8, embracing the digital age with gusto.', 'http://localhost:8080/image/user8.jpg', 0.00, 'Mason', 'Davis', 'Rio de Janeiro, Brazil', 'user8', 9);
INSERT INTO `clients` VALUES (10, 'Hey there, I\'m user9, ready for new adventures.', 'http://localhost:8080/image/user9.jpg', 0.00, 'Isabella', 'Rodriguez', 'Moscow, Russia', 'user9', 10);
INSERT INTO `clients` VALUES (11, 'User10, tech enthusiast and problem solver.', 'http://localhost:8080/image/user10.jpg', 0.00, 'Lucas', 'Martinez', 'Dubai, United Arab Emirates', 'user10', 11);
INSERT INTO `clients` VALUES (12, 'I\'m user11, seeking connections and knowledge.', 'http://localhost:8080/image/user11.jpg', 0.00, 'Mia', 'Hernandez', 'Mumbai, India', 'user11', 12);
INSERT INTO `clients` VALUES (13, 'User12, on a journey of discovery and growth.', 'http://localhost:8080/image/user12.jpg', 0.00, 'Alexander', 'Lopez', 'Toronto, Canada', 'user12', 13);
INSERT INTO `clients` VALUES (14, 'Hi, I\'m user13, excited to engage and learn.', 'http://localhost:8080/image/user13.jpg', 0.00, 'Charlotte', 'Gonzalez', 'Seoul, South Korea', 'user13', 14);
INSERT INTO `clients` VALUES (15, 'User14, fueled by curiosity and ambition.', 'http://localhost:8080/image/user14.jpg', 0.00, 'Benjamin', 'Wilson', 'Mexico City, Mexico', 'user14', 15);
INSERT INTO `clients` VALUES (16, 'User15 here, ready to dive into the digital world.', 'http://localhost:8080/image/user15.jpg', 0.00, 'Amelia', 'Anderson', 'Cape Town, South Africa', 'user15', 16);

-- ----------------------------
-- Table structure for comment_likes
-- ----------------------------
DROP TABLE IF EXISTS `comment_likes`;
CREATE TABLE `comment_likes`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `cid` int NULL DEFAULT NULL,
  `uid` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKgn4lflqs5ytbhus0j7tqiy0ch`(`cid`) USING BTREE,
  INDEX `FKb4nw8sxcs5nfa5j7677curwxd`(`uid`) USING BTREE,
  CONSTRAINT `FKb4nw8sxcs5nfa5j7677curwxd` FOREIGN KEY (`uid`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKgn4lflqs5ytbhus0j7tqiy0ch` FOREIGN KEY (`cid`) REFERENCES `comments` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comment_likes
-- ----------------------------

-- ----------------------------
-- Table structure for comments
-- ----------------------------
DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments`  (
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comments
-- ----------------------------

-- ----------------------------
-- Table structure for consultations
-- ----------------------------
DROP TABLE IF EXISTS `consultations`;
CREATE TABLE `consultations`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `time` datetime(6) NULL DEFAULT NULL,
  `cid` int NULL DEFAULT NULL,
  `eid` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK7vqdtht58yhhmpmk59cg9y2ld`(`cid`) USING BTREE,
  INDEX `FKdgdget4lckv621a4yrfojtqfn`(`eid`) USING BTREE,
  CONSTRAINT `FK7vqdtht58yhhmpmk59cg9y2ld` FOREIGN KEY (`cid`) REFERENCES `clients` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKdgdget4lckv621a4yrfojtqfn` FOREIGN KEY (`eid`) REFERENCES `experts` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of consultations
-- ----------------------------

-- ----------------------------
-- Table structure for expert_applications
-- ----------------------------
DROP TABLE IF EXISTS `expert_applications`;
CREATE TABLE `expert_applications`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `certificate` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `education` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `field` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `first_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `introduction` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `last_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `verification_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of expert_applications
-- ----------------------------

-- ----------------------------
-- Table structure for expert_comments
-- ----------------------------
DROP TABLE IF EXISTS `expert_comments`;
CREATE TABLE `expert_comments`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `time` datetime(6) NULL DEFAULT NULL,
  `cid` int NULL DEFAULT NULL,
  `eid` int NULL DEFAULT NULL,
  `uid` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `UK_9qdscvtq29g7u257x2y8p5u10`(`cid`) USING BTREE,
  INDEX `FKg8h6ufiqd152ag54i5aa7fjip`(`eid`) USING BTREE,
  INDEX `FKgkfbhai1p60xl0ck0mtxe15ch`(`uid`) USING BTREE,
  CONSTRAINT `FK53uisa43rbkhsdqel7tf7jwtb` FOREIGN KEY (`cid`) REFERENCES `comments` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKg8h6ufiqd152ag54i5aa7fjip` FOREIGN KEY (`eid`) REFERENCES `experts` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKgkfbhai1p60xl0ck0mtxe15ch` FOREIGN KEY (`uid`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of expert_comments
-- ----------------------------

-- ----------------------------
-- Table structure for expert_speciality
-- ----------------------------
DROP TABLE IF EXISTS `expert_speciality`;
CREATE TABLE `expert_speciality`  (
  `eid` int NOT NULL,
  `sid` int NOT NULL,
  INDEX `FKi7243v83q513ue46ikgwpbuyf`(`sid`) USING BTREE,
  INDEX `FKmp13rlsk1nt2dki0tys4pe5ki`(`eid`) USING BTREE,
  CONSTRAINT `FKi7243v83q513ue46ikgwpbuyf` FOREIGN KEY (`sid`) REFERENCES `specialities` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKmp13rlsk1nt2dki0tys4pe5ki` FOREIGN KEY (`eid`) REFERENCES `experts` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of expert_speciality
-- ----------------------------
INSERT INTO `expert_speciality` VALUES (1, 3);
INSERT INTO `expert_speciality` VALUES (2, 1);
INSERT INTO `expert_speciality` VALUES (3, 2);
INSERT INTO `expert_speciality` VALUES (4, 3);
INSERT INTO `expert_speciality` VALUES (5, 4);
INSERT INTO `expert_speciality` VALUES (6, 5);
INSERT INTO `expert_speciality` VALUES (7, 6);
INSERT INTO `expert_speciality` VALUES (8, 7);
INSERT INTO `expert_speciality` VALUES (9, 8);
INSERT INTO `expert_speciality` VALUES (10, 9);
INSERT INTO `expert_speciality` VALUES (11, 10);
INSERT INTO `expert_speciality` VALUES (12, 11);

-- ----------------------------
-- Table structure for experts
-- ----------------------------
DROP TABLE IF EXISTS `experts`;
CREATE TABLE `experts`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `about_me` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `education` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `first_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `last_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `price` decimal(5, 2) NULL DEFAULT NULL,
  `rating` decimal(3, 1) NULL DEFAULT NULL,
  `region` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `uid` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `UK_sibbswq0bpg6yy463kldqjvhi`(`uid`) USING BTREE,
  CONSTRAINT `FKhjs294rjx9s8jek5mb41g4ewg` FOREIGN KEY (`uid`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of experts
-- ----------------------------
INSERT INTO `experts` VALUES (1, 'Hello, I\'m Emma Johnson, a software engineer passionate about crafting elegant solutions to complex problems.', 'http://localhost:8080/image/1.jpg', '2008.9-2012.6, Stanford University, Bachelor\'s Degree in Computer Sciencen2012.9-2014.3, Stanford University, Master\'s Degree in Software Engineering', 'Emma', 'Johnson', 'Emma Johnson', 40.00, 4.5, 'San Francisco, USA', 37);
INSERT INTO `experts` VALUES (2, 'I\'m Alex White, a medical doctor specializing in cardiology. I\'m dedicated to providing top-notch healthcare services to my patients.', 'http://localhost:8080/image/2.jpg', '2005.9-2011.6, Johns Hopkins University, Doctor of Medicinen2011.9-2015.3, Johns Hopkins University, Cardiology Residency Program', 'Alex', 'White', 'Alex White', 45.00, 4.0, 'New York City, USA', 38);
INSERT INTO `experts` VALUES (3, 'Greetings, I\'m Sophia Clark, an expert in philosophy with a deep understanding of ethical dilemmas and moral reasoning.', 'http://localhost:8080/image/3.jpg', '2007.9-2011.6, Oxford University, Bachelor\'s Degree in Philosophyn2011.9-2013.3, Oxford University, Master\'s Degree in Ethics and Morality', 'Sophia', 'Clark', 'Sophia Clark', 35.00, 4.5, 'London, UK', 39);
INSERT INTO `experts` VALUES (4, 'Hi, I\'m David Smith, a cybersecurity specialist committed to safeguarding digital assets and ensuring data protection.', 'http://localhost:8080/image/4.jpg', '2009.9-2013.6, MIT, Bachelor\'s Degree in Computer Engineeringn2013.9-2015.3, MIT, Master\'s Degree in Cybersecurity', 'David', 'Smith', 'David Smith', 50.00, 4.0, 'Boston, USA', 40);
INSERT INTO `experts` VALUES (5, 'Salutations, I\'m Lily Wang, a nutritionist dedicated to promoting healthy lifestyles and balanced dietary habits.', 'http://localhost:8080/image/5.jpg', '2010.9-2014.6, Cornell University, Bachelor\'s Degree in Nutritional Sciencesn2014.9-2016.3, Cornell University, Master\'s Degree in Dietetics', 'Lily', 'Wang', 'Lily Wang', 35.00, 4.5, 'Los Angeles, USA', 41);
INSERT INTO `experts` VALUES (6, 'Hey there, I\'m Nathan Lee, an environmental scientist dedicated to researching sustainable solutions for a greener future.', 'http://localhost:8080/image/6.jpg', '2006.9-2010.6, UCLA, Bachelor\'s Degree in Environmental Sciencen2010.9-2012.3, UCLA, Master\'s Degree in Sustainable Development', 'Nathan', 'Lee', 'Nathan Lee', 40.00, 4.0, 'San Diego, USA', 42);
INSERT INTO `experts` VALUES (7, 'Hello, I\'m Olivia Brown, a design expert passionate about creating innovative and user-centric visual experiences.', 'http://localhost:8080/image/7.jpg', '2007.9-2011.6, Parsons School of Design, Bachelor\'s Degree in Graphic Designn2011.9-2013.3, Parsons School of Design, Master\'s Degree in Product Design', 'Olivia', 'Brown', 'Olivia Brown', 45.00, 4.5, 'New York City, USA', 43);
INSERT INTO `experts` VALUES (8, 'Greetings, I\'m Ethan Miller, a finance expert with a keen eye for investment strategies and financial planning.', 'http://localhost:8080/image/8.jpg', '2009.9-2013.6, Wharton School at UPenn, Bachelor\'s Degree in Financen2013.9-2015.3, Wharton School at UPenn, Master\'s Degree in Financial Management', 'Ethan', 'Miller', 'Ethan Miller', 40.00, 4.0, 'Philadelphia, USA', 44);
INSERT INTO `experts` VALUES (9, 'Hi there, I\'m Grace Taylor, an experienced psychologist dedicated to promoting mental wellness and emotional resilience.', 'http://localhost:8080/image/9.jpg', '2008.9-2012.6, Stanford University, Bachelor\'s Degree in Psychologyn2012.9-2014.3, Stanford University, Master\'s Degree in Clinical Psychology', 'Grace', 'Taylor', 'Grace Taylor', 35.00, 4.5, 'San Francisco, USA', 45);
INSERT INTO `experts` VALUES (10, 'Salutations, I\'m Jack Robinson, a marketing specialist dedicated to crafting strategic campaigns and enhancing brand presence.', 'http://localhost:8080/image/10.jpg', '2009.9-2013.6, NYU Stern School of Business, Bachelor\'s Degree in Marketingn2013.9-2015.3, NYU Stern School of Business, Master\'s Degree in Brand Management', 'Jack', 'Robinson', 'Jack Robinson', 50.00, 4.0, 'New York City, USA', 46);
INSERT INTO `experts` VALUES (11, 'Hey there, I\'m Mia Chang, a legal expert specializing in corporate law and contractual negotiations.', 'http://localhost:8080/image/11.jpg', '2006.9-2010.6, Harvard Law School, Juris Doctor (JD)n2010.9-2012.3, Harvard Law School, Master of Laws (LLM)', 'Mia', 'Chang', 'Mia Chang', 35.00, 4.5, 'Boston, USA', 47);
INSERT INTO `experts` VALUES (12, 'Greetings, I\'m Lucas Garcia, a business consultant passionate about driving organizational growth and strategic planning.', 'http://localhost:8080/image/12.jpg', '2007.9-2011.6, INSEAD, Bachelor\'s Degree in Business Administrationn2011.9-2013.3, INSEAD, Master\'s Degree in Strategic Management', 'Lucas', 'Garcia', 'Lucas Garcia', 40.00, 4.0, 'Paris, France', 48);

-- ----------------------------
-- Table structure for messages
-- ----------------------------
DROP TABLE IF EXISTS `messages`;
CREATE TABLE `messages`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `seen` bit(1) NOT NULL,
  `send_time` datetime(6) NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `rid` int NULL DEFAULT NULL,
  `sid` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKkhn411bjhq2gmroo37haksfn9`(`rid`) USING BTREE,
  INDEX `FK8u7qcajotrmyek2o3al96pc69`(`sid`) USING BTREE,
  CONSTRAINT `FK8u7qcajotrmyek2o3al96pc69` FOREIGN KEY (`sid`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKkhn411bjhq2gmroo37haksfn9` FOREIGN KEY (`rid`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of messages
-- ----------------------------

-- ----------------------------
-- Table structure for replies
-- ----------------------------
DROP TABLE IF EXISTS `replies`;
CREATE TABLE `replies`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `time` datetime(6) NULL DEFAULT NULL,
  `cid` int NULL DEFAULT NULL,
  `uid` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKbq9kgpy1ldyjko15n0r7bf157`(`cid`) USING BTREE,
  INDEX `FKt202gd81iqyu8dkc3jteqa2q8`(`uid`) USING BTREE,
  CONSTRAINT `FKbq9kgpy1ldyjko15n0r7bf157` FOREIGN KEY (`cid`) REFERENCES `comments` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKt202gd81iqyu8dkc3jteqa2q8` FOREIGN KEY (`uid`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of replies
-- ----------------------------

-- ----------------------------
-- Table structure for specialities
-- ----------------------------
DROP TABLE IF EXISTS `specialities`;
CREATE TABLE `specialities`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of specialities
-- ----------------------------
INSERT INTO `specialities` VALUES (1, 'Medicine');
INSERT INTO `specialities` VALUES (2, 'Philosophy');
INSERT INTO `specialities` VALUES (3, 'Technology');
INSERT INTO `specialities` VALUES (4, 'Health & Wellness');
INSERT INTO `specialities` VALUES (5, 'Environmental Science');
INSERT INTO `specialities` VALUES (6, 'Design');
INSERT INTO `specialities` VALUES (7, 'Finance');
INSERT INTO `specialities` VALUES (8, 'Psychology');
INSERT INTO `specialities` VALUES (9, 'Marketing');
INSERT INTO `specialities` VALUES (10, 'Law');
INSERT INTO `specialities` VALUES (11, 'Business Consulting');
INSERT INTO `specialities` VALUES (12, 'Education');
INSERT INTO `specialities` VALUES (13, 'Entertainment');
INSERT INTO `specialities` VALUES (14, 'Architecture');
INSERT INTO `specialities` VALUES (15, 'Musicology');

-- ----------------------------
-- Table structure for tags
-- ----------------------------
DROP TABLE IF EXISTS `tags`;
CREATE TABLE `tags`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tags
-- ----------------------------
INSERT INTO `tags` VALUES (1, 'Medicine');
INSERT INTO `tags` VALUES (2, 'Philosophy');
INSERT INTO `tags` VALUES (3, 'Technology');
INSERT INTO `tags` VALUES (4, 'Health & Wellness');
INSERT INTO `tags` VALUES (5, 'Environmental Science');
INSERT INTO `tags` VALUES (6, 'Design');
INSERT INTO `tags` VALUES (7, 'Finance');
INSERT INTO `tags` VALUES (8, 'Psychology');
INSERT INTO `tags` VALUES (9, 'Marketing');
INSERT INTO `tags` VALUES (10, 'Law');
INSERT INTO `tags` VALUES (11, 'Business Consulting');
INSERT INTO `tags` VALUES (12, 'Education');
INSERT INTO `tags` VALUES (13, 'Entertainment');
INSERT INTO `tags` VALUES (14, 'Architecture');
INSERT INTO `tags` VALUES (15, 'Musicology');

-- ----------------------------
-- Table structure for tweet_comments
-- ----------------------------
DROP TABLE IF EXISTS `tweet_comments`;
CREATE TABLE `tweet_comments`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `time` datetime(6) NULL DEFAULT NULL,
  `cid` int NULL DEFAULT NULL,
  `tid` int NULL DEFAULT NULL,
  `uid` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `UK_ee77tv2sl0ptfcm2t08jf6pig`(`cid`) USING BTREE,
  INDEX `FKmrqx37la0jqy02bmx8o9xlp70`(`tid`) USING BTREE,
  INDEX `FK5h7so4mjxvifwktpt5y6nvuvc`(`uid`) USING BTREE,
  CONSTRAINT `FK5h7so4mjxvifwktpt5y6nvuvc` FOREIGN KEY (`uid`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKcnkj810g6so8h57mvxy6n3t5e` FOREIGN KEY (`cid`) REFERENCES `comments` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKmrqx37la0jqy02bmx8o9xlp70` FOREIGN KEY (`tid`) REFERENCES `tweets` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tweet_comments
-- ----------------------------

-- ----------------------------
-- Table structure for tweet_likes
-- ----------------------------
DROP TABLE IF EXISTS `tweet_likes`;
CREATE TABLE `tweet_likes`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `tid` int NULL DEFAULT NULL,
  `uid` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKj4mcavi7xwy5h89a7ax2ro64`(`tid`) USING BTREE,
  INDEX `FKqghk7sb5a7wct4n3ci619iva`(`uid`) USING BTREE,
  CONSTRAINT `FKj4mcavi7xwy5h89a7ax2ro64` FOREIGN KEY (`tid`) REFERENCES `tweets` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKqghk7sb5a7wct4n3ci619iva` FOREIGN KEY (`uid`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tweet_likes
-- ----------------------------

-- ----------------------------
-- Table structure for tweets
-- ----------------------------
DROP TABLE IF EXISTS `tweets`;
CREATE TABLE `tweets`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `time` datetime(6) NULL DEFAULT NULL,
  `uid` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK61fnyj065fm3yq0g3h3ak1big`(`uid`) USING BTREE,
  CONSTRAINT `FK61fnyj065fm3yq0g3h3ak1big` FOREIGN KEY (`uid`) REFERENCES `clients` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tweets
-- ----------------------------

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `enabled` bit(1) NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `role` enum('admin','expert','user') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'horizon52183@outlook.com', b'1', '$2a$10$5uMMDo3lflhhGBtVtUJO2OAWkDXxFhBXHnnj/0E8o71jFnPJm6srK', 'user');
INSERT INTO `users` VALUES (2, '2@2.com', b'1', '$2a$10$5uMMDo3lflhhGBtVtUJO2OAWkDXxFhBXHnnj/0E8o71jFnPJm6srK', 'user');
INSERT INTO `users` VALUES (3, '3@3.com', b'1', '$2a$10$5uMMDo3lflhhGBtVtUJO2OAWkDXxFhBXHnnj/0E8o71jFnPJm6srK', 'user');
INSERT INTO `users` VALUES (4, '4@4.com', b'1', '$2a$10$5uMMDo3lflhhGBtVtUJO2OAWkDXxFhBXHnnj/0E8o71jFnPJm6srK', 'user');
INSERT INTO `users` VALUES (5, '5@5.com', b'1', '$2a$10$5uMMDo3lflhhGBtVtUJO2OAWkDXxFhBXHnnj/0E8o71jFnPJm6srK', 'user');
INSERT INTO `users` VALUES (6, '6@6.com', b'1', '$2a$10$5uMMDo3lflhhGBtVtUJO2OAWkDXxFhBXHnnj/0E8o71jFnPJm6srK', 'user');
INSERT INTO `users` VALUES (7, '7@7.com', b'1', '$2a$10$5uMMDo3lflhhGBtVtUJO2OAWkDXxFhBXHnnj/0E8o71jFnPJm6srK', 'user');
INSERT INTO `users` VALUES (8, '8@8.com', b'1', '$2a$10$5uMMDo3lflhhGBtVtUJO2OAWkDXxFhBXHnnj/0E8o71jFnPJm6srK', 'user');
INSERT INTO `users` VALUES (9, '9@9.com', b'1', '$2a$10$5uMMDo3lflhhGBtVtUJO2OAWkDXxFhBXHnnj/0E8o71jFnPJm6srK', 'user');
INSERT INTO `users` VALUES (10, '10@10.com', b'1', '$2a$10$5uMMDo3lflhhGBtVtUJO2OAWkDXxFhBXHnnj/0E8o71jFnPJm6srK', 'user');
INSERT INTO `users` VALUES (11, '11@11.com', b'1', '$2a$10$5uMMDo3lflhhGBtVtUJO2OAWkDXxFhBXHnnj/0E8o71jFnPJm6srK', 'user');
INSERT INTO `users` VALUES (12, '12@12.com', b'1', '$2a$10$5uMMDo3lflhhGBtVtUJO2OAWkDXxFhBXHnnj/0E8o71jFnPJm6srK', 'user');
INSERT INTO `users` VALUES (13, '13@13.com', b'1', '$2a$10$5uMMDo3lflhhGBtVtUJO2OAWkDXxFhBXHnnj/0E8o71jFnPJm6srK', 'user');
INSERT INTO `users` VALUES (14, '14@14.com', b'1', '$2a$10$5uMMDo3lflhhGBtVtUJO2OAWkDXxFhBXHnnj/0E8o71jFnPJm6srK', 'user');
INSERT INTO `users` VALUES (15, '15@15.com', b'1', '$2a$10$5uMMDo3lflhhGBtVtUJO2OAWkDXxFhBXHnnj/0E8o71jFnPJm6srK', 'user');
INSERT INTO `users` VALUES (16, '16@16.com', b'1', '$2a$10$5uMMDo3lflhhGBtVtUJO2OAWkDXxFhBXHnnj/0E8o71jFnPJm6srK', 'user');
INSERT INTO `users` VALUES (37, '37@37.com', b'1', '$2a$10$5uMMDo3lflhhGBtVtUJO2OAWkDXxFhBXHnnj/0E8o71jFnPJm6srK', 'expert');
INSERT INTO `users` VALUES (38, '38@38.com', b'1', '$2a$10$5uMMDo3lflhhGBtVtUJO2OAWkDXxFhBXHnnj/0E8o71jFnPJm6srK', 'expert');
INSERT INTO `users` VALUES (39, '39@39.com', b'1', '$2a$10$5uMMDo3lflhhGBtVtUJO2OAWkDXxFhBXHnnj/0E8o71jFnPJm6srK', 'expert');
INSERT INTO `users` VALUES (40, '40@40.com', b'1', '$2a$10$5uMMDo3lflhhGBtVtUJO2OAWkDXxFhBXHnnj/0E8o71jFnPJm6srK', 'expert');
INSERT INTO `users` VALUES (41, '41@41.com', b'1', '$2a$10$5uMMDo3lflhhGBtVtUJO2OAWkDXxFhBXHnnj/0E8o71jFnPJm6srK', 'expert');
INSERT INTO `users` VALUES (42, '42@42.com', b'1', '$2a$10$5uMMDo3lflhhGBtVtUJO2OAWkDXxFhBXHnnj/0E8o71jFnPJm6srK', 'expert');
INSERT INTO `users` VALUES (43, '43@43.com', b'1', '$2a$10$5uMMDo3lflhhGBtVtUJO2OAWkDXxFhBXHnnj/0E8o71jFnPJm6srK', 'expert');
INSERT INTO `users` VALUES (44, '44@44.com', b'1', '$2a$10$5uMMDo3lflhhGBtVtUJO2OAWkDXxFhBXHnnj/0E8o71jFnPJm6srK', 'expert');
INSERT INTO `users` VALUES (45, '45@45.com', b'1', '$2a$10$5uMMDo3lflhhGBtVtUJO2OAWkDXxFhBXHnnj/0E8o71jFnPJm6srK', 'expert');
INSERT INTO `users` VALUES (46, '46@46.com', b'1', '$2a$10$5uMMDo3lflhhGBtVtUJO2OAWkDXxFhBXHnnj/0E8o71jFnPJm6srK', 'expert');
INSERT INTO `users` VALUES (47, '47@47.com', b'1', '$2a$10$5uMMDo3lflhhGBtVtUJO2OAWkDXxFhBXHnnj/0E8o71jFnPJm6srK', 'expert');
INSERT INTO `users` VALUES (48, '48@48.com', b'1', '$2a$10$5uMMDo3lflhhGBtVtUJO2OAWkDXxFhBXHnnj/0E8o71jFnPJm6srK', 'expert');

SET FOREIGN_KEY_CHECKS = 1;
