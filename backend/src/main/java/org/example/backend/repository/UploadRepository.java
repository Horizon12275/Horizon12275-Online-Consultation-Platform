package org.example.backend.repository;

import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Repository
public class UploadRepository {
    private static final String UPLOAD_DIR = "src/main/resources/static/image/";
    private static final String DOMAIN = "http://localhost:8081/";

    public String uploadFile( MultipartFile file,String type) throws IOException {
        if (file.isEmpty()) {
            return null;
        }
        // 生成一个唯一的文件名
        String prefix =UUID.randomUUID().toString()+"_";
        String originalFilename = file.getOriginalFilename().replace("%", "");//去掉特殊字符
        if (originalFilename.length() > 100)
            originalFilename = originalFilename.substring(0,100);//限制文件名长度
        String encodedFileName = URLEncoder.encode(prefix + originalFilename, StandardCharsets.UTF_8);
        encodedFileName = encodedFileName.replace("+", "%20");//替换空格
        String fileName = prefix + originalFilename;
        // 设置文件保存路径
        Path filePath = Paths.get(UPLOAD_DIR + fileName);
        // 将文件保存到指定路径
        Files.copy(file.getInputStream(), filePath);
        fileName = DOMAIN + type + "/" + encodedFileName;
        return fileName;
    }



}
