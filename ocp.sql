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

 Date: 20/06/2024 14:38:21
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
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of article_comments
-- ----------------------------
INSERT INTO `article_comments` VALUES (1, 'An insightful article that shed light on important issues.', '2024-06-20 14:17:22.078736', 1, 6, 3);
INSERT INTO `article_comments` VALUES (2, 'I learned a lot from this well-written article.', '2024-06-20 14:17:36.067434', 2, 7, 3);
INSERT INTO `article_comments` VALUES (3, 'An excellent article that deepened my understanding of the topic.', '2024-06-20 14:17:45.869417', 3, 8, 3);
INSERT INTO `article_comments` VALUES (4, 'This article stands out for its depth and clarity.', '2024-06-20 14:18:19.262646', 1, 9, 4);
INSERT INTO `article_comments` VALUES (5, 'This article clarified many of my doubts, very helpful!', '2024-06-20 14:18:33.263283', 5, 10, 4);
INSERT INTO `article_comments` VALUES (6, 'A well-researched article that was both insightful and informative.', '2024-06-20 14:19:13.753827', 1, 11, 5);
INSERT INTO `article_comments` VALUES (7, 'This article provided valuable information I hadn\'t considered before.', '2024-06-20 14:19:20.986491', 2, 12, 5);

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
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

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
INSERT INTO `article_tag` VALUES (13, 3);

-- ----------------------------
-- Table structure for articles
-- ----------------------------
DROP TABLE IF EXISTS `articles`;
CREATE TABLE `articles`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `cover` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `description` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `time` datetime(6) NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `eid` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FKj2qnw5lhuen82dh7rbg77v2fq`(`eid`) USING BTREE,
  CONSTRAINT `FKj2qnw5lhuen82dh7rbg77v2fq` FOREIGN KEY (`eid`) REFERENCES `experts` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of articles
-- ----------------------------
INSERT INTO `articles` VALUES (1, '### Enhancing Efficiency and Innovation:\r\nAI-driven automation has revolutionized industries such as manufacturing, logistics, and healthcare by streamlining processes and enhancing productivity. Machine learning algorithms analyze vast datasets to extract insights and improve decision-making, leading to more efficient operations and innovative solutions.\r\n\r\n### Transforming Healthcare and Biotechnology:\r\nIn healthcare, AI facilitates early disease detection through medical imaging analysis and personalized treatment plans based on genetic profiles. AI-powered robotics assist in surgeries, reducing human error and improving surgical outcomes. Biotechnology benefits from AI in drug discovery and development, accelerating research timelines and unlocking new treatments.\r\n\r\n### Ethical and Societal Implications:\r\nHowever, the proliferation of AI raises ethical concerns regarding privacy, bias in algorithms, and the impact on jobs. The ethical use of AI in decision-making, such as loan approvals and criminal justice, requires transparency and accountability to mitigate biases and ensure fairness.\r\n\r\n### Future Outlook:\r\nLooking ahead, AI continues to evolve rapidly. Advancements in natural language processing enable sophisticated virtual assistants and language translation services, bridging global communication barriers. Autonomous vehicles promise to revolutionize transportation, while AI-driven climate modeling aids in environmental sustainability efforts.\r\n\r\nIn conclusion, while AI presents unprecedented opportunities for innovation and societal advancement, addressing its ethical implications and ensuring responsible deployment are crucial for maximizing benefits and minimizing risks in an AI-driven world.', 'https://localhost:8080/image/article1.jpg', 'Explore the profound societal impact of artificial intelligence (AI), spanning from revolutionizing healthcare with early disease detection, personalized treatments, and robot-assisted surgeries, to enhancing financial systems through fraud detection, market trend prediction, and portfolio optimization.', '2024-04-27 15:48:17.000000', 'The Impact of Artificial Intelligence on Modern Society', 1);
INSERT INTO `articles` VALUES (2, '### Enhancing Diagnostic Accuracy:\r\nAI-powered medical imaging systems, such as computer-aided detection (CAD) algorithms, analyze radiological images with remarkable precision. These systems can detect abnormalities and early signs of diseases, enabling earlier intervention and improving patient prognosis.\r\n\r\n### Personalized Treatment Plans:\r\nAI algorithms process vast amounts of patient data, including genetic information and medical histories, to tailor personalized treatment plans. This approach optimizes therapies for individual patients, improving treatment efficacy and minimizing adverse effects.\r\n\r\n### Drug Discovery and Development:\r\nAI accelerates drug discovery by analyzing large datasets to identify potential drug candidates and predict their efficacy and safety profiles. Machine learning models streamline the screening process, reducing costs and time-to-market for new medications.\r\n\r\n### Remote Monitoring and Telemedicine:\r\nAI-driven technologies enable remote monitoring of patient health metrics and real-time telemedicine consultations. Wearable devices equipped with AI algorithms can detect changes in vital signs, alerting healthcare providers to potential health issues before they escalate.\r\n\r\n### Ethical Considerations and Challenges:\r\nDespite its benefits, AI in medicine raises ethical concerns regarding patient privacy, data security, and the equitable access to AI-driven healthcare solutions. Ensuring the responsible use of AI technologies and maintaining patient trust are critical priorities for healthcare providers and policymakers.\r\n\r\n### Future Prospects:\r\nLooking forward, AI continues to innovate in healthcare. Advancements in natural language processing enhance electronic health record (EHR) management and medical documentation. AI-guided robotic surgeries and virtual nursing assistants promise to further transform patient care and operational efficiency in healthcare settings.\r\n\r\nIn conclusion, AI innovations hold immense promise for revolutionizing medicine by improving diagnostics, personalizing treatments, and expanding access to quality healthcare. Addressing ethical considerations and fostering collaborative efforts will be essential in harnessing AI\'s full potential for the benefit of patients and healthcare systems worldwide.', 'https://localhost:8080/image/article2.jpg', 'Explore the groundbreaking impact of AI innovations in transforming healthcare delivery. From enhancing diagnostic accuracy and early disease detection through machine learning algorithms to personalizing treatment plans based on genetic data and lifestyle factors, AI is revolutionizing patient care.', '2024-05-17 15:48:07.000000', 'Transforming Medicine Through AI Innovations', 2);
INSERT INTO `articles` VALUES (3, '\r\n### Ethical Dilemmas in AI Decision-Making:\r\nAI algorithms are increasingly used in critical decision-making processes, such as healthcare diagnostics, autonomous vehicles, and financial assessments. Ethical dilemmas arise concerning algorithmic bias, transparency, accountability, and the potential for unintended consequences in AI-driven decisions.\r\n\r\n### Privacy and Data Security Concerns:\r\nThe collection and utilization of vast amounts of personal data by AI systems raise significant privacy concerns. Safeguarding data integrity, ensuring informed consent, and protecting against data breaches are essential to maintaining trust and ethical standards in AI applications.\r\n\r\n### Moral Agency and Responsibility:\r\nQuestions surrounding the moral agency of AI systems and the assignment of responsibility for AI-generated outcomes are central to AI ethics. Philosophical debates explore whether AI can exhibit ethical behavior, how to define accountability in autonomous systems, and the implications for human-AI interactions.\r\n\r\n### Fairness and Social Justice:\r\nAI technologies have the potential to exacerbate societal inequalities if not developed and deployed equitably. Issues of fairness in algorithmic decision-making, including bias mitigation and inclusive design practices, are critical to promoting social justice and mitigating unintended discriminatory impacts.\r\n\r\n### Ethical Guidelines and Governance:\r\nDeveloping comprehensive ethical guidelines and regulatory frameworks is crucial to ensuring the responsible deployment of AI technologies. Multidisciplinary collaboration among ethicists, policymakers, technologists, and stakeholders is essential in establishing standards that prioritize human well-being and societal values.\r\n\r\n### Future Directions:\r\nAs AI technologies continue to evolve, ongoing philosophical inquiry into AI ethics will shape the trajectory of technological development and its impact on society. Ethical considerations will influence AI research agendas, policy decisions, and public discourse to foster a more ethical and inclusive AI ecosystem.\r\n\r\nIn conclusion, navigating the ethical landscape of AI requires thoughtful reflection, interdisciplinary collaboration, and a commitment to principles that uphold human dignity, justice, and societal welfare. Addressing ethical challenges proactively is imperative to harnessing the full potential of AI for the benefit of humanity.', 'https://localhost:8080/image/article3.jpg', 'This inquiry delves into the complex moral dilemmas arising from the rapid advancement and pervasive integration of AI technologies in society. Key topics include the implications of AI autonomy on human control and accountability, the challenge of bias and fairness in algorithmic decision-making, and the profound impact of AI on privacy and data security.', '2024-01-19 15:48:25.000000', 'The Philosophical Inquiry into AI Ethics', 3);
INSERT INTO `articles` VALUES (4, '### Advancements in Artificial Intelligence:\r\nArtificial Intelligence (AI) is at the forefront of technological evolution, enabling machines to learn, reason, and make decisions autonomously. AI applications span from virtual assistants and autonomous vehicles to complex data analytics, revolutionizing industries such as healthcare, finance, and transportation.\r\n\r\n### Growth of Internet of Things (IoT):\r\nThe Internet of Things connects everyday devices to the internet, allowing them to collect and exchange data. IoT innovations enhance efficiency in smart homes, enable predictive maintenance in industrial settings, and improve agricultural practices through precision farming techniques.\r\n\r\n### Blockchain Technology:\r\nBlockchain, originally developed for cryptocurrency transactions, has expanded to revolutionize digital transactions beyond finance. Its decentralized and secure nature is now utilized in supply chain management, voting systems, and ensuring the integrity of digital records.\r\n\r\n### Cybersecurity Challenges:\r\nAs technology advances, so do cybersecurity threats. Protecting digital infrastructure and personal data from cyberattacks remains a critical challenge. Innovations in cybersecurity tools and protocols are essential to safeguarding privacy and maintaining trust in digital ecosystems.\r\n\r\n### Sustainable Technology Solutions:\r\nThe drive towards sustainability is influencing technological innovation. Renewable energy technologies, smart grids, and eco-friendly manufacturing processes are leveraging technology to mitigate environmental impact and promote sustainable development.\r\n\r\nIn conclusion, the evolving landscape of technology presents boundless opportunities for innovation and societal advancement. Embracing technological change while addressing its challenges ensures that we harness its full potential to create a more connected, efficient, and sustainable future.', 'https://localhost:8080/image/article4.jpg', 'Dive into the dynamic and expansive realm of technological evolution, where innovation continuously reshapes our world. From ancient inventions like the wheel to today\'s era of artificial intelligence and blockchain technology, technological progress has been pivotal in shaping human civilization.', '2023-12-08 15:48:34.000000', 'The Ever-Evolving Landscape of Technology', 4);
INSERT INTO `articles` VALUES (5, '### Advances in Treatment:\r\nRecent years have witnessed significant advancements in medical treatment. Precision medicine, which tailors therapies based on genetic, environmental, and lifestyle factors, has revolutionized disease management. Targeted therapies and immunotherapy have emerged as potent weapons against cancer, offering new hope to patients once considered untreatable.\r\n\r\n### Technology in Healthcare:\r\nTechnology plays a pivotal role in modern healthcare delivery. Telemedicine platforms enable remote consultations, expanding access to medical expertise and improving patient outcomes, particularly in underserved areas. Wearable devices and health apps empower individuals to monitor their health metrics in real-time, fostering proactive wellness management.\r\n\r\n### Ethical and Regulatory Challenges:\r\nHowever, the rapid pace of medical innovation presents ethical and regulatory challenges. Issues such as patient privacy, the equitable distribution of healthcare resources, and the implications of genetic testing demand thoughtful consideration. Balancing innovation with ethical standards is essential to ensure that medical advancements benefit society as a whole.\r\n\r\n### Future Directions:\r\nLooking ahead, the future of medicine holds promise and complexity. Artificial intelligence is poised to enhance diagnostics, drug discovery, and personalized treatment plans. The integration of genomics and big data analytics will further refine our understanding of disease mechanisms, paving the way for more targeted interventions and preventive strategies.\r\n\r\nIn conclusion, while medicine continues to make remarkable strides in improving human health and longevity, addressing ethical dilemmas and leveraging technology responsibly are critical to shaping a sustainable and equitable healthcare future.', 'https://localhost:8080/image/article5.jpg', 'This article delves into how AI technologies are revolutionizing healthcare and personal well-being, offering opportunities to enhance patient care and public health outcomes. By analyzing extensive medical data, AI can identify patterns, predict outcomes, and provide personalized treatment recommendations.', '2023-12-21 15:48:37.000000', 'Empowering Health & Wellness Through AI', 5);
INSERT INTO `articles` VALUES (6, '### Wildlife Protection and Monitoring:\r\nAI-powered cameras and drones equipped with computer vision algorithms are used to monitor wildlife populations and detect illegal activities such as poaching. Real-time data analysis helps conservationists track endangered species and enforce protective measures more effectively.\r\n\r\n### Habitat Restoration and Management:\r\nAI algorithms analyze satellite imagery and ecological data to assess habitat health and identify areas for restoration. This technology aids in planning conservation initiatives, optimizing land use, and restoring degraded ecosystems for biodiversity conservation.\r\n\r\n### Climate Change Modeling and Prediction:\r\nAI\'s predictive capabilities enable accurate climate modeling based on historical data and real-time observations. Machine learning algorithms analyze complex climate patterns, helping scientists understand climate change impacts and formulate strategies for mitigation and adaptation.\r\n\r\n### Ocean Health Monitoring:\r\nAI algorithms process data from marine sensors, satellites, and underwater robots to monitor ocean health indicators such as water quality, marine biodiversity, and coral reef conditions. This data informs conservation efforts to protect marine ecosystems and endangered species.\r\n\r\n### Sustainable Agriculture and Resource Management:\r\nAI-driven precision agriculture techniques optimize crop yields while minimizing environmental impact. Predictive analytics help farmers make data-driven decisions about water usage, pest control, and soil management, promoting sustainable agricultural practices and biodiversity conservation.\r\n\r\nIn conclusion, AI innovations hold immense promise for advancing environmental conservation efforts worldwide. By harnessing the power of AI technologies, we can achieve more effective monitoring, management, and protection of our planet\'s natural resources and biodiversity.', 'https://localhost:8080/image/article6.jpg', 'AI innovations are instrumental in tracking, monitoring, and managing environmental data—from satellite imagery and remote sensors to environmental data streams. These technologies enable real-time analysis to monitor land use changes, detect deforestation, track wildlife populations, and predict natural disasters.', '2024-10-12 15:48:42.000000', 'AI Innovations for Environmental Conservation', 6);
INSERT INTO `articles` VALUES (7, 'AI technology has emerged as a powerful tool for revolutionizing design practices and driving innovation in various industries. When it comes to sustainable design for environmental conservation, AI offers a wealth of opportunities to create more efficient, data-driven solutions. One key area where AI can make a significant impact is generative design. By leveraging AI algorithms, architects and designers can generate a multitude of design options that prioritize sustainability, energy efficiency, and minimal environmental impact. This not only speeds up the design process but also ensures that the final product is optimized for sustainability. Another critical aspect where AI can contribute to innovative design is in material selection. AI tools can analyze the environmental impact and lifecycle of different materials, helping designers make informed decisions that minimize harm to the planet. Additionally, AI can play a crucial role in optimizing building performance. Through real-time data analysis and machine learning algorithms, AI can monitor energy consumption, occupancy patterns, and environmental conditions to make intelligent adjustments that improve energy efficiency and reduce waste. Furthermore, AI can aid in natural resource management by utilizing sensors and remote sensing technologies to monitor and preserve resources like water, soil, and biodiversity. By analyzing data trends and recommending sustainable practices, AI can help protect and conserve our precious natural resources. In the realm of transportation, AI technology can enable the design of eco-friendly transportation solutions such as autonomous vehicles and efficient public transit systems. By optimizing routes, reducing emissions, and improving traffic flow, AI can contribute to a more sustainable and efficient transportation landscape. In conclusion, AI technology is poised to transform the way we approach design for environmental conservation. By harnessing the power of AI, designers can create innovative, sustainable solutions that prioritize the well-being of our planet.', 'https://localhost:8080/image/article7.jpg', 'This article delves into how AI revolutionizes design methodologies, particularly in the realm of environmental conservation. AI\'s integration into design processes offers unprecedented opportunities to develop efficient, data-driven solutions that prioritize sustainability and minimize environmental impact.', '2024-02-21 15:48:47.000000', 'Innovating Design Through AI Technology', 7);
INSERT INTO `articles` VALUES (8, 'AI solutions are revolutionizing the finance industry by offering advanced tools and capabilities that enhance decision-making, risk management, and customer experience. One major area where AI is making a significant impact is in automated trading systems. AI algorithms can analyze market trends, predict price movements, and execute trades at high speeds, leading to more efficient and profitable trading strategies. Furthermore, AI-powered chatbots and virtual assistants are transforming the way customers interact with financial institutions. These intelligent tools can provide personalized recommendations, answer queries, and assist with transactions, improving customer satisfaction and loyalty. AI is also revolutionizing fraud detection and prevention in finance. Machine learning algorithms can analyze massive amounts of data to detect suspicious patterns and anomalies, helping financial institutions combat fraud more effectively. Moreover, AI is reshaping credit scoring and underwriting processes by incorporating alternative data sources and predictive analytics. This enables lenders to make more accurate and inclusive credit decisions, ultimately expanding access to financial services for underserved populations. In addition, AI-driven predictive analytics is revolutionizing risk management in finance. By analyzing vast amounts of historical and real-time data, AI models can identify potential risks, assess their impact, and recommend proactive mitigation strategies. This proactive approach helps financial institutions anticipate and manage risks more effectively. Furthermore, AI solutions are enhancing financial planning and portfolio management for individual investors. Robo-advisors powered by AI can analyze financial goals, risk tolerance, and market conditions to offer personalized investment recommendations and optimize portfolio performance. Overall, AI solutions are revolutionizing the finance industry by providing advanced capabilities that improve decision-making, risk management, and customer engagement.', 'https://localhost:8080/image/article8.jpg', 'AI\'s integration into automated trading systems marks a significant advancement, empowering algorithms to swiftly analyze market trends, predict price movements, and execute trades with precision. This efficiency not only improves profitability but also enables financial institutions to capitalize on market opportunities in real-time.', '2023-10-18 15:48:50.000000', 'Revolutionizing Finance Through AI Solutions', 8);
INSERT INTO `articles` VALUES (9, 'The integration of AI technology in the field of psychology has brought about significant advancements in research, diagnosis, and treatment methods. One key area where AI is making a difference is in mental health care. AI-powered tools are being used to analyze large datasets of psychological information to identify patterns, predict outcomes, and personalize treatment plans for individuals with mental health issues. These tools can assist clinicians in making more accurate diagnoses and developing tailored interventions that are more effective. AI is also being used in therapy settings, with virtual therapists and chatbots providing support and guidance to individuals in need of mental health services. These AI-driven platforms offer accessibility, convenience, and anonymity, making mental health care more accessible to a wider range of people. Additionally, AI is being integrated into psychological research to analyze and interpret complex data sets, identify correlations, and generate insights that can help researchers better understand human behavior and cognition. Machine learning algorithms can also assist in uncovering underlying patterns and mechanisms in mental disorders, leading to advancements in our understanding and treatment of psychological conditions. Furthermore, AI technology is being used to develop innovative assessment tools for cognitive testing, personality assessment, and emotional recognition. These tools can provide more objective and standardized measures, reducing biases and improving the accuracy of psychological assessments. Overall, the integration of AI technology in psychology is revolutionizing the field by enhancing research capabilities, improving diagnosis and treatment methods, and increasing accessibility to mental health care services.', 'https://localhost:8080/image/article9.jpg', ' AI technology is revolutionizing mental health care by leveraging large datasets to identify patterns, predict outcomes, and personalize treatment plans for individuals with psychological issues. These AI-powered tools empower clinicians to make more accurate diagnoses and develop tailored interventions that are highly effective.', '2022-10-13 15:48:54.000000', 'Advancements in Psychology Through AI Integration', 9);
INSERT INTO `articles` VALUES (10, 'The integration of AI technology in marketing has revolutionized the way businesses understand and connect with their target audiences. AI-powered tools and insights enable marketers to analyze vast amounts of data, identify trends and patterns, and make data-driven decisions to optimize their marketing strategies. One key area where AI is transforming marketing practices is in customer segmentation and targeting. AI algorithms can analyze customer behavior and preferences to create more personalized and targeted marketing campaigns. By leveraging AI insights, marketers can tailor their messaging and offerings to individual customer needs, increasing engagement and conversion rates. AI is also being used in predictive analytics to forecast customer behavior and trends, helping marketers anticipate market changes and adjust their strategies accordingly. Additionally, AI tools can automate various marketing tasks, such as email marketing, social media scheduling, and ad optimization, saving time and resources for marketers. By integrating AI technology into marketing practices, businesses can enhance their marketing efforts, increase ROI, and deliver more relevant and personalized experiences to their customers. Overall, AI insights are empowering marketers to make more informed decisions, improve customer engagement, and drive business growth in today\'s competitive digital landscape.', 'https://localhost:8080/image/article10.jpg', 'One pivotal area where AI is reshaping marketing is in customer segmentation and targeting. By harnessing AI algorithms, marketers can deeply understand customer behaviors and preferences, enabling the creation of highly personalized and targeted marketing campaigns.', '2023-08-17 15:48:59.000000', 'Elevating Marketing Practices Through AI Insights', 10);
INSERT INTO `articles` VALUES (11, 'Artificial intelligence (AI) is revolutionizing the legal industry by streamlining processes, improving efficiency, and enhancing compliance efforts. AI-powered tools are being increasingly used in legal practice to automate routine tasks such as contract review, legal research, and case analysis. These tools can sift through large volumes of data much faster and with higher accuracy than human lawyers, saving time and reducing the likelihood of errors. AI algorithms can also assist in predicting case outcomes, helping lawyers make more informed decisions and develop better strategies for their clients. In the realm of compliance, AI technology is utilized to monitor and analyze regulatory changes, flag potential risks, and ensure that organizations adhere to legal requirements. This proactive approach helps to mitigate legal risks and prevent compliance violations. Moreover, AI-powered software can provide real-time updates on changing laws and regulations, enabling legal departments to stay up-to-date and adapt their practices accordingly. Overall, the integration of AI in legal practice and compliance is transforming the industry by improving efficiency, accuracy, and risk management, ultimately benefiting both legal professionals and their clients.', 'https://localhost:8080/image/article11.jpg', 'Explore how artificial intelligence (AI) is reshaping the legal industry, enhancing operational efficiency, and bolstering compliance efforts. AI-powered tools are revolutionizing legal practices by automating routine tasks such as contract review, legal research, and case analysis.', '2023-07-12 15:49:04.000000', 'AI Applications in Legal Practice and Compliance', 11);
INSERT INTO `articles` VALUES (12, 'Artificial intelligence (AI) is reshaping the field of business consulting by offering powerful tools and strategies to enhance decision-making and drive business performance. AI technologies such as machine learning, natural language processing, and predictive analytics are being leveraged to provide valuable insights, automate tasks, and optimize processes in the consulting industry. AI-driven data analytics tools can process large volumes of data to identify patterns, trends, and opportunities that can help businesses make informed decisions and develop effective strategies. Additionally, AI algorithms can analyze market trends, customer behavior, and competitor data to generate valuable recommendations for clients. These insights can drive business growth, improve efficiency, and enhance competitiveness. AI-powered chatbots and virtual assistants are also being used in consulting to provide personalized recommendations, offer 24/7 support, and streamline communication with clients. By integrating AI into their consulting practices, businesses can unlock new opportunities, drive innovation, and deliver better outcomes for their clients. The adoption of AI strategies in business consulting is transforming the industry by empowering consultants to deliver more value, make smarter decisions, and stay ahead of the competition.', 'https://localhost:8080/image/article12.jpg', 'AI, including machine learning, natural language processing, and predictive analytics, is empowering consultants with powerful tools to automate tasks, extract insights, and optimize processes.', '2023-07-06 15:49:08.000000', 'Transforming Business Consulting Through AI', 12);
INSERT INTO `articles` VALUES (13, '### The Rise of AI:\r\n\r\nAI\'s journey from a theoretical concept to practical applications has been rapid. Machine learning algorithms, a subset of AI, enable systems to learn from data and improve over time without explicit programming. This capability has unlocked unprecedented opportunities in fields such as predictive analytics, natural language processing, and computer vision.\r\n\r\n### Transforming Industries:\r\n\r\nIn healthcare, AI-powered diagnostic tools can analyze medical images with remarkable accuracy, aiding physicians in early detection and treatment planning. Financial institutions utilize AI for fraud detection, risk assessment, and algorithmic trading, optimizing decision-making processes and minimizing human error.\r\n\r\n### Ethical Considerations:\r\n\r\nHowever, the rapid deployment of AI also raises ethical concerns. Issues such as data privacy, algorithmic bias, and job displacement are critical considerations as AI technologies continue to evolve. Striking a balance between innovation and ethical responsibility remains a significant challenge for policymakers, researchers, and industry leaders alike.\r\n\r\n### Looking Ahead:\r\n\r\nLooking to the future, AI promises further breakthroughs in autonomous vehicles, personalized medicine, and environmental sustainability. As AI capabilities expand, fostering interdisciplinary collaboration and ensuring responsible AI development will be crucial in maximizing its potential benefits while mitigating risks.\r\n\r\nIn conclusion, while AI holds immense promise for driving innovation and efficiency across sectors, its responsible deployment and ethical use are imperative to navigate the complexities of an AI-driven world.\r\n', 'https://localhost:8080/image/6e864efe-a033-4e83-ab10-6f27f75facf5_article4.jpg', 'Artificial Intelligence (AI) is revolutionizing industries across the globe, from healthcare to finance and beyond. This article explores the transformative impact of AI technologies and their implications for society.\r\n', '2024-06-20 14:29:15.637070', 'Artificial Intelligence: Shaping the Future', 1);

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
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of clients
-- ----------------------------
INSERT INTO `clients` VALUES (1, 'Hi, I\'m Horizon.', 'https://localhost:8080/image/user1.jpg', 0.00, 'Horizon', 'Zhao', 'Shanghai, China', 'user1', 1);
INSERT INTO `clients` VALUES (2, 'Hi, I\'m user1.', 'https://localhost:8080/image/user1.jpg', 30.00, 'Emily', 'Smith', 'Shanghai, China', 'user1', 2);
INSERT INTO `clients` VALUES (3, 'I\'m user2, nice to meet you.', 'https://localhost:8080/image/user2.jpg', 25.00, 'Liam', 'Johnson', 'Tokyo, Japan', 'user2', 3);
INSERT INTO `clients` VALUES (4, 'User3 here, exploring the digital realm.', 'https://localhost:8080/image/user3.jpg', 0.00, 'Sophia', 'Williams', 'New York City, USA', 'user3', 4);
INSERT INTO `clients` VALUES (5, 'User4, passionate about tech and creativity.', 'https://localhost:8080/image/user4.jpg', 0.00, 'Noah', 'Brown', 'London, United Kingdom', 'user4', 5);
INSERT INTO `clients` VALUES (6, 'Hey, I\'m user5, always up for a chat.', 'https://localhost:8080/image/user5.jpg', 15.00, 'Olivia', 'Jones', 'Paris, France', 'user5', 6);
INSERT INTO `clients` VALUES (7, 'User6, curious mind and a penchant for learning.', 'https://localhost:8080/image/user6.jpg', 0.00, 'Ethan', 'Garcia', 'Berlin, Germany', 'user6', 7);
INSERT INTO `clients` VALUES (8, 'I\'m user7, lover of all things innovative.', 'https://localhost:8080/image/user7.jpg', 0.00, 'Ava', 'Miller', 'Sydney, Australia', 'user7', 8);
INSERT INTO `clients` VALUES (9, 'User8, embracing the digital age with gusto.', 'https://localhost:8080/image/user8.jpg', 0.00, 'Mason', 'Davis', 'Rio de Janeiro, Brazil', 'user8', 9);
INSERT INTO `clients` VALUES (10, 'Hey there, I\'m user9, ready for new adventures.', 'https://localhost:8080/image/user9.jpg', 0.00, 'Isabella', 'Rodriguez', 'Moscow, Russia', 'user9', 10);
INSERT INTO `clients` VALUES (11, 'User10, tech enthusiast and problem solver.', 'https://localhost:8080/image/user10.jpg', 0.00, 'Lucas', 'Martinez', 'Dubai, United Arab Emirates', 'user10', 11);
INSERT INTO `clients` VALUES (12, 'I\'m user11, seeking connections and knowledge.', 'https://localhost:8080/image/user11.jpg', 0.00, 'Mia', 'Hernandez', 'Mumbai, India', 'user11', 12);
INSERT INTO `clients` VALUES (13, 'User12, on a journey of discovery and growth.', 'https://localhost:8080/image/user12.jpg', 0.00, 'Alexander', 'Lopez', 'Toronto, Canada', 'user12', 13);
INSERT INTO `clients` VALUES (14, 'Hi, I\'m user13, excited to engage and learn.', 'https://localhost:8080/image/user13.jpg', 0.00, 'Charlotte', 'Gonzalez', 'Seoul, South Korea', 'user13', 14);
INSERT INTO `clients` VALUES (15, 'User14, fueled by curiosity and ambition.', 'https://localhost:8080/image/user14.jpg', 0.00, 'Benjamin', 'Wilson', 'Mexico City, Mexico', 'user14', 15);
INSERT INTO `clients` VALUES (16, 'User15 here, ready to dive into the digital world.', 'https://localhost:8080/image/user15.jpg', 0.00, 'Amelia', 'Anderson', 'Cape Town, South Africa', 'user15', 16);

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
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of comment_likes
-- ----------------------------
INSERT INTO `comment_likes` VALUES (1, 2, 2);
INSERT INTO `comment_likes` VALUES (2, 3, 2);
INSERT INTO `comment_likes` VALUES (3, 1, 3);
INSERT INTO `comment_likes` VALUES (4, 5, 3);
INSERT INTO `comment_likes` VALUES (5, 6, 3);
INSERT INTO `comment_likes` VALUES (6, 6, 6);
INSERT INTO `comment_likes` VALUES (8, 11, 6);
INSERT INTO `comment_likes` VALUES (9, 3, 6);

-- ----------------------------
-- Table structure for comments
-- ----------------------------
DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments`  (
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of comments
-- ----------------------------
INSERT INTO `comments` VALUES (1);
INSERT INTO `comments` VALUES (2);
INSERT INTO `comments` VALUES (3);
INSERT INTO `comments` VALUES (4);
INSERT INTO `comments` VALUES (5);
INSERT INTO `comments` VALUES (6);
INSERT INTO `comments` VALUES (7);
INSERT INTO `comments` VALUES (8);
INSERT INTO `comments` VALUES (9);
INSERT INTO `comments` VALUES (10);
INSERT INTO `comments` VALUES (11);
INSERT INTO `comments` VALUES (12);

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
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of consultations
-- ----------------------------
INSERT INTO `consultations` VALUES (1, '2024-06-20 14:12:43.094691', 2, 1);
INSERT INTO `consultations` VALUES (2, '2024-06-20 14:13:51.514229', 2, 2);
INSERT INTO `consultations` VALUES (3, '2024-06-20 14:14:26.038689', 2, 3);
INSERT INTO `consultations` VALUES (4, '2024-06-20 14:16:16.635888', 3, 1);
INSERT INTO `consultations` VALUES (5, '2024-06-20 14:16:53.664302', 3, 3);
INSERT INTO `consultations` VALUES (6, '2024-06-20 14:22:40.357722', 6, 5);

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
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

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
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of expert_comments
-- ----------------------------
INSERT INTO `expert_comments` VALUES (1, 'The expert\'s insights were truly enlightening!', '2024-06-20 14:13:35.307485', 1, 1, 2);
INSERT INTO `expert_comments` VALUES (2, 'I\'m grateful for the expert\'s valuable advice.', '2024-06-20 14:14:02.346426', 2, 2, 2);
INSERT INTO `expert_comments` VALUES (3, 'The expert\'s guidance helped me gain new understanding.', '2024-06-20 14:14:42.165728', 3, 3, 2);
INSERT INTO `expert_comments` VALUES (4, 'The expert\'s depth of knowledge is truly impressive.', '2024-06-20 14:16:32.565479', 4, 1, 3);
INSERT INTO `expert_comments` VALUES (5, 'The expert\'s practical tips were incredibly helpful.', '2024-06-20 14:17:06.842657', 5, 3, 3);

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
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

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
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of experts
-- ----------------------------
INSERT INTO `experts` VALUES (1, 'Hello, I\'m Emma Johnson, a software engineer passionate about crafting elegant solutions to complex problems.', 'https://localhost:8080/image/1.jpg', '2008.9-2012.6, Stanford University, Bachelor\'s Degree in Computer Sciencen2012.9-2014.3, Stanford University, Master\'s Degree in Software Engineering', 'Emma', 'Johnson', 'Emma Johnson', 40.00, 4.5, 'San Francisco, USA', 37);
INSERT INTO `experts` VALUES (2, 'I\'m Alex White, a medical doctor specializing in cardiology. I\'m dedicated to providing top-notch healthcare services to my patients.', 'https://localhost:8080/image/2.jpg', '2005.9-2011.6, Johns Hopkins University, Doctor of Medicinen2011.9-2015.3, Johns Hopkins University, Cardiology Residency Program', 'Alex', 'White', 'Alex White', 45.00, 4.0, 'New York City, USA', 38);
INSERT INTO `experts` VALUES (3, 'Greetings, I\'m Sophia Clark, an expert in philosophy with a deep understanding of ethical dilemmas and moral reasoning.', 'https://localhost:8080/image/3.jpg', '2007.9-2011.6, Oxford University, Bachelor\'s Degree in Philosophyn2011.9-2013.3, Oxford University, Master\'s Degree in Ethics and Morality', 'Sophia', 'Clark', 'Sophia Clark', 35.00, 4.5, 'London, UK', 39);
INSERT INTO `experts` VALUES (4, 'Hi, I\'m David Smith, a cybersecurity specialist committed to safeguarding digital assets and ensuring data protection.', 'https://localhost:8080/image/4.jpg', '2009.9-2013.6, MIT, Bachelor\'s Degree in Computer Engineeringn2013.9-2015.3, MIT, Master\'s Degree in Cybersecurity', 'David', 'Smith', 'David Smith', 50.00, 4.0, 'Boston, USA', 40);
INSERT INTO `experts` VALUES (5, 'Salutations, I\'m Lily Wang, a nutritionist dedicated to promoting healthy lifestyles and balanced dietary habits.', 'https://localhost:8080/image/5.jpg', '2010.9-2014.6, Cornell University, Bachelor\'s Degree in Nutritional Sciencesn2014.9-2016.3, Cornell University, Master\'s Degree in Dietetics', 'Lily', 'Wang', 'Lily Wang', 35.00, 4.5, 'Los Angeles, USA', 41);
INSERT INTO `experts` VALUES (6, 'Hey there, I\'m Nathan Lee, an environmental scientist dedicated to researching sustainable solutions for a greener future.', 'https://localhost:8080/image/6.jpg', '2006.9-2010.6, UCLA, Bachelor\'s Degree in Environmental Sciencen2010.9-2012.3, UCLA, Master\'s Degree in Sustainable Development', 'Nathan', 'Lee', 'Nathan Lee', 40.00, 4.0, 'San Diego, USA', 42);
INSERT INTO `experts` VALUES (7, 'Hello, I\'m Olivia Brown, a design expert passionate about creating innovative and user-centric visual experiences.', 'https://localhost:8080/image/7.jpg', '2007.9-2011.6, Parsons School of Design, Bachelor\'s Degree in Graphic Designn2011.9-2013.3, Parsons School of Design, Master\'s Degree in Product Design', 'Olivia', 'Brown', 'Olivia Brown', 45.00, 4.5, 'New York City, USA', 43);
INSERT INTO `experts` VALUES (8, 'Greetings, I\'m Ethan Miller, a finance expert with a keen eye for investment strategies and financial planning.', 'https://localhost:8080/image/8.jpg', '2009.9-2013.6, Wharton School at UPenn, Bachelor\'s Degree in Financen2013.9-2015.3, Wharton School at UPenn, Master\'s Degree in Financial Management', 'Ethan', 'Miller', 'Ethan Miller', 40.00, 4.0, 'Philadelphia, USA', 44);
INSERT INTO `experts` VALUES (9, 'Hi there, I\'m Grace Taylor, an experienced psychologist dedicated to promoting mental wellness and emotional resilience.', 'https://localhost:8080/image/9.jpg', '2008.9-2012.6, Stanford University, Bachelor\'s Degree in Psychologyn2012.9-2014.3, Stanford University, Master\'s Degree in Clinical Psychology', 'Grace', 'Taylor', 'Grace Taylor', 35.00, 4.5, 'San Francisco, USA', 45);
INSERT INTO `experts` VALUES (10, 'Salutations, I\'m Jack Robinson, a marketing specialist dedicated to crafting strategic campaigns and enhancing brand presence.', 'https://localhost:8080/image/10.jpg', '2009.9-2013.6, NYU Stern School of Business, Bachelor\'s Degree in Marketingn2013.9-2015.3, NYU Stern School of Business, Master\'s Degree in Brand Management', 'Jack', 'Robinson', 'Jack Robinson', 50.00, 4.0, 'New York City, USA', 46);
INSERT INTO `experts` VALUES (11, 'Hey there, I\'m Mia Chang, a legal expert specializing in corporate law and contractual negotiations.', 'https://localhost:8080/image/11.jpg', '2006.9-2010.6, Harvard Law School, Juris Doctor (JD)n2010.9-2012.3, Harvard Law School, Master of Laws (LLM)', 'Mia', 'Chang', 'Mia Chang', 35.00, 4.5, 'Boston, USA', 47);
INSERT INTO `experts` VALUES (12, 'Greetings, I\'m Lucas Garcia, a business consultant passionate about driving organizational growth and strategic planning.', 'https://localhost:8080/image/12.jpg', '2007.9-2011.6, INSEAD, Bachelor\'s Degree in Business Administrationn2011.9-2013.3, INSEAD, Master\'s Degree in Strategic Management', 'Lucas', 'Garcia', 'Lucas Garcia', 40.00, 4.0, 'Paris, France', 48);

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
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

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
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

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
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

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
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

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
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

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
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of tweet_likes
-- ----------------------------
INSERT INTO `tweet_likes` VALUES (1, 1, 2);
INSERT INTO `tweet_likes` VALUES (2, 3, 6);

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
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of tweets
-- ----------------------------
INSERT INTO `tweets` VALUES (1, '🤩This article offered a unique and engaging perspective.', 'https://localhost:8080/image/80ad9b10-2c88-4e4c-a632-ecc34c90d84b_article1.jpg', '2024-06-20 14:15:16.073796', 2);
INSERT INTO `tweets` VALUES (2, 'The expert\'s recommendations were clear and easy to follow.😀😀😀', 'https://localhost:8080/image/a5229d85-ead6-4fd4-a957-4bf74cb5f457_article3.jpg', '2024-06-20 14:16:03.454711', 3);
INSERT INTO `tweets` VALUES (3, '😛This article was an eye-opener, filled with valuable information.😛', 'https://localhost:8080/image/54aa6228-138e-4557-b531-99f7de184756_article4.jpg', '2024-06-20 14:20:11.151800', 6);

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
) ENGINE = InnoDB AUTO_INCREMENT = 49 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'horizon52183', b'1', '$2a$10$5uMMDo3lflhhGBtVtUJO2OAWkDXxFhBXHnnj/0E8o71jFnPJm6srK', 'user');
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
INSERT INTO `users` VALUES (49, 'admin', b'1', '$2a$10$5uMMDo3lflhhGBtVtUJO2OAWkDXxFhBXHnnj/0E8o71jFnPJm6srK', 'admin');

SET FOREIGN_KEY_CHECKS = 1;
