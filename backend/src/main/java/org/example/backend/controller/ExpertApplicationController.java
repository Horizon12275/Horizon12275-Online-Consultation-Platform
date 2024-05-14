package org.example.backend.controller;

import jakarta.mail.internet.InternetAddress;
import org.example.backend.entity.ExpertApplication;
import org.example.backend.entity.Result;
import org.example.backend.service.ExpertApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

@RestController
@RequestMapping("/api/application")
public class ExpertApplicationController {
    // 存储验证码和对应的邮箱，用于后续验证
    private Map<String, String> verificationCodes = new HashMap<>();

    // 注入邮件发送器
    @Autowired
    private JavaMailSender sender;

    private final ExpertApplicationService service;
    public ExpertApplicationController(ExpertApplicationService service) {
        this.service = service;
    }


    // 发送验证码
    @GetMapping("/sendCode/{email}")
    public Result<String> sendVerificationCode(@PathVariable String email) {
        // 验证email地址是否有效
        try {
            new InternetAddress(email).validate();
        } catch (jakarta.mail.internet.AddressException e) {
            // 邮件地址不合法，处理异常或返回错误信息
            return Result.error(123,"邮件地址不合法");
        }

        // 生成随机验证码
        String verificationCode = generateVerificationCode();

        // 构建邮件内容，包括验证码和ASCII风格的banner
        String emailContent = "亲爱的专家，您的验证码是：" + verificationCode + "\n\n" +
                "--------------------------------------------------\n\n" +
                "感谢您使用OCP平台，祝您使用愉快！\n\n" +
                "OCP平台团队";
        // 发送邮件
        SimpleMailMessage message = new SimpleMailMessage();
        //邮件发送者，这里要与配置文件中的保持一致
        message.setFrom("2309996590@qq.com");
        message.setTo(email);
        message.setSubject("OCP平台验证码注册");
        message.setText(emailContent);
        sender.send(message);

        // 将验证码和邮箱存储到Map中
        verificationCodes.put(verificationCode, email);

//        // 在控制台打印验证码和邮箱
//        System.out.println("Stored Verification Code: " + verificationCode);
//        System.out.println("Stored Email: " + email);

        return Result.success("验证码已发送至邮箱：" + email);
    }

    @GetMapping("/list")
    public Result<List<ExpertApplication>> getApplications() {
        return service.getApplications();
    }
    @PostMapping("/add")
    public Result<ExpertApplication> addApplication(ExpertApplication application, @RequestParam MultipartFile file) {
        // 打印application实体的所有信息
        System.out.println("Received Verification Code: " + application.getVerificationCode());
        System.out.println("Received Email: " + application.getEmail());
        System.out.println("Received Name: " + application.getPassword());
        System.out.println("Received Name: " + application.getFirstName());
        System.out.println("Received Name: " + application.getLastName());
        System.out.println(verificationCodes.get(application.getVerificationCode()).equals(application.getEmail()));

        if (verificationCodes.containsKey(application.getVerificationCode()) && verificationCodes.get(application.getVerificationCode()).equals(application.getEmail())) {
            // 验证通过，可以注册，这里可以将userInfo保存到数据库中
            verificationCodes.remove(application.getVerificationCode()); // 移除已验证的验证码
        } else {
            return Result.error(123,"验证码错误或已过期，请重新获取验证码！");
        }
        return service.addApplication(application, file);
    }
    @DeleteMapping("/delete/{id}")
    public Result<ExpertApplication> deleteApplication(@PathVariable int id) {
        return service.deleteApplication(id);
    }
    @PutMapping("/update/{id}")
    public Result<ExpertApplication> updateApplication(@RequestBody ExpertApplication application) {
        return service.updateApplication(application);
    }
    @PostMapping("/approve/{id}")
    public Result<ExpertApplication> approveApplication(@PathVariable int id) {
        return service.approveApplication(id);
    }

    // 生成随机验证码
    private String generateVerificationCode() {
        String characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        StringBuilder sb = new StringBuilder();
        Random random = new Random();
        for (int i = 0; i < 6; i++) {
            sb.append(characters.charAt(random.nextInt(characters.length())));
        }
        return sb.toString();
    }

}
